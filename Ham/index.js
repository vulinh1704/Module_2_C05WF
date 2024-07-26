/*
Hàm: là 1 nhóm các câu lệnh dùng để thực hiện 1 nhiệm vụ nào 
(Function, Method,..)
(Hàm, Phương thức,..)
    + Tái sử dụng lại
    + Đơn giản hóa
    + Tránh lặp code
    + Dễ dàng tổ chức và bảo trì.
Vd các hàm có sẵm: Math.random(), alert(), console.log(), prompt(), ...

2. Cách định nghĩa ra hàm

function <tên hàm>(<Danh sách các tham số>) {
  <Đoạn code triển khai hàm>
}

VD: 
function show() { // Định nghĩa ra hàm
    alert("Xin chào các bạn.")
}

show(); // Gọi hàm


function show() { 
    alert("Xin chào các bạn.")
}


function show2() {
    show(); // Trong 1 hàm có thể gọi được hàm khác.
    alert("Meo meo")
}

show2();


// Name: Tham số: là 1 biến đại diện cho các giá trị truyền vào hàm
function showName(name) { // CÓ thể vô số tham số truyền vào (Cách nhau bới dấu ,)
    alert("Xin chào " + name);
}

let a = prompt("Nhập tên: ")
// "Linh": Đối số: Là trị thực sự truyền vào hàm thay cho tham số name
showName(a);

// Viết 1 hàm tính tích 3 số do người nhập vào và hiển lên alert
Vd:
function tinhTich(a, b, c) {
    let tich = a * b * c;
    alert("Tích 3 số là : " + tich);
}

let a = prompt("Nhập a:");
let b = prompt("Nhập b:");
let c = prompt("Nhập c:");
tinhTich(a, b, c);


function getAvg(a, b) {
    let tong = a + b;
    let avg = tong / 2;
    return avg;
}

let a = getAvg(3, 5); // Cách để lấy giá trị trả về của hàm và gán cho a;

// Từ khóa return: Sẽ giúp trả về giá trị của hàm, hàm sẽ ngay tức kết thúc và trả về giá trị khi gặp từ khóa return


function test(a) {
    // console.log("Bước 1");
    // if (a < 1) {
    //     return 1;
    // }
    // console.log("Bước 2");
    while (true) {
        return 2;
    }
}

let b = test(0);
console.log('b', b);

*/

/* Muốn sử dụng hàm trong HTML thì sẽ thông sự kiện của HTML:
onClick: Thường đi với btn, img, div, h2,...
onChange: Thường đi kèm input, select option,...
onInput: Có bất cứ thay nào thì thực hiện hàm luôn
...
*/

function showHello() {
    alert("XIn chào các bé")
}


function showName() {
    let name = document.getElementById("name").value;
    console.log("Name: " + name);
}













