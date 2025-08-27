import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="flex border bg-white w-1/2 h-[500px] p-4 pr-6 shadow-md sm:rounded-lg">
                <div className="w-1/2 h-full">
                    <Link href="/">
                        <ApplicationLogo className="h-full object-contain fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="mt-6 w-1/2 flex flex-col justify-center h-full overflow-hidden ps-6 p-4 sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
