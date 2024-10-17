import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBoards} from "./BoardSlice.js";
import {Link} from "react-router-dom";


const BoardList = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.board.boards);
    const boardStatus = useSelector((state) => state.board.status);;

    useEffect(() => {
        if(boardStatus === 'idle'){
            dispatch(fetchBoards());
        }
    }, [boardStatus, dispatch])

    return (
        <div>
            <h1>게시판 목록</h1>
            {boardStatus === 'loading' && <div>로딩중..</div>}
            {boardStatus === 'succeeded' && (
                <ul>
                    {boards.map((board) => (
                        <li key={board.id}>
                            <Link to={`/boards/${board.id}`}>{board.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            {boardStatus === 'failed' && <div>조회에 실패했습니다.</div>}
        </div>
    );
};

export default BoardList;