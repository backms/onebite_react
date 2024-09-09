import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    usePageTitle("새 일기 쓰기");

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        nav("/", {replace: true});    // replace : true 설정 시 뒤로가기 불가
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} /> // nav함수에서 -1을 전달하면 뒤로가기
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
  };
  
  export default New;
  