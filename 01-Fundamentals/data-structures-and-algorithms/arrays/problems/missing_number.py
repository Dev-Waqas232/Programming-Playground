nums = [3, 0, 1]


def missingNumber(nums: list[int]) -> int:
    nums.sort()
    for i in range(len(nums)):
        if i != nums[i]:
            return i
    return len(nums)


print(missingNumber(nums))
