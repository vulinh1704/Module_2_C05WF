


/*
Các bước làm 1 tính năng:
B1: Xây dựng HTML
B2: Xây dựng hàm bên Js
B3: Xác định phần tử HTML mà mình muốn tương tác
*/

let list = ["Iphone", "Samsung", "Iphone 11"];
let name = prompt("Nhập tên sản phẩm");
for (let i = 0; i < list.length; i++) {
    if (list[i].toLowerCase().includes(name.toLowerCase())) {
        console.log(list[i]);
    }
}

// Tìm kiếm gần đúng, tìm kiếm
// Tìm hiểu thêm về local storage
function addProduct() {
    let newProduct = document.getElementById("new-product").value;
    list.push(newProduct);
    showAll();
    alert("Thêm thành công");
    document.getElementById("new-product").value = '';
}

function remove(index) {
    let isConfirm = confirm("Are you sure?");
    if (isConfirm) {
        list.splice(index, 1);
        showAll();
        alert("Xóa thành công");
    }
}

function showFormEdit(index) {
    document.getElementById("new-product").value = list[index];
    document.getElementById('btn').innerHTML = `
    <button onclick="edit(${index})">Save</button>
    `
}

function edit(index) {
    let newProduct = document.getElementById("new-product").value;
    list[index] = newProduct;
    alert("Sửa thành công");
    showAll();
    document.getElementById("new-product").value = '';
    document.getElementById('btn').innerHTML = `
     <button onclick="addProduct()">Add</button>
    `
}

function showAll() {
    let html = '';
    for (let i = 0; i < list.length; i++) {
        html += `
            <tr>
                <td>${list[i]}</td>
                <td><button onclick="showFormEdit(${i})">Sửa</button></td>
                <td><button onclick="remove(${i})">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById('list-product').innerHTML = html;
}

showAll();
// Create, Read ,Update, Delete 
