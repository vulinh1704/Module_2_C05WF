
// for (let i = 0; i <= 10; i++) { // i = 11 <= 10 (false)
//     console.log(i); // 0 1 2 ... 10
// }


/*

for(<Khoi tao biến đếm>; <điều kiên lặp> ; <tăng giảm biến đếm>) {
    <Khối lệnh thực thi>
}

Bước 1: Khởi tạo biến đếm
Bươc 2: Kiểm tra <điều kiện lặp> nếu true thì thực hiện bước 3 còn false thì lập tức dừng vòng lặp.
Bước 3: Thực hiện <Khối lệnh thực thi>
Bước 4: Thực hiện <tăng giảm biến đếm> sau đó quay trở bước 2.

Note: Nên chú ý tránh vòng lặp vô hạn
Vd : 
for (let i = 0; i >= 0; i++) { // i = 11 <= 10 (false)
    console.log(i); // 0 1 2 ... 10
}

for(;;) { 
    console.log("Hehe")
}

*/


/*
for (let i = 0; i <= 10; i++) { // i = 5
    if (i == 5) { // true
        break; // Khi gặp từ khóa break sẽ ngay lập tức dừng vòng lặp
    }
    console.log(i);
}
*/


// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 1) {
//         continue; // Bỏ qua đoạn code bên dưới continue của lượt lặp hiện tại và chuyển sang lượt lặp tiếp theo luôn
//     }
//     console.log(i);
// }

// In ra các số từ 10 - 1;
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// In ra các số chẵn từ 0 - 100;
// let tong = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         tong = tong + i;
//     }
// }
// alert(tong);

// In ra tổng các số từ 10 - 20;

// for(let i = 10; i < 20; i++) {
//     // break;
//     console.log(i);
// }


// B1 : Khởi tạo biến đếm
// B2: Kiểm tra điều kiện nếu true thì vào bước 3 còn false thì dừng lặp
// B3: Thực hiện khối lệnh thực
// B4: Tăng hoặc giảm biến đếm sau đó quay trở lại B2

// break: Dừng vòng lặp gần nhất
// continue: Khi gặp từ khóa continue thì sẽ bỏ qua lượt lặp hiện tại và chuyển tới lượt tiếp theo

// for (let i = 1; i <= 10; i++) { // i = 2 <= 10 (true)
//     for (let j = 1; j <= 10; j++) { // j = 1 <= 10 (true)
//         console.log("i = " + i + " ;j = " + j); // Hello Hello Hello ... Hello Hello
//     }
//     // Vòng lặp trong: Là <khối lệnh thực thi> và <khối lệnh thực thi> phải chạy xong mới chuyển vòng lặp
// }

// 1 vòng i sẽ có 10 vòng lặp j => SỐ lần in 10 * 10 = 100;
// Có thể có nhiều vòng lặp lồng nhau nhưng thường dùng 2.

// Bài tập: Thực hiện in bảng cửu chương

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         let tich = i * j;
//         console.log(`${i} x ${j} = ${tich}`);
//         break;
//     }
// }


// while và do while

/*

while(<điều kiện lặp>) {
    <Khối lệnh thực thi>
}

Note: Khối lệnh thực thi sẽ được thực hiện khi <điều lặp lặp> true
Example: 
let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

*/

/*

do {
  <Khối lệnh thực thi>
} while(<điều kiện lặp>)

Note: Dù <điều kiện lặp> đúng hay sai <Khối lệnh thực thi> cũng thực hiện ít nhất 1 lần
Example: 
let i = 21;
do {
    console.log(i);
    i++;
} while(i <= 20);
*/

// Yêu cầu người dùng nhập 1 số vào, đến khi nhập 0 thì dừng.

// let number; 
// do {
//     number = +prompt("Nhập 0 để thoát")// 3 4 0
// } while(number != 0); // 0 != 0 (false)

// let count = 0;
// do {
//     count++
// } while (count++ < 10); 