# Period Health Tracker (Advanced Version)

import datetime

print(" Period Health Tracker \n")

# Input date
year = int(input("Enter last period year (YYYY): "))
month = int(input("Enter last period month (1-12): "))
day = int(input("Enter last period day (1-31): "))

cycle = int(input("Enter cycle length (e.g. 28): "))

# Create date object
last_date = datetime.date(year, month, day)

# Predict next period
next_period = last_date + datetime.timedelta(days=cycle)

# Calculate today's date
today = datetime.date.today()

# Days passed since last period
days_passed = (today - last_date).days

# Determine phase
if days_passed < 5:
    phase = " Menstrual Phase"
elif days_passed < 14:
    phase = " Follicular Phase"
elif days_passed < 16:
    phase = " Ovulation Phase"
else:
    phase = " Luteal Phase"

# Fertile window (approx)
fertile_start = last_date + datetime.timedelta(days=12)
fertile_end = last_date + datetime.timedelta(days=16)

# Output
print("\n Next Period Date:", next_period)
print(" Current Phase:", phase)
print(" Fertile Window:", fertile_start, "to", fertile_end)

# Extra info
if today >= fertile_start and today <= fertile_end:
    print(" You are currently in fertile days")
else:
    print(" You are not in fertile days")

print("\nStay healthy")
