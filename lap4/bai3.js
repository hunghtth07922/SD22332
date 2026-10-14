const students = [
    { name: "An", score: 8.2 },
    { name: "Bình", score: 7.5 },
    { name: "Chi", score: 9.1 },
    { name: "Duy", score: 6.8 },
    { name: "Hà", score: 8.7 },
    { name: "Khánh", score: 5.9 },
    { name: "Lan", score: 7.8 },
    { name: "Minh", score: 9.4 },
    { name: "Ngọc", score: 6.5 },
    { name: "Quân", score: 8.0 }
]; 
// lọc học sinh có điểm số >= 8
const highScorers = students.filter(student => student.score >= 8);
console.log("Học sinh có điểm số >= 8: ", highScorers);

// tính điểm trung bình của tất cả học sinh
const averageScore = students.reduce((total, student) => total + student.score, 0) / students.length;
console.log("Điểm trung bình của tất cả học sinh: ", averageScore.toFixed(2));

// tìm học sinh có điểm số cao nhất
const top = students.reduce((top, student) => (student.score > top.score ? student : top), students[0]);
console.log("Học sinh có điểm số cao nhất: ", top);

// sắp xếp học sinh theo điểm số giảm dần
const sortedStudents = students.sort((a, b) => b.score - a.score);
console.log("Danh sách học sinh theo điểm số giảm dần: ", sortedStudents);

// Tạo mảng mới chỉ chứa tên học sinh. 
const studentNames = students.map(student => student.name);
console.log("Tên các học sinh: ", studentNames);