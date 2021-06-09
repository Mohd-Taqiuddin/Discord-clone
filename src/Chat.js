import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';
import Picker from 'emoji-picker-react';


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [shemojis, setShemojis] = useState(false);

  const [chosenEmoji, setChosenEmoji] = useState(null);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

  //   db.collection("users").add({
  //     user: user,
  // });

    setInput("");
  };

  const handleChange = e => {
    const txt = e.target
    console.log(txt);
    setInput(e.target.value)
    
    // addEmoji()
    
  }

  // const addEmoji = e => {
  //   let emoji = 
  //   setInput({
  //     input: e.target.text +emoji,
  //   })
  // }

  const onEmojiClick = (e, emojiObject) => {
    setChosenEmoji(emojiObject);
    let emoji = chosenEmoji.emoji;
    console.log(input + emoji)
    
    e.target.value = input + emoji;
    // console.log(e.target.value)
    setInput(e.target.value)
  };

  const handleSHemojis = () => {
    const showHideEmojis = !shemojis;
    setShemojis(showHideEmojis);
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            type="text"
            value={input}
            disabled={!channelId}
            onChange={handleChange}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" onClick={handleSHemojis} />

            {/* shemojis === showHideEmojis */}
          { shemojis && (
              <Picker onEmojiClick={onEmojiClick} />
          )}
          
          
          {/* <div className="reactions">
            <Picker
              showPreview={false}
              showSkinTones={false}
            />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Chat;
