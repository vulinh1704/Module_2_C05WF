
/*
function, let, var, alert,...
*/

/*
Object Oriented Programing: Lập trình hướng đối tượng (OOP)
Đưa thực thể ngoài thế giới thực (có trong bài toán) vào trong lâp trình

Class: Là bản mô tả chung về đặc điểm và hành vi của các đối tượng
Ví dụ: class Person, class Animal

Đặc điểm(Thuôc tính): Là các đặc điểm, giá trị của các đối tượng
Hành vi(Phương thức, hàm): Là các hành động chung của các đối tương

constructor (Hàm tạo): Sử dụng để nhận các giá trị cụ thể và 1 đối tượng từ lớp đó

Đối tượng (object): Là các thực thể cụ thể sinh ra từ lớp
*/

class Person { // Khởi tạo lớp
    name; // Khởi tạo các thuộc tính
    id;
    age;

    constructor(nameInput, idInput, ageInput) { // Dùng để khởi tạo các đối tượng
        this.name = nameInput;
        this.id = idInput;
        this.age = ageInput;
    }

    go() { // Khởi tạo các phương thức
        console.log("Người đang đi");
    }

    sleep() {
        console.log(this.name + " đang ngủ");
        // this thì sẽ đại diện cho đối tượng đang sử dụng
    }
}


let p1 = new Person("Nhân", 111, 22); // Khởi tạo đối tượng, khi chạy sẽ constructor để khởi tạo đối tượng
let p2 = new Person("Linh", 234, 17);
console.log(p1);
console.log(p2);

// Cách truy xuất thuộc tính và phương thức của đối tượng
console.log("Name p1", p1.name); // Truy xuất thuộc tính đối tượng
p1.name = "Chia"; // Gán lại giá trị cho thuốc tính name của đối tượng p1
console.log("New Name P1 ", p1.name);
p1.go(); // Truy xuất phương thức của đối tượng
p1.sleep(); // p1 => this
p2.sleep(); // p2 => this
