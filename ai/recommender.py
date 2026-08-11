import pandas as pd


# =========================================================
# CONVERT BUDGET TO NUMERIC MAXIMUM
# =========================================================

def convert_budget_to_number(budget):
    """Convert UI budget ranges into a numeric maximum budget."""

    if budget is None:
        return float("inf")

    budget = str(budget).strip()

    budget_map = {
        "Under ₹1 Lakh": 100000,

        "₹1–3 Lakhs": 300000,
        "₹1-3 Lakhs": 300000,

        "₹3–5 Lakhs": 500000,
        "₹3-5 Lakhs": 500000,

        "₹5 Lakhs+": float("inf"),

        "₹5–10 Lakhs": 1000000,
        "₹5-10 Lakhs": 1000000,

        "₹10+ Lakhs": float("inf"),

        "Flexible": float("inf")
    }

    if budget in budget_map:
        return budget_map[budget]

    # Support plain numbers
    try:
        return float(
            budget
            .replace("₹", "")
            .replace(",", "")
            .strip()
        )

    except ValueError:
        return float("inf")


# =========================================================
# LOAD COLLEGE DATABASE
# =========================================================

def load_colleges():

    colleges = pd.read_csv(
        "data/colleges.csv"
    )

    return colleges


# =========================================================
# NORMALIZE TEXT
# =========================================================

def normalize_text(value):

    if value is None:
        return ""

    return str(value).strip().lower()


# =========================================================
# CHECK DEGREE / PROGRAM
# =========================================================

def degree_matches_program(degree, programs):

    degree = normalize_text(degree)

    if not degree:
        return False

    for program in programs:

        program = normalize_text(program)

        if (
            degree == program
            or degree in program
            or program in degree
        ):
            return True

    return False


# =========================================================
# FIND AND SCORE COLLEGES
# =========================================================

