import React, { useState, useEffect } from 'react';

const Sum = () => {
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/Employee') // Assuming the JSON data is in a file named data.json
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setDesignation(data[0].designation);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <p>Designation: {designation}</p>
    </div>
  );
};

export default Sum;
