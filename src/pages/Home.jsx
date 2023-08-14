import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import BannerSpicy from "../images/BannerSpicy.jpg"
import "../styles/HomeStyle.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';


const Home = () => {
  return (
    
    <Layout>
      <div className='home'style={{backgroundImage:`url(${BannerSpicy})`}}>

      <div className="headerContainer">
          <h1>Morning Restaurant's</h1>
          <p>Best Food In India
 <LocationOnTwoToneIcon className='LocationIcon'/>
          </p>
       

      <Link to = "/menu">
  
       <button>
       ORDER NOW  
     <ArrowOutwardIcon/>
       </button>
      </Link>
         </div>
        </div>
    </Layout>
  )
}

export default Home