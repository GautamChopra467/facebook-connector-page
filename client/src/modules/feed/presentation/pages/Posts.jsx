import React from 'react';
import "../styles/PostsStyles.css";
import Post from '../components/Post';
import { GoGlobe } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import ProfileImage from "../../../../assets/img/profile-image.png";
import PostImage from "../../../../assets/img/post-image.jpg"

const Posts = () => {
  return (
    <div>
      <div className='main_container_posts'>
        <div className='main_box_posts'>
          <div className='posts_container_posts'>
            <div className='posts_box_posts'>
              <div className='post_main_container_posts'>
                <div className='post_upper_section_posts'>
                  <div className='post_upper_left_section_posts'>
                    <div className='post_upper_left_logo_section_posts'>
                      <img src={ProfileImage} alt="profile-pic" />
                    </div>
                    <div className='post_upper_left_detail_section_posts'>
                      <div className='post_upper_left_top_section_posts'>
                        <h4>Amazon India</h4>
                      </div>
                      <div className='post_upper_left_bottom_section_posts'>
                        <p>September 2</p>
                        <GoGlobe className="globe_icon_posts" />
                      </div>
                    </div>
                  </div>
                  <div className='post_upper_right_section_posts'>
                    <div className='post_upper_right_dots_container_posts'>
                      <BsThreeDots className='three_dots_icon_posts' />
                    </div>
                  </div>
                </div>

                <div className='post_middle_section_posts'>
                  <div className='post_middle_top_section_posts'>
                    <p>Switch to god mode with CosmicByte | Explore more on amazon:  </p>
                    <a href='https://www.amazon.in/b?ie=UTF8&node=976460031'>https://www.amazon.in/b?ie=UTF8&node=976460031</a>
                  </div>
                  <div className='post_middle_bottom_section_posts'>
                    <img src={PostImage} alt="post-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
