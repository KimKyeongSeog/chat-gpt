import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const ChatBar = ({ chatList, setChatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: newQuestion,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );

      console.log(response);
      
      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);
      
      setNewQuestion("");
     
      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  return (
    <div className="h-24 absolute bottom-0 w-full">
      <form className="h-full flex items-center px-4" onSubmit={onSubmitChat}>
        <input
          className={`grow py-1 px-2 focus:outline-none border-2 focus:border-indigo-400 mr-4 ${isLoading && "bg-gray-100 text-gray-500"}`}
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={isLoading}
          placeholder="무엇이든 물어보세요. Chat-GTP"
        />
        <button
          className="w-28 py-[6px] text-sm bg-yellow-300 hover:bg-yellow-500 active:bg-yellow-300 rounded-lg text-white font-semibold flex justify-center"
          type="submit"
          disabled={isLoading}>
            {isLoading ? <CgSpinner className="animate-spin " size={22}/> : <div className="text-black">검   색</div>}

        </button>
      </form>
    </div>
  );
};

export default ChatBar;