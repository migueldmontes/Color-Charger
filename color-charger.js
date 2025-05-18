import React, { useState } from 'react';

const colors = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#6A5ACD", "#FF1493", "#20B2AA", "#FFA500", "#8A2BE2", "#FF4500"];

export default function ColorChanger() {
    const [colorIndex, setColorIndex] = useState(0);

    const handleInputChange = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
            <input type="text" placeholder="Escribe algo..." onChange={handleInputChange} className="mb-4 p-2 border rounded-lg w-80" />
            <div className="w-80 h-80 rounded-xl shadow-xl" style={{ backgroundColor: colors[colorIndex] }}></div>
        </div>
    );
}
