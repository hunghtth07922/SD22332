class student{
    name;
    age;
    getInfor(){
        return this.name+"------"+this.age;
    }
}
let st1= new students;
st1.name="Lan";
st1.age=20;
console.log(st1.getInfor());
class Products{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    getInfor(){
        return `${this.name} có chuỗi là: ${this.price}`;
    }
}
let pr1= new Products("Áo",300);
console.log("Thông tin sản phẩm: "+getInfor());