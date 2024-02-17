document.getElementById("btn-update").addEventListener("click", function () {
  onButtonClick("input-field", "para");
  document.getElementById("btn-update").setAttribute("disabled", true);
});

disableButtonIfEmptyValue("input-field", "btn-update");
