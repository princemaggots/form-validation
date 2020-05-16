import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Addition from '../components/Addition.js';
import Basic from '../components/Basic.js';
import useUpdatedArray from '../hooks/useUpdatedArray';

const Maker = ({ data, onNext, onUpdate }) => {
  const { Basic: basics = [{}] } = data;
  const { Addition: additions = [{}] } = data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const basicHooks = useUpdatedArray(basics, 'Basics', onUpdate, {
    Ids: [{}],
  });  
  const updateBasic = basicHooks[1];
  const additionHooks = useUpdatedArray(additions, 'Additions', onUpdate, {
    Ids: [{}],
  });
  const updateAddition = additionHooks[1];


  return (
    <div className="App">
        {basics.map((basic, i) => (
        <Basic key={i} index={i} data={basic} onUpdate={updateBasic[i]} />
      ))}
      <br />
      
        {additions.map((addition, i) => (
        <Addition key={i} index={i} data={addition} onUpdate={updateAddition[i]} />
      ))}

      <br />
          <div className="rightbutton"> <button type="button" onClick={onNext}>
        Submit
      </button></div>
     
      
    </div>
  );
  };

Maker.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  data: PropTypes.exact({
    Name: PropTypes.string,
    Fandom: PropTypes.string,
    Category: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
  onNext: PropTypes.func,
};

Maker.defaultProps = {
  onNext: () => {},
  data: null,
};

export default Maker;
