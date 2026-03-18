import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>ABOUT Page</h1>
            <div>
                Route path='/about' element=AboutPage
                <p>here, the path means -- the url name extended after the page Name</p>
                <ul>
                    <li>"/" means index/main/home page</li>
                    <li>"/anyName" means any page name with it</li>
                    <li>"*" means No Page [any route that isnt defined will go to the specified element and make a error message ] -- make sure this is the past page</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;