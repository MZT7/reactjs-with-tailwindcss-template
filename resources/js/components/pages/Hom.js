import Button from "../ads/Button";
import Bg from "../img/deli.jpg";
// import React from "react";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
// import Button from "../ads/Button";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axios from "../api/Axios";

import React from "react";

const Hom = () => {
    return (
        <div
            className="min-h-full bg-gray-200"
            // style={{
            //     backgroundRepeat: `no-repeat`,
            //     backgroundPosition: `center`,
            //     backgroundSize: `auto`,
            //     backgroundImage: `url(
            //        ${Bg}
            //     )`,
            // }}
        >
            <div className="container pt-32 lg:pt-40 px-6 mx-auto flex flex-wrap flex-col lg:flex-row items-center">
                {/* <!--Left Col--> */}
                <div className="flex flex-col w-full lg:w-2/5 justify-center xl:items-start overflow-y-hidden mx-auto text-right">
                    <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">
                        Connecting you to your logistics
                    </h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center slide-in-bottom-subtitle">
                        1..2..3.. delifast.. get your logistics on the move and
                        tracking ID in 4 Clicks
                    </p>

                    {/* <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
                        Download our app:
                    </p> */}
                    <div className="w-full lg:w-3/5 py-6 overflow-y-hidden mx-auto lg:hidden">
                        <img
                            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom h-3/4 max-h-80 object-contain"
                            src={Bg}
                        />
                    </div>
                    <div className="lg:flex w-full lg:justify-center pb-24 lg:pb-0 fade-in text-center">
                        {/* <img
                            src="App Store.svg"
                            class="h-12 pr-4 bounce-top-icons"
                        /> */}

                        {/* <Link to="/register">
                            <Button>Register</Button>
                        </Link> */}
                        <Link to="/login">
                            <Button>Get Started</Button>
                        </Link>

                        {/* <img
                            src="Play Store.svg"
                            class="h-12 bounce-top-icons"
                        /> */}
                    </div>
                </div>

                {/* <!--Right Col--> */}
                <div className="w-full lg:w-3/5 py-6 overflow-y-hidden mx-auto hidden lg:flex">
                    <img
                        className="w-5/6 mx-auto lg:mr-0 slide-in-bottom h-3/4 max-h-80 object-contain bg-grey-300"
                        src={Bg}
                    />
                </div>
            </div>

            <section className="container mx-auto px-6 p-10 rounded-lg my-5">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Our Services
                </h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">
                            For your business
                        </h4>
                        <p className="text-gray-600 mb-8">
                            We help you expand your customer's reach from Local
                            to statewide by connecting you to more customers
                            through the best logistics companies that suits you
                            and your customer's cost and needs, we assingn you
                            the closest bike to pick up your customer's order
                            and provide Real time tracking to ensure the fastest
                            and most convenient delivery you can get.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* <img src="assets/health.svg" alt="Monitoring" /> */}
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        {/* <img src="assets/report.svg" alt="Reporting" /> */}
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">
                            For our Logistics Partners
                        </h4>
                        <div>
                            <p className="text-gray-600 mb-8">
                                We got You! We guarantee you more orders and
                                more customers, we provide you with real time
                                tracking to put your mind at ease and keep you
                                up to speed with your bikes and delivery and
                                also handle your delivery hassles by providing
                                you a per kilometer pricing that is good for you
                                and convenient for the your Customers!
                            </p>
                        </div>

                        {/* <img src="assets/sync.svg" alt="Syncing" /> */}
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">
                            And to our Customers
                        </h4>
                        <p className="text-gray-600 mb-8">
                            You're our heart! We understand you, whether you've
                            a once in a while delivery needs or frequently, we
                            are here for you, giving you good rates and
                            convenience with our real time tracking, we know
                            where a Man's treasure is his heart's there too, you
                            can monitor your heart on the way and we are one
                            call away with our always available customer's
                            support!
                        </p>
                    </div>
                    <div className="w-full md:w-1/2"></div>
                </div>
            </section>
        </div>
    );
};

export default Hom;
