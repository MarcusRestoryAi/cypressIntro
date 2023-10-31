//Skapa en funktion för min btnName
document.getElementById("btnName").addEventListener("click", () => {
    const name = document.getElementById("strName").value;

    const message = `Hello ${name}`;

    document.getElementById("output").innerText = message;
})