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

// function chuyenTien() {
//     let amount = +document.getElementById("amount").value;
//     let from = document.getElementById("from").value;
//     let to = document.getElementById("to").value;
//     if(from === "VND" && to === "USD") {
//         amount = amount / 23000;
//     }

//     document.getElementById("result").innerHTML = "Kết quả: " + amount;
// }

// let thu = +prompt("Nhập ngày: ");
// switch (thu) { // chọn
//     case 1: // kiểm tra trường hợp thu === 1 hay không nếu true thì thực hiện lệnh bên dưới
//         console.log("CHủ nhật");
//         break;
//          // Dừng switch case (nếu không có break thì sẽ chạy đến khi nào gặp break hoặc hết câu lệnh)
//     case 2:
//         console.log("THứ hai")
//         break;
//     case 3:
//         console.log("Thứ 3")
//         break;
//     default:
//         console.log("Không có ngày này")
//         break;
// }
// switch case tương đương if nhưng chỉ có thể so sánh bằng

// Toán tử 3 ngôi (If else thu gọn);

// Cho a và b, In ra số lớn hơn
/*

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
*/
// let a = 10, b = 5;
// let c = a > b ? a : b;
// console.log(c);



//có doanh thu, nếu doanh thu < 100 triệu thì ăn 5%, 100 - 500 ăn 10%, > 500 thì ăn 15%;
/*
let doanhThu = +prompt("Nhập doanh thu: ");
let hoaHong = 0;
if (doanhThu < 100) {
    doanhThu = doanhThu * 5 / 100;
} else if (doanhThu >= 100 && doanhThu <= 500) {
    doanhThu = doanhThu * 10 / 100;
} else if (doanhThu > 500) {
    doanhThu = doanhThu * 15 / 100;
}

alert(doanhThu);
*/

// Nhập vào số giờ, giờ < 10h thì cước 10%, giờ 10 - 20 thì cước 12%, > 20 giờ thì 15%

// Hoàn thành danh sách bài tập sau:
// Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age > 18
// Nhập và a, in ra 'Hello' nếu a chẵn, 'Hi' nếu a lẻ
// Nhập vào a, b. Nếu a>b in ra tổng, nếu a<b in ra tích, nếu a =b in ra 'Hihi'
// Nhập a,b,c. In ra số lớn nhất
// let age = +prompt("Nhập tuổi: ")
// if(age > 18) {
//     alert("Đủ tuổi")
// }

// ------------------------------
// let a = +prompt("Nhập số: ");
// if(a % 2 == 0) {
//     alert("Số chẵn");
// } else {
//     alert("Số lẻ");
// }

// let a = +prompt("Nhập a : ");
// let b = +prompt("Nhập b: ");
// if (a > b) {
//     alert(a + b);
// } else if (a < b) {
//     alert(a * b);
// } else {
//     alert("HiHi");
// }

/*
let a = +prompt("Nhập a"); // 10
let b = +prompt("Nhập b"); // 8
let c = +prompt("Nhập c"); // 9
let max = a; // max = 10
if (max < b) {  // 8 < 10
    max = b;
}
if (max < c) { // 10 < 9
    max = c;
}

alert(max);
*/


/*
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");
if(a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && c + a > b) {
    alert("Là 3 cạnh tam giác")
} else {
    alert("Không là 3 cạnh tam giác")
}
*/

/*
ax + b = 0
x = -b / a; 
a = 0 vô nghiệm
a != 0, b = 0 vô số nghiệm

*/
/*

let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
if (a == 0) {
    alert("Phương trình vô nghiệm")
    if (b == 0) {
        alert("Phương trình vô số nghiệm")
    }
} else {
    let x = -b / a;
    alert("Nghiệm là : " + x);
}

*/




// let a = +prompt("Nhap a")
// let b = +prompt("Nhap b")
// let c = +prompt("Nhap c")
// let denta = b * b - 4 * a * c;
// // a != 0 
// if (denta < 0) {
//     console.log(`Phuong trinh vo nghiem`)
// } else if (denta == 0) {
//     let x = -b / (2 * a);
//     console.log(`Phuong trinh co nghiem kep x1 = x2 = ${x}`); // Template string
//     // console.log("Phuong trinh co nghiem kep x1 = x2 = " + x + " hello")
// } else if (denta > 0) {
//     let x1 = (-b + Math.sqrt(denta)) / (2 * a); // Math.sqrt(delta) là căn delta
//     let x2 = (-b - Math.sqrt(denta)) / (2 * a);
//     console.log(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`)
// }

// a == 0

// ax^2 + bx + c = 0
let x1, x2, delta;
let a = +prompt("nhap a")
let b = +prompt("nhap b")
let c = +prompt("nhap c")
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('phuong trinh co vo so nghiem')
        } else {
            alert('phuong trinh vo nghiem')
        }
    } else {
        x1 = -c / b;
        alert("nghiem cua phuong trinh : " + x);
    }
}
else {
    delta = (b * b) - (4 * a * c)
    if (delta >= 0) {
        x1 = (-b - Math.sqrt(delta)) / (2 * a)
        x2 = (-b + Math.sqrt(delta)) / (2 * a)
        alert("phuong trinh co nghiem x1 la : " + x1)
        alert("phuong trinh co nghiem x2 la : " + x2)
    } else {
        alert("phuong trinh vo nghiem")
    }
} 