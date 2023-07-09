import React, { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";

// css
import "./edit.css";

import { useUser } from "../../../../Context/UserContext";
import { db } from "../../../../firebase-config";
import { useStorage } from "../../../../Context/StorageContext";

import LoadingScreen from "../../../../components/LoadingScreen/LoadingScreen";

function Edit() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState();

  const {
    show: [, setShowBtn],
  } = useOutletContext();

  const { theUser } = useUser();

  const { uploadFile } = useStorage();
  const { downloadImg } = useStorage();

  function updateProfile(data) {
    const docref = doc(db, "Users", theUser.id);
    return setDoc(docref, data, { merge: true }); //  { merge: true } => enable updating without overWrite
  }

  async function submitEditHandller(e) {
    e.preventDefault();

    setLoading(true);

    const formData = document.querySelector("#formData").elements;

    let person = {
      fullName: formData.fullName.value,
      phoneNumber: formData.phone.value,
    };

    let file = formData.updateImg.files;
    let imagePath = `Images/${theUser.uid}/ProfileImgs/${file[0].name}`;

    if (file.length !== 0) {
      file = file[0];

      setText("uploading");
      await uploadFile(imagePath, file);

      await downloadImg(imagePath).then((downloadURL) => {
        person = { ...person, ProfileImg: downloadURL };
      });
    }

    setText("updating");
    await updateProfile(person).then(() => {
      setLoading(false);
      window.location.reload();
    });
  }

  useEffect(() => {
    setShowBtn(false);
    return () => {
      setShowBtn(true);
    };
  });

  return (
    <>
      <LoadingScreen show={loading} title={text} textColor="#FFF" />

      {/*  the main section */}
      <section className="get-in-touch">
        {/*  the main container */}
        <form
          className="contact-form row "
          id="formData"
          onSubmit={submitEditHandller}
        >
          {/*  the first col */}
          <div className="col-md-12 mb-3">
            <div className="row">
              {/*  the COL[1][1] */}

              {/*  the COL[1][2] */}
              <div className="col-md-6">
                <div className="form-field ">
                  <input
                    id="fullName"
                    className="input-text js-input"
                    type="text"
                    defaultValue={theUser && theUser.fullName}
                  />
                  <label className="label" htmlFor="fullName">
                    Full Name
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*  the secound section */}
          <div className="col-md-12 mb-3">
            <div className="row">
              <div className="col-md-6">
                <div className="form-field">
                  <input
                    id="email"
                    className="input-text js-input disabled"
                    type="email"
                    defaultValue={theUser && theUser.email}
                    disabled
                  />
                  <label className="label" htmlFor="email">
                    E-mail
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*  the 3rd section */}
          <div className="form-field col-lg-6">
            <input
              id="phone"
              className="input-text js-input"
              type="text"
              defaultValue={theUser && theUser.phoneNumber}
            />
            <label className="label mx-1" htmlFor="phone">
              Phone
            </label>
          </div>

          <div className="form-field col-lg-6 d-flex justify-content-center">
            <label
              htmlFor="updateImg"
              className="btn update-btn"
              role={"button"}
            >
              Change Profile Image
            </label>
            <input type={"file"} id="updateImg" hidden />
          </div>

          <div className="form-field col-lg-12 d-flex justify-content-center">
            <NavLink to={"/Profile/Info"}>
              <button className="submit-btn mx-md-3">cancel</button>
            </NavLink>
            <input
              className="submit-btn"
              type="submit"
              value="Update"
              id="submit-btn"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Edit;
