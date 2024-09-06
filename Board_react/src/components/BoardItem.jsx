import "./BoardItem.css";
import { useNavigate } from "react-router-dom";

const BoardItem = ({id, createdDate, title, content, writer}) => {
    const nav = useNavigate();

    return (
        <div className="BoardItem">
            <div className="number_section">{id}</div>
            <div
                onClick={() => nav(`/detail/${id}`)}
                className="title_section"
            >{title}</div>
            <div className="writer_sction">{writer}</div>
            <div className="date_sction">{new Date(createdDate).toLocaleDateString()}</div>
        </div>
    )
}

export default BoardItem;