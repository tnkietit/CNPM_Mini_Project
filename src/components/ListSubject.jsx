import React from "react";
import "./ListSubject.css";

function ListSubject({ selectedSubject, setSelectedSubject, subjects }) {
  return (
    <div className="list-subject">
      <select
        className="subject-dropdown"
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="">Danh sách môn học</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListSubject;
