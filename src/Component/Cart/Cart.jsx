import PropTypes from 'prop-types';


const Cart = ({crt}) => {

    const {recipe_name , short_description , ingredients} = crt;


    return (
        <div className="">

            <div className="card w-full bg-base-100 shadow-xl">

             <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

            <div className="space-y-5">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <div>
                    <h2>Ingreadients:{ingredients.length}</h2>
                    <ul className='list-disc'>
                       {
                        ingredients.map((ingre , index) =>(
                            <li key={index}>{ingre}</li>
                        ))
                       }
                    </ul>
                </div>

                <div className="flex justify-between">
                    <p>30 min</p>
                    <p>600 calories</p>
                </div>

                <div className="card-actions">
                <button className="btn btn-primary rounded-full">want ot cook</button>
                </div>
            </div>

        </div>

        </div>
    );
};

Cart.propTypes = {
    crt : PropTypes.object.isRequired,
}

export default Cart;