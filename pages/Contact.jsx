
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const Contact = () => {
  return (
    
   <Layout>
    <Box sx = {{margin:5,marginLeft:5, "& h5":{
       fontWeight:"bold", marginBottom:2
    }, 
    }}>
    <Typography variant='h5'>
      Contact My Restaurant
    </Typography>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem optio praesentium perspiciatis, ducimus quaerat earum quas ex. Repellat numquam consequatur cupiditate sed impedit tenetur ad. Consequatur nemo modi obcaecati asperiores eos? Delectus fugit illum excepturi velit nesciunt et aut eveniet. Eius totam quo repellendus dolore exercitationem laboriosam non blanditiis illo?
    </p> <br />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem optio praesentium perspiciatis, ducimus quaerat earum quas ex. Repellat numquam consequatur cupiditate sed impedit tenetur ad. Consequatur nemo modi 
    
    </p> 

    </Box>


    {/* Contact Details Box  */}

    <Box sx={{m:3, width:"600px",ml:5, "@media (max-width:600px)":{
         width:"300px"
    },
    }}>
        <TableContainer component={Paper}>
            <Table aria-label='contact table'>
               <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white"}}>
                    Contact Details
                  </TableCell>
                </TableRow>
               </TableHead>

               <TableBody >
                <TableRow>
          
                  <TableCell >
        <SupportAgentIcon sx={{color:"red",padding:"5px"}}/> 
        1800-00-0000 (Toll-Free)
                  </TableCell>
            
                </TableRow>

                <TableRow>
                <TableCell >
        <EmailIcon sx={{color:"blue",padding:"5px"}}/> 
           HRinfo.com
                  </TableCell>
                </TableRow>

                <TableRow>
                <TableCell >
        <AddIcCallIcon sx={{color:"orange",padding:"5px"}}/> 
         +91 8977476441
                  </TableCell>
                </TableRow>

               </TableBody>
            </Table>
        </TableContainer>
    </Box>
   </Layout>
  )
}

export default Contact