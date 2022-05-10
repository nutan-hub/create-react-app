import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import MiniCardComponent1 from 'components/cards/MiniCardComponent1';
import MiniCardComponent2 from 'components/cards/MiniCardComponent2';
import CreateProfileComponent from 'components/cards/CreateProfileComponent';
import { ProgressBar } from 'react-bootstrap';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: 30
    },
    heading:{
        marginLeft: 50
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
  
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
   
});

function DashboardComponent() {
    const classes = useStyles();
     const percentage = 66
    return (
        <Column>
        <h3 className={classes.heading}>My patient profiles</h3>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        day="2d ago"
                        day1="..."
                        image
                        imageName="Jonathan Smith"
                        title="Active"
                        percentage="45"
                    />
                    <MiniCardComponent1
                        className={classes.miniCardContainer}
                         day="15d ago"
                        day1="..."
                        imageName="Kate Smith"
                        title='Active'
                       percentage="81"
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent2
                        className={classes.miniCardContainer}
                        day="30d ago"
                        day1="..."
                        image
                        imageName="Alexandra Smith"
                        title='Inactive'
                        value='43'
                        percentage="21"
                    />
                    <CreateProfileComponent
                    className={classes.miniCardContainer}
                       
                    />
                </Row>
            </Row>
            <hr />
            <div>
            <div style={{ float:'left'}}>
            <label>Available patient profiles 3 of 5</label>
            <ProgressBar  now={percentage}  variant="info" style={{ height: "5px", margin:"10px 0px 10px 0px"}} />
            </div>
            <div style={{  float:'right'}}>
             <Button  variant="secondary" style={{  backgroundColor: '#ffffff',color:'#0d6efd',borderColor:'#f5f6f8' }}>
                        Upgrade
                        </Button>
            </div>
            </div>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
            </Row>
        </Column>
    );
}

export default DashboardComponent;
