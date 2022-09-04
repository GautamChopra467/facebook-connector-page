import React from 'react';
import "../styles/PagesContainerStyles.css";
import { HiOutlineBell } from "react-icons/hi";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineUserSwitch } from "react-icons/ai"
import ProfileImage from "../../../../assets/img/profile-image.png"

const PagesContainer = () => {
  return (
    <div>
      <div className='main_container_pagescontainer'>
        <h3>Pages and profiles you manage</h3>
        <div className='main_box_pagescontainer'>
            <div className='page_container_pagescontainer'>
                <div className='page_details_section_pagescontainer'>
                    <div className='page_details_left_section_pagescontainer'>
                        <img src={ProfileImage} alt="profile" />
                    </div>

                    <div className='page_details_right_section_pagescontainer'>
                        <div className='page_details_right_top_section_pagescontainer'>
                            <h3>Demo Page</h3>
                        </div>

                        <div className='page_details_right_bottom_section_pagescontainer'>
                            <div className='page_details_icon_container_pagescontainer'>
                                <HiOutlineBell className="page_details_icon_pagescontainer" />
                                <p>1 notification</p>
                                <div className='blue_dot_pagescontainer'></div>
                            </div>

                            <div className='page_details_icon_container_pagescontainer'>
                                <GoCommentDiscussion className="page_details_icon_pagescontainer" />
                                <p>Messages</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn_switch_pagescontainer'>
                    <AiOutlineUserSwitch className="switch_icon_pagescontainer" />
                    <p>Switch Now</p>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PagesContainer
