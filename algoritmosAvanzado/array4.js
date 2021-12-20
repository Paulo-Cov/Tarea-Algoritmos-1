const num = new Array (3,5,7,1,6);
alert(Math.max.apply(null,num));
//Exercise 4 to Arrays
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
console.log(student1Courses);
console.log(student2Courses);
function comparation(string1, string2){
if(string1[0]===string2[0])
alert(string1[0]);
if(string1[1]===string2[1])
alert(string1[1]);
if(string1[2]===string2[2])
alert(string1[2]);
}