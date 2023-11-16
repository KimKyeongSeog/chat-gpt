import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className="w-52 p-4 bg-yellow-950 text-white">
      {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer} />
      ))}
    </ul>
  );
};

export default ChatSide; 


/*Optional Chanining , truncate 참고*/
/* {chatList && chatList.map((v, i) => <li>{v.question}</li>)}
/* 상기 코드에서 return; 이 생략되어 바로 화살표함수로 적용하였다 */
/* 여기서의 &&은 앞의 것이 참일 때, 뒤의 것을 출력한다는 의미 */
             