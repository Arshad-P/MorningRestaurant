import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';




const Header = () => {

  const [mobileOpen,setMobileOpen] = useState(false);

  // HandleMenu click
  const handleDrawerToggle = ()=>{
     setMobileOpen(!mobileOpen)

  }

  // Moblie view //

  // menu drawer 
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign: "center"}}>


<Typography color={"gold"} variant = "h6" component={"div"} sx={{flexGrow:1, margin:2}}>
          

     <Link to= "/" className='MobileViewLogo' >
        <RestaurantIcon/>
       Morning Restaurant
       </Link>  
      </Typography>
   
         <Divider/>
        <ul className='mobile-navigation'>
          <li>
            <NavLink activeClassName = "active" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
          
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
         
        </ul>
      </Box>
  )

   
  // website view // 

  return (
  <>
  <Box>
    <AppBar component={"nav"} sx={{bgcolor: "black"}}>
      <Toolbar>

  <IconButton color='inherit' aria-label='open drawer' edge="start" 
  sx={{
              margin:2,
              display:{sm:"none"} 
              }} 
              onClick={handleDrawerToggle}
              >
              <MenuIcon/>
             </IconButton>

      <Typography color={"gold"} variant = "h6" component="div" sx={{flexGrow:1}}>


    <Link to= "/" className='websiteViewLogo' >
        <RestaurantIcon/>
        Morning Restaurant
    </Link>
      </Typography>

      <Box sx={{display:{xs:"none",sm:"block"}}} >
        <ul className='navigation-menu'>
          <li>
            <NavLink to={"/"}>Home </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
          
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
         
        </ul>
      </Box>
      </Toolbar>
    </AppBar>

    <Box component={"nav"}>
          <Drawer variant='temporary' open={mobileOpen} onClick={handleDrawerToggle}

          sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{
            boxSizing: "border-box",
            width: "240px",

          },}}>

                {drawer}

          </Drawer>
    </Box>

    

<Box >
<Toolbar/>
</Box>
  </Box>
  </>
  )
}

export default Header