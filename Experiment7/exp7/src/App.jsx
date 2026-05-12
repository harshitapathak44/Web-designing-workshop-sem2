import './App.css'

const students = [
  { name: "Harshita Pathak", course: "Computer Science", marks: 98 },
  { name: "Akshara", course: "Information Technology", marks: 92 },
  { name: "Khushi", course: "Electronics", marks: 88 },
];

function StudentCard({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2 className="student-name">{name}</h2>
      <p className="student-info">Course: {course}</p>
      <p className="student-info">Marks: {marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="title">Student Information</h1>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;