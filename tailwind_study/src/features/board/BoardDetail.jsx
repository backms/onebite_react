import React, {useEffect} from "react";
import {fetchBoardById} from "./BoardSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


const BoardDetail = () => {
    const nav = useNavigate();
    const { boardId } = useParams();
    const dispatch = useDispatch();
    const {selectedBoard, status, error} = useSelector(state => state.board);

    useEffect(() => {
        dispatch(fetchBoardById(boardId));
    }, [boardId, dispatch]);

    if(status === 'loading'){
        return <div>Loading...</div>;
    } else if(status === 'failure'){
        return <div>ERROR : {error}</div>
    }

    if(!selectedBoard){
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-20 max-w-7xl mx-auto px-4 pb-12">
                <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-6">게시글 상세</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                                제목
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={selectedBoard.title}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                disabled
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="author">
                                작성자
                            </label>
                            <input
                                type="text"
                                id="author"
                                name="writer"
                                value={selectedBoard.writer}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                disabled
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                                내용
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={selectedBoard.content}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                                disabled
                            />
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                                onClick={() => nav("/board")}
                            >
                                목록
                            </button>
                            <button
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                                onClick={() => nav(`/boardEdit/${boardId}`)}
                            >
                                수정
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default BoardDetail;