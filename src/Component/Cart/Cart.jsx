import PropTypes from 'prop-types';
import { GoClock } from "react-icons/go";
import { AiTwotoneFire } from "react-icons/ai";


const Cart = ({crt , addTable}) => {

    const {recipe_name , short_description , ingredients, image} = crt;


    return (
        <div className="">

            <div className="card w-full h-full bg-base-100 shadow-xl">

             <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>

            <div className="space-y-5">
                <h2 className="card-title text-lg font-semibold text-[#282828]">{recipe_name}</h2>
                <p className="text-[#878787]">{short_description}</p>
                <div>
                    <h2 className="text-lg font-semibold text-black">Ingreadients:{ingredients.length}</h2>
                    <ul className='list-disc pl-4 text-[#878787] '>
                       {
                        ingredients.map((ingre , index) =>(
                            <li key={index}>{ingre}</li>
                        ))
                       }
                    </ul>
                </div>

                <div className="flex justify-between">
                    <p className="flex items-center gap-2 text-[#282828CC]"><GoClock></GoClock>30 min</p>
                    <p className="flex items-center gap-2 text-[#282828CC]"> <AiTwotoneFire></AiTwotoneFire> 600 calories</p>
                </div>

                <div className="card-actions pb-1">
                <button onClick={()=>addTable(crt)} className="btn bg-[#0BE58A] rounded-full text-lg font-medium text-[#150B2B]">want to cook</button>
                </div>
            </div>

        </div>

        </div>
    );
};

Cart.propTypes = {
    crt : PropTypes.object.isRequired,
    addTable : PropTypes.func.isRequired,
}

export default Cart;