import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useFileContext } from "../../hooks/useFileContext";
import { useState } from "react";

function BeginNavbar() {
    const navigate = useNavigate();
    const [result, setResult] = useState(false)
    const [pic, setPic] = useState("")
    const [generatedText, setGeneratedText] = useState("")
    const { dispatch } = useFileContext();
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        console.log((file.name).toString())
        const response = await fetch('http://localhost:5172/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Add this line
            },
            body: JSON.stringify({
                path: file.name
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch result');
        }

        const text = await response.text();
        setGeneratedText(text)
        setPic(URL.createObjectURL(file))
        setResult(true)

    };

    return (
        !result ? <div className="p-24 flex flex-col w-full items-center justify-center overflow-visible">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: [0, 0.3, 0.6, 1], x: 0 }}
                transition={{ duration: 1 }}
                className="w-full"
            >
                <div className="flex flex-row items-center space-x-3">
                    <h1 className="text-white text-[100px] font-custom">Begin!</h1>
                    <div className="bg-white h-1 w-16"></div>
                </div>
            </motion.div>
            <motion.input
                type="file"
                accept="image/*"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{ duration: 2 }}
                className="hidden" // Hide the default file input
                onChange={handleFileChange}
                ref={(input) => input && (input.value = null)} // Reset the input value to allow selecting the same file again
            />
            <motion.button
                onClick={() => document.querySelector('input[type="file"]').click()} // Click the hidden file input when this button is clicked
                className="border-dashed border-4 border-white h-80 w-3/4 rounded-3xl bg-white bg-opacity-10 text-white"
            >
                Select Image
            </motion.button>
        </div>
            :
            <div className="p-10 flex flex-col items-center justify-center space-y-10">
                <img src={pic} alt="Selected" />
                <textarea className="border-dashed border-4 border-white h-80 w-3/4 rounded-3xl bg-white bg-opacity-10 text-white" value={generatedText} readOnly />
            </div>
    )
}

export default BeginNavbar;