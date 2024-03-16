import PropTypes from 'prop-types';

const Table = ({table , currentAdd}) => {
    // console.log(table)
    return (
        <div>
            <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='font-medium text-[#878787]'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                            </thead>
                            
                            <tbody className="font-medium text-[#878787]">
                            {/* row 1 */}

                            {
                                table.map((data, index)=>(
                                    <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{data.recipe_name}</td>
                                    <td>{data.preparing_time} minutes</td>
                                    <td>{data.calories} calories</td>
                                    <td><button onClick={()=>currentAdd(data)} className="btn bg-[#0BE58A] rounded-full">preparing</button></td>
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
    currentAdd:PropTypes.func.isRequired,
}


export default Table;