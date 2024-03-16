import { CgProfile } from "react-icons/cg";
const Navber = () => {
    return (
        <div className="flex justify-between items-center py-5"> 
            <h2 className="text-3xl font-bold text-black">Recipe Calories</h2>
            <div>
                <ul className="flex gap-4 text-[#150B2B]">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <input type="text" name="" id="" placeholder="search" />
                <p><CgProfile /></p>
            </div>
        </div>
    );
};

export default Navber;