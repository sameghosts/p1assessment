
//selectors 
const form = document.querySelector('#myForm');
// let inputVal = document.getElementById("submitText").value;
const plus= document.getElementById("addButton");
const minus= document.getElementById('subButton');
let valueDisp = document.getElementById('display');

//value for operations
//input value to be added or subtracted
let enData;
//current number / value displayed
let disData =0;
// result of data through operation\
let resData;
//functions for changing input value (enData) to new value (resData) and return it by changing the display of the display tag
let checkData = () =>{
  if(disData < 0){
    document.getElementById("displayData").style.color = "red";
  } else if(disData >0){
    document.getElementById("displayData").style.color = "black";
  }
}

//event listener for button style change
plus.addEventListener('click', function() {
  enData = parseInt(document.getElementById("submitText").value);
  resData = enData + disData;
  disData = resData;
  console.log(disData);
  document.getElementById("displayData").innerHTML =`${disData}`
  checkData();
  
});
minus.addEventListener('click', function() {
  enData = parseInt(document.getElementById("submitText").value);
  resData = disData-enData;
  disData = resData;
  console.log(disData);
  document.getElementById("displayData").innerHTML =`${disData}`
  checkData();
});

// form.addEventListener("subButton", subValue());