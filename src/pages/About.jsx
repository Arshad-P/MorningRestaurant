import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    
   <Layout>

   <Box sx={{

    margin:5,
    textAlign: "center",
    // padding: 2,
    "& h4":{

      fontWeight: "bold",
      margin:2,
      fontSize:"2rem"
       
    },
      "& p":{

        textAlign:"justify"
      },
   }}>
      <Typography variant='h4'>
        Welcome to My Restaurant 
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere ab exercitationem id saepe esse at ullam quaerat. Illum velit nisi accusamus impedit nihil blanditiis quos inventore in, debitis natus.
      </p>
      <br />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus impedit nemo ipsum minus deleniti. Aliquam tempora quaerat, doloremque, officia temporibus aperiam ipsum facere animi quo omnis blanditiis. Soluta dolorem quidem, maiores quo reprehenderit at consectetur natus sint iste error totam voluptas accusantium blanditiis nobis  accusantium blanditiis nobis labore amet ipsam ipsa laudantium  impedit. <br /> 
      </p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, totam expedita libero vero Voluptatem.</p> <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi maxime quos ducimus nulla sunt est dolorem exercitationem reiciendis neque dicta, pariatur vero fuga nesciunt doloribus, incidunt nemo veniam! Veritatis ex praesentium veniam nostrum, consequatur nobis maxime ad recusandae aut harum, nihil distinctio cupiditate earum minus perferendis sequi assumenda corrupti! Minima ipsum error similique earum ipsa incidunt beatae voluptas! Molestiae maiores doloribus sunt eos vel saepe hic pariatur amet soluta commodi quaerat ea beatae iusto impedit labore corrupti magni maxime, deserunt natus alias veritatis tempora odio! Praesentium, non? Nesciunt facere quaerat reprehenderit vitae ratione voluptates veritatis. Tempora tenetur vitae autem.
      </p>
   </Box>
   </Layout>
  )
}
export default About