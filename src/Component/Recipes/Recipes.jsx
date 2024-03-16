import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Table from "../Table/Table";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableTwo from "../TableTwo/TableTwo";


const Recipes = () => {
    const [chefCart , setChefCart] = useState([]);
    const [table , setTable] = useState([]);
    const [current , setCurrent] = useState([]);
    useEffect( ()=>{
        fetch('/public/fackData.json')
        .then(res =>res.json())
        .then(data => setChefCart(data))
    } , [])
// console.log(chefCart)
const addTable = (crt)=>{
    const notify = () => toast("Already you have added!");
    // console.log(crt);
    const remainingTable = table.find(rest =>rest.recipe_id ==crt.recipe_id);
    if(!remainingTable){
        setTable([...table , crt]);
    }
    else{
        {notify()}
    }
}

const currentAdd = (addCurrent)=>{
    // console.log('current add is clicked')
    setCurrent([...current , addCurrent]);
    const remainingCurrentTable = table.filter(it =>it.recipe_id !==addCurrent.recipe_id);
    setTable(remainingCurrentTable);
}

console.log(current);


    return (
        <div>
            <h2 className="text-center text-4xl font-semibold text-[#150B2B]">Our Recipes</h2>
            <p className="text-center text-[#150B2B99] mb-12">We make a wide variety of delicious food. You can easily get cheap and fresh nutritious food here. Below are some food samples.</p>

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
                <h2 className="text-2xl font-semibold text-[#282828] text-center">Want to clock: {table.length}</h2>
                <hr className="border-gray-300" />
                <Table table={table} currentAdd={currentAdd}></Table>
                <TableTwo current={current}></TableTwo>
                </div>
            </div>

        </div>
    );
};

export default Recipes;