let characterCount = 0;
let charEdits = document.getElementById("char-edits");
let userInput = document.getElementById("user-input");
let charEditInput = document.getElementById("create-character");

let characterName = document.getElementById("name");
let charSign = document.getElementById("sign-title");
let newCharBtn = document.getElementById("new-char");
let newChar = document.getElementById('character-container')



charEditInput.addEventListener("submit", (e) => {
  e.preventDefault();
  if (characterCount === 0) {
    alert("You need to create at least 1 character to edit.");
  }
  e.target.reset();
});


newCharBtn.addEventListener("click", () => {
    characterCount++;
    clone = newChar.cloneNode(true); 
    document.body.appendChild(clone);

});
