// src/data/algorithms.js
export const algorithmData = {
    sorting: [
      {
        name: "Insertion Sort",
        path: "/sorting/insertion-sort",
        description: "Builds the final sorted array one item at a time.",
        complexity: "O(n^2)",
      },
      {
        name: "Heap Sort",
        path: "/sorting/heap-sort",
        description: "A comparison-based sort that uses a Binary Heap data structure to build a max-heap and then repeatedly extracts the maximum element.",
        complexity: "O(n log n)",
      },
      {
        name: "Merge Sort",
        path: "/sorting/merge-sort",
        description: "A divide-and-conquer algorithm that splits the array and merges it back.",
        complexity: "O(n log n)",
      },
    ],
    searching: [
      {
        name: "Linear Search",
        path: "/searching/linear-search",
        description: "Sequentially checks each element of the list until a match is found.",
        complexity: "O(n)",
      },
      {
        name: "Binary Search",
        path: "/searching/binary-search",
        description: "Finds the position of a target value within a sorted array.",
        complexity: "O(log n)",
      },
    ],
    // Add more categories like "Pathfinding", "Data Structures", etc.
  };