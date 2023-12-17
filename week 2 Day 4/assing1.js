let arr = [45, 100, 65, 11, 98, 78, 1000, 0, 6576876, "45", 98, 14, 78, 35, "98", "10452", "667", 17];

        let numericArr = arr.filter(item => typeof item === 'number' || !isNaN(item)).map(Number);
        if (numericArr.length > 0) {
            let min = Math.min(...numericArr);
            let max = Math.max(...numericArr);

            console.log(`min = ${min}, max = ${max}`);
        } else {
            console.log("No numeric values found in the array.");
        }

        

