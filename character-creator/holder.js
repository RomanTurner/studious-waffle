// let input = document.querySelector("#file");
// let historyText = document.querySelector("#history-text");

// // Upload a text file to field
// input.addEventListener("change", () => {
//   let files = input.files;
//   if (files.length == 0) return;
//   const file = files[0];
//   let reader = new FileReader();
//   reader.onload = (e) => {
//     const file = e.target.result;
//     const lines = file.split(/\r\n|\n/);
//     historyText.textContent = lines.join("\n");
//   };
//   reader.onerror = (e) => alert(e.target.error.name);
//   reader.readAsText(file);
// });

// //Upload a picture
// let imgUpload = document.getElementById("img-up");
// let imgSource = document.getElementById("char-img");

// imgUpload.addEventListener("change", () => {
//   //Validates an image File
//   let fileInput = document.getElementById("img-up");
//   let filePath = fileInput.value;
//   // Allowing file type
//   let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

//   if (!allowedExtensions.exec(filePath)) {
//     alert("Invalid file type");
//     fileInput.value = "";
//     return false;
//   } else {
//     // Image preview
//     if (fileInput.files && fileInput.files[0]) {
//       let reader = new FileReader();
//       reader.onload = function (e) {
//         document.getElementById("img-u").innerHTML =
//           '<img src="' + e.target.result + '"/>';
//       };
//       reader.readAsDataURL(fileInput.files[0]);
//     }
//   }
// });

// charEditInput.addEventListener("submit", (e) => {
//   e.preventDefault();
//   switch (charEdits.value) {
//     case "select-name":
//       characterName.textContent = userInput.value;
//       break;
//     case "select-img":
//       imgSource.src = userInput.value;
//       break;
//     case "select-sign":
//       charSign.textContent = userInput.value;
//       break;

//     default:
//       alert("Invalid Input");
//       break;
//   }

//   e.target.reset();
// });


}

let userCharacter = new Character() {
    //constructor 




    //object methods



};

