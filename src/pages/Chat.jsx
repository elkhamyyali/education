import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaTrashAlt, FaEdit } from "react-icons/fa"; // Import additional icons

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Shanay Cruz",
      avatar: "https://pagedone.io/asset/uploads/1710412177.png",
      messages: [
        {
          id: 1,
          text: "Guts, I need a review of work. Are you ready?",
          time: "05:14 PM",
        },
        { id: 2, text: "Let me know", time: "05:14 PM" },
      ],
    },
    {
      id: 2,
      name: "You",
      avatar: "https://pagedone.io/asset/uploads/1704091591.png",
      messages: [
        {
          id: 3,
          text: "Yes, let’s see, send your work here",
          time: "05:14 PM",
          sentByUser: true,
        },
        {
          id: 4,
          text: "Anyone on for lunch today",
          time: "05:14 PM",
          sentByUser: true,
        },
      ],
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages.map((user) => {
        if (user.name === "You") {
          return {
            ...user,
            messages: [
              ...user.messages,
              {
                id: Date.now(),
                text: newMessage,
                time: new Date().toLocaleTimeString(),
                sentByUser: true,
              },
            ],
          };
        }
        return user;
      }),
    ]);

    setNewMessage("");
  };

  const handleDeleteMessage = (messageId) => {
    setMessages((prevMessages) => [
      ...prevMessages.map((user) => ({
        ...user,
        messages: user.messages.filter((message) => message.id !== messageId),
      })),
    ]);
  };

  const handleEditMessage = (message) => {
    setEditingMessage(message.id);
    setUpdatedText(message.text);
  };

  const handleUpdateMessage = (messageId) => {
    setMessages((prevMessages) => [
      ...prevMessages.map((user) => ({
        ...user,
        messages: user.messages.map((message) =>
          message.id === messageId ? { ...message, text: updatedText } : message
        ),
      })),
    ]);

    setEditingMessage(null);
    setUpdatedText("");
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-7 flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        {messages.map((user) => (
          <div key={user.id} className="pb-8 md:pb-11">
            <div className="flex flex-col gap-4 md:gap-6">
              {user.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start ${
                    message.sentByUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!message.sentByUser && (
                    <img
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover mr-2"
                    />
                  )}
                  <div
                    className={`flex flex-col gap-1 ${
                      message.sentByUser ? "items-end" : "items-start"
                    } ${message.sentByUser ? "text-right" : ""}`}
                  >
                    <div
                      className={`inline-block px-3 py-2 rounded-md ${
                        message.sentByUser
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div
                      className={`text-xs text-gray-500 ${
                        message.sentByUser ? "text-right" : ""
                      }`}
                    >
                      {message.time}
                    </div>
                    {message.sentByUser && (
                      <div className="flex gap-2 mt-1">
                        <button
                          onClick={() => handleEditMessage(message)}
                          className="text-yellow-500"
                        >
                          <FaEdit size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(message.id)}
                          className="text-red-500"
                        >
                          <FaTrashAlt size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                  {message.sentByUser && (
                    <img
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ml-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full p-3 border-t border-gray-200 bg-white flex items-center gap-2">
        <div className="flex items-center gap-2 flex-grow">
          <FaPaperclip className="text-gray-500 cursor-pointer" size={22} />
          <input
            value={editingMessage ? updatedText : newMessage}
            onChange={(e) =>
              editingMessage
                ? setUpdatedText(e.target.value)
                : setNewMessage(e.target.value)
            }
            className="flex-1 bg-gray-100 text-black text-xs font-medium rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Type here..."
          />
        </div>
        <button
          onClick={
            editingMessage
              ? () => handleUpdateMessage(editingMessage)
              : handleSendMessage
          }
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-1"
        >
          <FaPaperPlane size={18} />
          {editingMessage ? "Update" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chat;
