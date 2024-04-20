var container = document.getElementById('container');
var textInput = document.getElementById('textInput');

container.addEventListener('mousedown', function(event) {
  textInput.disabled = true; // Disable input when clicked inside container
});

textInput.addEventListener('blur', function(event) {
  textInput.disabled = false; // Enable input when focus is lost
});
