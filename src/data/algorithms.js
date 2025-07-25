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
        name: "Bubble Sort",
        path: "/sorting/bubble-sort",
        description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        complexity: "O(n^2)",
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