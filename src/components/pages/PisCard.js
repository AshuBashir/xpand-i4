import React from 'react'
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import InfoIcon from '@material-ui/icons/Info';
import './InspirationFour.css'
const PisCard = ({pis}) => {
    // console.log(pis)
  return (
        <Card  sx={{ maxWidth: 250, paddingTop:"0.5rem", backgroundColor:"rgba(0, 0, 0, 0.5)", color:"white", boxShadow: 'rgba(121, 134, 148, 0.65) 0px 0px 0px 2px, rgba(121, 134, 148, 0.65) 0px 4px 6px -1px, rgba(121, 134, 148, 0.65) 0px 1px 0px inset'}} className="austronaut-cards">
    <img src={pis.info.urlToImage} alt={pis.info.scientistName} 
      style={{position:"relative",width:"8rem",height:"8rem",borderRadius:"50%", left:'50%',top:"3px", transform:"translate(-50%)"}}
    />
    <CardContent style={{maxHeight:"10rem", overflow:"hidden"}}>
      <Typography gutterBottom variant="h5" component="div">
        {pis.info.scientistName}
      </Typography>
      <Typography variant="body2" color="white" className="description-text">
       {pis.info.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Link
        to = {`/details/${pis.info.scientistName}`}
        state={{data: pis.info}}> <Button variant="contained" sx={{ color: 'white', padding:'2px 2px', width:'55px', textTransform:'capitalize'}}>
        Explore
       </Button></Link>
   </CardActions>
  </Card>
  )
}

export default PisCard