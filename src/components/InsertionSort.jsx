import { useState, useEffect } from "react";
import { getInsertionSortAnimations } from "../utils/sort/getInsertionSortAnimations";

const ANIMATION_SPEED_MS = 100;

export default function InsertionSort() {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);

    const [comparisonIndices, setComparisonIndices] = useState([]);
    const [swapIndices, setSwapIndices] = useState([]);

    const resetArray = () => {
        setIsSorting(false);
        setIsSorted(false);
        setComparisonIndices([]);
        setSwapIndices([]);
        const newArray = [];
        for (let i = 0; i < 20; i++) {
            newArray.push(Math.floor(Math.random() * (100 - 5 + 1) + 5))
        }
        setArray(newArray)
    }

    useEffect(() => {
        resetArray();
    }, [])

    const handleSort = () => {
        if (isSorting) return;
        setIsSorting(false);
        setIsSorted(false);
        const animations = getInsertionSortAnimations(array);
        animations.forEach((step, i) => {
            setTimeout(() => {
                setArray(step.arrayState);
                setComparisonIndices(step.comparison);
                setSwapIndices(step.swap)

                if (i === animations.length - 1) {
                    setIsSorting(false);
                    setIsSorted(true);
                    setComparisonIndices([]);
                    setSwapIndices([]);
                }
            }, i * ANIMATION_SPEED_MS)
        })
    }

    return (
        <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-4">Insertion Sort Visualizer</h1>
            
            {/* Controls */}
            <div className="flex space-x-4 mb-8">
                <button 
                    onClick={resetArray}
                    disabled={isSorting}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md disabled:bg-gray-500"
                >
                    Generate New Array
                </button>
                <button 
                    onClick={handleSort}
                    disabled={isSorting || isSorted}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md disabled:bg-gray-500"
                >
                    Sort!
                </button>
            </div>

            {/* Visualization Container */}
            <div className="flex items-end h-96 w-full max-w-4xl justify-center space-x-1">
                {array.map((value, idx) => {
                    // Determine the bar color based on its current state
                    let bgColor = "bg-sky-500"; // Default color
                    if (isSorted) {
                        bgColor = "bg-purple-500"; // Fully sorted
                    } else if (comparisonIndices.includes(idx)) {
                        bgColor = "bg-yellow-500"; // Element being compared/key
                    } else if (swapIndices.includes(idx)) {
                        bgColor = "bg-red-500"; // Element being swapped/shifted
                    }

                    return (
                        <div
                            key={idx}
                            className={`w-full text-center text-xs font-bold text-black rounded-t-sm transition-all duration-150 ${bgColor}`}
                            style={{ height: `${value * 3.5}px` }}
                        >
                            {value}
                        </div>
                    );
                })}
            </div>

             {/* Legend */}
            <div className="flex space-x-6 mt-8 text-sm">
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-sky-500 rounded-sm"></div>Unsorted</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-yellow-500 rounded-sm"></div>Comparing / Key</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-red-500 rounded-sm"></div>Shifting</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-purple-500 rounded-sm"></div>Sorted</div>
            </div>
        </div>
    )
}