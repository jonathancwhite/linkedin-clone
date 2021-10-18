import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import './Feed.css'
import { db } from './firebase';
import InputOption from './InputOption'; 
import Posts from './Posts';

function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ));
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Jonathan White',
            description: 'Web Developer at Ballistic Agency',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title='Video' color="#7FC15E"/>
                    <InputOption Icon={EventNote} title='Event' color="#E7A33E"/>
                    <InputOption Icon={CalendarViewDay} title='Write Article' color="#FC9295"/>
                </div>
            </div>
            {posts.map(({id, data:{name, description, message, photoUrl} }) => (
                <Posts 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            {/* <Posts 
            name="Jonathan White" 
            description="Web Developer at Ballistic Agency" 
            message="I love linkedin so much... so I rebuilt with React"     
            /> */}
        </div>
    )
}

export default Feed
