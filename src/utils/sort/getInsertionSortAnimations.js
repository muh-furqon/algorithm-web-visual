export const getInsertionSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;

    const auxilaryArray = [...array];

    for (let i = 1; i < auxilaryArray.length; i++) {
        let key = auxilaryArray[i];
        let j = i - 1;

        animations.push({
            comparison: [j, i],
            swap: [],
            sorted: false,
            arrayState: [...auxilaryArray]
        })

        while (j >= 0 && auxilaryArray[j] > key) {
            animations.push({
                comparison: [j, i],
                swap: [j + 1, j],
                sorted: false,
                arrayState: [...auxilaryArray]
            });

            auxilaryArray[j + 1] = auxilaryArray[j];
            j = j - 1;

            animations.push({
                comparison: [j, i],
                swap: [],
                sorted: false,
                arrayState: [...auxilaryArray]
            });
        }
        auxilaryArray[j + 1] = key;

        animations.push({
            comparison: [],
            swap: [],
            sorted: false,
            arrayState: [...auxilaryArray]
        })
    }

    animations.push({
        comparison: [],
        swap: [],
        sorted: true,
        arrayState: [...auxilaryArray]
    })

    return animations
}