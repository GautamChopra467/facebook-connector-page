import React from 'react';
import "../styles/PageBannerStyles.css";
import Header from '../../../../shared/widgets/jsx/Header'
import PageBanner from '../components/PageBanner'

const SinglePage = () => {
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
