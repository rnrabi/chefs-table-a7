import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Recipes = () => {
    const [chefCart , setChefCart] = useState([])
    useEffect( ()=>{
        fetch('/public/fackData.json')
        .then(res =>res.json())
        .then(data => setChefCart(data))
    } , [])
// console.log(chefCart)


    return (
        <div>
            <h2 className="text-center text-3xl text-black">Our Recipes</h2>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque adipisci sed totam omnis animi at obcaecati eum nobis, eaque eveniet.</p>

            <div className="grid grid-cols-12 gap-5">
                 <div className="col-span-8 grid grid-cols-2 justify-between gap-10">
                    {
                        chefCart.map(crt =>(
                            <Cart
                             key={crt.id}
                             crt={crt}
                             ></Cart>
                        ))
                    }
                </div>

                <div className="col-span-4">
                <h2 className="text-2xl text-center">Want to clock: 0</h2>
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

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipes;