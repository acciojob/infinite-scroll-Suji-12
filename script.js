//your code here!

const list = document.getElementById("infi-list");
let count = 1;
for (let i = 0; i < 10; i++) {
  addItem();
}

function addItem() {
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
  count++;
}

list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItem();
    addItem();
  }
});


