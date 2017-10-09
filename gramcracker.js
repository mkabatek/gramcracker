var followersBoxClass = document.getElementsByClassName("_fd86t");
var followingBoxClass = document.getElementsByClassName("_fd86t");

//Get int for number of people to unfollow calculation
var myFollowerInt;

//Global setting parameters
var homeName = "<your_instagram_username>";
var homeUrl = "https://instagram.com/<your_instagram_username>";
var globalIndex;


//Accounts you want to follow
var masterUrlList = [


"https://www.instagram.com/usatf/",
"https://www.instagram.com/nikerunning/",
"https://www.instagram.com/robinnyc/",
"https://www.instagram.com/usainbolt/",
"https://www.instagram.com/instarunners/",
"https://www.instagram.com/finnrunner/",
"https://www.instagram.com/karagoucher/",
"https://www.instagram.com/runnerscommunity/",
"https://www.instagram.com/hungryrunnergirl/",
"https://www.instagram.com/thrashermag/",
"https://www.instagram.com/transworldskate/",
"https://www.instagram.com/nycrunningmama/",
"https://www.instagram.com/JeredGruber/",
"https://www.instagram.com/TaylorPhinney/",
"https://www.instagram.com/theRadavist/",
"https://www.instagram.com/tiffanycromwell/",
"https://www.instagram.com/PreferredMode/",
"https://www.instagram.com/vansgirls/",
"https://www.instagram.com/vansskate/",
"https://www.instagram.com/LachlanMorton/",
"https://www.instagram.com/TeamSky/",
"https://www.instagram.com/volcomskate/",
"https://www.instagram.com/berrics/",
"https://www.instagram.com/redbull/",
"https://www.instagram.com/nikesb/",
"https://www.instagram.com/KatieHolden/",
"https://www.instagram.com/manualforspeed/",
"https://www.instagram.com/angelocalilap/",
"https://www.instagram.com/fireflybicycles/",
"https://www.instagram.com/nolifelikethislife/",
"https://www.instagram.com/mtn2mtn/",
"https://www.instagram.com/woodwardcopper/",
"https://www.instagram.com/mashsf/",
"https://www.instagram.com/allyshale/",
"https://www.instagram.com/garrett_chow/",
"https://www.instagram.com/sweetrideusa/",
"https://www.instagram.com/strangenotes/",
"https://www.instagram.com/skullcandy/",
"https://www.instagram.com/gopro/",
"https://www.instagram.com/freepeople/",
"https://www.instagram.com/outdoortech/",
"https://www.instagram.com/downhilladiction/",
"https://www.instagram.com/bronze56k/"

];
//looping parameters 
var NumberItr = 400;
var BaseFollowers = 770;
var tMax = 120000; //follow/unfollow time max milliseconds
var tMin = 60000; //follow/unfollow time min milliseconds

var stMax = 2000; //scroll time max milliseconds
var stMin = 1000; //scroll time min milliseconds


if(localStorage.getItem('indexObject') == null || localStorage.getItem('indexObject') == "null" || localStorage.getItem('indexObject') == "undefined"){
	
	// if indexObject not yet defined initialize
	// Put the object into storage
	var indexObject = { 'index': 0};
	localStorage.setItem('indexObject', JSON.stringify(indexObject));
	globalIndex = indexObject;
}
else{

	//Get the index object
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

		myFollowerInt = Number(followingBoxClass[2].innerHTML.replace(',',''));

		//check if we are at home, if so unfollow, if not follow

		if(window.location.href.indexOf(homeName) > -1) {
			
			globalIndex.index++;
			localStorage.setItem('indexObject', JSON.stringify(globalIndex));

			//load your own page and unfollow
			followersBoxClass[2].click();
			unfollow();
			//u();
			
		}
		else{


			localStorage.setItem('indexObject', JSON.stringify(globalIndex));
			//load other's page and follow
			followersBoxClass[1].click();
			follow();
			//f();
			
		}
		
		
		
	}    
}, 100);





//test functions
function u(){
	window.setTimeout(function(){ window.location.replace(masterUrlList[globalIndex.index]);},5000);
}

function f(){
	window.setTimeout(function(){ window.location.replace(homeUrl);},5000);
}


