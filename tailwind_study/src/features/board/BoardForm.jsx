import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createBoard } from './BoardSlice.js';
import {replace, useNavigate} from "react-router-dom";


const BoardForm = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        writer: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title || !formData.content || !formData.writer) {
            alert("필수 항목을 입력해주세요.");
            return;
        }

        try {
            dispatch(createBoard(formData));
            setFormData({
                title: "",
                content: "",
                writer: "",
            });
            alert("게시글이 등록되었습니다.");
            nav("/board", {replace:true});
        } catch (err) {
            alert("게시글 등록에 실패했습니다. " + err.message);
            nav("/board", {replace:true});
        }

    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-20 max-w-7xl mx-auto px-4 pb-12">
                <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-6">게시글 작성</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                                제목
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="제목을 입력하세요"
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
                                value={formData.writer}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="작성자명을 입력하세요"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                                내용
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                                placeholder="내용을 입력하세요"
                            />
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
                                onClick={() => nav("/board")}
                            >
                                취소
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                onClick={handleSubmit}
                            >
                                등록하기
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
)
}

export default BoardForm;