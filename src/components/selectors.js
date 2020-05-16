import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import { colourOptions } from './options.js';



export default class CreatableMulti extends Component<*, State> {
    // constructor(props) {
    //     super(props);
    //     (prefix ?: 'react-select',
    //         className?: 'react-select-container') => 'react-select'
    //   }

  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect 
        isMulti
        align="left"
        onChange={this.handleChange}
        options={colourOptions}
      />    
    );
  }
}