def find_colleges_by_stream_degree_location_and_budget(
    colleges,
    stream,
    degree,
    location,
    budget,
    priorities
):

    stream = normalize_text(stream)
    degree = normalize_text(degree)
    location = normalize_text(location)

    budget_value = convert_budget_to_number(
        budget
    )

    priorities = priorities or []

    scored_matches = []


    # =====================================================
    # CHECK EVERY COLLEGE
    # =====================================================

    for _, college in colleges.iterrows():

        # -------------------------------------------------
        # COLLEGE BASIC DATA
        # -------------------------------------------------

        college_stream = normalize_text(
            college.get("stream", "")
        )

        college_city = normalize_text(
            college.get("city", "")
        )

        college_state = normalize_text(
            college.get("state", "")
        )


        # -------------------------------------------------
        # PROGRAMS
        # -------------------------------------------------

        programs = [

            normalize_text(program)

            for program in str(
                college.get("programs", "")
            ).split("|")

        ]


        # -------------------------------------------------
        # ANNUAL FEES
        # -------------------------------------------------

        try:

            fee_value = str(
                college["annual_fees"]
            ).strip()

            if fee_value.upper() in ["N/A", "NA", "", "NONE"]:

                annual_fees = float("inf")

            else:

                annual_fees = float(
                fee_value.replace(",", "")
            )

        except (ValueError, TypeError):
            annual_fees = float("inf")

        
        # =================================================
        # REQUIRED FILTER 1 — STREAM
        # =================================================

        if stream and college_stream != stream:

            continue


        # =================================================
        # REQUIRED FILTER 2 — DEGREE
        # =================================================

        if not degree_matches_program(
            degree,
            programs
        ):

            continue

        # =================================================
        # REQUIRED FILTER 3 — BUDGET
        # =================================================

        # Only reject a college if we KNOW its fee
        # and it is above the student's budget.
        #
        # If fee is N/A, keep the college but don't
        # award the budget score.

        if annual_fees != float("inf"):

            if annual_fees > budget_value:
                continue

        # =================================================
        # REQUIRED FILTER 4 — LOCATION
        # =================================================

        if location and location != college_city:

            continue

        # =================================================
        # BASE SCORE
        # =================================================

        score = 0

        max_score = 0


        # =================================================
        # STREAM SCORE
        # =================================================

        if stream:

            max_score += 25

            if college_stream == stream:

                score += 25


        # =================================================
        # DEGREE SCORE
        # =================================================

        if degree:

            max_score += 35

            if degree_matches_program(
                degree,
                programs
            ):

                score += 35


        # =================================================
        # LOCATION SCORE
        # =================================================

        if location:

            max_score += 20


            # Exact city match
            if location == college_city:

                score += 20


            # Exact state match
            elif location == college_state:

                score += 12


            # Partial city match
            elif (
                location in college_city
                or college_city in location
            ):

                score += 15


        # =================================================
        # BUDGET SCORE
        # =================================================

        max_score += 10

        # Only give budget points when the fee is known
        if (
            annual_fees != float("inf")
                and annual_fees <= budget_value
        ):

            score += 10


        # =================================================
        # PRIORITY SCORE
        # =================================================

        priority_score = 0
        priority_max = 0


        # -------------------------------------------------
        # PLACEMENTS
        # -------------------------------------------------

        if "Placements" in priorities:

            priority_max += 15

            try:

                placement_value = str(
                    college.get("avg_placement", "")
                ).strip()

                if (
                    placement_value.upper()
                    not in ["N/A", "NA", "", "NONE", "NAN"]
                ):

                    placement_value = float(
                        placement_value.replace(",", "")
                )

                if placement_value >= 1000000:
                    priority_score += 15

                elif placement_value >= 700000:
                    priority_score += 12

                elif placement_value >= 500000:
                    priority_score += 9

                elif placement_value > 0:
                    priority_score += 5

            except (ValueError, TypeError):

                pass


        # -------------------------------------------------
        # AFFORDABLE FEES
        # -------------------------------------------------

        if "Affordable Fees" in priorities:

            priority_max += 15

            if annual_fees <= budget_value:

                if annual_fees <= 150000:
                    priority_score += 15

                elif annual_fees <= 250000:
                    priority_score += 12

                elif annual_fees <= 350000:
                    priority_score += 9

                else:
                    priority_score += 5


        # -------------------------------------------------
        # HOSTEL
        # -------------------------------------------------

        if "Hostel" in priorities:

            priority_max += 10

            hostel = normalize_text(
                college.get(
                    "hostel",
                    ""
                )
            )

            if hostel in [
                "yes",
                "available",
                "true"
            ]:

                priority_score += 10


        # -------------------------------------------------
        # LOCATION PRIORITY
        # -------------------------------------------------

        if "Location" in priorities:

            priority_max += 10

            if location == college_city:

                priority_score += 10


        # -------------------------------------------------
        # COURSE OPTIONS
        # -------------------------------------------------

        if "Course Options" in priorities:

            priority_max += 10

            if len(programs) >= 2:

                priority_score += 10


        # -------------------------------------------------
        # CAMPUS LIFE
        # -------------------------------------------------

        if "Campus Life" in priorities:

            # No campus-life field exists in the CSV.
            # Therefore, do not invent a score.

            pass


        # =================================================
        # ADD PRIORITY SCORE
        # =================================================

        score += priority_score
        max_score += priority_max


        # =================================================
        # NORMALIZE SCORE TO 100
        # =================================================

        if max_score > 0:

            match_percentage = round(
                (score / max_score) * 100
            )

        else:

            match_percentage = 0


        # =================================================
        # SAVE MATCH
        # =================================================

        scored_matches.append({

            "college": college,

            "score": match_percentage

        })


    # =====================================================
    # SORT BEST MATCH FIRST
    # =====================================================

    scored_matches.sort(

        key=lambda item: item["score"],

        reverse=True

    )


    # =====================================================
    # RETURN TOP 10
    # =====================================================

    return scored_matches[:10]


# =========================================================
# TEST
# =========================================================

if __name__ == "__main__":

    colleges = load_colleges()


    # -----------------------------------------------------
    # TEST STUDENT
    # -----------------------------------------------------

    stream = "Science"

    degree = "B.Tech CSE"

    location = "Pune"

    budget = "₹1–3 Lakhs"

    priorities = [

        "Placements",

        "Affordable Fees"

    ]


    # -----------------------------------------------------
    # FIND MATCHES
    # -----------------------------------------------------

    matches = (
        find_colleges_by_stream_degree_location_and_budget(

            colleges,

            stream,

            degree,

            location,

            budget,

            priorities

        )
    )


    # -----------------------------------------------------
    # DISPLAY
    # -----------------------------------------------------

    print("\nCollege Search")

    print("=" * 60)

    print("Stream    :", stream)

    print("Degree    :", degree)

    print("Location  :", location)

    print("Budget    :", budget)

    print("Priorities:", priorities)

    print("\nMatching colleges:")

    print("-" * 60)


    if matches:

        for result in matches:

            college = result["college"]

            score = result["score"]


            print(
                "College:",
                college["college_name"]
            )

            print(
                "Location:",
                college["city"],
                college["state"]
            )

            print(
                "Programs:",
                college["programs"]
            )

            print(
                "Fees:",
                college["annual_fees"]
            )

            print(
                "Average Placement:",
                college["avg_placement"]
            )

            print(
                "Match:",
                str(score) + "%"
            )

            print("-" * 60)


    else:

        print(
            "No matching colleges found."
        )