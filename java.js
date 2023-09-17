function Number(number) {
    let inputNumber = document.getElementById("inputNumber");
    inputNumber.value += number;
  }
  
  function addList() {
    let inputNumber = document.getElementById("inputNumber");
    let numberList = document.getElementById("numberList");
    let newList = document.createElement("li");
    newList.appendChild(document.createTextNode(inputNumber.value));
    numberList.appendChild(newList);
    inputNumber.value = '';
  }
  
  function clearInput() {
    let inputNumber = document.getElementById("inputNumber");
    inputNumber.value = '';
  }