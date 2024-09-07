import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BoardDispatchContext } from "../App.jsx";

const Regist = () => {
    const { onRegist } = useContext(BoardDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) => {
        onRegist(
            input.createdDate.getTime(),
            input.title,
            input.content,
            input.writer,
        );
        nav("/", {replace: true});
    }

    return (
        <div>
            <Header
                title={"새 글 쓰기"}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"< 뒤로 가기"}
                    />
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default Regist;