import React from 'react';
import { useState } from 'react';
import "../styles/MessageContainerStyles.css";

const MessageContainer = () => {
    const data = [
        {
            id: 100,
            name: "Gautam",
            message: "Hello, hii"
        },
        {
            id:101,
            name: "Anurag",
            message: "Bye Bye"
        }
    ]

    const [selectedId, setSelectedId] = useState(100);
    let selectedChat;

  return (
    <div>
      <div className='main_container_messagecontainer'>
        <div className='main_box_messagecontainer'>
            <div className='main_box_left_section_messagecontainer'>
                {data.map((item) => (
                <div onClick={() => setSelectedId(item.id)} className={selectedId === item.id ? 'main_item_messagecontainer active' : 'main_item_messagecontainer'} key={item.id}>
                    <p>{item.name}</p>
                </div>
                ))}
            </div>

            <div className='main_box_right_section_messagecontainer'>
                {
                    data.forEach((element, index) => {
                        if(element.id === selectedId){
                            selectedChat = element.message;
                        }
                    })
                //  (data.find((elem) => (elem.id === selectedId)))?<p>{elem.message}</p>:""
                }
                <p>{selectedChat}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MessageContainer
