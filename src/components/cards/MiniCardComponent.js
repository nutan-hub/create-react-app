import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../36.png';
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
    progress1:{
        height: 0.3
    },
    progressbar:{
        backgroundColor: "red"
    },
    progress: {
        height:0.3
    }

   
}));

function MiniCardComponent({ className = '', day , title,day1,imageName,profileStatus,percentage,progress1,progress}) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
   // const percentage = 73
    return (
        <Column flexGrow={1} className={composedClassName}>
        <div>
            <span className={classes.day}>{day}</span>
            <span className={classes.day1}>{day1}</span>
        </div>    
        <div className="logo" style={{display:"flex",justifyContent: "center", marginBottom:30}}>
                <img src={logo} style={{textAlign:"center"}} width="70" height="70" />
         
        </div>
         <span className={classes.imageName}>{imageName}</span>
          <div className={classes.title}>{title}</div>
        <div className={progress}>
                <ProgressBar className="progressbar" now={percentage} style={{ height: "5px", margin:"10px 0px 10px 0px"}}/>
            <span>{`Storage ${percentage}%`}</span>
        </div>
        
       MiniCardComponent
        </Column>

    );
}

export default MiniCardComponent;
