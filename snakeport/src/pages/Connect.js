import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const handleClose = (event) => {
    event.preventDefault();
    window.location.href = "/";
};

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={`about-page ${classes.root}`}>
            <Close className="close close-port" onClick={handleClose}></Close>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Connect
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Let's connect on LinkedIn or Github! If you're a recruiter, please check out #OpenToWork to see if I'm a good fit for your team. You can learn more about me on the <a href="/about">About</a> page.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Accordion style={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "white", }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <strong>For Recruiters:</strong> #OpenToWork
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                <strong>Job titles:</strong> Full Stack Engineer · Software Engineer · Web
                                Developer · Web Programmer · Javascript Developer
                                <hr></hr><strong>Job locations:</strong> Los Angeles
                                Metropolitan Area · San Diego County, California · Orange
                                County, California · Open to relocating
                                <hr></hr><strong>Start date:</strong> Immediately, I’m actively applying
                                <hr></hr><strong>Job types:</strong> Full-time · Contract · Internship
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                
                <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography variant="body1">
                    <a href="mailto: tpacba@live.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}><EmailIcon style={{ fontSize: 40, marginRight: "10px", marginBottom: "-15px"}}></EmailIcon>tpacba@live.com</a>
                </Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography variant="body1">
                    <a href="https://www.linkedin.com/in/tristan-pacba/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}><LinkedInIcon style={{ fontSize: 40, marginRight: "10px", marginBottom: "-15px"}}></LinkedInIcon>https://www.linkedin.com/in/tristan-pacba/</a>
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography variant="body1">
                    <a href="https://github.com/tpacba" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}><GitHubIcon style={{ fontSize: 40, marginRight: "10px", marginBottom: "-15px"}}></GitHubIcon>https://github.com/tpacba</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
