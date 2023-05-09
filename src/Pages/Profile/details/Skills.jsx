import React from "react";

function Skills(probs) {
  const person = probs.person;

  return (
    <>
      {person &&
        person.map((user) => {
          return (
            <div key={user.id}>
              {user["Skills"].map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="px-md-5 mx-3 my-2 rounded-4 skill-style"
                  >
                    {index + 1} : {skill}{" "}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}

export default Skills;
