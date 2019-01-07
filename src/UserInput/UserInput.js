import React from 'react'

const UserInput = (props) => {

  const inputStyles = {
    border: '2px solid #ccc'
  }
  return(
    <div>
      <input
        type="search"
        value={props.value}
        style={inputStyles}
        placeholder="Type Something"
        onChange={props.changed} />
    </div>
  );
}

export default UserInput;
