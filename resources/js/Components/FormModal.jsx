import { MainContext } from "@/Provider/MainProvider";
import React, { useContext, useState } from "react";

const FormModal = () => {
    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState();

    const { setOpenModal } = useContext(MainContext);

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
                        <textarea
                            type="text"
                            name="task"
                            id="task"
                            placeholder="Type here..."
                        />
                        <label htmlFor="etc">Due date</label>
                        <input type="time" name="etc" id="etc" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormModal;
