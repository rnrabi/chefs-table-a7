
const Banner = () => {
    return (
        <div className="mb-20">
            <div className="hero h-96" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=1024x1024&w=is&k=20&c=BlXd7lrAmJ0pDI4J0UP_kUTYXxyjBcS0fTP1EyW0dt8=)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="w-full md:w-11/12">

            <h1 className="mb-5 md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <button className="btn bg-[#0BE58A] font-semibold text-lg mb-4">Explor Now</button>

            <button className="btn btn-outline ml-3 text-white text-lg font-semibold">Our feedback</button>

            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;