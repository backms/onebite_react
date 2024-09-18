import {useCallback, useContext, useEffect, useState} from "react";
import {BoardStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const useBoard = (id) => {
    const data = useContext(BoardStateContext);
    const [currentBoard, setCurrentBoard] = useState();

    const nav = useNavigate();

    useEffect(() => {
        const currentBoardItem = data.find((item) => String(item.id) === String(id));

        if(!currentBoardItem){
            window.alert("존재하지 않는 게시글입니다.");
            nav("/", {replace: true});
        }

        setCurrentBoard(currentBoardItem);

    }, [id, data])

    return currentBoard;

}

export default useBoard;