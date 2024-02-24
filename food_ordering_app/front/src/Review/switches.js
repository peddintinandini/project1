import React, { useState } from 'react';
import {FormControlLabel, Switch } from '@mui/material';
import styled from 'styled-components';

const FormGroup = styled.div`
    FormControlLabel{
      float:left;
    }
    label{
      color:white;
      font-family:cursive;
    }
    `
const Switches = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const handleSwitch1Toggle = () => {
    setSwitch1(!switch1);
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(false);
  };
  const handleSwitch2Toggle = () => {
    setSwitch2(!switch2);
    setSwitch1(false);
    setSwitch3(false);
    setSwitch4(false);
  };
  const handleSwitch3Toggle = () => {
    setSwitch3(!switch3);
    setSwitch1(false);
    setSwitch2(false);
    setSwitch4(false);
  };
  const handleSwitch4Toggle = () => {
    setSwitch4(!switch4);
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  };
  return (
    <FormGroup>
        &emsp;&emsp;
      <FormControlLabel
        control={<Switch checked={switch1} onChange={handleSwitch1Toggle} color="success"/>}
        label="Excellent"
      />&emsp;&emsp;
      <FormControlLabel
        control={<Switch checked={switch2} onChange={handleSwitch2Toggle} color="secondary"/>}
        label="Good"
      />&emsp;&emsp;
      <FormControlLabel
        control={<Switch checked={switch3} onChange={handleSwitch3Toggle} color="primary"/>}
        label="Average"
      />&emsp;&emsp;
      <FormControlLabel
        control={<Switch checked={switch4} onChange={handleSwitch4Toggle} color="warning"/>}
        label="Dissatisfied"
      />
    </FormGroup>
  );
};
export default Switches