import "./Editor.css";
import Button from "./Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  getStringedDate = (targetDate) => {
    // 날짜 => YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() +1;
    let date = targetDate.getDate();

    if(month < 10){
        month = `0${month}`;
    }
    if(date < 10){
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
}

const Editor = ({ onSubmit }) => {
    const nav = useNavigate();
    const [input, setInput] = useState({
        createdDate: new Date(),
        title: "",
        content: "",
        writer: "",
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'createdDate'){
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>게시일</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)}
                    type="date"
                />
            </section>
            <section className="title_section">
                <h4>제목</h4>
                <input
                    name="title"
                    value={input.title}
                    onChange={onChangeInput}
                    placeholder={"제목을 입력해주세요."}
                />
            </section>
            <section className="content_section">
                <h4>내용</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="내용을 입력해주세요."
                />
            </section>
            <section className="writer_section">
                <h4>작성자</h4>
                <input
                    name="writer"
                    value={input.writer}
                    onChange={onChangeInput}
                />
            </section>
            <section className="button_section">
                <Button
                    onClick={() => nav(-1)}
                    text={"취소하기"}
                />
                <Button
                    onClick={onClickSubmitButton}
                    text={"작성완료"}
                    type={"POSITIVE"}
                />
            </section>
        </div>
    );
}

export default Editor;