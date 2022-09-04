import React from 'react';
import "../styles/PageBannerStyles.css";
import { BsSearch, BsMessenger, BsThreeDots } from "react-icons/bs";
import { IoMdThumbsUp } from "react-icons/io";

const PageBanner = () => {
  return (
    <div>
      <div className='main_container_pagebanner'>
        <div className='main_box_main_pagebanner'>
          <div className='main_box_top_section_pagebanner'>
            <div className='page_detail_upper_section_pagebanner'>
            </div>

            <div className='page_detail_lower_section_pagebanner'>
                <div className='page_detail_lower_left_section_pagebanner'>
                    <img src="https://scontent.fdel13-1.fna.fbcdn.net/v/t39.30808-6/304918862_101029426086642_2575468552583535769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rS2A4w9XJcYAX8VA7fW&_nc_oc=AQnzZGR8qgm7t8WsJMh1FUugwW98LjRI6WpZb_7atjhGhnqZbx28vFn0v7-jD1n2ko-uRQXmeQvUs8Ftk_l4qQxQ&tn=9BQnbXKFS3ElhVB-&_nc_ht=scontent.fdel13-1.fna&oh=00_AT_rEwW0sdyFwiJRvRDB8tLmX2l7yXpFxSIkFQkoNxge3w&oe=631970C1" alt="profile" />
                </div>

                <div className='page_detail_lower_right_section_pagebanner'>
                    <div className='page_info_section_pagebanner'>
                        <div className='page_info_top_section_pagebanner'>
                            <h3>Demo Page</h3>
                        </div>

                        <div className='page_info_top_section_pagebanner'>
                            <p>2 likes</p>
                            <div className='dot_pagebanner'></div>
                            <p>2 followers</p>
                        </div>
                    </div>

                    <div className='page_button_section_pagebanner'>
                        <button className='btn_light_pagebanner'>
                            <IoMdThumbsUp className="thumbs_up_icon_pagebanner" />
                            <p>Like</p>
                        </button>
                        <button className='btn_dark_pagebanner'>
                            <BsMessenger className="message_icon_pagebanner" />
                            <p>Message</p>
                        </button>
                        <button className='btn_light_pagebanner'>
                            <BsSearch className="search_icon_pagebanner" />
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
          </div> 

          <div className='main_box_bottom_section_pagebanner'>
            <div className='line_pagebanner'></div>

            <div className='tabs_container_pagebanner'>
                <div className='tabs_left_section_pagebanner'>
                    <div className='tab_box_pagebanner active_tab_pagebanner'>
                        <p>Posts</p>
                    </div>
                    <div className='tab_box_pagebanner'>
                        <p>About</p>
                    </div>
                    <div className='tab_box_pagebanner'>
                        <p>Mentions</p>
                    </div>
                    <div className='tab_box_pagebanner'>
                        <p>Reviews</p>
                    </div>
                    <div className='tab_box_pagebanner'>
                        <p>Followers</p>
                    </div>
                    <div className='tab_box_pagebanner'>
                        <p>Photos</p>
                    </div>
                </div>

                <div className='three_dots_container_pagebanner'>
                    <BsThreeDots className='three_dots_icon_pagebanner' />
                </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default PageBanner
