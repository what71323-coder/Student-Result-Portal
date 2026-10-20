
import rkLogo from "./assets/rk_desai_logo_from_design.png";
import vnsguLogo from "./assets/vnsgu_logo_from_design.png";

function Marksheet({ student }) {
  const total =
    student.wfs +
    student.asp +
    student.linux +
    student.awd +
    student.network;

  const percentage = ((total / 150) * 100).toFixed(2);

  let grade = "";
  let result = "";

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  if (percentage >= 35) {
    result = "PASS";
  } else {
    result = "FAIL";
  }

  return (
    <div className="card">
      {/* College Header with Logos */}
      <div className="marksheet-header">
        <img
          src={rkLogo}
          alt="R.K. Desai College"
          className="college-logo"
        />

        <div className="college-heading">
          <h1>R.K DESAI COLLEGE</h1>
          <h2>R.K. DESAI GROUP OF COLLEGES</h2>
          <h3>Vapi, Gujarat</h3>
          <p>
            Affiliated to Veer Narmad South Gujarat University, Surat
          </p>
        </div>

        <img
          src={vnsguLogo}
          alt="VNSGU"
          className="university-logo"
        />
      </div>

      
      <div className="marksheet-title">
        <span className="title-line">
        <span className="title-ornament">❧</span>
        </span>

        <h2>STATEMENT OF MARKS</h2>

        <span className="title-line">
        <span className="title-ornament">❧</span>
        </span>
      </div>

      <hr />

      {/* Student Details */}
      <div className="student-details">
        <p>
          <b>Student Name :</b> {student.name}
        </p>

        <p>
          <b>Roll Number :</b> {student.rollNo}
        </p>
      </div>

      {/* Subject Marks Table */}
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Full Marks</th>
            <th>Obtained Marks</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>WFS</td>
            <td>25</td>
            <td>{student.wfs}</td>
          </tr>

          <tr>
            <td>ASP.NET</td>
            <td>25</td>
            <td>{student.asp}</td>
          </tr>

          <tr>
            <td>Linux</td>
            <td>25</td>
            <td>{student.linux}</td>
          </tr>

          <tr>
            <td>AWD</td>
            <td>25</td>
            <td>{student.awd}</td>
          </tr>

          <tr>
            <td>Network</td>
            <td>50</td>
            <td>{student.network}</td>
          </tr>
        </tbody>
      </table>

      {/* Result Summary */}
      <div className="result-summary">
        <p>
          <b>Total Marks</b>
          <span className="colon">:</span>
          <span>{total} / 150</span>
        </p>

        <p>
          <b>Percentage</b>
          <span className="colon">:</span>
          <span>{percentage}%</span>
        </p>

        <p>
          <b>Grade</b>
          <span className="colon">:</span>
          <span>{grade}</span>
        </p>

        <p>
          <b>Result</b>
          <span className="colon">:</span>
          <span className={result === "PASS" ? "pass" : "fail"}>
            {result}
          </span>
        </p>
      </div>

      <hr />

      {/* Examination Signature */}
      <p className="sign">Controller of Examination</p>
    </div>
  );
}

export default Marksheet;