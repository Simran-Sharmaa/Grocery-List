// Deleting all elements
  document.querySelector("#eraser").addEventListener("click", function () {
    document.getElementById("basket").innerText = "";

});

  // Working on pressing enter key
  function keyFunction() {
    const input = document.querySelector("input");
    input.addEventListener("keyup", (event) => {
        if (event.key == "Enter") {
            // console.log("enter key pressed");
            appendItems();
        }
    });
}
    keyFunction();
    function appendItems() {
        let ul = document.getElementById("basket");
        let li = document.createElement("li");
        let inputValue = document.querySelector("input").value;
        if (inputValue != "") {
            li.innerHTML = "- " + inputValue;
            ul.appendChild(li);
            document.getElementById("userInput").value = "";
            li.addEventListener("click", function () {
                li.style.textDecoration = "line-through";
            });
        }
    }