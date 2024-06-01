import { useFileContext } from "../../hooks/useFileContext";
import { useEffect, useState } from "react";

function Results() {
    const { image, dispatch } = useFileContext();
    console.log(image)
    // Define a state to hold the result of the async operation
    const [resultText, setResultText] = useState("");
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await fetch('/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream' // Set appropriate content type for binary data
                    },
                    body: image // Assuming imageData is your Uint8Array containing the binary image data
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch result');
                }

                const text = await response.text();
                setResultText(text);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        handleSubmit()
    }, [])


    return (
        <div className="p-10 flex flex-col items-center justify-center space-y-10">
            <img src={image} alt="Selected" />
            <textarea className="border-dashed border-4 border-white h-80 w-3/4 rounded-3xl bg-white bg-opacity-10 text-white" value={resultText} readOnly />
        </div>
    )
}

export default Results;
