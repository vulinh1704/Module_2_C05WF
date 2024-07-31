


/*
Các bước làm 1 tính năng:
B1: Xây dựng HTML
B2: Xây dựng hàm bên Js
B3: Xác định phần tử HTML mà mình muốn tương tác
*/
// let nameInput = prompt("Nhập dữ liệu: ");
// localStorage.setItem("name", nameInput);
// let nameLocal = localStorage.getItem("name");
// alert(nameLocal);

/*
Những lúc nào cần lưu dữ liệu thì gọi setItem, 
những lúc cần lấy thì gọi getItem
*/
function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // Json.stringfy() biến mảng thành chuỗi thì mới lưu trong local
}

function getDataLocalStorage(key) {
    let data = JSON.parse(localStorage.getItem(key)); // JSON.parse() biến ngược lại thành kiểu ban đâu
    return data;
}

let list = getDataLocalStorage("list");
if(list == null) {
    saveLocalStorage("list", []);
    list = [];
}



function searchName() {
    let nameSearch = document.getElementById("name-search").value;
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase().includes(nameSearch.toLowerCase())) {
            let product = list[i];
            newList.push(product);
        }
    } // Xử lý tìm gần đúng và thêm vào trong mảng tạm thời

    let html = '';
    for (let i = 0; i < newList.length; i++) { // Hiển HTML cho mảng tạm thời
        html += `
            <tr>
                <td>${newList[i]}</td>
                <td><button onclick="showFormEdit(${i})">Sửa</button></td>
                <td><button onclick="remove(${i})">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById('list-product').innerHTML = html;
}

// Tìm kiếm gần đúng, tìm kiếm
// Tìm hiểu thêm về local storage

function addProduct() {
    let newProduct = document.getElementById("new-product").value;
    list.push(newProduct);
    saveLocalStorage("list", list);
    showAll();
    alert("Thêm thành công");
    document.getElementById("new-product").value = '';
}

function remove(index) {
    let isConfirm = confirm("Are you sure?");
    if (isConfirm) {
        list.splice(index, 1);
        saveLocalStorage("list", list);
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
    saveLocalStorage("list", list);
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
