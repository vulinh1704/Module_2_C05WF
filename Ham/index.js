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

// function showHello() {
//     alert("XIn chào các bé")
// }


// function showName() {
//     let name = document.getElementById("name").value;
//     console.log("Name: " + name);
// }

/*
function isPrime(number) {
    let count = 0
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        alert(number + " là số nguyên tố")
    } else {
        alert(number + " k là số nguyên tố")
    }
}

let a = prompt("Nhập số cần kiểm tra: ");
isPrime(a);
*/

// CamelCase 
// Feet: tham số truyền vào, sử dụng khi khai báo
// Đối số: đối số là giá trị thực truyền vào hàm khi gọi hàm (số lượng ~ số lượng tham số truyền vào)
// return: trả về giá trị cho hàm, khi gặp từ khóa return ngay lập tức dừng hàm và trả về giá trị

/*
function feetToMeter(feet){ // Khai báo hàm
    let meter = 0.305 * feet;
    return meter;
}

function meterToFeet(meter) {
    let feet = 3.279 * meter;
    return meter;
}

let feet = prompt("Nhập feet: ")
let meter = feetToMeter(feet); // GỌi hàm
alert("Meter: " + meter)
*/

// Sự kiện: onchange, onclick, oninput


/* 
Có 2 phạm vi của biến:
+ Biến toàn cục: Biến được khai báo ngoài hàm, khối. Tồn tại từ lúc khai báo đến hết chương trình.
+ Biến cục bộ: Biến cục bộ là biến được khai báo trong hàm hoặc khối. TỒn tại từ lúc khai báo đến hết khối hoặc hàm
Note: Chỉ cần khác nhau về phạm vi có thể trùng tên biến

let a = 10; // Biến toàn cục
if (true) {
    let a = 20; // Biến cục bộ 
    alert(a); // Lấy biến gần nhất
}

for (let i = 0; i < 10; i++) { // Biến cục bộ
    console.log(i);
}

function go(name) {
    let b = 10;
}

let c = 21;

*/


/*
Phân biệt let,var:
- Giống: Khai báo biến trong Js
- Khác:
   + Cơ chế Hosting:
   let: Không thể sử dụng biến trước khi khai báo.
   var: Có thể sử dụng biến trước khi báo.

   + let: Không thể tạo lại biến cùng tên, chỉ có thể gán lại
     var: có thể tạo lại biến cùng tên.

   + Phạm vi khai báo
   let: Phạm vi là block scope(Khối)
   var: Phạm vi là function scope (hàm)

   const ~ let: Khác ở chỗ const không cho phép gán lại giá trị
*/



/*

function go() {
    var b = 20;
    if(true) {
        var a = 10;
    }
    console.log("A block scope", a);
}
console.log(a, b);

go();
*/
/*
function show20Prime() {
    let number = 1;
    let countPrime = 0;
    while (countPrime <= 20) {
        let count = 0
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        if (count === 2) {
           console.log(number);
           countPrime++;
        }
        number++; 
    }
}


show20Prime();
*/

/*
let englishs = ["Hello", "Banana", "Cat", "Dog", "Cake"] // 3
let vietNameses = ["Xin chào", "Chuối", "Mèo", "Chó", "Bánh"]
// => Xây dựng 1 hàm nhập tiếng Anh => Tiếng Việt
// Ý tưởng: tìm vị trí của từ đó trong mảng 1 và in từ tương ứng ở mảng 2

function translate(word) {
    let index;
    for (let i = 0; i < englishs.length; i++) {
        if(englishs[i] === word) {
            index = i;
            break;
        }    
    }
    
    let ouput = vietNameses[index];
    return ouput;
}

let input = prompt("Nhập từ tiếng Anh: ");
let a = translate(input);
alert(a);
*/









