const form = document.getElementById("formProgramare");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nume = document.getElementById("nume").value;
    const data = document.getElementById("data").value;
    document.getElementById("mesaj").textContent =
      "Mulțumim, " + nume + "! Programarea pentru " + data + " a fost înregistrată.";
    form.reset();
  });
}