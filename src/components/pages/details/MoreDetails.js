import React from 'react'
import { useLocation } from 'react-router-dom'
import './MoreDetails.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmailIcon from '@material-ui/icons/Email';
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

const data = [
{
  name: "60",
  heartrate: 235,
  time: 280,
  amt: 120,
},
{
  name: "90",
  heartrate: 90,
  time: 120,
  amt: 130,
},
{
  name: "120",
  heartrate  : 70,
  time: 190,
  amt: 160,
},
{
  name: "130",
  heartrate: 132,
  time: 50,
  amt: 180,
},
{
  name: "140",
  heartrate: 142,
  time: 190,
  amt: 200,
},
{
  name: "150",
  heartrate: 148,
  time: 210,
  amt: 190,
},
{
  name: "160",
  heartrate: 160,
  time:  220,
  amt: 185,
},
];



const MoreDetails = () => {
  const location = useLocation()
  return (
  <div className="detailcontainer">
      <div className="left-section">
       <img src={location.state.data.urlToImage} alt="person" style={{width:"8rem", marginTop:"2rem", marginLeft:"30%", borderRadius:"50%"}} />
       <h2 style={{color:"white",textAlign:"center", textDecoration:"underline"}}>{location.state.data.scientistName}</h2>  
       
       {location.state.data.studies ? 
   <div style={{marginLeft:"10%", marginTop:"1rem"}}>
      <h2>Studies</h2>
       <ul style={{ padding:"0.3rem", listStyle:"none"}}>
          <li style={{display:"flex", gap:"0.5rem"}}><ArrowRightAltIcon /> <a href="#" style={{color:"white", textDecoration:"none"}}>{location.state.data.studies.nameStudy1}</a></li>
          <li style={{display:"flex", gap:"0.5rem"}}><ArrowRightAltIcon /> <a href="#" style={{color:"white", textDecoration:"none"}}>{location.state.data.studies.nameStudy2}</a></li>
          <li style={{display:"flex", gap:"0.5rem"}}><ArrowRightAltIcon /> <a href="#" style={{color:"white", textDecoration:"none"}}>{location.state.data.studies.nameStudy3}</a></li>
       </ul>
   </div>  :
  
<div style={{marginLeft:"10%", marginTop:"1rem"}}>
      <h2>Research</h2>
      <ul style={{ padding:"0.3rem", listStyle:"none"}}>
          <li style={{display:"flex", gap:"0.5rem"}}><ArrowRightAltIcon />Research: {location.state.data.Research.reseachOn}</li>
          <li style={{display:"flex", gap:"0.5rem"}}><ArrowRightAltIcon /> Date: {location.state.data.Research.date}</li>
          {/* <li>{location.state.data.Research.reseachOn}</li> */}
       </ul>
   </div> 
}

  <EmailIcon className="email__icon" style={{position:"relative", left:"36%",border:"2px solid white",cursor:"pointer" , borderRadius:"50%",width:"4rem", height:"4rem", padding:"0rem 1rem"}}/>


</div>
   <div className="right__section">
    <h2>Description</h2>
     <p className="description">{location.state.data.description}</p>
    
     <hr/>   

   <div>
      
      {location.state.data.HeartRateChart ?
      <div className='heart-styling' style={{padding:"0.3rem 0"}}>
      <h2 style={{marginBottom:"0.5rem"}}>Heart Rate Chart</h2>
      <div style={{ width: "100%",
        height: "15rem",
        backgroundColor:"white",
        padding:"1rem" }}>
  <ResponsiveContainer width="100%"
            height="100%">
    <LineChart
    width={100}
    height={100}
    data={data}
    margin={{
      top: 5,
      right: 20,
      left: 10 ,
      bottom: 5,
    }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="time"
      stroke="black"
      strokeWidth='2'
      activeDot={{ r: 8 }}
    />
    <Line type="monotone"
        dataKey="heartrate"
        strokeWidth='2'
        stroke="black" />
    </LineChart>
  </ResponsiveContainer>
 
  </div>
      
    </div>   :

       <div>
          <h2 style={{padding:"0.5rem 0"}}>Insights</h2>
          <div style={{ width: "100%",
        height: "15rem",
        backgroundColor:"black",
        padding:"1rem" }}>
  <ResponsiveContainer width="100%"
            height="100%">
    <LineChart
    width={100}
    height={100}
    data={data}
    margin={{
      top: 5,
      right: 20,
      left: 10,
      bottom: 5,
    }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="time"
      stroke="white"
      strokeWidth='2'
      activeDot={{ r: 8 }}
    />
    <Line type="monotone"
        dataKey="heartrate"
        strokeWidth='2'
        stroke="white" />
    </LineChart>
  </ResponsiveContainer>
 
  </div>
</div>

      }
      </div>

      {location.state.data.SpaceCraft ?
    <div>
       <h2 style={{padding:"0.5rem 0"}}>Space Craft</h2>
      <div className="space_craft_details">
        <img className="spacecraft__image" style={{width:"18rem"}} src={location.state.data.SpaceCraft.spaceImageUrl} alt="spaceship"/>
       <div style={{lineHeight:"2rem"}}>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Height {location.state.data.SpaceCraft.height}</p>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Diameter {location.state.data.SpaceCraft.diamter}</p>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Capsule-Volume {location.state.data.SpaceCraft.capsuleVolume}</p>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Trunk-Volume {location.state.data.SpaceCraft.trunkVolume}</p>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Launch-Pay-Loadmass {location.state.data.SpaceCraft.launchpayloadmass}</p>
          <p style={{ display:"flex", alignItems:"center"}}><ArrowRightAltIcon />Return-Pay-Loadmass {location.state.data.SpaceCraft.returnpayloadmass}</p>
        </div>
       </div>
    </div>  :
  
  
    <div>
      <h2 style={{padding:"0.5rem 0"}}>Thoughts</h2>
      <p style={{paddingLeft:"1rem"}}>{location.state.data.About.thoughts}</p>
     </div>
 }

   </div>
   
 </div>
 

 )
}

export default MoreDetails