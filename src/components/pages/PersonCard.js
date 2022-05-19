import React from 'react'
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

import InfoIcon from '@material-ui/icons/Info';
import './InspirationFour.css'

const PersonCard = ({item}) => {
  return (<>
    <Card sx={{ maxWidth: 250,backgroundColor:"rgba(0, 0, 0, 0.5)", color:"white", boxShadow: 'rgba(121, 134, 148, 0.65) 0px 0px 0px 2px, rgba(121, 134, 148, 0.65) 0px 4px 6px -1px, rgba(121, 134, 148, 0.65) 0px 1px 0px inset', paddingTop:"0.5rem"}} className="austronaut-cards">
    
    <img src={item.info.urlToImage} alt={item.info.scientistName} 
      style={{position:"relative",width:"8rem",height:"8rem",borderRadius:"50%", left:'50%',top:"3px", transform:"translate(-50%)"}}
    />
    <CardContent style={{maxHeight:"10rem", overflow:"hidden"}}>
      <Typography gutterBottom variant="h5" component="div">
        {item.info.scientistName}
      </Typography>
      <Typography variant="body2" color="white" className="description-text">
       {item.info.description}
      </Typography>
    </CardContent>
  
    <CardActions>
      <Link
        to = {`/details/${item.info.scientistName}`}
        state={{data: item.info}}>    <Button variant="contained" sx={{ color: 'white', padding:'2px 2px', width:'55px', textTransform:'capitalize'}}>
       Explore
      </Button></Link>
   </CardActions>
  </Card>
  </>
  )
}



export default PersonCard



