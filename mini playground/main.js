window.onload (bigBuilder);
// these variable are to get my elements from the HTML
const textInput = document.getElementById('addFriend');
const mainButton = document.getElementById('addNew');
let table = document.getElementById('output');
const mainMessage = document.getElementById('message');
// my array of names to add to the page
const myArray = ["Jai", "Dion", "Yeon", "Mike", "MeMee", 
"Re'Neeka", "Reen", "Shaela", "Terrance", "Rod", "Chris", "Josh", "Khary"];

function getValue () {
   const noNewFriends = textInput.value;
   myArray.push(noNewFriends);
}
 
function bigBuilder() {
    myArray.forEach((item, index) => {
        "";
    }
}


function pageBuilder() { 
    // this loop is an attempt to dynamically create the table
    for (let i = 1; i < 4; i++) {
        let rows = document.createElement('tr');
        for (let k = 1; k < 4; k++) {
            let cells = document.createElement('td');
        }
    }
}