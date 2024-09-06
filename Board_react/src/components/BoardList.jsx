import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoardStateContext } from "../App.jsx";

import "./BoardList.css";
import Button from "./Button";
import BoardItem from "./BoardItem";

const BoardList = () => {
    const nav = useNavigate();
    const data = useContext(BoardStateContext);

    return (
        <div className="BoardList">
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                    onClick={() => nav('/regist')}
                    text={"새 일기 쓰기"}
                    type={"POSITIVE"}
                />
            </div>
            <div className="list_wrapper">
                {data.map((item) => (
                    <BoardItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default BoardList;