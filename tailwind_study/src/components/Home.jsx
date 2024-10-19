import React from 'react';
import { MessageSquare } from 'lucide-react';
import Navigator from "./Navigator.jsx";

const Home = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-20 max-w-7xl mx-auto px-4 pb-12">
                <Navigator/>

                {/* Posts Grid */}
                <div className="grid gap-6 mb-8">
                    {/* Sample Post Card */}
                    {[1, 2, 3].map((post) => (
                        <div key={post} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-medium">사용자 이름</p>
                                    <p className="text-sm text-gray-500">2시간 전</p>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">게시글 제목 입니다</h2>
                            <p className="text-gray-600 mb-4">
                                여기에 게시글 내용이 들어갑니다. 커뮤니티 게시글의 미리보기 내용입니다.
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" /> 댓글 12
                </span>
                                <span>조회 238</span>
                                <span>좋아요 45</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center">
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                        onClick={() => console.log('더 보기 클릭')}
                    >
                        더 보기
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Home;