import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const MyTasks = () => {
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
                            <div className="bg-white rounded-lg shadow-sm w-full">
                                Tasks here
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 border border-blue-500 flex justify-center p-5">
                        <div className="bg-white rounded-lg shadow-sm w-full">
                            Filters Here
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
