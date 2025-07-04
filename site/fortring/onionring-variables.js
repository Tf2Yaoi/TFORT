// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://netsqhere.neocities.org/',
'https://webwelder.neocities.org/',
'https://starbug.neocities.org/',
'https://spycest.neocities.org/',
'https://saniko.nekoweb.org/',
'https://pizza.syntropicinteractive.com/',
'https://pastel-skies.nekoweb.org/',
'https://stonervampire.neocities.org/',
'https://kids-sati.neocities.org/',
];

//the name of the ring
var ringName = 'TFORT';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'fortring';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://tfortring.neocities.org/members.html';

//should the widget include a random button?
var useRandom = true;
