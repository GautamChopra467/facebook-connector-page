import React,{useState,useEffect} from 'react';
import "../styles/PostsStyles.css";
import Post from '../components/Post';
import { GoGlobe } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import ProfileImage from "../../../../assets/img/profile-image.png";
import PostImage from "../../../../assets/img/post-image.jpg"
import axios from "axios"
const Posts = () => {

  const [allcomments,setAllComments] = useState([])

  useEffect(()=>{
    const getComments = ()=>{
      axios.get(`${process.env.REACT_APP_BACKEND_PORT}allpostinfo`).then(({data})=>{
        setAllComments(data.data)
      })
    }
    // getComments();
  },[])
  

  return (
    <div>
      {
          (allcomments === undefined)?"":(
          allcomments.map((comment)=>(
          <div className='main_container_posts' key={comment.id}>
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
                      <p>{comment.message}</p>
                      <a href='https://www.amazon.in/b?ie=UTF8&node=976460031'>https://www.amazon.in/b?ie=UTF8&node=976460031</a>
                    </div>
                    <div className='post_middle_bottom_section_posts'>
                    {(comment.full_picture === undefined)?"":<img src={comment.full_picture} alt="post-image" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          )))      
      }
    </div>
  )
}

export default Posts;
