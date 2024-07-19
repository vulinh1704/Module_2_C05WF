// for(let i = 1; i < 100; i++) {
//     console.log(i);
//     if(i == 99) {
//         alert("Hoàn thành");
//     }
// }


//    0  1  1   2  3  5 
//              f1 f2 fib
//n = 1 2 3 4 5
// F(n) = F(n - 1) + F( n-2 );
// => F(5) = F(4) + F(3) = 2 + 1 = 3


/*
let f1 = 0;
let f2 = 1;
console.log(f1);
console.log(f2);
let count = 2;
for(let i = 0; count <= 18 ; i++) {
    let fibNumber = f1 + f2; // 3
    console.log(fibNumber);
    f1 = f2; 
    f2 = fibNumber;
    count++;
}
    */
// let count = 0;
// for (let i = 0; ;i = i + 7) {
//     console.log(i)
//     count++;
//     if (count === 30) {
//         break;
//     }
// }


// Ô nhập => nhập số (3 lần) => Nhập đúng (thằng) => Nhập sai thì báo nhỏ hơn hoặc hớn số của hệ thống
// Hệ thống => Sinh ra 1 số  => Kiểm tra xem bằng nhau không

function playGame() {
    // Math.random(): 0 - 0.99; 
    let number = Math.random() * 10;
    number = Math.round(number); // Số hệ thống sinh ra
    
    let count = 1;
    while(count <= 3) { // Cho phép nhập 3 lần
        let numberUser = +prompt("Nhập số: ");
        if(numberUser === number) { // Điều kiện chiến thắng số người dùng = số hệ thống
            alert("Bạn đã thắng"); 
            break;
        }
        
        if(number > numberUser) {
            alert("Số bạn nhập đang lớn hơn");
        } else {
            alert("Số bạn nhập đang nhỏ hơn");
        }

        count++;
    }
    if(count == 4) { // Nhập đủ 3 lần không ra số
        alert("Bạn đã thua");
    }
}