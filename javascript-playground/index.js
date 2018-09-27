let usernames = [
  { name: "tomi", credit: 200 },
  { name: "martin", credit: 500 },
  { name: "eve", credit: 300 },
];


document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let logo = document.getElementById("logo");

  logo.addEventListener('mouseenter', function () {
    menu.classList.add("show");
  })

  logo.addEventListener('mouseleave', function () {
    menu.classList.remove("show");
  }
  )

  function update() {
    let mylist = document.getElementById("mylist");
    mylist.innerHTML = "";

    usernames.forEach(item => {
      mylist.innerHTML += `<li>${item.name}: ${item.credit}</li>`
    })
  }

  document.getElementById('btn-add').addEventListener("click", () => {
    usernames.push({ name: "xiao", credit: 600 });
    update();
  })

  update();
})

// Grocery list for arrays practice

let grocery = [
  { item: "apples", qty: 3 },
  { item: "bananas", qty: 6 },
  { item: "butter", qty: 1 },
  { item: "milk", qty: 1 }]


function grocery_update() {
  let list = document.getElementById("list");
  list.innerHTML = `
  <div class="top-row grocery-row" id="grocery-row">
    <div style="opacity:0">X &nbsp </div>
    <div class="item"><b>ITEM</div>
    <div class="qty">QTY</b></div>
  </div>`;

  grocery.forEach((item, index) => {
    // let row-number = grocery.indexOf(item.item);
    list.innerHTML += (`
    <div class="grocery-row">
    <div id="remove_btn" onclick="removeItem(${index})">
    <a href="#" class="remove">X</a> &nbsp</div> 
    <div class="item">${item.item}</div>
    &nbsp 
    <div class="qty">${item.qty}</div>
    </div>`)
  });

}
function removeItem(index) {
  grocery.splice(index, 1);
  grocery_update();
}

grocery_update();


let grocery_btn = document.getElementById("grocery-btn");

grocery_btn.addEventListener("click", () => {
  let item_input = document.getElementById("input-name").value;
  let qty_input = document.getElementById("input-qty").value;
  grocery.push(
    { item: item_input, qty: qty_input }
  );
  grocery_update();
})

let remove_btn = document.getElementById("remove_btn");
remove_btn.addEventListener("mouseenter", () => {
  remove_btn.classList.toggle("to-be-removed");
})
remove_btn.addEventListener("mouseleave", () => {
  remove_btn.classList.toggle("to-be-removed");
})