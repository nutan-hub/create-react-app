import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../36.png';
import plus from '../../plus.jpg';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        maxWidth: 350,
        padding: '16px 32px 16px 32px',
        '&:hover': {
            borderColor: theme.color.lightBlue,
            '&:nth-child(n) > span': {
                color: theme.color.lightBlue
            }
        }
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue2,
        marginBottom: 12,
        textAlign: 'center'
    },
    day: {
        
        color: theme.color.grayishBlue2,
        marginBottom: 12,
        width: 70,
        textAlign: 'left',
        float: 'left'
    },
    day1: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue2,
        marginBottom: 12,
        width: 30,
        textAlign: 'right',
        float: 'right'
    },
    image:{
        height: 25,
        width: 25,
        backgroundColor: '#bbb',
        borderRadius: 50,
        display: 'inlineBlock'
    },
    imageName:{
        
    },
    title:{
        marginTop: 10
    },
    progress:{
        height: 2
    }
   
}));

function CreateProfileComponent({ className = '', day , title,day1,imageName,profileStatus,percentage}) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
   // const percentage = 73
    return (
        <Column flexGrow={1} className={composedClassName}>
       <div style={{  textAlign: 'center',margin:'auto'}}>
       <span style={{fontSize:80, color: "#0dcaf0"}}>+</span><br></br>

       <span>Create new patient profile</span>
       </div>
       
        </Column>

    );
}

export default CreateProfileComponent;
