import Header from "../components/Header";

const Board = () => {
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>title</th>
                        <ht>writer</ht>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>test title</td>
                    <td>tester</td>
                    <td>2024-10-10</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board