//follow function
function follow(){

	var buttonClassString = "_qv64e _gexxb _4tgw8 _njrw0";
	var scrollClassString = "_gs38e";

	var elem = document.getElementsByClassName(buttonClassString);
	var x = document.getElementsByClassName(scrollClassString);                    //  set your counter to number of elements
	var itr = NumberItr;
	var timeMax  = stMax;
	var timeMin   = stMin; 
	var timeSpan = (timeMax - timeMin) + timeMin;
	var delta = (timeMax - timeMin); 
	var dt = Math.random() * delta + timeMin;
	var T = 0;
					 
	console.log('delta t: ' + dt);
	console.log('T: ' + T);


	function scroll () {
	   T = T + dt;           //  total time
	   dt = Math.random() * delta + timeMin; //set dt based on random number and timeSpan
	   
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		  console.log('delta t: ' + dt);
		  console.log('T: ' + T);
		  console.log('Elements: ' + elem.length + '/' + itr);	  
		  x[0].scrollTop += 10000;
		  
		  if (elem.length < itr - 1) {            
			 scroll();             //  ..  again which will trigger another 
		  }                        //  ..  setTimeout()
	   }, dt)
	}

	scroll();



	function checkFlag() {
		var elem = document.getElementsByClassName(buttonClassString);
		if(elem.length < itr) {
			window.setTimeout(checkFlag, 500); /* this checks the flag every 100 milliseconds*/
			console.log('... scrolling ...')	
		} else {
		  
			console.log('############## scroll finished ################')
			//Follow code

			
			var elem = document.getElementsByClassName(buttonClassString);
			var itrF =  NumberItr;                      // number of elements to follow/unfollow
			var i = NumberItr;                     //  set your counter to number of elements
			var total = i;
			var timeMax  = tMax;
			var timeMin   = tMin; 
			var timeSpan = (timeMax - timeMin) + timeMin;
			var delta = (timeMax - timeMin); 
			var dt = Math.random() * delta + timeMin;
			var T = 0;
							 
			console.log('delta t: ' + dt);
			console.log('T: ' + T);
			console.log('Current item: ' + i);
			console.log('Final item: ' + (total - itrF));
			console.log('Number of entires: ' + elem.length);

			function myLoop () {
			   T = T + dt;           //  total time
			   dt = Math.random() * delta + timeMin; //set dt based on random number and timeSpan
			   
			   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
				  console.log('delta t: ' + dt);
				  console.log('T: ' + T);
				  console.log('Current item: ' + i);
				  console.log('Final item: ' + (total - itrF));          
				  elem[i].click();
				  i--;                     //  increment the counter
				  if (i >= (total - itrF)) {            
					 myLoop();             //  ..  again which will trigger another 
				  }
				  else{
					console.log("finished looping!! go back home") 
					window.setTimeout(function(){window.location.replace(homeUrl);},5000);
					  
					  
				  }
			   }, dt)
			}

			myLoop(); 
		  
		  
		}
	}
	checkFlag();



}

//unfollow function
function unfollow (){

	var buttonClassString = "_qv64e _t78yp _4tgw8 _njrw0";
	var scrollClassString = "_gs38e";

	var elem = document.getElementsByClassName(buttonClassString);
	var x = document.getElementsByClassName(scrollClassString);                    //  set your counter to number of elements
	var itr = myFollowerInt - BaseFollowers;
	var timeMax  = stMax;
	var timeMin   = stMin; 
	var timeSpan = (timeMax - timeMin) + timeMin;
	var delta = (timeMax - timeMin); 
	var dt = Math.random() * delta + timeMin;
	var T = 0;
					 
	console.log('delta t: ' + dt);
	console.log('T: ' + T);


	function scroll () {
	   T = T + dt;           //  total time
	   dt = Math.random() * delta + timeMin; //set dt based on random number and timeSpan
	   
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		  console.log('delta t: ' + dt);
		  console.log('T: ' + T);
		  console.log('Elements: ' + elem.length + '/' + itr);	  
		  x[0].scrollTop += 10000;
		  
		  if (elem.length < itr - 1) {            
			 scroll();             //  ..  again which will trigger another 
		  }                        //  ..  setTimeout()
	   }, dt)
	}

	scroll();



	function checkFlag() {
		var elem = document.getElementsByClassName(buttonClassString);
		if(elem.length < itr) {
			window.setTimeout(checkFlag, 500); /* this checks the flag every 100 milliseconds*/
			console.log('... scrolling ...')	
		} else {
		  
			console.log('############## scroll finished ################')
			//Follow code

			
			var elem = document.getElementsByClassName(buttonClassString);
			var itrF =  myFollowerInt - BaseFollowers;                      // number of elements to follow/unfollow
			var i = itrF;                     //  set your counter to number of elements
			var total = i;
			var timeMax  = tMax;
			var timeMin   = tMin; 
			var timeSpan = (timeMax - timeMin) + timeMin;
			var delta = (timeMax - timeMin); 
			var dt = Math.random() * delta + timeMin;
			var T = 0;
							 
			console.log('delta t: ' + dt);
			console.log('T: ' + T);
			console.log('Current item: ' + i);
			console.log('Final item: ' + (total - itrF));
			console.log('Number of entires: ' + elem.length);

			function myLoop () {
			   T = T + dt;           //  total time
			   dt = Math.random() * delta + timeMin; //set dt based on random number and timeSpan
			   
			   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
				  console.log('delta t: ' + dt);
				  console.log('T: ' + T);
				  console.log('Current item: ' + i);
				  console.log('Final item: ' + (total - itrF));          
				  elem[i].click();
				  i--;                     //  increment the counter
				  if (i >= (total - itrF)) {            
					 myLoop();             //  ..  again which will trigger another 
				  }
				  else{
					console.log("finished looping!! goto next");
					window.setTimeout(function(){ window.location.replace(masterUrlList[globalIndex.index]);},5000);
										 
					  
				  }
			   }, dt)
			}

			myLoop(); 
		  
		  
		}
	}
	checkFlag();

}