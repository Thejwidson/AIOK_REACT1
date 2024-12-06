import React from "react";
import Name from "./Name";
import Surname from "./Surname";
import Index from "./Index";
import BirthDate from "./BirthDate";
import Addres from "./Addres";
import Group from "./Group";
import Scholarship from "./Scholarship";
import Grades from "./Grades";

const studentData = [
  {
    id: 1,
    name: "Dawid",
    surname: "Szczawinski",
    index: "113524",
    birthDate: "2002-04-12",
    addres: "Bialystok",
    group: "PS4",
    scholarship: "Brak",
    grades: [4.0, 4.5, 5.0],
  },
  {
    id: 2,
    name: "Test",
    surname: "Testowy",
    index: "111111",
    birthDate: "1111-11-11",
    addres: "Bialystok",
    group: "PS0",
    scholarship: "Brak",
    grades: [3.0, 3.0, 3.0],
  },
];

function Students() {
  return (
    <div>
      {studentData.map((student) => (
        <div key={student.id} style={{ border: "3px solid #ba0000", margin: "10px"}}>
          <Name name={student.name} />
          <Surname surname={student.surname} />
          <Index index={student.index} />
          <BirthDate birthDate={student.birthDate} />
          <Addres addres={student.addres} />
          <Group group={student.group} />
          <Scholarship scholarship={student.scholarship} />
          <Grades grades={student.grades} />
        </div>
      ))}
    </div>
  );
}

export default Students;
