import RightPanel from "@/Components/RightPanel";
import TaskList from "@/Components/TaskList";
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
                    <TaskList page={"mytasks"} />

                    <div className="w-1/3 flex flex-col h-full overflow-y-auto overflow-x-hidden">
                        <RightPanel />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyTasks;
