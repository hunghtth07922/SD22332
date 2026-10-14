let student={
    name:"Ha",
    age:17,
    score:9,
    major:"WEB",
}
console.log(student.name);
// Truy cập đến thuộc tính và sửa
student.score=5;
console.log(student.score)
// Mảng đối tượng
let student=[
    {name:"Ha",score:9},
    {name:"Hoa",score:7},
    {name:"Hue",score:8},
    {name:"Hung",score:6},
];
// in ra tên của sv thứ 2
console.log(student[1],name);
// in ra tên cảu tất cả các sinh viên
for(s of student){
    console.log(s,name);
}