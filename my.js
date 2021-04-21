
let url ="https://script.google.com/macros/s/AKfycbx0uG2tsQhab97rJrMBtioVbuVLeu5QgmkvdIlgMNBsMUYVAO6e/exec"

function testGS(){
fetch(url)
    .then(d => d.json())
    .then(d => {
    document.getElementById("app").textContent = d[0].status;
});
}
document.getElementById("btn").addEventListener("click", testGS);
