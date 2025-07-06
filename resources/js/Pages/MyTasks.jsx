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
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex h-full border border-green-500 space-x-4">
                        <div className="w-2/3 border border-black p-6 rounded-md">test</div>
                        <div className="w-1/3 border border-black p-6 rounded-md bg-white shadow-sm">test</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
