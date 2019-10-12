//O(n*k), n - length of array, k - length of largest number

function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

type Arr = {
    [key: string]: number;
};

export default function radixSort(
    arr: Arr[],
    sortByKey: string,
    order: "DESC" | "ASC"
) {
    let nums = arr.map((obj: Arr) => obj[sortByKey] || 0);
    let maxDigitCount = mostDigits(nums as number[]);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets: Arr[][] = Array.from({length: 10}, () => []);

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit((arr[i][sortByKey] as number) || 0, k);
            digitBuckets[digit].push(arr[i]);
        }

        //eslint-disable-next-line
        (function flatten() {
            arr = [];
            const cb = (bucket: Arr[], current: Arr[]): Arr[] =>
                (arr = bucket.concat(current));

            return order === "ASC"
                ? digitBuckets.reduce(cb)
                : digitBuckets.reduceRight(cb);
        })();
    }

    return arr;
}
