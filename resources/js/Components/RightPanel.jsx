import React, { useContext } from "react";
import CustomDatePicker from "./CustomDatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "@/Provider/MainProvider";

const RightPanel = () => {
    const { setOpenModal } = useContext(MainContext);
    return (
        <>
            {/* Create Button */}
            <div className="rounded-md m-5 bg-white shadow-sm">
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

            {/* Sort Tasks */}
            <div className="bg-white m-5 rounded-md shadow-sm p-5">
                <h3 className="text-lg font-bold mb-3">Sort Tasks</h3>

                <table className="table-auto w-full">
                    <tr>
                        <td className="w-2/3 flex text-lg">
                            <div className="flex items-center">
                                <input type="checkbox" name="all" id="all" />
                            </div>
                            <label htmlFor="all" className="ms-3 select-none">
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

            {/* History */}
            <div className="bg-white rounded-md shadow-sm m-5 p-5">
                <h3 className="text-lg font-bold mb-2">History</h3>

                <div className="flex-1 overflow-y-auto">
                    <CustomDatePicker />
                </div>
            </div>
        </>
    );
};

export default RightPanel;
