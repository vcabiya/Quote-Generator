
function putBox(){
  var contents = document.saidForm.daQuote.value;
  var length = contents.length;
  if (length >= 120){
    length = 120;
  }
  var subContents = contents.substring(0,length);
  var startQuoteCheck = subContents.substring(0,1);
  var endQuoteCheck = subContents.substring(length-1, length);
  if (startQuoteCheck !== "\""){
    subContents = "\"" + subContents;
  }
  if (endQuoteCheck !== "\""){
    subContents= subContents + "\"";
  }
  document.getElementById('textBox').innerHTML = subContents;
}
function putAuth(){
  var contents = document.attForm.daAuthor.value;
  var length = contents.length;
  if (length >= 50){
    length = 50;
  }
  var subContents = contents.substring(0,length)
  var hyphenCheck = subContents.substring(0,1);
  if (hyphenCheck !== "-"){
    subContents = "-" + subContents;
  }
  document.getElementById('authBox').innerHTML = subContents;
}
function sendRight(){
  
}
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("quoteImage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

html2canvas(document.querySelector("#quoteBox")).then(canvas => {
  document.body.finalCanvas.appendChild(canvas)

});