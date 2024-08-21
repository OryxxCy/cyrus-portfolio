import React from 'react';

const Background = () => {
    return(
        <section id='background' className="py-10 w-10/12 mx-auto">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-8">
                    <h3 className="text-2xl font-semibold border-b-2 pb-2">Education</h3>
                        <div className="mt-4">
                            <p className="font-semibold">Business Information Technology</p>
                            <p>August 2022 – August 2024</p>
                            <p>
                            <a href="https://www.rrc.ca/" className="hover:underline text-blue-500">
                                Red River College Polytechnic
                            </a>
                            </p>
                            <p>Winnipeg, Manitoba</p>
                        </div>
                    </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold border-b-2 pb-2">Experience</h3>
                    <div className="mt-4">
                        <p className="font-semibold">Web Developer (Co-op)</p>
                        <p>April 2024 – August 2024</p>
                        <p>
                        <a href="https://www.rrc.ca/ace/" className="hover:underline text-blue-500">
                            Ace Project Space, Red River College Polytechnic
                        </a>
                        </p>
                        <p>Winnipeg, Manitoba</p> 
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Digital Press and Jet Varnish Operator</p>
                        <p>June 2021 – June 2023</p>
                        <p>
                        <a href="https://www.friesens.com/" className="hover:underline text-blue-500">
                            Friesens Corporation
                        </a>
                        </p>
                        <p>Altona, Manitoba</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Plate Maker and Jet Varnish Operator</p>
                        <p>May 2019 – June 2021</p>
                        <p>
                        <a href="https://www.friesens.com/" className="hover:underline text-blue-500">
                            Friesens Corporation
                        </a>
                        </p>
                        <p>Altona, Manitoba</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background;