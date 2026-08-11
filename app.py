from flask import Flask, render_template, request, jsonify
from ai.gemini import ask_campus_ai
from ai.recommender import (
    load_colleges,
    find_colleges_by_stream_degree_location_and_budget
)
app = Flask(__name__)

colleges = load_colleges()

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/advisor", methods=["POST"])
def advisor():

    data = request.get_json()

    education = data.get("education")
    stream = data.get("stream")
    field = data.get("field")
    degree = data.get("degree")
    budget = data.get("budget")
    location = data.get("location")
    priorities = data.get("priorities", [])


    print("\n" + "=" * 50)
    print("AI COLLEGE ADVISOR - STUDENT PROFILE")
    print("=" * 50)

    print("Education :", education)
    print("Stream    :", stream)
    print("Field     :", field)
    print("Degree    :", degree)
    print("Budget    :", budget)
    print("Location  :", location)
    print("Priorities:", priorities)

    print("=" * 50)


    return jsonify({

        "success": True,

        "message":
            "Student profile received successfully!",

        "profile": {

            "education": education,

            "stream": stream,

            "field": field,

            "degree": degree,

            "budget": budget,

            "location": location,

            "priorities": priorities

        }

    })

@app.route("/api/recommend", methods=["POST"])
def recommend():

    data = request.get_json()

    stream = data.get("stream", "")
    degree = data.get("degree", "")
    location = data.get("location", "")
    budget = data.get("budget", 0)
    priorities = data.get("priorities", [])

    try:

        matches = find_colleges_by_stream_degree_location_and_budget(
            colleges,
            stream,
            degree,
            location,
            budget,
            priorities
        )

        results = []

        for result in matches:

            college = result["college"]
            score = result["score"]

            results.append({
                "college_name": college["college_name"],
                "city": college["city"],
                "state": college["state"],
                "college_type": college["college_type"],
                "stream": college["stream"],
                "programs": str(college["programs"]).split("|"),
                "annual_fees": college["annual_fees"],
                "avg_placement": college["avg_placement"],
                "highest_placement": college["highest_placement"],
                "eligibility": college["eligibility"],
                "hostel": college["hostel"],
                "website": college["website"],
                "match_score": score
            })

        return jsonify({
            "success": True,
            "count": len(results),
            "results": results
        })

    except Exception as e:

        print("Recommendation Error:", e)

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@app.route("/api/chat", methods=["POST"])
def chat():

    data = request.get_json()

    message = data.get("message", "").strip()

    student_profile = data.get(
        "studentProfile",
        {}
    )

    if not message:

        return jsonify({
            "success": False,
            "error": "Message is empty."
        }), 400

    try:

        reply = ask_campus_ai(
            message,
            student_profile
        )

        return jsonify({

            "success": True,

            "reply": reply

        })

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")
        print("Error Type:", type(e).__name__)
        print("Error:", repr(e))
        print("==================================\n")

        return jsonify({

            "success": False,

            "error": str(e)

        }), 500

if __name__ == "__main__":
    app.run(debug=True)