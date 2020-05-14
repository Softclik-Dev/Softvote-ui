import React from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { textBoxStyle } from '../../config/styles';

const styles = makeStyles(textBoxStyle);

function TextBox(props) {
  const classes = styles();
  return (
    <div className={classes.container}>
      <label for={props.name || props.id} className={classes.label}>
        {props.label}
      </label>
      <input
        value={props.value}
        name={props.name}
        id={props.id}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={classes.input}
      />
      <span className={classes.helper}>{props.helper}</span>
    </div>
  );
}

export default TextBox;
