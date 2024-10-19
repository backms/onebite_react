import React from "react";

const Navigator = () => {
    return (
        <>
            {/* Category Navigation */}
            <nav className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <ul className="flex space-x-6">
                    <li className="text-blue-600 font-medium cursor-pointer">전체</li>
                    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">인기</li>
                    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">최신</li>
                    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">토론</li>
                    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">질문</li>
                </ul>
            </nav>
        </>
    )
}

export default Navigator