import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import '../App.css';
import InputField from'./InputField.js';
import useUpdated from '../hooks/useUpdated.js';
import useValidate from '../hooks/useValidate.js';
import nameValidator from '../validators/nameValidator.js';
import fanValidator from '../validators/fanValidator.js';
import descValidator from '../validators/descValidator.js';
// import Select from 'react-select';
// import { colourOptions } from './options.js';
// import CreatableSelect from './selectors.js';

const Basic = ({ data, onUpdate }) => {
  const callbackName = useUpdated('Name', onUpdate);
  const [nameValid, validateName] = useValidate(nameValidator);
  const callbackFandom = useUpdated('Fandom', onUpdate);
  const [fandomValid, validateFandom] = useValidate(fanValidator);
  const callbackDescription = useUpdated('Description', onUpdate);
  const [descriptionValid, validateDescription] = useValidate(descValidator);


  return (
    <div className="form">
      <h2 className="titlebasic"> Basics</h2>
           {nameValid === 'invalid' && (
             <React.Fragment>
               <i className="fas fa-exclamation-triangle"></i>
               <div className="validator-msg"> Character name can only include letters, numbers, and spaces. </div>
               </React.Fragment>
           )}
      <InputField
        label="Name"
        maxLength="100"
        placeholder="required"
        value={get(data, 'Name')}
        onChange={callbackName}
        onBlur={validateName}
        />
          {fandomValid === 'invalid' && (
             <React.Fragment>
               <i className="fas fa-exclamation-triangle"></i>
               <div className="validator-msg"> Fandom titles cannot include special characters (aside from "()" and punctuation)</div>
               </React.Fragment>
           )}
      <InputField
        label="Fandom"
        maxLength="100"
        placeholder="required"
        value={get(data, 'Fandom')}
        onChange={callbackFandom}
        onBlur={validateFandom}
        />

      {/*change ClassName or style.*/}

      {/* <CreatableSelect
        label="Category"
        options={colourOptions}
        />
        <label> Tags </label>
        <CreatableSelect
        options={colourOptions}
      /> */}


      {/*make longer*/}
      {descriptionValid === 'invalid' && (
             <React.Fragment>
               <i className="fas fa-exclamation-triangle"></i>
               <div className="validator-msg"> Description cannot contain special characters aside from punctuation.</div>
               </React.Fragment>
           )}
      <InputField 
        label="Description"
        maxLength="1025"
        placeholder="required"
        required
        value={get(data, 'Description')}
        onChange={callbackDescription}
        onBlur={validateDescription}
        />
    </div>
  );
  };

Basic.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  data: PropTypes.exact({
    Name: PropTypes.string,
    Fandom: PropTypes.string,
    Category: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};


export default Basic;
