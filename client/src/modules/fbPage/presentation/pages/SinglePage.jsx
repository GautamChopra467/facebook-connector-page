import React, { useEffect,useState } from 'react';
import "../styles/PageBannerStyles.css";
import Header from '../../../../shared/widgets/jsx/Header'
import PageBanner from '../components/PageBanner';
import Posts from "../../../feed/presentation/pages/Posts";
import PhotoImage from "../../../../assets/img/facebook-logo.png";
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
    singlePageInfo()
  },[])

  console.log(SinglePageInfo)

  return (
    <div>
      <Header />
      <div className='main_container_singlepage'>
        <PageBanner  />
        <div className='main_container_bottom_section_singlepage'>
          <div className='main_photos_container_singlepage'>
            <div className='main_photos_top_section_singlepage'>
              <h3>Photos</h3>
              <p>See all photos</p>
            </div>
            <div className='main_photos_bottom_section_singlepage'>
              {(SinglePageInfo === undefined) ? "" : (
                SinglePageInfo.map((photo) => (
                  photo.full_picture && (
                    <div key={photo.id} className='photo_section_singlepage'>
                    <img src={photo.full_picture} alt="pics" />
                  </div>
                  )
                ))
              )}
            </div>
          </div>

          {(SinglePageInfo === undefined) ? "" : (
            <Posts SinglePageInfo={SinglePageInfo} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SinglePage
