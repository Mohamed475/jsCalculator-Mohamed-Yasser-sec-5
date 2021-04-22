const defaultResult = 0;
let currentResult = defaultResult;
let allAdditionEnteredNums = [];
let i = 0;

function getUserNumerInput() {
  return +userInput.value;
}

function autoDescriptionCreation(operator, currentValue, userNum) {
  const clacDescription = `${currentValue} ${operator} ${userNum}`;
  outputResult(currentResult, clacDescription);
}

function theWholeProcessDateUsingObject(
  operationIdentifier,
  lastResult,
  input,
  currentResult
) {
  const processData = {
    operator: operationIdentifier,
    prevResult: lastResult,
    input: input,
    result: currentResult,
  };
  allAdditionEnteredNums.push(processData);
  console.log(allAdditionEnteredNums);
}

function doOperationsAuto(operatorType) {
  userIputNum = getUserNumerInput();
  currentResultOriginal = currentResult;
  currentResult = currentResult + userIputNum;
  if (operatorType === 'ADD') {
    autoDescriptionCreation(' + ', currentResultOriginal, userIputNum);
    theWholeProcessDateUsingObject(
      operatorType,
      currentResultOriginal,
      userIputNum,
      currentResult
    );
  } else if (operatorType === 'SUBTRACT') {
    autoDescriptionCreation(' - ', currentResultOriginal, userIputNum);
    theWholeProcessDateUsingObject(
      operatorType,
      currentResultOriginal,
      userIputNum,
      currentResult
    );
  } else if (operatorType === 'MULTIPLY') {
    autoDescriptionCreation(' * ', currentResultOriginal, userIputNum);
    theWholeProcessDateUsingObject(
      operatorType,
      currentResultOriginal,
      userIputNum,
      currentResult
    );
  } else {
    autoDescriptionCreation(' / ', currentResultOriginal, userIputNum);
    theWholeProcessDateUsingObject(
      operatorType,
      currentResultOriginal,
      userIputNum,
      currentResult
    );
  }
}

// OPERATIONS BTNs

function add() {
  doOperationsAuto('ADD');
}
function subtract() {
  doOperationsAuto('SUBTRACT');
}
function division() {
  doOperationsAuto('DIVISION');
}
function multiply() {
  doOperationsAuto('MULTIPLY');
}

// FOR CONNECTING THE JS FILE SCRIPT WITH THE PAGE DURING WORKING

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', division);
multiplyBtn.addEventListener('click', multiply);
