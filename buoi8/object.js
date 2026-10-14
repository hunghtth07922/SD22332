let student={
    name:"Ha",
    score: 9,
    getInfor: function() {
        return this.name+"_____"+this.score;
        
    }
}
console.log(student.getInfor());