var screenValue = document.querySelector('.screenValue');
function numberReturn(event) {
  var number = Number(event.target.textContent);
  screenValue.textContent = number;
};

[].forEach.call(document.querySelectorAll('.button'), function(element){
    element.addEventListener('click', numberReturn);
  }, false);

//his code


// var calculation = 0;
// var displayedCalculation = "0";
// var pendingOperation;
// var $display = document.querySelector('.display-number');
//
// function numberReturn(event) {
//   var number = Number(event.target.textContent);
//   if(pendingOperation !== undefined) {
//     switch (pendingOperation) {
//       case "+":
//         calculation += number;
//         break;
//     }
//     pendingOperation = undefined;
//     $display.textContent = number;
//   } else {
//     displayOrConcatenateNumber(number);
//   }
// }
//
// function decimalButtonPressed(event) {
//
// }
//
// function operatorButtonPressed(event) {
//   pendingOperation = event.target.textContent;
// }
//
// function equalButtonPressed(event) {
//   $display.textContent = calculation;
// }
//
//   /*
//     Utility functions
//   */
//   function displayOrConcatenateNumber(inputNumber) {
//     if(calculation === 0) {
//       calculation = Number(inputNumber);
//       displayedCalculation = String(inputNumber);
//     } else {
//       calculation = Number(displayedCalculation + inputNumber);
//       displayedCalculation = String(displayedCalculation + inputNumber);
//     }
//     $display.textContent = displayedCalculation;
//   }

  /*
    Setup event handlers
  */

  // [].forEach.call(document.querySelectorAll('.keypad-button.number'), function(element){
  //   element.addEventListener('click', numberButtonPressed);
  // }, false);
  //
  // [].forEach.call(document.querySelectorAll('.keypad-button.operator'), function(element){
  //   element.addEventListener('click', operatorButtonPressed);
  // }, false);
  //
  // document.querySelector('.decimal').addEventListener('click', decimalButtonPressed);
  // document.querySelector('.equal').addEventListener('click', equalButtonPressed);
//
// })();

//previous code

// function alertButtonValue(event) {
//   var button = event.target;
//   var text = button.textContent;
//   alert('hello');
// }
//
// (function(){
//     'use strict';
//     var calculation = 0;
//     var $display = document.querySelector('.display-number');
//     function numberButtonPressed(event) {
//       var number = Number(event.target.textContent);
//       displayOrConcatenateNumber(number;)
//     }
//     function displayOrConcatenateNumber(number){
//       if(calculation == 0) {
//         $display.textContent = number;
//       } else {
//         calculation = Number(displayedCalculation + number);
//         $display-screen.textContent = displayedCalculation + number
//       }
//     }
//     [].forEach.call(document.querySelectorAll('.button'), function(element){
//       element.addEventListener('click', alertButtonValue);
//     }, false);
//
// function operatorButtonPressed(event) {
//   pendingOperation = event.target.textContent;
//   displayOrConcatenate(calculation);
// }
//
// function alertNumberPlusNumber(event) {
//   var button = event.target;
//   var number = Number(button.textContent);
//   alert(number + number);
// }
//
// [].forEach.call(document.querySelectorAll('.number'), function(element){
//   element.addEventListener('click', alertNumberPlusNumber);
// }, false);
// })();
