
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
let tong = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        tong = tong + i;
    }
}
alert(tong);

// In ra tổng các số từ 10 - 20;




