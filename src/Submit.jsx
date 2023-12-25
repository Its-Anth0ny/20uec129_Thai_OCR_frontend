import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Submit.css';

const Submit = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [iden, setIden] = useState();
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [doi, setDoi] = useState();
  const [doe, setDoe] = useState();
  const [okstate, setOkState] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload file
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post('http://localhost:5000/upload', formData)
      .then(res => {
        setImage(res.data.image);
        setId(res.data._id);
      })
      .catch(err => console.log(err));
  };

  // Analyse uploaded file
  const analyse = async () => {
    try {
      const uri = `http://localhost:5000/api/users/${id}`;
      const res = await axios.get(uri);

      setIden(res.data.identificationNumber);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setDob(res.data.dateOfBirth);
      setDoi(res.data.dateOfIssue);
      setDoe(res.data.dateOfExpiry);
      setOkState("OK");

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <>
      <div className="upload">
        <input type="file" onChange={handleFileChange} />
        <button type="button" className="btn2" onClick={upload}>Submit</button>
        <button type="button" className="btn" onClick={analyse}>Output</button>
      </div>

      <div className="par">
        <div className="img">
          <img src={'http://localhost:5000/Images/' + image} alt="" />
        </div>
        <div className="items">
          {okstate === "OK" ? (
            <div>
              <p>Identification Number : <span>{iden}</span></p>
              <p>Name : <span>{firstName}</span></p>
              <p>Last Name : <span>{lastName}</span></p>
              <p>Date Of Birth : <span>{dob}</span></p>
              <p>Date Of Issue : <span>{doi}</span></p>
              <p>Date Of Expiry : <span>{doe}</span></p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Submit;
