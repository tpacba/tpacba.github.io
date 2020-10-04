import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    },
}));

export default function(props) {
    const classes = useStyles();

    return (
        <Box className="instructions" left="5%" position="relative" top="20%" width={350}>
            <Typography variant="h5" gutterBottom>
                Hey, my name is Tristan Pacba. I'm a web developer, and welcome to my Portfolio!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Start the game to check out the rest of the pages.
            </Typography>
            <Box className={classes.root}>
                <Button onClick={props.startGame} variant="contained" color="secondary">
                    Start Game
                </Button>
            </Box>
        </Box>
    );
}
