students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
searchStudent = "John";

function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  let index = -1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (searchStudent === students[mid]) {
      index = mid;
      break;
    } else if (searchStudent > students[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
}

console.log(findStudentIndex(students, searchStudent));

// ตอบคำถามตรงนี้จ้า
// Big O = log n เพราะทุกการ search สามารถลดจำนวนที่ต้องค้นหาได้ครึ่งนึง
