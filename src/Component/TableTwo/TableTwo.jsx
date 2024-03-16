import PropTypes from 'prop-types'

const TableTwo = ({current}) => {
    console.log(current)

    const totalTime = current.reduce((total , currentValue)=>{
        total = total + currentValue.preparing_time;
        return total;
    },0)

    const totalCalories = current.reduce((total , currentValue)=>{
        total = total + currentValue.calories;
        return total;
    },0)


    return (
        <div>
            <h2 className="text-center text-2xl">Currently cooking: {current.length}</h2>
            <hr className="border-gray-300"/>
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
                            current.map((curItem , index) =>(
                                <tr key={index}>
                                    <th> {index + 1}</th>
                                    <td>{curItem.recipe_name} </td>
                                    <td> {curItem.preparing_time} minutes</td>
                                    <td>{curItem.calories} calories</td>
                                    
                            </tr> 
                            ))
                        }                        
                        </tbody>
                    </table>
                    <div className='flex justify-end gap-4 font-bold text-2xl'>
                        <h2>Total time = {totalTime} </h2>
                        <h2>Total calories = {totalCalories} </h2>
                    </div>
                </div> 
        </div>
    );
};

TableTwo.propTypes = {
    current:PropTypes.array.isRequired,
}

export default TableTwo;