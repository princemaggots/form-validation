import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
  
const BasicCharInfo = ({ Name, Fandom, DOB }) => (
        <Fragment>
            <div className="checker">
                <dt>Name</dt>
                <dd>{Name}</dd>
                <dt> Fandom</dt>
                <dd> {Fandom} </dd>
                <dt>Birthdate</dt>
                <dd>{DOB}</dd>
            </div>
        </Fragment>
    );

class MakerOutput extends React.Component {
    render() {
        const charData = this.props;
        const charmaker = get(charData, 'Maker', []);

        return (
            <div className="content">

                <div className="showcase">
                    <h2 className="char">Character</h2>
                    {charmaker.map(maker => (
                        <dl key="maker">
                            <BasicCharInfo {...maker} />
                        </dl>
                    ))}
                </div>

                <button type="button" onClick={this.onPrevious}>
                    Go Back
                </button>
             </div>    
        );
    }
}

  
MakerOutput.propTypes = {
    onPrevious: PropTypes.func, 
    onExport: PropTypes.func,
    charData: PropTypes.object,
};
  
  MakerOutput.defaultProps = {
    onPrevious: () => {},
    onExport: () => {},
    charData: null,
  };

  
  // Default values for props
  BasicCharInfo.defaultProps = {
    Name: null,
    Fandom: null,
    DOB: null,
  };
  
  BasicCharInfo.propTypes = {
    Name: PropTypes.string,
    Fandom: PropTypes.string,
    DOB: PropTypes.string,
  };
  
  // Default values for props
  BasicCharInfo.defaultProps = {
    Name: null,
    Fandom: null,
    DOB: null,
  };
  

  export default MakerOutput;