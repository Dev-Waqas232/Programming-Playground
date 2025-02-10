temp = []


def input_temp():
    days = int(input("How many day's temperature ? "))
    for i in range(days):
        temp.append(int(input(f"Day {i + 1}'s high temp : ")))


def calculate_average():
    average = sum(temp) / len(temp)

    count = 0
    for num in temp:
        if num > average:
            count = count + 1

    print(f"Average = {average}")
    print(f"{count} day(s) above average")


input_temp()
calculate_average()
