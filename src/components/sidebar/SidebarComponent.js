import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: '5px solid #e8ecef',
        marginTop: 206,
        marginBottom: 16,
        opacity: 0.06
    },
    heading:{
        marginLeft: 38,
        color: "rgb(35 83 186)"
    },
    contactus:{
        textAlign: 'center'
    },
    contactheading:{
        border: '3px solid #ffffff',
        paddingRight: 18,
        paddingLeft: 18,
        paddingTop: 18,
        paddingBottom: 18,
        backgroundColor: '#ffffff',
        borderRadious: 5,
        marginLeft: 10,
        marginRight: 10
    },
   btnsecondary:{
     backgroundColor:'#f5f6f8 !important'
   }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
        <h6 className={classes.heading}>PATIENT</h6>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.tickets}
                title='Enquiries'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.tickets)}
            />
            <MenuItem
                id={SLUGS.contacts}
                title='Profiles'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.contacts)}
            />
            <MenuItem
                id={SLUGS.agents}
                title='Payments'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.agents)}
            />
            {/* <MenuItem
                id={SLUGS.articles}
                title='Articles'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.articles)}
            />
            <MenuItem
                id={SLUGS.subscription}
                title='Subscription'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.subscription)}
            /> */}
            <div className={classes.separator}></div>
            {/* <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            /> */}
            <div className={classes.contactheading}>
                <div className={classes.contactus}>
                    <h6>Need our help?</h6>
                     <Button  variant="secondary" style={{  backgroundColor: '#65cdb2',border:'none' }}>
                        Contact us
                        </Button>
                </div>
                </div>
           
            {/* <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} /> */}
        </Menu>
    );
}

export default SidebarComponent;
