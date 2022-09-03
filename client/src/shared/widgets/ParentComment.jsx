import React from "react";
import "../../modules/feed/presentation/styles/PostsStyles.css";
import ProfileImage from "../../assets/img/profile-image.png";
import { GiMicrophone } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

const ParentComment = () => {
  return (
    <div className="parent_comment_container_posts">
      <div className="parent_comment_box_posts">
        <div className="parent_comment_left_section_posts">
          <img src={ProfileImage} alt="person" />
        </div>

        <div className="parent_comment_right_section_posts">
          <div className="parent_comment_right_top_section_posts">
            <div className="parent_message_container_posts">
              <div className="parent_message_top_section_posts">
                <GiMicrophone className="microphone_icon_posts" />
                <p>Author</p>
              </div>

              <div className="parent_message_bottom_section_posts">
                <h3>Amazon India</h3>
                {/* <input type="text" value="We're still unable to understand your concern. Could you elaborate on your concern with more information so that we can assist you accordingly?" /> */}
                <p>
                  We're still unable to understand your concern. Could you
                  elaborate on your concern with more information so that we can
                  assist you accordingly?
                </p>
              </div>
            </div>

            <div className="parent_info_container_posts">
              <BsThreeDots className="parent_info_icon_posts" />
            </div>
          </div>

          <div className="parent_comment_right_bottom_section_posts">
            <h6>Like</h6>
            <h6>Reply</h6>
            <p>1d</p>
          </div>
        </div>
      </div>

      <div className="child_comment_container_posts">
        <div className="child_comment_box_posts">
          <div className="child_comment_left_section_posts">
            <img src={ProfileImage} alt="person" />
          </div>

          <div className="child_comment_right_section_posts">
            <div className="child_comment_right_top_section_posts">
              <div className="child_message_container_posts">
                <div className="child_message_top_section_posts">
                  <GiMicrophone className="microphone_icon_posts" />
                  <p>Author</p>
                </div>

                <div className="child_message_bottom_section_posts">
                  <h3>Amazon India</h3>
                  {/* <input type="text" value="We're still unable to understand your concern. Could you elaborate on your concern with more information so that we can assist you accordingly?" /> */}
                  <p>
                    We're still unable to understand your concern. Could you
                    elaborate on your concern with more information so that we
                    can assist you accordingly?
                  </p>
                </div>
              </div>

              <div className="child_info_container_posts">
                <BsThreeDots className="parent_info_icon_posts" />
              </div>
            </div>

            <div className="child_comment_right_bottom_section_posts">
              <h6>Like</h6>
              <h6>Reply</h6>
              <p>1d</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentComment;
