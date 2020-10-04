import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function() {
    return (
        <div>
        <Typography className="about-wall" variant="body2" gutterBottom>Hit this wall to see the <strong>About</strong> page</Typography>
        <Typography className="portfolio-wall" variant="body2" gutterBottom>Hit this wall to see the <strong>Portfolio</strong> page</Typography>
        <Typography className="contact-wall" variant="body2" gutterBottom>Hit this wall to see the <strong>Connect</strong> page</Typography>
        <Typography className="play-wall" variant="body2" gutterBottom>...Or just keep playing. That's cool too.</Typography>
        </div>
    )
}