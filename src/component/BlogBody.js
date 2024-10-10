import React from 'react';


function BlogBody() {
    return (
        <div className="container content-container">
            <div className='description'><h1 className='mt-3'>Blogs</h1>
                <h2>Recording My Coding Experiences and Learnings</h2   ></div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="card mt-5 mx-4" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:1364/format:webp/1*JbawEWcEq1FxgVAJuxhsHQ.png" alt="Card cap" />
                        <div className="card-body pb-4">
                            <h5 className="card-title">Solving a Language-Switching Nav Bar Using Only CSS on Squarespace</h5>
                            <p className="card-text mb-5">As a web developer, my goal is to find creative, cost-effective solutions for my clients. Recently, I was tasked ...</p>
                            <a href="https://medium.com/@jgchoti/solving-a-language-switching-nav-bar-using-only-css-on-squarespace-add859c95ef9" className="btn-branding btn-mobile">Read more ...</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 mt-5">
                    <img className="blog-img img-fluid" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHY5eWNoaGN6d2dkZWJxNWgwYzFlaDAwY3F3OTVyYnZzbDl5OW04dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ule4vhcY1xEKQ/giphy.webp" alt="chotirat profile" />
                </div>
            </div>
        </div>
    );
}

export default BlogBody;
