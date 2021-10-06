import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 1300,
    height:600,
    textAlign: "left", marginLeft: "230px", marginBottom: "30px",
    marginLeft: "140px",
    marginIop: "2%",
    marginBottom:"80px"
  },

  media: {
    width:1200,
    height: 300,
    marginLeft: "2%",
    marginIop: "2%",

  },
  bottom: {
  marginBottom:"100px"
}


})

export const ProjectCard = ({url,title,intro,techStack,time,type,role1,role2,role3,github}) => {
  const classes = useStyles();


  
  return (
                <div className="col-lg-10 order-1 order-lg-2">
     <div className="projects">
    <Card className={classes.root}>

      <CardActionArea >

      <CardMedia
              className={classes.media}
              image={url}
             title="Project Logo"
              />
        <CardContent>


          <Typography gutterBottom variant="h5" component="h1">
           {title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {intro}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h3">

              <li>{techStack}</li>
              <li>{time}</li>
              <li>{type}</li>

          </Typography><br/>

          <Typography variant="body2" color="textSecondary" component="h3">
              Role         
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <li>{role1}</li>      
            <li>{role2}</li>      
            <li>{role3}</li>      
          </Typography>


        </CardContent>

      </CardActionArea>



        <CardActions className={classes.bottom}>
          <a href={github} target="_blank" rel="noreferrer" style={{ textDecoration:"none" }}>
        <Button size="small" variant="contained" color="primary" >
            
            GitHub
            
         
        </Button>
          </a>
          <a href={github} target="_blank" rel="noreferrer" style={{ textDecoration:"none" }}>
        <Button size="small" color="primary" variant="contained">
          View Website
        </Button>
         </a>
      </CardActions>


    </Card>
      </div>
      </div>
  );
}
