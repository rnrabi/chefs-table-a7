import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Table from "../Table/Table";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    const [chefCart , setChefCart] = useState([]);
    const [table , setTable] = useState([]);
    useEffect( ()=>{
        fetch('/public/fackData.json')
        .then(res =>res.json())
        .then(data => setChefCart(data))
    } , [])
// console.log(chefCart)
const addTable = (crt)=>{
    const notify = () => toast("Already you have added!");
    console.log(crt);
    const remainingTable = table.find(rest =>rest.recipe_id ==crt.recipe_id);
    if(!remainingTable){
        setTable([...table , crt]);
    }
    else{
        {notify()}
    }
}
// console.log(table);


    return (
        <div>
            <h2 className="text-center text-3xl text-black">Our Recipes</h2>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque adipisci sed totam omnis animi at obcaecati eum nobis, eaque eveniet.</p>

            <div className="grid grid-cols-12 gap-5">
                 <div className="col-span-7 grid grid-cols-2 justify-between gap-10">
                    {
                        chefCart.map(crt =>(
                            <Cart
                             key={crt.id}
                             crt={crt}
                             addTable={addTable}
                             ></Cart>
                        ))
                    }
                </div>

                <div className="col-span-5">
                <h2 className="text-2xl text-center">Want to clock: {table.length}</h2>
                <Table table={table}></Table>
                </div>
            </div>

        </div>
    );
};

export default Recipes;