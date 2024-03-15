
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=1024x1024&w=is&k=20&c=BlXd7lrAmJ0pDI4J0UP_kUTYXxyjBcS0fTP1EyW0dt8=)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="w-11/12">

            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <button className="btn btn-primary">Explor Now</button>

            <button className="btn btn-outline ml-3 text-white">Our feedback</button>

            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;