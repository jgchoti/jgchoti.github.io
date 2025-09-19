import React from 'react';

function BlogBody() {
    return (
        <div className="container content-container">
            <div className='description'>
                <h1 className='mt-3'>Blogs</h1>
                <h2>Recording My Coding Experiences and Learnings</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card mt-5" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:1364/format:webp/1*JbawEWcEq1FxgVAJuxhsHQ.png" alt="Card cap" />
                        <div className="card-body pb-4">
                            <h5 className="card-title">Solving a Language-Switching Nav Bar Using Only CSS on Squarespace</h5>
                            <p className="card-text mb-5">As a web developer, my goal is to find creative, cost-effective solutions for my clients. Recently, I was tasked ...</p>
                            <a href="https://medium.com/@jgchoti/solving-a-language-switching-nav-bar-using-only-css-on-squarespace-add859c95ef9" className="btn-branding btn-mobile">Read more...</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card mt-5" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://cdn-images-1.medium.com/max/1600/0*nJW9Aqo2jNYtr2xX" alt="Card cap" />
                        <div className="card-body pb-4">
                            <h5 className="card-title">My Journey Through Full-Stack Web Development at HackYourFuture 🌍💻</h5>
                            <p className="card-text mb-5">A compilation of key takeaways from my intensive training program to help aspiring developers navigate essential web development concepts.</p>
                            <a href="https://medium.com/@jgchoti/my-journey-through-full-stack-web-development-at-hackyourfuture-b62644d2d37b" className="btn-branding btn-mobile">Read more...</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card mt-5" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:1400/0*93kAzMeXWASd1kUb" alt="Card cap" />
                        <div className="card-body pb-4">
                            <h5 className="card-title">From Tourism to Tech: My Journey Into Creative Problem-Solving</h5>
                            <p className="card-text mb-5">How my background in tourism led to winning a hackathon with an innovative solution that bridges creativity and technology...</p>
                            <a href="https://medium.com/@jgchoti/from-tourism-to-tech-my-journey-into-creative-problem-solving-71909d87ee45" className="btn-branding btn-mobile">Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogBody;