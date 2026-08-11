import pandas as pd

colleges = pd.read_csv("data/colleges.csv")

print("\nCollege Database")
print("=" * 60)

for _, college in colleges.iterrows():

    print("\nCollege:", college["college_name"])
    print("Location:", college["city"], college["state"])
    print("Stream:", college["stream"])
    programs = college["programs"].split("|")

    print("Programs:")

    for program in programs:
        print("  -", program)

print("\nTotal colleges:", len(colleges))