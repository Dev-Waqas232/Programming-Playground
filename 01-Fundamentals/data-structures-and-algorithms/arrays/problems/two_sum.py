def twoSum(nums: list[int], target: int) -> list[int]:
    ans = []
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                ans.append(i)
                ans.append(j)
                return ans


nums = [2, 7, 11, 15], target = 9
print(twoSum(nums, target))
