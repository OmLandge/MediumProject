import { Circle } from "./BlogCard"

export const Skeleton = () => {
    return <div role="status" className="animate-pulse">

<div className="border-b border-slate-200 mt-4 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
        <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
            <div className="font-extralight px-2 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
    </div>

    </div>
    
    
}