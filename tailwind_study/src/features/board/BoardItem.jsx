const BoardItem = ({ title, author, date, views }) => (
    <div className="flex items-center justify-between border-b border-gray-200 py-3">
        <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{author}</p>
        </div>
        <div className="text-sm text-gray-500 mr-4">
            <span className="mr-4">{date}</span>
            <span>조회 {views}</span>
        </div>
    </div>
);

export default BoardItem;