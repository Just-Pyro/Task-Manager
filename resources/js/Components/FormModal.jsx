import { MainContext } from "@/Provider/MainProvider";
import React, { useContext, useEffect, useState } from "react";

const FormModal = () => {
    const [task, setTask] = useState("");
    const [dueTime, setDueTime] = useState("");

    const { setOpenModal } = useContext(MainContext);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        setDueTime(`${hours}:${minutes}`);
    }, []);

    return (
        <>
            {/* Backdrop Blur */}
            <div className="fixed top-0 z-40 w-full h-full inset-0 bg-black/5 backdrop-blur-sm"></div>

            {/* Modal Wrapper */}
            <div
                className="fixed top-0 z-50 w-full h-full flex items-center justify-center"
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        setOpenModal(false);
                    }
                }}
            >
                {/* Modal */}
                <div className="bg-white rounded-md p-7 w-[500px]">
                    <form action="" className="flex flex-col gap-3">
                        <label htmlFor="task" className="text-lg font-semibold">
                            Task
                        </label>
                        <textarea
                            type="text"
                            name="task"
                            id="task"
                            className="form-field resize-none"
                            placeholder="Type here..."
                            rows={5}
                        />
                        <label htmlFor="etc" className="text-lg font-semibold">
                            Due date
                        </label>
                        <div className="flex justify-between">
                            <input
                                type="time"
                                name="etc"
                                id="etc"
                                className="form-field"
                                onChange={(e) => setDueTime(e.target.value)}
                                value={dueTime}
                            />
                            <button type="button" className="submit-task-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormModal;
