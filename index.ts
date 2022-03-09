function isContain(parent: number[][] | any, child: number[]): boolean {
  if (parent.length === 0) return false
  for (let item of parent) {
    for (let i = 0; i < 3; i++) {
      const subItem: number = item[i]
      if (!child.includes(subItem)) break
      if (child.includes(subItem) && i === 2) return true
    }
  }
  return false
}

function twoSum(nums: number[], target: number, passIndex: number): number[][] {
  const result: number[][] = []
  const map = new Map()
  for (let i = passIndex + 1; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result[result.length] = [map.get(nums[i]), nums[i]]
      continue
    }
    map.set(target - nums[i], nums[i])
  }
  return result
}

function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  for (let i = 0; i < nums.length; i++) {

    const subResult: number[][] = twoSum(nums, 0 - nums[i], i)
    if (subResult.length > 0) {
      subResult.forEach(item => {
        item.push(nums[i])
        // console.log(result);

        if (!isContain(result, item)) result[result.length] = item
      })
    }
  }

  return result
}

// const nums: number[] = [100, 200, 300, -3, -2, 5, 9, 3, 0, -9, -2, -7]
const nums: number[] = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(nums))
console.log(isContain([[0, 1, -1], [2, -1, -1]], [-1, 1, 0]))

