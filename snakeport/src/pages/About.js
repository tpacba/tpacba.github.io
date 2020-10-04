import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import profile from "../assets/profile.jpg";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function About() {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:1100px)");

    const handleClose = (event) => {
        event.preventDefault();
        window.location.href = "/";
    };

    return (
        <div className={`about-page ${classes.root}`}>
            <Close className="close" onClick={handleClose}></Close>
            <Grid container spacing={3}>
                {matches ? (
                    <>
                        <Grid item xs={3}>
                            <img alt="profile" className="profile-image" src={profile}></img>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h3" gutterBottom>
                                About
              </Typography>
                            <Typography variant="body1" gutterBottom>
                                Hey, thanks for checking out my website! My name is Tristan
                                Pacba, and I'm web developer. I'm a graduate of UCLA's
                                Full-Stack Development Bootcamp Program and Azusa Pacific
                                University with a BS in Physics. I'm a skilled problem-solver
                                and have experience developing web applications using MERN stack
                                (MongoDB, ExpressJS, ReactJS, and NodeJS) that incorporates
                                back-end solutions with front-end design, like "SnakePort" which
                                is my take on combining the retro arcade game with my portfolio
                                website using <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a> design.
              </Typography>
                        </Grid>
                    </>
                ) : (
                        <>
                            <Grid item xs={12}>
                                <img alt="profile" className="profile-image" src={profile}></img>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" gutterBottom>
                                    About
              </Typography>
                                <Typography variant="body1" gutterBottom>
                                    My name is Tristan Pacba, and I'm web developer. I'm a graduate
                                    of UCLA's Full-Stack Development Bootcamp Program and Azusa
                                    Pacific University with a BS in Physics. I'm a skilled
                                    problem-solver and have experience developing web applications
                                    using MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS) that
                                    incorporates back-end solutions with front-end design, like
                                    "SnakePort" which is my take on combining the retro arcade game
                                    with my portfolio website.
              </Typography>
                            </Grid>
                        </>
                    )}
                <Grid item xs={12}>
                    My past experience include being a STEM educator, teaching Physics in
                    James A. Garfield High School and Mathematics in Los Angeles Christian
                    Academy. I transitioned to web development in the beginning of 2020
                    and now aspire to become a software engineer, building apps for
                    Educational Technology.
          <br></br>
                    <br></br>
          Just to highlight some of my work, I was able to engineer the backend
          functionalities in a recent team project, called "Smood". The app
          itself is a music player that curates the user's music according to
          their mood by fully integrating the Spotify Web API with ReactJS state
          and lifecycles. You can check out the source code for "Smood",
          "SnakePort", as well as my other projects in my{" "}
                    <a href="/portfolio">Portfolio</a> page.
        </Grid>
            </Grid>
        </div>
    );
}
