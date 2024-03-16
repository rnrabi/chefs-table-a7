import PropTypes from 'prop-types';

const Table = ({table}) => {
    console.log(table)
    return (
        <div>
            <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            {/* row 1 */}

                            {
                                table.map((data, index)=>(
                                    <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{data.recipe_name}</td>
                                    <td>{data.preparing_time} minutes</td>
                                    <td>{data.calories} calories</td>
                                    <td><button className="btn btn-primary rounded-full">preparing</button></td>
                                </tr> 
                                ))
                            }

                            </tbody>
                        </table>
                    </div> 
        </div>
    );
};

Table.propTypes = {
    table: PropTypes.array.isRequired,
}


export default Table;