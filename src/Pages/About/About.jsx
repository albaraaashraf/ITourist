import React from "react";

function About() {
  const backgroundCoverUrl =
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <div style={{ position: "relative" }}>
        <p
          style={{
            fontSize: "45px",
            backgroundColor: "rgb(0 0 0 / 36%)",
            display: "inline-block",
            width: "100%",
            height: "fit-content",
            backdropFilter: "none",
            position: "absolute",
            top: "16rem",
            zIndex: "2",
            textAlign: "center",
            color: "whitesmoke",
          }}
        >
          {" "}
          About Us ...
        </p>
        <div
          style={{
            height: "35rem",
            color: "whitesmoke",
            textAlign: "center",
            backgroundImage: `url(${backgroundCoverUrl})`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            filter: "contrast(70%)", // Adjust the contrast percentage as needed
            backdropFilter: "none", // Ensure child elements are not affected
          }}
        ></div>
      </div>

      <div
        style={{
          margin: "4rem 0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "#3b504d",
            textAlign: "center",
            width: "100%",
            fontFamily: "fantasy",
            fontSize: "40px",
          }}
        >
          We're a group of students working on our graduation project
        </p>
        <div
          style={{
            height: "1px",
            width: "50%",
            backgroundColor: "black",
            textAlign: "center",
            margin: "30px 0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
        <div
            style={{
              height: "15rem",
              width: "18rem",
              backgroundColor: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              borderRadius:'10px',
              alignItems:'center'
            }}
          >
            <img
              src="https://chingizpro.github.io/portfolio/img/person.png"
              style={{ width: "5rem", height: "5rem", marginTop: "4rem"  }}
              alt="avatar"
            ></img>
            <p style={{color:'rgb(59, 80, 77)', marginTop:'1rem'}}>Albaraa Ashraf</p>

          </div>
          <div
            style={{
              height: "15rem",
              width: "18rem",
              backgroundColor: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              borderRadius:'10px',
              alignItems:'center'
            }}
          >
            <img
              src="https://chingizpro.github.io/portfolio/img/person.png"
              style={{ width: "5rem", height: "5rem", marginTop: "4rem"  }}
              alt="avatar"
            ></img>
            <p style={{color:'rgb(59, 80, 77)', marginTop:'1rem'}}>Youssef Rashad</p>

          </div>
          <div
            style={{
              height: "15rem",
              width: "18rem",
              backgroundColor: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              borderRadius:'10px',
              alignItems:'center'
            }}
          >
            <img
              src="https://chingizpro.github.io/portfolio/img/person.png"
              style={{ width: "5rem", height: "5rem", marginTop: "4rem"  }}
              alt="avatar"
            ></img>
            <p style={{color:'rgb(59, 80, 77)', marginTop:'1rem'}}>Ziad Saed</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
