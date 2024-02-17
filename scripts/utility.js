function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementTextConvertedToIntegerById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  const integer = parseInt(text);
  return integer;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  const textToLowerCase = text.toLocaleLowerCase();
  return textToLowerCase;
}

function getInputValueById(elementId) {
  const input = document.getElementById(elementId);
  const inputValue = input.value;
  return inputValue;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function disableButtonIfEmptyValue(inputId, btnId) {
  document.getElementById(inputId).addEventListener("keyup", function (event) {
    const text = event.target.value;
    const button = document.getElementById(btnId);
    if (text === "") {
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled");
    }
  });
}

function onButtonClick(getId, setId) {
  const value = getInputValueById(getId);
  setElementValueById(setId, value);
  document.getElementById(getId).value = "";
}

function disableButtonUnlessInputHaveDelete(inputId, btnId) {
  document.getElementById(inputId).addEventListener("keyup", function (event) {
    const text = event.target.value;
    const button = document.getElementById(btnId);
    if (text === "delete") {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  });
}
