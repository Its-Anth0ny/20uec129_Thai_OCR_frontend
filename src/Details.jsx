import { useState, React, useEffect } from 'react';
import axios from 'axios';
import './Details.css';


const Details = () => {
  const [res, setres] = useState([]);

  const handleDlt = (id) => {
    axios.delete(`https://thai-id-ocr-app-backend-20uec129.onrender.com/api/users/${id}`)
      .then(response => {
        console.log(`Deleted post with ID ${id}`);
        analyse();
      })
      .catch(error => {
        console.error(error);
      });
  }

  const analyse = async () => {
    try {
      const uri = `https://thai-id-ocr-app-backend-20uec129.onrender.com/api/users/`;
      const ans = await axios.get(uri);
      console.log(ans.data);
      setres(ans.data);
      
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    analyse();
  }, [])

  return (
    <div>
      <p className='title'>Details</p>
      <ul>
        <div className='parCard'>
          {res.map((element) => (
            <ul key={element._id}>
              <div className='card'>
                <p>Identification_Number : {element.identificationNumber}</p>
                <p>Name : {element.firstName}</p>
                <p>Last_Name : {element.lastName}</p>
                <p>Date_Of_Birth : {element.dateOfBirth}</p>
                <p>Date_Of_Issue : {element.dateOfIssue}</p>
                <p>Date_Of_Expiry : {element.dateOfExpiry}</p>
                <button type="button" className="btn" onClick={() => { handleDlt(element._id) }}>Remove</button>{ }
              </div>
            </ul>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Details;