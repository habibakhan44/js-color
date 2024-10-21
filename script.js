function checkSignal() {
    var color = document.getElementById('colorInput').value.toLowerCase();
    var result = document.getElementById('result');
  
    if (color === "red") {
      result.textContent = "Must Stop!";
      result.style.color = "red";
    } else if (color === "yellow") {
      result.textContent = "Ready to Move!";
      result.style.color = "yellow";
    } else if (color === "green") {
      result.textContent = "Move Now!";
      result.style.color = "green";
    } else {
      result.textContent = "Please enter a valid traffic signal color.";
      result.style.color = "black";
    }
  }
  