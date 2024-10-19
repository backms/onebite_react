import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBoards} from "./BoardSlice.js";
import BoardItem from "./BoardItem.jsx";


const BoardList = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.board.boards);
    const boardStatus = useSelector((state) => state.board.status);;

    useEffect(() => {
        if(boardStatus === 'idle'){
            dispatch(fetchBoards());
        }
    }, [boardStatus, dispatch])

    // 임시 데이터
    const posts = [
        { id: 1, title: "첫 번째 게시글입니다.", author: "홍길동", date: "2024-10-15", views: 15 },
        { id: 2, title: "두 번째 게시글입니다.", author: "김철수", date: "2024-10-14", views: 23 },
        { id: 3, title: "세 번째 게시글입니다.", author: "이영희", date: "2024-10-13", views: 7 },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="max-w-3xl mx-auto mt-8 px-4">
                <h2 className="text-2xl font-bold mb-4">게시판</h2>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {posts.map((post) => (
                        <BoardItem key={post.id} {...post} />
                    ))}
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    글쓰기
                </button>
            </main>
        </div>
    );
};

export default BoardList;