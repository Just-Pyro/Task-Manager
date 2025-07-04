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
            <div>Hello</div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
