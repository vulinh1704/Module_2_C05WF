// Biến: tên gọi của vùng nhớ chứa dữ liệu
// let <tên_biến> = <gia_tri>

// f = 20; // Lỗi: Thiếu từ khóa khai báo biến
/*
let a = 5, b = 10, c = "Linh";
let d = 10;
let e;
e = 21; // Gán giá trị 20 cho biến e
e = 22; // Gán lại giá trị cho biến
e = 23;

alert(e); // 23

var number = 10; // variable: cách khai báo cũ trước 2015 (ES6): hạn chế sử dụng, sẽ có ở project cũ
let name = "Linh";
const PI = 3.14; //const sử dụng Khai báo hằng sô: Là 1 giá trị không thay đổi
PI = 5.25; // Error: Js không cho phép thay đổi giá trị của biến const

// Không sử dụng ký tự đặc biệt (trừ $ hoặc _)
// Khổng sử dụng tiếng Việt 
// Nên sử dụng bằng tiếng Anh (danh từ)

*/


/*
// Số, Chuỗi, Logic, Phức tạp (object - giới thiệu sau)

let a = 5; // Kiểu number
let b = 5.3; // Kiểu number
let c = -5.4;

let name = "Trương Đăng Vũ Linh"; // Kiểu chuỗi (string)
let nameClass = 'C05WF';
let gender = `Nu`;
// Giá trị string bắt buộc phải nằm trong: "" hoặc '' hoặc ``

let isSick = false; // Kiểu logic (boolean): chỉ có 2 giá trị true, false
let isTrue = true; // boolean
is = 10; // number
// => Kiểu dữ liệu của biến trong JS phụ thuộc vào giá trị mà nó đang sử dụng 
// => Kiểu dữ liệu của biến trong Js thì là động vì biến có thể nhận nhiều giá trị khác nhau về kiểu dữ liệu

console.log(e);
let e = 20; // Lỗi: Vì biến cần được khai báo trước khi sử dụng
*/


// Các loại toán tử: || , = , +=, ==, ===, !=

// Toán tử toán học:  +  -  * \ % ++ --

/*
let a = 10;
let b = 30;
let c = a + b; // 40
let d = a - b; // -20
let e = a * b; // 300
let f = a % b; // chia lấy dư: 10
alert(f);

// 10 cái kẹo và 30 người, chia đều cho 30 người số kẹo. Mỗi người nhận bao nhiêu kẹo? 
// Mỗi người có 0 cái dư 10 cái kẹo
*/

// let a = 10;
// a++; // Toán tử toán học ++ Tăng lên 1 giá trị cho a
// ++a; 
// alert(a);

/*
    Tiền tố và Hậu tố
    Tiền tố: Ưu tiên hành động tăng trước các hành động khác
    Hậu tố: Ưu tiên các hành động khác trước rồi tăng sau

*/

// let a = 10;
// let b = ++a; // Tăng a lên 1 => a = 11 sau đó gán cho b = 11;
// alert("a = " + a + "; b = " + b); 


// let a = 10;
// let b = a++; // Gán b = a(cũ) => b = 10 sau đó mới tăng a lên 1 => a = 11;
// alert("a = " + a + "; b = " + b); // a = 11; b = 10

/*
let c = 20;
let d = 21;
let e = d++ - ++c - ++d - c--;
    // 21 - 21 - 23 - 21
    // e = -44
    // d = 2
    // c = 20
alert("c = " + c + ", d = " + d + ", e = " + e);
// c = 2, d = -1, e = 1
// c = 21, d = 21, e = 1
// c = 23, d = 23, e = -44
*/



/*

// Toán tử cộng có thể dùng cho cộng chuỗi (Ưu tiên chuỗi)
// Toán tử toán học hoạt động: từ trái qua phải, nhân chia trước + - sau, trong ngoặc trước
let a = '1' + '1' // '11'
let b = 1 + '1' // '11'
console.log(typeof b)
let c = 1 + 2 + '1'; // 3 + '1' = '31';
let d = '3' + 2 + 7; // '32' + 7 = '327';

// Các toán tử khác ngoại trừ + thì khi tương tác với CHUỖI SỐ (VD:'5', '56') sẽ luôn chuyển thành số trước khi sử dụng
// còn với chuỗi (VD: 'Linh', 'abc') thì sẽ nhận lại giá trị NaN
let f = 'A' * 10; // NaN (Not A Number)
let h = '4' * '5'; // 20;
alert(f);

   2 * (3 + ‘5’) + ‘21’ - 20 / ‘5’ - (11 + 2 - ‘6’)
 = 2 * '35' + '21' - 4 - 7
 = 70 + '21' - 4 - 7
 = '7021' - 4 - 7
 = 7017 - 7
 = 7010
*/

// Toán tử gán: =   +=   *=   \=   %=
/*
let a = 10;
a = 20;

let b = 10;
b += 10; // <=> b = b + 10 = 10 + 10 = 20
alert(b);

let c = 20;
c -= 15; // c = c - 15 = 5
*/


// Toán tử so sánh (< >  <=  >=  ==  != ===  !==)
// : sẽ luôn cho lại giá boolean
// alert(5 < 3); // false
// alert(10 >= 5); // true
// alert(5 == 5);

// alert(5 === 5);
// alert(5 !== 10);

// alert(5 == '5'); // true - Tự đưa về 1 kiểu dữ liệu để so sánh
// alert(5 === '5'); // false - So sánh luôn cả kiểu dữ liệu


// alert(5 != '5'); // false
// alert(5 !== '5'); // chỉ cần đúng 1 trong 2 điều kiện: giá trị và kiểu dữ liệu
// false 
// number != string (true) 



// function showData() {
//     let duLieu = document.getElementById("data").value;
//     console.log(duLieu);
// }

// let a = 10;
// let b = 20;

// function showData() {
//     // document.write(a + b);
//     // alert(a + b);
//     console.log(a + b);
// }

// let a = 10, b = 5, c = 20, d = 15;
// let ketQua = a + b * c - d / 2;
// alert(ketQua);

function showData() {
    let a = +document.getElementById("a").value; // '1'
    let b = +document.getElementById("b").value; // '30'
    let c = a + b
    alert("a = " + a + "; b = " + b + " có tổng là: " + c);
}