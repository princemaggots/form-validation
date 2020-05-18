import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { subDays } from 'date-fns';
import '../App.css';
import InputField from'./InputField.js';
import InputFieldDate from './InputFieldDate';
import useUpdated from '../hooks/useUpdated.js';
import useUpdatedDate from '../hooks/useUpdatedDate';
import useValidate from '../hooks/useValidate.js';
import nameValidator from '../validators/nameValidator.js';
import fanValidator from '../validators/fanValidator.js';
import mbtiValidator from '../validators/mbtiValidator.js';
import minimize from '../images/minimize.png';
import maximize from '../images/maximize.png';

const Addition = ({ data, onUpdate }) => {
    const [isOpen, setOpen] = useState(true);
    const onMaximize = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    const onMinimize = useCallback (() => {
        setOpen(false);
    }, [setOpen]);
    const callbackDOB = useUpdatedDate('DOB', onUpdate);
    const defaultDate = new Date();
    const callbackLikes = useUpdated('Likes', onUpdate);
    const [likesValid, validateLikes] = useValidate(fanValidator);
    const callbackDislikes = useUpdated('Dislikes', onUpdate);
    const [dislikesValid, validateDislikes] = useValidate(fanValidator);
    const callbackMBTI = useUpdated('MBTI', onUpdate);
    const [mbtiValid, validateMBTI] = useValidate(mbtiValidator);
    const callbackEnnegram = useUpdated('Ennegram', onUpdate);
    const [ennegramValid, validateEnnegram] = useValidate(nameValidator);
    const callbackMoralAlignment = useUpdated('MoralAlignment', onUpdate);
    const [moralAlignmentValid, validateMoralAlignment] = useValidate(nameValidator);


    return (
        <div className="additional">
            <div className="titlebar">
            <h2>Additional Information</h2>
                <img 
                    className={isOpen ? 'minimize' : 'maximize'}
                    src={isOpen ? minimize : maximize}
                    alt={isOpen ? '-' : '+'}
                    onClick={isOpen ? onMinimize : onMaximize}
                />
            </div>
            
            {isOpen ? (
                <React.Fragment>

                    <InputFieldDate
                        label="DOB:"
                        selected={new Date(get(data, 'DOB', defaultDate.setFullYear(1980)))}
                        onChange={callbackDOB}
                        dropdownMode="select"
                        minDate={new Date(1900, 1, 1)}
                        maxDate={subDays(new Date(), 6574)}
                    />

                    {likesValid === 'invalid' && (
                    <React.Fragment>
                        <i className="fas fa-exclamation-triangle"></i>
                        <div className="validator-msg">  Likes cannot include special characters (aside from "()" and punctuation)</div>
                    </React.Fragment>
                    )}
                    <InputField
                    label="Likes"
                    maxLength="100"
                    placeholder=""
                    value={get(data, 'Likes')}
                    onChange={callbackLikes}
                    onBlur={validateLikes}
                    />

                    {dislikesValid === 'invalid' && (
                    <React.Fragment>
                        <i className="fas fa-exclamation-triangle"></i>
                        <div className="validator-msg">  Likes cannot include special characters (aside from "()" and punctuation)</div>
                    </React.Fragment>
                    )}
                    <InputField
                    label="Dislikes"
                    maxLength="100"
                    placeholder=""
                    value={get(data, 'Dislikes')}
                    onChange={callbackDislikes}
                    onBlur={validateDislikes}
                    />

                    {mbtiValid === 'invalid' && (
                    <React.Fragment>
                        <i className="fas fa-exclamation-triangle"></i>
                        <div className="validator-msg">  Entry must be in MBTI format. (ex: INTP)</div>
                    </React.Fragment>
                    )}
                    <InputField
                    label="MBTI"
                    maxLength="4"
                    placeholder=""
                    value={get(data, 'MBTI')}
                    onChange={callbackMBTI}
                    onBlur={validateMBTI}
                    />

                    {ennegramValid === 'invalid' && (
                    <React.Fragment>
                        <i className="fas fa-exclamation-triangle"></i>
                        <div className="validator-msg">  Ennegram cannot contain special characters.</div>
                    </React.Fragment>
                    )}
                    <InputField
                    label="Ennegram"
                    maxLength="50"
                    placeholder=""
                    value={get(data, 'Ennegram')}
                    onChange={callbackEnnegram}
                    onBlur={validateEnnegram}
                    />

                    {moralAlignmentValid === 'invalid' && (
                    <React.Fragment>
                        <i className="fas fa-exclamation-triangle"></i>
                        <div className="validator-msg">  Alignment cannot contain special characters.</div>
                    </React.Fragment>
                    )}
                    <InputField
                    label="Moral Alignment"
                    maxLength="50"
                    placeholder=""
                    value={get(data, 'MoralAlignment')}
                    onChange={callbackMoralAlignment}
                    onBlur={validateMoralAlignment}
                    />
                </React.Fragment>
            ) : (
                <div className="likes">{get(data, 'Likes')}</div>
            )}
        </div>
    );
};

Addition.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    data: PropTypes.exact({
      DOB: PropTypes.string,
      Likes: PropTypes.string,
      Dislikes: PropTypes.string,
      MBTI: PropTypes.string,
      Ennegram: PropTypes.string,
      MoralAlignment: PropTypes.string,
    }).isRequired,
  };

  export default Addition;