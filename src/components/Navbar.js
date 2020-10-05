import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PortraitIcon from '@material-ui/icons/Portrait';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();

    return (
        <BottomNavigation
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction href="/#/about" label="About" icon={<PortraitIcon />} />
            <BottomNavigationAction href="/#/portfolio" label="Portfolio" icon={<ImportContactsIcon />} />
            <BottomNavigationAction href="/#/connect" label="Connect" icon={<AlternateEmailIcon />} />
        </BottomNavigation>
    );
}
