const ChatCard = ({ answer, question }) => {
  
    return (
      <li className="flex flex-col gap-4 mb-6">
        <div className="bg-yellow-300 self-end p-2 mr-4 ml-32 rounded-md shadow-lg whitespace-pre-wrap">{question}</div>
        <div className="bg-white p-2 self-start ml-4 mr-32 rounded-md shadow-lg whitespace-pre-wrap">{answer}</div>
      </li>
    );
  };
  
  export default ChatCard;