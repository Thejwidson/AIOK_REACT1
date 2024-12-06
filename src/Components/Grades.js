import React from "react";

function Grades({ grades }) {
  return (<p>Grades: {grades.join(",")}</p>);
}

export default Grades;
