import React, { useState, useEffect } from "react";
import { getHeapSortAnimations } from "../utils/sort/getHeapSortAnimations";

const ANIMATION_SPEED_MS = 50;
const BAR_COUNT = 30;
const MAX_BAR_VALUE = 100;

export default function HeapSort() {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);

    // state for highlighting the bar during sorting
    const [comparisonIndices, setComparisonIndices] = useState([]);
    const [swapIndices, setSwapIndices] = useState([]);
    const [largestIndex, setLargestIndex] = useState(-1);
    const [sortedIndices, setSortedIndices] = useState([]);

    const generateRandomArray = () => {
        setIsSorting(false);
        setIsSorted(false);
        setComparisonIndices([]);
        setSwapIndices([]);
        setLargestIndex(-1);
        setSortedIndices([]);
        const newArray = Array.from({ length: BAR_COUNT }, () => Math.floor(Math.random() * MAX_BAR_VALUE) + 5 )
        setArray(newArray);
    }

    useEffect(() => {
        generateRandomArray();
    }, [])

    const handleSort = () => {
        if (isSorting || isSorted) return;

        setIsSorting(true);
        const animations = getHeapSortAnimations(array);
        const newSortedIndices = [];

        animations.forEach((step, i) => {
            setTimeout(() => {
                setArray(step.arrayState);
                setComparisonIndices(step.comparison || []);
                setSwapIndices(step.swap || []);
                setLargestIndex(step.largest || -1);
                if (step.sortedIndex !== undefined) {
                    newSortedIndices.push(step.sortedIndex);
                    setSortedIndices([...newSortedIndices])
                }

                // if animation is completed
                if (i === animations.length - 1) {
                    setIsSorting(false);
                    setIsSorted(true);
                    setComparisonIndices([]);
                    setSwapIndices([]);
                    setLargestIndex(-1);
                }
            }, i * ANIMATION_SPEED_MS)
        })
    }

    const getBarColor = (index) => {
        if (sortedIndices.includes(index)) {
            return "bg-green-500"; //Sorted bar color
        }

        if (index === largestIndex) {
            return "bg-orange-500"; // largest element identified color
        }

        if (swapIndices.includes(index)) {
            return "bg-red-500" // swapping bar color
        }

        if (comparisonIndices.includes(index)) {
            return "bg-yellow-500"; // comparing bar color
        }
        return "bg-sky-500"; // default bar color
    }

    return (
        <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-4">Heap Sort</h1>
            <p className="mb-4 font-mono text-lg text-gray-400">Time Complexity: O(n log n)</p>
            
            <div className="flex space-x-4 mb-8">
                <button onClick={generateRandomArray} disabled={isSorting} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md disabled:bg-gray-500">
                    Generate New Array
                </button>
                <button onClick={handleSort} disabled={isSorting || isSorted} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md disabled:bg-gray-500">
                    Sort
                </button>
            </div>

            <div className="flex items-end h-96 w-full max-w-4xl justify-center space-x-1">
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className={`w-full rounded-t-sm transition-all duration-150 ${getBarColor(idx)}`}
                        style={{ height: `${value / MAX_BAR_VALUE * 100}%` }}
                    ></div>
                ))}
            </div>

             <div className="flex space-x-4 mt-8 text-sm">
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-sky-500 rounded-sm"></div>Default</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-yellow-400 rounded-sm"></div>Comparing</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-orange-500 rounded-sm"></div>Largest</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-red-500 rounded-sm"></div>Swapping</div>
                <div className="flex items-center"><div className="w-4 h-4 mr-2 bg-green-500 rounded-sm"></div>Sorted</div>
            </div>
        </div>
    )
}