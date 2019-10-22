/*****************************************************************************************************************************************************************/
//**************************************************FUNCTIONS****************************************************************************************************/
/***************************************************************************************************************************************************************/


window.onload = function(){		//Open the extension with the text box already
	document.getElementById("searchBox").focus();
}


function parseInformation() {	//Parse the information on the checkbox to an alternate text of an HTML element

	var specialCharacters = [["æ", "ae"], ["â", "a"], ["á", "a"], ["à", "a"], ["é", "e"], ["ö", "o"], ["û", "u"], ["ú", "u"]];
	var searchText = document.getElementById("searchBox").value.toLowerCase();
	
	//Store card name in alt
	document.getElementById("searchBox").alt = searchText;

	//Replace special characters
	for(var i = 0; i < searchText.length; i++) {
		for(var n = 0; n < specialCharacters.length; n++) {
			if(searchText[i] == specialCharacters[n][0]) {
				searchText = searchText.replace(searchText[i], specialCharacters[n][1]);
			}
		}
	}
}


function checkTextBox(){	//Parse the information on the text box and then check if it's empty.
	parseInformation()
	return document.getElementById("searchBox").alt != "";
}


/*****************************************************************************************************************************************************************/
//**************************************************EVENT HANDLING***********************************************************************************************/
/***************************************************************************************************************************************************************/

//Redirect to your player profile in KeyForgeGame.com
document.getElementById("playerButton").onclick = function() {
	chrome.tabs.create({url: "https://www.keyforgegame.com/profile"});	
};


//Redirect to KF Compendium
document.getElementById("KFCompendiumButton").onclick = function() {
	chrome.tabs.create({ url: "https://keyforge-compendium.com/"});
};

//Redirect to DecksOfKeyForge
document.getElementById("DecksOfKeyforgeButton").onclick = function() {
	chrome.tabs.create({ url: "https://decksofkeyforge.com/"});
};

document.getElementById("searchBox").onkeypress = function(key) {
	if(key.keyCode == 13 && checkTextBox()) {
		chrome.tabs.create({ url: "https://keyforge-compendium.com/cards?utf8=%E2%9C%93&filterrific%5Bsearch_title%5D=" + 
		document.getElementById("searchBox").alt + 
		"&filterrific%5Bsearch_text%5D=&filterrific%5Bwith_traits%5D=&filterrific%5Bwith_power%5D=&filterrific%5Bwith_armor%5D=&filterrific%5Btype_like%5D=&filterrific%5Bhouse_like%5D=&filterrific%5Brarity_like%5D=&filterrific%5Bwith_expansion%5D=&filterrific%5Bwith_tags%5D=&filterrific%5Bsorted_by%5D=&commit=Filter+Results"});
	}
};

