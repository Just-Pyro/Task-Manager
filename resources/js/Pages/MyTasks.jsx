import RightPanel from "@/Components/RightPanel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

const MyTasks = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    My Tasks
                </h2>
            }
        >
            <div className="h-full flex items-center justify-center">
                <div className="container max-w-7xl h-full flex">
                    <div className="w-2/3 flex flex-col space-y-4">
                        <div className="bg-white rounded-md shadow-sm p-5 m-5 mb-0">
                            <h3 className="text-lg font-bold">Today</h3>
                        </div>

                        <div className="pending rounded-md shadow-sm mx-5 overflow-hidden">
                            <div className="w-[99.5%] h-full bg-white p-5 flex">
                                <div className="w-3/4 flex items-center">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quos tempore, culpa
                                        voluptas repellendus facilis nulla rerum
                                        voluptatibus molestias numquam soluta
                                        maxime suscipit nemo quasi pariatur a?
                                        Minus esse magni eligendi?
                                    </p>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="task-status-btn"
                                    >
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="inprogress rounded-md shadow-sm mx-5 overflow-hidden">
                            <div className="w-[99.5%] h-full bg-white p-5 flex">
                                <div className="w-3/4 flex items-center">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quos tempore, culpa
                                        voluptas repellendus
                                    </p>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="task-status-btn"
                                    >
                                        Start
                                    </button>
                                    {/* <button
                                        type="button"
                                        className="task-status-btn done-btn"
                                    >
                                        Done
                                    </button> */}
                                </div>
                            </div>
                        </div>

                        <div className="completed rounded-md shadow-sm mx-5 overflow-hidden">
                            <div className="w-[99.5%] h-full bg-white p-5 flex">
                                <div className="w-3/4 flex items-center">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quos tempore, culpa
                                    </p>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="task-status-btn"
                                    >
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col h-full overflow-y-auto overflow-x-hidden">
                        <RightPanel />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
