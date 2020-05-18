import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
  
const BasicCharInfo = ({ Name, Fandom, Description }) => (
    <Fragment>
      <div className="spacebelow">
        <dt>Character Name</dt>
        <dd>{Name}</dd>
        <dt>Fandom</dt>
        <dd>{Fandom}</dd>
        <dt>Description</dt>
        <dd>{Description}</dd>
      </div>
    </Fragment>
  );

  const AdditionalCharInfo = ({ DOB, Likes, Dislikes, MBTI, Ennegram, MoralAlignment }) => (
    <Fragment>
      <div className="spacebelow">
        <dt>Birthdate</dt>
        <dd>{DOB}</dd>
        <dt>Likes</dt>
        <dd>{Likes}</dd>
        <dt>Dislikes</dt>
        <dd>{Dislikes}</dd>
        <dt>MBTI</dt>
        <dd>{MBTI}</dd>
        <dt>Ennegram</dt>
        <dd>{Ennegram}</dd>
        <dt>MoralAlignment</dt>
        <dd>{MoralAlignment}</dd>
      </div>
    </Fragment>
  );

class MakerOutput extends React.Component {

    onPrevious = () => {
        const { onPrevious } = this.props;
        return onPrevious();
      };

    render() {
        const charData = this.props;
        const basics = get(charData, 'Basic', []);
        const additions = get(charData, 'Additions', []);


        return (
            <div className="App">

                <div className="verify">
          <h2 className="section">Basics</h2>
          {basics.map(basic => (
            <dl key="basic">
              <h4>Basic</h4>
              <BasicCharInfo {...basic} />
            </dl>
          ))}

          <br />

          <h2 className="section">Additional Info</h2>
          {additions.map((additions) => (
                        <dl key="additions">
                          <h4>Basic</h4>
                          <AdditionalCharInfo {...additions} />
                        </dl>
          ))}

          <br />


                <button type="button" onClick={this.onPrevious}>
                    Go Back
                </button>
             </div>  
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
    Description: null,
  };
  
  BasicCharInfo.propTypes = {
    Name: PropTypes.string,
    Fandom: PropTypes.string,
    Description: PropTypes.string,
  };
  
  // Default values for props
  AdditionalCharInfo.defaultProps = {
    DOB: null,
    Likes: null,
    Dislikes: null,
    MBTI: null,
    Ennegram: null,
    MoralAlignment: null,
  };

  AdditionalCharInfo.propTypes = {
    DOB: PropTypes.string,
    Likes: PropTypes.string,
    Dislikes: PropTypes.string,
    MBTI: PropTypes.string,
    Ennegram: PropTypes.string,
    MoralAlignment: PropTypes.string,
  };
  

  export default MakerOutput;