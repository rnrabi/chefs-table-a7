
const Navber = () => {
    return (
        <div className="flex justify-between items-center"> 
            <h2>Recipe Calories</h2>
            <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex">
                <input type="text" name="" id="" placeholder="search" />
                <p>profile icon</p>
            </div>
        </div>
    );
};

export default Navber;