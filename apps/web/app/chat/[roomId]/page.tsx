export default function ChatRoom() {
    return (
      <div className="chatRoom">
        {/* Chat Box */}
        <div className="chatBox">
          {/* Messages Container */}
          <div className="messages">
            <div className="message">Hello!</div>
            <div className="message">How are you?</div>
            <div className="message">I'm good, thanks!</div>
          </div>
    
          {/* Input Container */}
          <div className="inputContainer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    );
    