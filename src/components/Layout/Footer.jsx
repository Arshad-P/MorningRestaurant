import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {
  return (
     <>
     <Box sx = {{textAlign:"center",bgcolor:"black", color:"white", p:2}}>


     {/* social media icons  */}

       <Box sx={{"& svg":{

              fontSize:"50px",
              cursor: "pointer",
              margin:2,
              color:"violet",
       },
       "& svg:hover":{
        color: "gold",
        transform:"translateX(10px)",
        transition: "all 0.3s"

       }
       }}>

        {/* social media Links */}

         <a href="https://www.youtube.com/watch?v=cQahrlpMWTg">

         <YouTubeIcon/>
         </a>

         <a href="https://github.com/Arshad-P">

         <GitHubIcon/>
         </a>

         <a href="https://www.instagram.com/">
         <InstagramIcon/>
         </a>
       
         <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">

         <TwitterIcon />
         </a>
       
        
       

       </Box>

      <Typography variant='h5'sx={{"@media(max-width:600px)":{
            fontSize:"16px"
      },
      }}>All Rights Reserved &copy; InfoTech</Typography>
     </Box>
     </>
  )
}

export default Footer