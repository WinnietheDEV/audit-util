function findCombinations(nums, target) {
  const result = [];

  function findCombination(start, path, target) {
      if (target === 0) {
          result.push([...path]);
          return;
      }

      for (let i = start; i < nums.length; i++) {
          if (nums[i] > target) continue; // Skip if the number is greater than the remaining target
          path.push(nums[i]);
          findCombination(i + 1, path, target - nums[i]); // Move to the next element
          if (result.length > 0) {
            return;
          }
          path.pop();
      }
  }

  findCombination(0, [], target);
  return result;
}

// Example usage:
const array = [2175.00, 1173.00, 379.50, 465.75, 310.5, 465.75, 465.75, 5692.50, 4133.10, 3220.50, 9480.00, 3270, 2346.00, 4015.80, 46816.50, 2242.50, 1483.5, 208, 7080, 8266.20, 1896, 14952.30, 570, 82237.65, 2556.45, 1656, 762.00, 5655.00, 8848.00, 28089.90, 2832, 4140.00, 627, 12127.50, 1490.40, 679.65]

const target = 54190.50;
const result = findCombinations(array, target);
console.log(result); // Output: [ [ 2, 3, 2, 2 ], [ 2, 7 ], [ 3, 6 ] ]


