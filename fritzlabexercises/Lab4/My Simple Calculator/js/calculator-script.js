function addNumbers() {
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value);
    alert("Sum: " + (num1 + num2));
  }
  
  function subtractNumbers() {
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value);
    alert("Difference: " + (num1 - num2));
  }
  
  function multiplyNumbers() {
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value);
    alert("Product: " + (num1 * num2));
  }
  
  function divideNumbers() {
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value);
    alert("Quotient: " + (num1 / num2));
  }
  
  function clearTextboxes() {
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
  }
  