import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchBoards} from "./BoardSlice.js";
import BoardItem from "./BoardItem.jsx";
import Navigator from "../../components/Navigator.jsx";
import {useNavigate} from "react-router-dom";


const BoardList = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { boards, status, error } = useSelector((state) => state.board);

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchBoards());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        if(!boards){
            content = <div>게시글이 없습니다.</div>;
        } else {
            content = boards.map((board) => (
                <BoardItem board={board} key={board.id}/>
            ));
        }
    } else if (status === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-20 max-w-7xl mx-auto px-4 pb-12">

                <Navigator/>

                <div className="grid gap-6 mb-8">
                    {content}
                </div>

                {/*
                <div className="flex justify-center">
                    todo - 페이징 영역
                </div>
                */}

                <div className="flex justify-end mb-6">
                    <button
                        className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                        onClick={() => nav("/boardForm")}
                    >
                        글쓰기
                    </button>
                </div>

            </main>
        </div>
    );
};

export default BoardList;