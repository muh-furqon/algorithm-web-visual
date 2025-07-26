function heapify(arr, n, i, animations) {
    //set the largest as root
    let largest = i;

    // left index = 2 * i + 1;
    const l = 2 * i + 1;

    // right index = 2 * i + 2;
    const r = 2 * i + 2;

    // push animation of the node being compared
    animations.push({ comparison: [i, l, r], swap: [], arrayState: [...arr] })

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // push animation to show the largest element identified
    animations.push({ comparison: [i, l, r], largest: largest, swap: [], arrayState: [...arr] })

    // if the largest is not the root
    if (largest !== i) {
        //push animation for the swap
        animations.push({ comparison: [], largest: -1, swap: [i, largest], arrayState: [...arr] });

        // swap the root with the largest element
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // repeat the heapify process for the affected subtree
        heapify(arr, n, largest, animations);
    }
}

export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;

    const arr = [...array]
    let n = arr.length;

    // Build a maxheap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, animations);
    }

    // extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // highlight the swap operation
        animations.push({ comparison: [], largest: -1, swap: [0, i], arrayState: [...arr] })

        // call max heapify on the reduced heap
        heapify(arr, i, 0, animations)
    }

    // push the final sorted array state
    animations.push({ comparison: [], largest: -1, swap: [], sortedIndex: 0, arrayState: [...arr] });

    return animations;
}