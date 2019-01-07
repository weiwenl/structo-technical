import React, {Fragment} from 'react';

const DataOutput = (props) => {
  const outputStyles = {
    listStyleType: 'none',
    textAlign: 'left'
  }

  return(
      <Fragment>
        <ul style={outputStyles}>
        {props.data?
          props.data.map((item, index) => (
          <li key={index}>
            <a href={item.html_url} target="_blank" rel='noopener noreferrer' >{item.name}</a>
          </li>
        )) : null
        }
      </ul>
      </Fragment>
  );
}

export default DataOutput;
