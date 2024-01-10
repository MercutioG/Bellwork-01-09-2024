import React from 'react';

const DynamicListContainer = ({ data, type, orientation }) => {
  function checkParams() {
    if (type === 'ul') {
      return (
        <ul className={orientation}>
          {data.map((item, index) => (
            <li className="gift-list" key={index}>
              <p>Name: {item.Name}</p>
              <p>Gift: {item.Gift}</p>
              <p>Value: ${item.Value}</p>
              <p>Weight: {item.Weight}lbs</p>
              <p>Conductive: {String(item.Conductive).toUpperCase()}</p>
            </li>
          ))}
        </ul>
      );
    } else if (type === 'ol') {
      return (
        <ol className={orientation}>
          {data.map((item, index) => (
            <li className="gift-list" key={index}>
              <p>Name: {item.Name}</p>
              <p>Gift: {item.Gift}</p>
              <p>Value: ${item.Value}</p>
              <p>Weight: {item.Weight}lbs</p>
              <p>Conductive: {String(item.Conductive).toUpperCase()}</p>
            </li>
          ))}
        </ol>
      );
    }
  }

  return <div>{checkParams()}</div>; // wrap in a div or any other container
};

export default DynamicListContainer;