import React from "react";
import Footer from "../../../common/footer/Fouter";
import Header from "../../../common/header/Header";
import './services.css';

const Services= ()=>  {
    return (
        <>
        <Header/>
        <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">Why to choice us?</h1>
                <p className="heading p__color">
                   There are many services that we offer you
                </p>
                <p className="heading p__color">
                   We mention the most important ones
                </p>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
               


                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Best teacher ever </h1>
                                <p className="p service__text p__color">
                                     We choose for you  .
                                </p>
                                <p className="p service__text p__color">
                                    the best teachers,
                                </p>
                                <p className="p service__text p__color">
                                    who have good skills
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
 
                  
                  
                </svg>
                
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Applied workt</h1>
                                <p className="p service__text p__color">
                                     A world in which  we 
                                </p>
                                <p className="p service__text p__color">
                                    embody live applied 
                                </p>
                                <p className="p service__text p__color">
                                    experiences for unity.
                                </p>
                            </div>
                         </div>
                    </div>


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
               <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>

                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Homework</h1>
                                <p className="p service__text p__color">
                                    We test the  student’s
                                </p>
                                <p className="p service__text p__color">
                                  with a series of
                                </p>
                                <p className="p service__text p__color">
                                     tests and calendars
                                </p>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default Services;
 