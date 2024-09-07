import "./EmotionItem.css";
import {getEmotionImgae} from "../util/get-emotion-image.js";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
        >
            <img className="emotion_img" src={getEmotionImgae(emotionId)} />
            <div className="emotion_name">
                {emotionName}
            </div>
        </div>
    )
}

export default EmotionItem;