import React from "react";
import "../styles/MessageStyles.css";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { BsBarChartFill, BsClock, BsCalendarDateFill, BsMegaphoneFill, BsFillQuestionCircleFill, BsSliders } from "react-icons/bs";
import { FaBars, FaBell, FaReact } from "react-icons/fa";
import { TbBrandMeta } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { IoDocuments, IoSearchOutline } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

const Message = () => {
  return (
    <div>
      <div className="main_container_message">
        <div className="first_section_message">
            <TbBrandMeta className="meta_icon_message" />
            <div className="logo_container_message">D</div>
            <div className="sidebar_icons_container_message">
                <HiHome className="sidebar_icon_message" />
                <FaBell className="sidebar_icon_message" />
                <AiFillMessage className="sidebar_icon_message" />
                <BsCalendarDateFill className="sidebar_icon_message" />
                <BsMegaphoneFill className="sidebar_icon_message" />
                <BsBarChartFill className="sidebar_icon_message" />
                <FaBars className="sidebar_icon_message" />
                <IoDocuments className="sidebar_icon_message" />
            </div>
            <div className="sidebar_bottom_icons_container_message">
                <BsFillQuestionCircleFill className="sidebar_icon_message" />
                <MdFeedback className="sidebar_icon_message" />
            </div>
        </div>

        <div className="second_section_message">
          <div className="second_top_section_message">
            <div className="second_top_left_section_message">
                <h3>Inbox</h3>
            </div>

            <div className="second_top_right_section_message">
                <button className="btn_primary_message">
                    <BsClock className="clock_icon_message" />
                    <p>Available</p>
                </button>

                <button className="btn_primary_message">
                    <FaReact className="react_icon_message" />
                    <p>Automations</p>
                </button>

                <button className="btn2_primary_message">
                    <AiFillSetting className="settings_icon_message" />
                </button>
            </div>
          </div>

          <div className="chat_container_message">
            <div className="chat_header_section_message">
                <div className="header_item_box_message active_header_item_box">
                    <p>All Messages</p>
                </div>

                <div className="header_item_box_message">
                    <p>Messenger</p>
                </div>

                <div className="header_item_box_message">
                    <p>Instagram Direct</p>
                </div>

                <div className="header_item_box_message">
                    <p>Facebook comments</p>
                </div>

                <div className="header_item_box_message">
                    <p>Instagram comments</p>
                </div>

                <div className="header_item_box_message">
                    <p>Chat Plugin</p>
                </div>
            </div>

            <div className="chat_main_box_message">

                {/* CHAT LIST */}
                <div className="chat_list_container_message">
                    <div className="chat_list_top_section_message">
                        <div className="chat_search_container_message">
                            <div className="chat_search_icon_container_message">
                                <IoSearchOutline className="chat_search_icon_message" />
                            </div>
                            <input type="text" placeholder="Search" />
                            <div className="chat_filter_icon_container_message">
                                <BsSliders className="chat_filter_icon_message" />
                            </div>
                        </div>
                        <p>Manage</p>
                    </div>

                    <div className="chat_list_bottom_section_message">
                        <div className="chat_list_user_item_container_message">
                            <div className="chat_list_user_item_left_section_message">
                                <div className="chat_list_user_item_avatar_container_message">
                                    <img src="" alt="avatar" />
                                </div>

                                <div className="chat_list_user_item_details_section_message">
                                    <h4>Demo Page</h4>
                                    <p>Hello, Gautam</p>
                                </div>
                            </div>

                            <div className="chat_list_user_item_right_section_message">
                                <p>2:50 AM</p>
                                <FcCheckmark className="tick_icon_message" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>

        <div className="third_section_message"></div>
      </div>
    </div>
  );
};

export default Message;
