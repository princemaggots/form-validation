import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import InputField from'./InputField.js';
import { get } from 'lodash';
import useUpdated from './hooks/useUpdated.js';
import useValidate from './hooks/useValidate.js';
import nameValidator from './validators/nameValidator.js';
import fanValidator from './validators/fanValidator.js';


const App = ({ data, onUpdate }) => {

  const callbackName = useUpdated('Name', onUpdate);
  const [nameValid, validateName] = useValidate(nameValidator);
  const [fandomValid, validateFandom] = useValidate(fanValidator);

  return (
    <div className="page">
    <div className="header">

      <div className="logo">
      <h1> Bare Bones</h1>
      </div>

       <div className="nav">
          <div className="support">
          <a href="#">donate</a>
          </div>
          <div className="post">
            <a href="#">post</a>
          </div> 
          <div className="profile">
              <div className="proimg">
              <img src="https://via.placeholder.com/30"></img>
              </div>  
              <div className="txt">
              <p> Profile </p>
            </div>
          </div>
      </div> 
    </div>
    <div className="App">
      <h2> Basics</h2>
           {nameValid === 'invalid' && (
             <React.Fragment>
               <i className="fas fa-exclamation-triangle"></i>
               <div className="validator-msg"> Character name can only include letters, numbers, and spaces. </div>
               </React.Fragment>
           )}
      <InputField
        label="Character Name"
        maxLength="100"
        placeholder="required"
        value={get(data, 'Name')}
        onChange={callbackName}
        onBlur={validateName}
        />
          {fandomValid === 'invalid' && (
             <React.Fragment>
               <i className="fas fa-exclamation-triangle"></i>
               <div className="validator-msg"> Fandom titles cannot include special characters (aside from "()" and puncuation)</div>
               </React.Fragment>
           )}
      <InputField 
        label="Fandom"
        maxLength="100"
        placeholder="required"
        required
        // value={get(data, 'Name')}
        // onChange={callbackName}
        // onBlur={validateName}
        />

      {/*is a dropdown menu, change later*/}
      <InputField 
        label="Category"
        maxLength="100"
        placeholder=""
        required
        // value={get(data, 'Name')}
        // onChange={callbackName}
        // onBlur={validateName}
        />

      {/*add tag field here*/}

      {/*make own for longer*/}
      <InputField 
        label="Description"
        maxLength="1025"
        placeholder="required"
        required
        // value={get(data, 'Name')}
        // onChange={callbackName}
        // onBlur={validateName}
        />
      
        <h2>Additional Information</h2>
           {/* make Open */}
      <InputField 
        // Date!! change type
        label="Birthdate"
        maxLength="100"
        placeholder="required"
        required
        // value={get(data, 'Name')}
        // onChange={callbackName}
        // onBlur={validateName}
        />
      


      
    </div>
    </div>
  );
  };

App.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  data: PropTypes.exact({
    Name: PropTypes.string,
    Fandom: PropTypes.string,
    Category: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};

export default App;
