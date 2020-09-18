import React, { useRef, useState } from "react";
import "../styles/Projects.css"

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// COMPONENTS
import MadMax from "../images/madmax.jpg"
import NetflixHD from "../images/Netflixwallpaper.jpg"
import Garden from "../images/gardenwallpaper.jpg"
import WhatsApp from "../images/whatsappimage.jpg"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

function Projects() {
  const classes = useStyles();

 


  return (


    <div className="projects-page">
        <div className="project-cards">
            <div>
            <Card className={classes.root}>
                <a href="https://madattheworld.netlify.app/" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={MadMax}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "Changa", color: "black"}}>
                        Mad At The World ™
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This project displays a fully functional CRUD App that I created using React, Redux and Node.js / Express. With this app my client wanted me to build him something that would allow him to sell his products and just upload them when he felt necessary, I even made him a client private upload server for his art. You can add items to the cart, delete, and increase / decrease the quantity of and item. My favorite part of this build was implementing Stripe.js so my client could recieve payments from the just an app on his phone. Stripe allows a person to recieve, refund and check statements for free and I personally love it. (#. 4242 4242 4242  / Any Date in the future)
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
                <CardActions>
                    <a href="https://github.com/arkstreett/madattheworld" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary" >
                    GitHub
                    </Button></a>
                    <a href="https://drive.google.com/file/d/1BoyPLtvKq1MHSS-0tuO7hdQqguFY9Nm9/view?usp=sharing" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    LIVE DEMO
                    </Button>
                    </a>
                </CardActions>
            </Card>
            </div>

            <div>
            <Card className={classes.root}>
                <a href="https://netflixclone-68b08.firebaseapp.com/" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={NetflixHD}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "Changa", color: "black"}}>
                        Netflix Clone
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        In this project I really wanted to show people that not only can I make fully funtional sites but I can also pull third party API's and replicate existing popular apps. I used Firebase to deploy the site, movies.db to pull the data for existing Netlix moives and trailers, and used React.js / JSX for the front-end portion of my app.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
                <CardActions className="project-buttons">
                    <a href="https://github.com/arkstreett/mynetflixclone/tree/Anthony-Streett" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    GitHub
                    </Button></a>
                    <a href="https://drive.google.com/file/d/1lDK2X1koQTKgvM6-9uWbfxwOdKOdHns7/view?usp=sharing" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    LIVE DEMO
                    </Button></a>
                </CardActions>
            </Card>
            </div>

            <div>
            <Card className={classes.root}>
                <a href="https://watermyplantsapp.netlify.app/" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={Garden}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "Changa", color: "black"}}>
                        Water My Plants App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    In this project I show that I can perform CRUD operations with a 3rd party API. The API gives a variety of plant species informing the user when to water them, plant species, and a option to upload, update or delete a plant off your list. But what really ties this project together to me is the fact that you have to be a authenticated user (logged in), in order to view your list of plants and you will be redirected to the homepage if not a user.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
                <CardActions className="project-buttons">
                    <a href="https://github.com/2-water-my-plants/react/tree/master/waterplantsapp" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    GITHUB
                    </Button></a>
                    <a href="https://drive.google.com/file/d/1ZneDcU_gAmxgcChOys-YmgHdWbNkqdEO/view?usp=sharing" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    LIVE DEMO
                    </Button></a>
                </CardActions>
            </Card>
            </div>

            <div>
            <Card className={classes.root}>
                <a href="https://madattheworld.netlify.app/" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={WhatsApp}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "Changa", color: "black"}}>
                        WhatsApp Clone
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This project displays a fully functional CRUD App that I created using React, Redux and Node.js / Express. With this app my client wanted me to build him something that would allow him to sell his products and just upload them when he felt necessary, I even made him a client private upload server for his art. You can add items to the cart, delete, and increase / decrease the quantity of and item. My favorite part of this build was implementing Stripe.js so my client could recieve payments from the just an app on his phone. Stripe allows a person to recieve, refund and check statements for free and I personally love it. (#. 4242 4242 4242  / Any Date in the future)
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
                <CardActions>
                    <a href="https://github.com/arkstreett/madattheworld" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary" >
                    GitHub
                    </Button></a>
                    <a href="https://drive.google.com/file/d/1BoyPLtvKq1MHSS-0tuO7hdQqguFY9Nm9/view?usp=sharing" rel="noreferrer nopener" target="_blank" style={{ textDecoration: "none"}}><Button size="small" color="secondary">
                    LIVE DEMO
                    </Button>
                    </a>
                </CardActions>
            </Card>
            </div>
            
        </div>
    </div>
  );
}

export default Projects;
