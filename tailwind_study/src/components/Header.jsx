import React from 'react';
import { Search, Bell, MessageSquare, User } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const nav = useNavigate();

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => nav("/")}>Community</h1>
                    </div>

                    <div className="flex-1 max-w-xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500"/>
                        <MessageSquare className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500"/>
                        <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500"/>
                    </div>

                </div>
            </div>

        </header>

    )
}

        export default Header;