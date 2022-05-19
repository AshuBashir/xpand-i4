import React from "react";
import "./InspirationFour.css";
import headImage from '../images/inpirationLogo.png'
import PersonCard from "./PersonCard"
import PisCard from "./PisCard";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const InspirationFour = ({data, pis}) => {

  return (
  <div className="inspiration-container">

<Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1273,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : "rgba(0, 2, 8, 0.5)",
      }}
      style={{marginTop:"1rem", color:"white"}}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 150, height: 120 }}>
            <Img src={headImage} alt="Inspiration4" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" >
                Inspiration4
              </Typography>
              <Typography variant="body1" >
              Inspiration4 is the world’s first all-civilian mission to orbit. The mission will be commanded by Jared Isaacman, the 38-year-old founder and Chief Executive Officer of Shift4 Payments and an accomplished pilot and adventurer. Named in recognition of the four-person crew that will raise awareness and funds for St. Jude Children’s Research Hospital, this milestone represents a new era for human spaceflight and exploration.
         </Typography>
  
            </Grid>
            
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
    
    <div>
    
     <div>
       <h1  className="inspiration-styling" style={{color:'white',padding:"0.5rem 1rem", marginLeft:"7rem"}}>Astronauts</h1>
        <Grid container spacing={0} justifyContent="center" gap="1rem">
       
        {
         data.map((item,index)=>(
               <PersonCard key={index} item={item} />
         ))
         }
    
        </Grid>
    </div>
    <div >
    <h1 className="inspiration-styling"  style={{color:'white',padding:"0.5rem 1rem",marginLeft:"7rem"}}>PI'S</h1>
     <Grid container spacing={0} justifyContent="center" gap="1rem"> 
     {
        pis.map((pi, index)=>(
          <PisCard key={index} pis={pi} />
        ))
      }
       </Grid>
    </div>
  </div>

</div>
);
};

export default InspirationFour;
