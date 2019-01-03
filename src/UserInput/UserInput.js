import React from 'react'

const UserInput = (props) => {

  const inputStyles = {
    border: '2px solid #ccc'
  }
  return(
    <div>
      <input type="text" style={inputStyles} />
    </div>
  );
}

export default UserInput;
