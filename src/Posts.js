import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import InputOption from './InputOption';
import './Posts.css'

function Posts({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                {/* <AddIcon className="post__follow"/>
                <h2>Follow</h2> */}
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlined} title="Like"/>
                <InputOption Icon={ChatOutlined} title="Comment" />
                <InputOption Icon={ShareOutlined} title="Share"/>
                <InputOption Icon={SendOutlined} title="Send"/>
            </div>
        </div>
    )
}

export default Posts
