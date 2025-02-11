def removeElement(nums: list[int], val: int) -> int:
    i, j = 0, len(nums) - 1
    while i <= j:
        if nums[i] != val:
            i += 1
            continue
        if nums[j] == val:
            j -= 1
            continue

        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

    return i


nums = [0, 1, 2, 2, 3, 0, 4, 2]
val = 2
print(removeElement(nums, val))
