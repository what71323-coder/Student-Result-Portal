import "./SearchForm.css";
function SearchForm({name,setName,rollNo,setRollNo,searchStudent,}) {
  return (
    <div className="search-box">
      <h1>R.K DESAI COLLEGE</h1>
      <h3>STUDENT RESULT PORTAL</h3>
      <input type="text" placeholder="Enter Student Name" value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input type="text" placeholder="Enter Roll Number" value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button onClick={searchStudent}>Search Result</button>
    </div>
  );
}

export default SearchForm;