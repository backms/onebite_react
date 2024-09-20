import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import useBoard from "../hooks/useBoard";
import usePageTitle from "../hooks/usePageTitle.jsx";
import Viewer from "../components/Viewer.jsx";

const Detail = () => {
    const params = useParams();
    const nav = useNavigate();

    const curBoardItem = useBoard(params.id);
    usePageTitle(`${params.id}번 게시글`);


    if(!curBoardItem){
        return <div>데이터 로딩중</div>;
    }

    const {createdDate, title, content, writer} = curBoardItem;

    return (
        <div>
            <Header
                title={title}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
                }
                rightChild={
                    <Button
                        onClick={() => nav(`/edit/${params.id}`)}
                        text={"수정하기"}
                    />
                }
            />
            <Viewer title={title} content={content} />
        </div>
    )
}

export default Detail;