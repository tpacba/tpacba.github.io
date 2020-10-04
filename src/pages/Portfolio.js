import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import tinderforrestaurants from "../assets/tinderforrestaurants.png";
import cowabunga from "../assets/cowabunga-demo.png";
import smood from "../assets/smood.png";
import snakeport from "../assets/snakport.png";
import fitnesstracker from "../assets/fitnesstracker.png";
import userdirectory from "../assets/directory.png";
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

const tileData = [
    {
        img: smood,
        title: "Smood",
        description:
            `Smood is a music player that chooses music for the user depending on their mood. 
            It integrates Spotify Web API's functionalities with ReactJS states and lifecycles to create responsive searches and commands. 
            My work came mainly from back-end development, like deploying the OAuth Server to access the API, setting up functions for the music player, and develop components to render varying search results.`,
        links: {
            github: "https://github.com/tpacba/project-smood",
            website: "",
        },
        tags: ["ReactJS", "Heroku", "APIs", "OAuth", "NodeJS"]
    },
    {
        img: snakeport,
        title: "SnakePort",
        description:
            `SnakePort is my take on creating an interactive portfolio as a web developer.
            The retro arcade Snake game is coded entirely with ReactJS thanks to lifecycle methods (i.e. componentDidMount & componentDidUpdate).
            The pages were designed using the Material-UI framework from grid components to icons.`,
        links: {
            github: "https://github.com/tpacba/tpacba.github.io.git",
            website: "https://tpacba.github.io",
        },
        tags: ["ReactJS", "Material-UI", "Javascript", "React-Router"]
    },
    {
        img: tinderforrestaurants,
        title: "Tinder For Restaurants",
        description:
            `Tinder For Restaurants is an app just like Tinder but for choosing restaurants.
            By using the familiar Tinder UI of swiping to choose or eliminate, groups of users can choose a single restaurant by rounds of elimination.
            The app uses Yelp API to create restaurant suggestions and MySQL database to save and render restaurant data in real-time.
            I was able to design the website theme using Figma and Bootstrap to create a mobile-responsive app.`,
        links: {
            github: "https://github.com/tpacba/tinderforrestaurants.git",
            website: "https://vast-lowlands-43566.herokuapp.com/",
        },
        tags: ["MySQL", "Sequilize ORM", "PassportJS", "Figma", "ExpressJS"]
    },
    {
        img: cowabunga,
        title: "Cowabunga Surfing App",
        description:
            `Cowabunga was my first developed web application. It's a beach landmark locater that integrates various API's such as Google Maps, Coastal Commission, Open Weather, and StormGlass
        to render data about traffic, weather, distance, and amenities. My contribution came from back-end development, creating API calls and using Local Storage as an intro to databases.`,
        links: {
            github: "https://github.com/FuDoggy/project1",
            website: "https://fudoggy.github.io/project1/",
        },
        tags: ["APIs", "Bootstrap", "jQuery", "Git", "HTML & CSS"]
    },
    {
        img: fitnesstracker,
        title: "Workout Tracker",
        description: 
        `Workout Tracker  allows users to view, create, and track daily workouts. Users can log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of the exercise or, if the exercise is a cardio exercise, track the distance traveled. 
        The app uses MongoDB with a Mongoose schema and handles routes with Express.`,
        links: {
            github: "https://github.com/tpacba/homework17-workout-tracker",
            website: "https://pacific-anchorage-84827.herokuapp.com/",
        },
        tags: ["MongoDB", "Mongoose", "Express", "AJAX"]
    },
    {
        img: userdirectory,
        title: "User Directory",
        description: `The application allows users to be able to view non-sensitive data at once, like an employee directory. 
        The app uses React to break up the UI into components, to manage component state, and to respond to user events. 
        The app also uses Regex (or Regular Expression) to determine string matches, despite case and space discrepancies.`,
        links: {
            github: "https://github.com/tpacba/homework19-userdirectory",
            website: "https://tpacba.github.io/homework19-userdirectory/",
        },
        tags: ["ReactJS", "Bootstrap", "Regex", "APIs"]
    },
];

export default function TitlebarGridList() {
    const [tile, setTile] = useState(tileData[0]);
    const classes = useStyles();

    const openInfo = (event) => {
        event.preventDefault();
        setTile(JSON.parse(event.currentTarget.dataset.value));
    };

    const handleClose = (event) => {
        event.preventDefault();
        window.location.href = "/";
    };

    return (
        <div className={`portfolio-page ${classes.root}`}>
            <Close className="close close-port" onClick={handleClose}></Close>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Portfolio
          </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                        Scroll down to check out some of my recent projects! Link to site and open-source
                        Github are always provided. <br></br>Visit the <a href="/#/connect">Connect Page</a> to connect with me through Github, LinkedIn, and other socials.
          </Typography>
                </Grid>
                <Grid item xs={4}>
                    <GridList cellHeight={180} className={classes.gridList} cols={1} style={{border: "1px solid lightGrey"}}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.title}`}
                                            className={classes.icon}
                                            onClick={openInfo}
                                            data-value={JSON.stringify({
                                                img: tile.img,
                                                title: tile.title,
                                                description: tile.description,
                                                links: {
                                                    github: tile.links.github,
                                                    website: tile.links.website,
                                                },
                                                tags: tile.tags
                                            })}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={8} style={{ paddingLeft: "20px" }}>
                    <Paper variant="outlined" style={{ padding: "20px", backgroundColor: "whitesmoke" }}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                {tile.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                {tile.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="overline" display="block" gutterBottom>
                                Site: <a href={tile.links.website} target="_blank" rel="noopener noreferrer">{tile.links.website}</a>
                                <br></br>
                            Github: <a href={tile.links.github} target="_blank" rel="noopener noreferrer">{tile.links.github}</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption"><em>Screenshots:</em> <br></br></Typography>
                            <img alt={tile.title} src={tile.img} style={{ height: "100px" }} />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: "10px"}}>
                            {tile.tags.map(item => (
                                <Chip label={item} style={{margin: "2px", color: "white", background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}/>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
