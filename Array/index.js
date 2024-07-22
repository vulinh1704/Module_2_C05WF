
/*
Mảng là 1 biến đặc biệt có thể lưu trữ nhiều giá trị có liên quan đến nhau.

let a = 1;
let b = 2;
let c = 3;
let d = 10;
let e = 11;
// Đây là 1 dãy số cho trước, muốn tương tác thì phải thông qua tên biến
// console.log(a);
//...

// Mục tiêu mong muốn: Lưu trữ dãy số bằng 1 biến ngắn gọn
let arr = [1, 2, 3, 10, 11]; // Lưu trữ 1 dãy các giá liên quan đến nhau
console.log(arr);

====================================================================
Các kiểu khai báo
let arr = [4, 5, 6, 7]; // Ưu tiên sử dụng
let arr2 = new Array(1, 5, 6, 8); // Cách khai báo 2

// Mảng trong JS thì có thể chứa phần tử có kiểu dữ liệu khác
let arr = [1, true, "Hehe", -1];

Index (Chỉ số): Là các vị trí của phần tử trong mảng, bắt đầu từ 0, kết thúc là length - 1
Length (Độ dài mảng): Số phần tử nằm trong mảng, lấy ra length: arr.length
Element (Phần tử): Là các giá trị nằm trong mảng, cú pháp để truy xuất vào 1 phần tử là arr[index]

let arr = [1, 6, 7, 8, 10, 11];
// Index:  0  1  2  3   4   5
// Length: 6
console.log("Phần tử tại vị trí số 4 là: " + arr[4]);
console.log("Phần từ tại vị trí số 0 là: " + arr[0]);
console.log("Truy xuất vào vị trí không tồn tại: " + arr[6]);
console.log("Độ dài mảng là : " + arr.length);

// Sửa dổi 1 phần tử trong mảng
arr[4] = -99; // 10 => -99
console.log("Phần tử tại vị trí số 4 sau sửa là: " + arr[4]);

//Cách duyệt mảng: Sử dụng vòng lặp for
let list = ["Linh", "Hoàng", "Anh", "Phúc"]; 
for(let i = 0; i < list.length; i++) {
    console.log(`Phần tử tại vị trí ${i} là ${list[i]}`);
}
*/

// cho một mảng có các giá trị 4 ,5 ,6, 7, 7, 5
// let arr = [4, 5, 6, 7, 7, 5];
// B1: In ra các phần tử chẵn
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// B2: In ra các phần tử tại vị trí chẵn
// for(let i = 0; i < arr.length; i++) {
//     if(i % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// B3: In ra tổng các phần tử
// let tong = 0;
// for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i];
// }
// console.log("Tổng các phần tử là: " + tong);


// B4: Tìm max 
/*
let arr = [4, 5, 6, 7, 7, 5];
let max = arr[0];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}
console.log("Phần tử lớn nhất là : " + max);
*/


/*

Các hàm tương tác với mảng trong Javascript
push(): Thêm phần tử vào cuối mảng: Ex: arr.push(344);
unshift(): Thêm phần tử vào đầu mảng. Ex: arr.unshift(-10);
pop(): Xóa phần tử ở cuối mảng. Ex: arr.pop();
shift(): Xóa phần tử ở đầu mảng. Ex: arr.shift();
concat(): Trả về 1 mảng mới nối 2 mảng lại
     Ex :   let arr = [1, 5, 76, 24];
            let arr2 = [-11, -34];
            let arr4 = [111, 222]
            let arr3 = arr.concat(arr2, arr4);
            console.log(arr3);
join(): Trả về chuỗi chứa các phần tử, các phần tử cách nhau bởi ký tự truyền vào trong join, mặc định là dấu phẩy 
    Ex: let arr = [1, 5, 76, 24];
        let str = arr.join(" và ");
        console.log(str);
splice(): Có thể xóa, sửa, chèn, thêm phần tử vào trong mảng.
*/

// Tham chiếu 
// let arr = [1, 5, 76, 24];
// let arr2 = arr; 
// arr2.push(-10); 
// console.log(arr); 


// arr.splice(1, 1); // Từ vị trí 1 (vị trí bắt đầu) xóa đi 1 (số lượng phần tử) phần tử
// arr.splice(2, 2);

//arr.splice(2, 0, 20); // Từ vị 2 xóa đi 0 phần tử và chèn vào số 20
// arr.splice(2, 1, 20); // Từ vị 2 xóa đi 1 phần tử và thay số 20 vào
// console.log(arr);












