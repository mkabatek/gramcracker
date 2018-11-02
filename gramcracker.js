//Instagram classes
var followBoxString           = "g47SY"
var unfollowModalButtonString = "aOOlW -Cab_   "
var followButtonString        = "_0mzm- sqdOP  L3NKy       "
var unFollowButtonString      = "_0mzm- sqdOP  L3NKy   _8A5w5    "
var scrollBoxString           = "isgrP"

var followersBoxClass = document.getElementsByClassName(followBoxString)[1];
var followingBoxClass = document.getElementsByClassName(followBoxString)[2];
var unFollowModal = document.getElementsByClassName(unfollowModalButtonString)[0];

//Constants
var TENTH_SECOND_DELAY = 100
var ONE_SECOND_DELAY   = 1000
var THREE_SECOND_DELAY = 3000

//Get int for number of people to unfollow calculation
var myInitialFollowers;
var othersInitialFollowers;
var itr;
var sampleArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var placeHolder = sampleArray.length;

//Global setting parameters
var rootUrl = "https://instagram.com/" 
var homeName = "noisapp";
var homeUrl = rootUrl + homeName;
var globalIndex;

//looping parameters 
var NumberItr     = 800;              //Total number of people you want to follow/unfollow
var BaseFollowers = 450;            //Base number of followers you want to keep
var tMax          = 120000;         //follow/unfollow time max
var tMin          = 60000;          //follow/unfollow time min
var delta         = (tMax - tMin);  //Time interval between follow/unfollow
var stMax         = 500;            //Scroll time max
var stMin         = 100;            //Scroll time min
var T             = 0;              //Total elapsed time
var scrollLength  = 100;

const allEqual = arr => arr.every( v => v === arr[0] )

//Accounts you want to follow
var masterUrlList = [

"skate.explore",
"cryanbum",
"noeborocz",
"ashleyaf99",
"thecameltail",
"tomcatberry",
"norathenorwal",
"cookiegrinder13",
"emet.baker",
"taylordehart",
"nameinbloodsk8boards",
"vetschtable",
"666_rips",
"milimeter_peeter",
"tomcatberry"

];

//follow/Unfollow function
var followUnfollow = function(elem, itr, boxType){
    var T = 0;
    scroll(elem, itr, boxType);
}

var followerLoop = function(currentElements, numberOfFollowIter, i) {
    //Follow/Unfollow code
    var dt = Math.random() * delta + tMin;
    T = T + dt;                 //  total time elapsed
    setTimeout(function () {
        console.log('delta t: ' + dt);
        console.log('Total time elapsed (ms): ' + T);
        console.log('Current item: ' + i);
        console.log('Final item: ' + (currentElements.length - numberOfFollowIter));          
        currentElements[i-1].click();
        setTimeout(function(){
            var unfollowModalButton = document.getElementsByClassName(unfollowModalButtonString)[0]
            if (unfollowModalButton == undefined) {
                //Windows not showing move on
                checkLoopingStatus(currentElements, numberOfFollowIter, i)
            } else {
                //Window is showing click the modal
                unfollowModalButton.click()
                checkLoopingStatus(currentElements, numberOfFollowIter, i)
            }
        },ONE_SECOND_DELAY)
    }, dt)
}

var checkLoopingStatus = function(currentElements, numberOfFollowIter, i) {
    i--;                     //  increment the counter
    if (i > (currentElements.length - numberOfFollowIter)) {            
        followerLoop(currentElements, numberOfFollowIter, i);             //  ..  again which will trigger another 
    }
    else{
        console.log("finished looping!! goto next url");
        if(window.location.href.indexOf(homeName) > -1) {
            window.setTimeout(function(){ window.location.replace(rootUrl + masterUrlList[globalIndex.index]);},5000);
        } else {
            window.setTimeout(function(){ window.location.replace(homeUrl);},5000);
        }   
    }
}

var collectionToArray = function(collection, boxType){
    elements = Array.from(collection)
    elements = elements.filter(obj => {
        return obj.className === boxType
    }) 
    return elements
}

