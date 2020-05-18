import React from 'react';
import { cleanCharData, getCharDataFromStorage } from '../utils/charData.js';
import Maker from './Maker.js';
import MakerOutput from './MakerOutput.js';


const pageOrder = [Maker, MakerOutput];

class Form extends React.Component {
    constructor() {
      super();
      this.state = {
      currentPageIndex: 0,
      charData: getCharDataFromStorage(),
      change: 0,
      };
       this.next = this.next.bind(this);
       this.previous = this.previous.bind(this);
   }

   onUpdate = (field, value) => {
    const { charData: oldCharData } = this.state;
    const charData = {
      ...oldCharData,
      [field]: value,
    };
    localStorage.setItem('charData', JSON.stringify(charData));
    this.setState({
      charData,
    });
  };


  next(...fields) {
    const { charData, currentPageIndex } = this.state;
    fields.forEach(field => {
      if (field in charData) {
        charData[field] = cleanCharData(charData[field]);
      }
    });

    if (currentPageIndex < pageOrder.length - 1) {
      const state = {
        charData,
        currentPageIndex: currentPageIndex + 1,
      };

      this.setState(state);
    }
  }


  previous(...fields) {
    const { charData, currentPageIndex } = this.state;
    if (currentPageIndex > 0) {
      fields.forEach(field => {
        if (field in charData) {
          charData[field] = cleanCharData(charData[field]);
        }
      });

      const state = {
        charData,
        currentPageIndex: currentPageIndex - 1,
      };
      this.setState(state);
    }
  }

  // jump(pageIndex) {
  //   return () => {
  //     const state = {
  //       currentPageIndex: 0,
  //     };
  //     this.setState(state);
  //   };
  // }

  update() {
    const { change } = this.state;
    const state = {
      charData: getCharDataFromStorage(),
      change: change + 1,
    };
    this.setState(state);
  }

  render() {
    const { currentPageIndex, charData } = this.state;

    const CurrentPage = pageOrder[currentPageIndex];
    return (
      <div className="page">
        <CurrentPage
         charData={charData}
         data={charData}
         onNext={this.next}
         onPrevious={this.previous}
        //  onJump={this.jump}
        //  onImport={this.import}
        //  onExport={LifeDocsOrder.export}
        //  onSend={LifeDocsOrder.send}
         onClose={this.update}
         onUpdate={this.onUpdate}
         onClear={this.onClear}
        />
      </div>
    );
  }
}

export default Form;