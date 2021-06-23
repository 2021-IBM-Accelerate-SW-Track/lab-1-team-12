import React from "react";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import listData from './App';
//import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


export default function Todo(props) {
    const classes = useStyles();

    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id} type="checkbox" defaultChecked={props.completed} />
          <label className="todo-label" htmlFor={props.id}>
            {props.title}
          </label>
        </div>
        <div className="btn-group">
        <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<CreateIcon />}
            onClick={() => 
                //What happens when we click the edit button
                alert("hi!")
            }
        >
            Edit: "{props.title}"
        </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => 
                //What happens when we click the edit button
                alert("deleting!")
            }
        >
            Delete: "{props.title}"
        </Button>
        </div>
      </li>
    );
  }