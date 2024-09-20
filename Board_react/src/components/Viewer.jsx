import "./Viewer.css";

const Viewer = ({title,content}) => {

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
            </section>
        </div>
    )

}

export default Viewer;