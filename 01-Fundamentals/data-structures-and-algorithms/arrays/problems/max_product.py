def maxProduct(nums: list[int]) -> int:
    ans = float('-inf')
    curr = 1

    for i in range(len(nums)):
        curr *= nums[i]
        ans = max(ans, curr)
        if curr == 0:
            curr = 1

    curr = 1
    j = len(nums) - 1
    while j >= 0:
        curr *= nums[j]
        ans = max(ans, curr)
        if curr == 0:
            curr = 1
        j -= 1

    return ans


nums = [-2, 1, 4, 5, 0, -3, 4, 6, 1, -2]
print(maxProduct(nums))
