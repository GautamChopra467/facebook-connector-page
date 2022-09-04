import React, { useEffect,useState } from 'react';
import "../styles/PageBannerStyles.css";
import Header from '../../../../shared/widgets/jsx/Header'
import PageBanner from '../components/PageBanner'
import {useParams} from "react-router-dom"
import axios from "axios";

const SinglePage = () => {
  
  const [SinglePageInfo,setSinglePageInfo] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    const singlePageInfo = ()=>{
      axios.get(`${process.env.REACT_APP_BACKEND_PORT}singlepageinfo/${id}`).then(({data})=>{
        setSinglePageInfo(data)
      })
    }
    // singlePageInfo()
  },[])

  console.log(SinglePageInfo)

  return (
    <div>
      <Header />
      <div className='main_container_singlepage'>
        <PageBanner />
        <div className='main_container_bottom_section_singlepage'>

        </div>
      </div>
    </div>
  )
}

export default SinglePage
