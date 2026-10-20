import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Marksheet from "./Marksheet";
import students from "./students";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [student, setStudent] = useState(null);

  function searchStudent() {
    const found = students.find(
      (s) =>
        s.name.trim().toLowerCase() === name.trim().toLowerCase() &&
        s.rollNo.trim() === rollNo.trim()
    );

    setStudent(found || null);
  }

  if (student) {
    return (
      <div className="container">
        <Marksheet student={student} />
      </div>
    );
  }

  return (
    <div className="container">
      <SearchForm name={name} setName={setName} rollNo={rollNo} setRollNo={setRollNo} searchStudent={searchStudent}/>
      {name !== "" && rollNo !== "" && !student && (
        <h3>Student Not Found</h3>
      )}
    </div>
  );
}

export default App;