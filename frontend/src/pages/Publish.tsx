import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="mt-8 flex justify-center w-full">
    <div className="w-full max-w-screen-md">
            <input onChange={(e)=>{
                setTitle(e.target.value);
            }} type="text" placeholder="Title" className="focus:outline-none block w-full text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 p-4" style={{padding: "5px", marginBottom: "10px"}} />
        <TextEditor onChange={(e) => {
            setDescription(e.target.value)
        }} />
        <button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
            }, {
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
        }} type="button" style={{marginTop: "10px"}} className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3">
            Publish
        </button>
    </div>
    </div>
    </div>
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div>
        <div>
        <textarea onChange={onChange} id="message" rows={4} className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        
        </div>
    </div>
}