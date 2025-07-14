import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import CustomDatePicker from "@/Components/CustomDatePicker";
import { MainContext } from "@/Provider/MainProvider";

const MyTasks = () => {
    const { setOpenModal } = useContext(MainContext);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    My Tasks
                </h2>
            }
        >
            <div className="h-full border border-black flex items-center justify-center">
                <div className="container max-w-7xl h-full border border-yellow-500 flex">
                    <div className="w-2/3 border border-green-500 flex flex-col p-5">
                        <div className="flex justify-center">
                            <div className="bg-white rounded-lg shadow-sm w-full p-5">
                                <div className="">
                                    <input
                                        type="text"
                                        name="create_task"
                                        id="create_task"
                                        placeholder="Type something..."
                                        className="px-1 w-full border-0 focus:border-b-2 border-blue-500 focus:ring-0"
                                    />
                                    <hr />

                                    <div className="h-64"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 border border-blue-500 flex justify-center p-5">
                        <div className="bg-white rounded-lg shadow-sm w-full p-5 flex flex-col">
                            <div className="border rounded-md mb-5">
                                <button
                                    type="button"
                                    className="p-3 w-full h-16 hover:bg-gray-200 transition-all text-lg flex"
                                    onClick={() => setOpenModal(true)}
                                >
                                    <div className="w-1/3 h-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                    <div className="w-2/3 flex h-full items-center">
                                        create task
                                    </div>
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3">
                                    Sort Tasks
                                </h3>

                                {/* <h4 className="text-base font-semibold mb-2">
                                    By Status
                                </h4> */}

                                <table className="table-auto w-full">
                                    <tr>
                                        <td className="w-2/3 flex text-lg">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="all"
                                                    id="all"
                                                />
                                            </div>
                                            <label
                                                htmlFor="all"
                                                className="ms-3 select-none"
                                            >
                                                All Tasks
                                            </label>
                                        </td>
                                        <td className="w-1/3">(12340)</td>
                                    </tr>
                                    <tr>
                                        <td className="w-2/3 flex text-lg">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="pending"
                                                    id="pending"
                                                />
                                            </div>
                                            <label
                                                htmlFor="pending"
                                                className="ms-3 select-none"
                                            >
                                                Pending
                                            </label>
                                        </td>
                                        <td className="w-1/3">(053423)</td>
                                    </tr>
                                    <tr>
                                        <td className="w-2/3 flex text-lg">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="inprogress"
                                                    id="inprogress"
                                                />
                                            </div>
                                            <label
                                                htmlFor="inprogress"
                                                className="ms-3 select-none"
                                            >
                                                In Progress
                                            </label>
                                        </td>
                                        <td className="w-1/3">(035)</td>
                                    </tr>
                                    <tr>
                                        <td className="w-2/3 flex text-lg">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="completed"
                                                    id="completed"
                                                />
                                            </div>
                                            <label
                                                htmlFor="completed"
                                                className="ms-3 select-none"
                                            >
                                                Completed
                                            </label>
                                        </td>
                                        <td className="w-1/3">(0)</td>
                                    </tr>
                                </table>
                            </div>

                            <h3 className="text-lg font-bold mb-2 mt-5">
                                History
                            </h3>
                            <div className="flex-1 overflow-y-auto">
                                <CustomDatePicker />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
