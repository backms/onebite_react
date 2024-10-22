import React, {useEffect} from "react";
import { MessageSquare, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => {

    return (
        <div key={board.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                    <Link to={`/boardDetail/${board.id}`}>{board.title}</Link>
                </h2>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600"/>
                    </div>
                    <span className="text-sm text-gray-600">{board.writer}</span>
                </div>
            </div>

            {board.content.length > 100 ?
                <p className="text-gray-600 mb-4">
                    {board.content.substring(0, 100)}...
                </p>
                :
                <p className="text-gray-600 mb-4">
                    {board.content}
                </p>
            }

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1"/> 댓글 {board.comments}
                  </span>
                    <span>조회수 {board.views}</span>
                    <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1"/> 좋아요 {board.likes}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{board.date}</span>
            </div>
        </div>
    )
}

export default BoardItem;