var scroll = function(currentElements, iterations, boxType) {
    var x = document.getElementsByClassName(scrollBoxString);
	var timeMax  = stMax;
	var timeMin   = stMin; 
	var delta = (timeMax - timeMin); 
	var dt = Math.random() * delta + timeMin;
					 
	console.log('delta t: ' + dt);
    console.log('T: ' + T);
    T = T + dt;           //  total time
    dt = Math.random() * delta + timeMin; //set dt based on random number and timeSpan
    
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        console.log('delta t: ' + dt);
        console.log('T: ' + T);
        console.log('Elements in list: ' + currentElements.length);
        console.log('Total iterations set: ' + NumberItr)
        console.log('Iterations: ' + iterations)
        x[0].scrollTop += scrollLength;
        //sampleArray[placeHolder] = currentElements.length
        //if (placeHolder <= 0 ) {
        //    placeHolder = sampleArray.length
        //}
        //placeHolder = placeHolder - 1
        
        //console.log('Sample array: ' + sampleArray)
        //console.log('Sample length: ' + sampleArray.length)
        //console.log('Place holder: ' + placeHolder)
    
        //if (allEqual(sampleArray) && sampleArray[0] != 0) {
        //   iterations = sampleArray[0]
        //}

        if (currentElements.length < iterations - 1) { 
            currentElements = document.getElementsByClassName(boxType);      
            scroll(collectionToArray(currentElements, boxType), iterations, boxType); 
        } else {
            console.log('############## scroll finished ################')
            followerLoop(currentElements, currentElements.length - 1, iterations); 
        }                      
    }, dt)
}

if(localStorage.getItem('indexObject') == null || 
    localStorage.getItem('indexObject') == "null" || 
    localStorage.getItem('indexObject') == "undefined"){
	
	//initialize the index object if not yet defined
	var indexObject = {'index': 0};
	localStorage.setItem('indexObject', JSON.stringify(indexObject));
	globalIndex = indexObject;
}
else{
	//Get the index object for the next account to follow
	var indexObject = localStorage.getItem('indexObject');
	globalIndex = JSON.parse(indexObject);
}

console.log('Global index:');
console.log(globalIndex);

// Polling to check if page is loaded
var interval = setInterval(function() {
	if(document.readyState === 'complete') {
		clearInterval(interval);
		console.log('Good to go');
        myInitialFollowers = Number(followingBoxClass.innerHTML.replace(',',''));
        otherInitialFollowers = Number(followersBoxClass.innerHTML.replace(',',''));
        
		//check if we are at home, if so unfollow accounts
		if(window.location.href.indexOf(homeName) > -1) {
            //At this point our personal instagram page has been loaded 
            //We will now unfollow accounts
			globalIndex.index++;
			localStorage.setItem('indexObject', JSON.stringify(globalIndex));
            followingBoxClass.click();
            setTimeout(function(){
                var itr
                var possibleIterations = Number(myInitialFollowers) - Number(BaseFollowers)
                if (NumberItr > possibleIterations) {
                    itr = possibleIterations
                } else {
                    itr = NumberItr
                }
                var elem = document.getElementsByClassName(unFollowButtonString);
                console.log('BaseFollowers: ' + BaseFollowers);
                console.log('CurrentFollower: ' + myInitialFollowers);
                console.log('Total iterations possible: ' + possibleIterations);
                console.log('Total iterations entered: ' + NumberItr);
            
                followUnfollow(collectionToArray(elem), itr, unFollowButtonString);
            }, THREE_SECOND_DELAY);
		}
		else{
			localStorage.setItem('indexObject', JSON.stringify(globalIndex));
			//At this point our target instagram page has been loaded 
            //We will now follow it's accounts
            followersBoxClass.click();
            setTimeout(function(){
                var itr = NumberItr
                var elem = document.getElementsByClassName(followButtonString);
                console.log('Total iterations: ' + itr);
                followUnfollow(collectionToArray(elem), itr, followButtonString);
            }, THREE_SECOND_DELAY)
		}
	}    
}, TENTH_SECOND_DELAY);