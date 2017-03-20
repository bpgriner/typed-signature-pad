window.onload = function() {
  var saveButton = document.getElementById('save');
  var clearButton = document.getElementById('clear');

  createTypedSignatureCanvas('signature-pad1', 'name', '48px Dancing Script');
  createTypedSignatureCanvas('signature-pad2', 'name', '48px Gloria Hallelujah');
  createTypedSignatureCanvas('signature-pad3', 'name', '48px Pacifico');

  saveButton.addEventListener('click', function(event) {
    var data = canvas.toDataURL('image/png');
    alert(data); // send data to server
  });

  clearButton.addEventListener('click', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    input.value = '';
  });

  function createTypedSignatureCanvas(canvasId, inputId, font) {
    var canvas = document.getElementById(canvasId);
    var input = document.getElementById(inputId);

    var context = canvas.getContext('2d');
    context.font = font;
    context.textAlign = 'start';
    
    input.addEventListener('input', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillText(event.target.value, 5, (canvas.height / 2), canvas.width - 10);
    });
  }
}
