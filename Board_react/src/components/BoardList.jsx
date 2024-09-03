import "./BoardList.css";
import Button from "./Button";
import BoardItem from "./BoardItem";

const BoardList = () => {
    return (
        <div className="BoardList">
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className="list_wrapper">
                <BoardItem />
            </div>
        </div>
    )
}

export default BoardList;