
function putBox(){
  var contents = document.saidForm.daQuote.value;
  contents = contents.substring(0,120);
  document.getElementById('textBox').innerHTML = contents;
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
  document.body.appendChild(canvas)
});

