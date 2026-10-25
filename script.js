document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("print-resume").addEventListener("click", function () {
  window.print();
});
