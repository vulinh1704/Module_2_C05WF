// let, var hoặc const
// Chuỗi: '', "", ``
// Số: number (0, 0.5, -1)
// Boolean: logic (true hoặc false)

// Toán tử
/*

Toán tử toán tử học: +  -  * / %  ++ --
Tiền tố: Tăng trước và hành khác thì sau
Hậu tố: Hàng động khác trước và tăng sau 

Toán tử + có thể sử dụng để nối chuỗi
Cần chú ý khi cộng chuỗi số: '1' + 1 = '11' (Luôn ưu tiên chuỗi)
Các toán tử khác khi tương tác với chuỗi số thì tự động chuyển về số trước khi thực hiện.

Toán tử logic: <, >, ==, !=, !==, == , >=, <= (Luôn cho về giá trị boolean)
Toán tử gán: =, +=, -=, /=, *=, %= 
a += 1 <=> a = a + 1

*/


// Đủ tiền có thời gian (Đây là điều kiện) => Nếu đúng thì đi học => Sai thì không học
// If, switch case

/*
 Toán tử logic: && , || , !

 Toán tử &&: Sẽ trả về true khi tất cả các vế đều true 
 Toán tử ||: Sẽ trả về true khi có 1 vế true
 Toán tử !: Phủ định sẽ trả về giá trị ngược lại

 let a = 5 < 6 && 7 > 3 && true; 
// VD: Pass module: đạt dự án && điểm thi > 75 && giảng viên đánh giá đủ năng lực
// alert(a); // true

let b = 5 > 7 || 3 > 4 || 2 < 4;
// VD: Pass Module của Linh: Đạt dự án hoặc 500k
// alert(true)

let c = true && false || true && false; // false || true && false
                                        // true && false => false
// alert(c); // false

let d = !true;
let e = !(!false); // !(true) => false
alert(e); // false
*/


/*

    if(<điều kiện>) {
        // Khối lệnh thực thi
    }

    // let diem = 3;
    // if(diem > 5) { // false
    //     alert("Đạt") // Khi điều kiện false thì không thực hiện code trong if
    // }

    // alert("Các đoạn code tiếp theo");

    // Bài tập: Nhập vào tuổi và in ra "Đủ tuổi vị thành niên" nếu tuổi > 18 và dưới dưới 60; 
    
    if (age > 18 && age < 60) { // Sẽ vào if khi đủ cả điều kiện 
        alert("Đủ tuổi vị thành niên")
    }

    let age = +prompt("Nhập vào tuổi của bạn:");

    if(age > 18) {
        alert("Trên 18 dồi")
        if(age < 60) {
            alert("Đủ tuổi vị thành niên")
        }
    }

*/

/*
let diem = 3
if(diem > 5) {
    alert("Đạt")
}

if(diem <= 5) {
    alert("Không đạt")
}

// <=> Sử dụng if - else: Nếu...thì..Còn không thì..
if (diem > 5) {
    alert("Đạt")
} else { // Bắt trường <điều kiện> trả false
    alert("Không đạt")
}


alert("Tiếp tục chương trình");


// Bài tập: Nhập vào tuổi và in ra "Đủ tuổi vị thành niên" nếu tuổi > 18 nếu không thì in "Không có tuổi"

let age = prompt("Nhập vào tuổi:");
age = parseInt(age); // <=> +
if (age > 18) {
    alert("Đủ tuổi vị thành niên.");
} else { 
    alert("Không du tuổi vị thành niên.");
}


// Xử lý kiểm tra một loạt các điều kiện, trong các điều kiện sẽ có cách xử lý khác nhau => Sử dụng if- else bậc thang
// Nhập vào điểm và in ra Giỏi khi điểm > 90, Khá khi điểm <= 90 và >= 50, nhỏ hơn 50 và >= 20 thì in Trung Bình
// < 20 thì in ra Yếu

let diem = +prompt("Nhập điểm: "); // 30
if (diem <= 100 && diem > 90) { // false
    alert("Giỏi")
} else if (diem <= 90 && diem >= 50) { // false
    alert("Khá")
} else if (diem < 50 && diem >= 20) { // true
    alert("Trung bình"); // Run
} else if (diem < 20 && diem >= 0) {
    alert("Yếu");
} else {
    alert("Không có điểm này")
}

// Nếu ... thì ... nếu không thì....
*/

/*
 Note: Trong Js Khi đưa 6 giá trị false, 0, NaN, undefinded, null, '' vào điều kiện if
  thì Js tự chuyển thành còn các giá trị khác thì chuyển thành true
 */

// let a = "Không";
// if (a){
//     alert("Haha");
// }


// 21 * (53 + ‘5’ - '2') + 21 - '20' / ‘5’ - (11 + 2 - ‘6’ * 4)
// 21 * 533 + 21 - 4 - 28
// 11221

function chuyenTien() {
    let amount = +document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    if(from === "VND" && to === "USD") {
        amount = amount / 23000;
    }
    
    document.getElementById("result").innerHTML = "Kết quả: " + amount;
}







