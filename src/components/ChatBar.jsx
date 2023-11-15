import axios from "axios";
import { useState } from "react";

const ChatBar = () => {
  const [newQuestion, setNewQuestion] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-24">
      <form className="h-full flex items-center px-4" onSubmit={onSubmitChat}>
        <input
          className="grow py-1 px-2 focus:outline-none border-2 focus:border-indigo-400 mr-4"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={true}
        />
        <input
          className="w-28 py-[6px] text-sm bg-indigo-400 hover:bg-indigo-600 active:bg-indigo-400 rounded-lg text-white font-semibold"
          type="submit"
          value="검 색"
          disabled={true}
        />
      </form>
    </div>
  );
};

export default ChatBar;