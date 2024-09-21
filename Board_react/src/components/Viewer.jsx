import "./Viewer.css";

const Viewer = ({title,content,writer}) => {

    return (
        <div className="Viewer">
            <section className="content_section">
                <h4>제목</h4>
                <div className="title_wrapper">
                    <p>{title}</p>
                </div>
                <h4>내용</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
                <h4>작성자</h4>
                <div className="writer_wrapper">
                    <p>{writer}</p>
                </div>
            </section>
        </div>
    )

}

export default Viewer;