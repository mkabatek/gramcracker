# Gramcracker for chrome
### Michael Kabatek (c) 2017

1. Download [CJS plugin for Google Chrome](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en)

2. Edit the script to user your account 
```javascript
var homeName = "<your_instagram_username>";
var homeUrl = "https://instagram.com/<your_instagram_username>";
```
3. Edit `var masterUrlList = [ ... ]` to contain the instagram accounts you want to follow/unfollow

4. Open the Chrome developer console: Command + Option + J (on OSX)

5. Clear Chrome  local storage localStorage.clear(); (Optional to reset the index of masterUrlList)

6. Copy and paste the script into CJS plugin, check enable cjs for this host, and click save.

* You can edit the looping paramters 

```javascript
//looping parameters
var NumberItr = 2500; //number of people to follow
var BaseFollowers = 770; //base number of followers
var tMax = 120000; //follow/unfollow time max milliseconds
var tMin = 60000; //follow/unfollow time min milliseconds
```

