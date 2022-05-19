
import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import { Button } from '@mui/material';
// import {Link  } from "react-router-dom"
// import SideDescription from './SideDescription';
// const drawerWidth = 240;

import MoreDetails from './MoreDetails';


export default function SidebarDetails({data, pis}) {
return (<>
  <div>
    {/* <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Toolbar>
        
        </Toolbar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginTop: '150px'},
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
     <List style={{marginLeft:"1rem",display:"flex", flexDirection:"column",gap:"1rem", alignItems:"flex-start"}}>
          <Link  to={`/description`}>Description</Link >
          <Link  to=''>Data Dictionary</Link >
          <Link to=''>About</Link >
          <Link to=''>Insights</Link >
          <Link to=''>Research</Link >
       </List>     
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
     
      </Box>
      
    </Box>
     */}
     <MoreDetails/>
    
  </div>
  
  {/* <SideDescription /> */}
  {/* <div style={{border:"1px solid red", padding:"1rem",minHeight:"5rem", marginLeft:"15rem"}}> */}
 
    
    {/* </div>  */}
  </>);
}