import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor.jsx";
import {useContext} from "react";
import {BoardDispatchContext} from "../App.jsx";
import useBoard from "../hooks/useBoard.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(BoardDispatchContext);

    const curBoardItem = useBoard(params.id);
    usePageTitle(`${params.id}번 게시글 수정`);

    const onClickDelete = () => {
        if(window.confirm("게시글을 삭제 하시겠습니까?")){
            onDelete(params.id);
            nav("/", {replace: true});
        }
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(
                params.id,
                input.title,
                input.writer,
                input.content
            );
            nav("/", {replace: true});
        }
    }

    return (
        <div>
            <Header
                title={"게시글 수정하기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로가기"} />
                }
                rightChild={
                    <Button
                        onClick={onClickDelete}
                        text={"삭제하기"}
                        type={"NEGATIVE"}
                    />
                }
            />
            <Editor
                onSubmit={onSubmit}
                initData={curBoardItem}
            />
        </div>
    )
}

export default Edit;