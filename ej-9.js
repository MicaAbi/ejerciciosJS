function sumTwoSmallest(nums) {

    let smaller;
    let secondSmaller;

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] >= 0) {

            let menores = 0;

            for(let j = 0; j < nums.length; j++) {
    
                if(i != j && nums[j] >= 0) {
                    nums[i] > nums[j]? menores++ : null
                }
    
            }
    
            if(menores == 0) {
                smaller = nums[i]
            } else if (menores == 1) {
                secondSmaller = nums[i]
            }

        }
    }

    return smaller + secondSmaller

}

console.log(sumTwoSmallest([-5, -3, 5, 4, 1]));

