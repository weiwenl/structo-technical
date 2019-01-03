import React, {Fragment} from 'react';

const DataOutput = (props) => {
  const outputStyles = {
    listStyleType: 'none',
    textAlign: 'left'
  }
  return(
    <Fragment>
      <ul style={outputStyles}>
        <li>
          <p>Display repo name: <a href="#">Repo Link</a></p>
        </li>
        <li>
          <p>Display repo name: <a href="#">Repo Link</a></p>
        </li>
      </ul>
    </Fragment>
  );
}

export default DataOutput;
