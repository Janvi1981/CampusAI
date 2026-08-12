// =========================================================
// AI COLLEGE ADVISOR
// =========================================================

// =========================================================
// STUDENT PROFILE
// =========================================================

let studentProfile = {
    education: "",
    stream: "",
    field: "",
    degree: "",
    budget: "",
    location: "",
    priorities: []
};

// =========================================================
// FIELD OPTIONS
// =========================================================

const fieldOptions = {

    Science: [

        {
            name: "Engineering",
            description: "Technology, engineering & problem solving",
            icon: "⚙️"
        },

        {
            name: "Computer Science & IT",
            description: "Coding, software, computers & technology",
            icon: "💻"
        },

        {
            name: "Medical",
            description: "Medicine, healthcare & life sciences",
            icon: "🩺"
        },

        {
            name: "Pure Sciences",
            description: "Physics, Chemistry, Mathematics & Biology",
            icon: "🔬"
        },

        {
            name: "Architecture",
            description: "Design, buildings & creative spaces",
            icon: "🏛️"
        }

    ],


    Commerce: [

        {
            name: "Business & Management",
            description: "Business, management & entrepreneurship",
            icon: "💼"
        },

        {
            name: "Accounting & Finance",
            description: "Accounting, banking, finance & taxation",
            icon: "💰"
        },

        {
            name: "Economics",
            description: "Economics, markets & financial systems",
            icon: "📊"
        },

        {
            name: "Computer Applications",
            description: "Technology, applications & business IT",
            icon: "💻"
        }

    ],


    Arts: [

        {
            name: "Humanities & Social Sciences",
            description: "History, sociology, political science & society",
            icon: "🌍"
        },

        {
            name: "Psychology",
            description: "Human behaviour, mind & mental processes",
            icon: "🧠"
        },

        {
            name: "Design & Fine Arts",
            description: "Art, design, creativity & visual communication",
            icon: "🎨"
        },

        {
            name: "Media & Communication",
            description: "Journalism, media, advertising & communication",
            icon: "🎥"
        },

        {
            name: "Law",
            description: "Legal studies, justice & public policy",
            icon: "⚖️"
        }

    ]

};


// =========================================================
// DEGREE / PROGRAM OPTIONS
// =========================================================

const degreeOptions = {

    "Engineering": [

        [
            "B.Tech",
            "Bachelor of Technology",
            "⚙️"
        ],

        [
            "B.E.",
            "Bachelor of Engineering",
            "🔧"
        ]

    ],


    "Computer Science & IT": [

        [
            "B.Tech Computer Science",
            "Computer science, software & technology",
            "💻"
        ],

        [
            "BCA",
            "Bachelor of Computer Applications",
            "🖥️"
        ],

        [
            "B.Sc Computer Science",
            "Computer science & programming",
            "👨‍💻"
        ]

    ],


    "Medical": [

        [
            "MBBS",
            "Bachelor of Medicine and Bachelor of Surgery",
            "🩺"
        ],

        [
            "BDS",
            "Bachelor of Dental Surgery",
            "🦷"
        ],

        [
            "BAMS",
            "Bachelor of Ayurvedic Medicine and Surgery",
            "🌿"
        ],

        [
            "BHMS",
            "Bachelor of Homoeopathic Medicine and Surgery",
            "🏥"
        ]

    ],


    "Pure Sciences": [

        [
            "B.Sc",
            "Bachelor of Science",
            "🔬"
        ],

        [
            "B.Sc Mathematics",
            "Mathematics & analytical sciences",
            "📐"
        ],

        [
            "B.Sc Physics",
            "Physics & physical sciences",
            "⚛️"
        ],

        [
            "B.Sc Chemistry",
            "Chemistry & laboratory sciences",
            "🧪"
        ]

    ],


    "Architecture": [

        [
            "B.Arch",
            "Bachelor of Architecture",
            "🏛️"
        ]

    ],


    "Business & Management": [

        [
            "BBA",
            "Bachelor of Business Administration",
            "💼"
        ],

        [
            "BMS",
            "Bachelor of Management Studies",
            "📈"
        ],

        [
            "BBM",
            "Bachelor of Business Management",
            "🏢"
        ]

    ],


    "Accounting & Finance": [

        [
            "B.Com",
            "Bachelor of Commerce",
            "💰"
        ],

        [
            "B.Com Accounting & Finance",
            "Accounting, finance & taxation",
            "📊"
        ],

        [
            "BBA Finance",
            "Business administration with finance",
            "💳"
        ]

    ],


    "Economics": [

        [
            "B.A. Economics",
            "Bachelor of Arts in Economics",
            "📈"
        ],

        [
            "B.Sc Economics",
            "Economics with analytical studies",
            "📊"
        ]

    ],


    "Computer Applications": [

        [
            "BCA",
            "Bachelor of Computer Applications",
            "💻"
        ],

        [
            "B.Sc Computer Science",
            "Computer science & programming",
            "🖥️"
        ]

    ],


    "Humanities & Social Sciences": [

        [
            "B.A.",
            "Bachelor of Arts",
            "📚"
        ],

        [
            "B.A. Political Science",
            "Politics, government & public policy",
            "🏛️"
        ],

        [
            "B.A. Sociology",
            "Society, culture & human relationships",
            "🌍"
        ],

        [
            "B.A. History",
            "History, culture & civilizations",
            "📜"
        ]

    ],


    "Psychology": [

        [
            "B.A. Psychology",
            "Bachelor of Arts in Psychology",
            "🧠"
        ],

        [
            "B.Sc Psychology",
            "Psychology with scientific study",
            "🔬"
        ]

    ],


    "Design & Fine Arts": [

        [
            "B.Des",
            "Bachelor of Design",
            "🎨"
        ],

        [
            "BFA",
            "Bachelor of Fine Arts",
            "🖌️"
        ]

    ],


    "Media & Communication": [

        [
            "B.A. Journalism",
            "Journalism, news & media",
            "📰"
        ],

        [
            "B.A. Mass Communication",
            "Media, communication & broadcasting",
            "🎥"
        ],

        [
            "BMM",
            "Bachelor of Mass Media",
            "📺"
        ]

    ],


    "Law": [

        [
            "LL.B",
            "Bachelor of Laws",
            "⚖️"
        ],

        [
            "B.A. LL.B",
            "Integrated Arts and Law degree",
            "📚"
        ]

    ]

};

// =========================================================
// START ADVISOR
// =========================================================

function startAdvisor() {

    const advisor = document.getElementById("advisor");

    if (advisor) {

        advisor.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =========================================================
// CHAT SCROLL
// =========================================================

function scrollToChat() {

    const chatbot = document.getElementById("chatbot");

    if (chatbot) {

        chatbot.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =========================================================
// EDUCATION
// =========================================================

function selectEducation(value, button) {

    studentProfile.education = value;

    highlightOption(button);

    setTimeout(() => {

        showStep(2);

    }, 250);

}


// =========================================================
// STREAM
// =========================================================

function selectStream(value, button) {

    studentProfile.stream = value;

    highlightOption(button);

    generateFieldOptions(value);

    setTimeout(() => {

        showStep(3);

    }, 250);

}


// =========================================================
// FIELD OPTIONS
// =========================================================

function generateFieldOptions(stream) {

    const container =
        document.getElementById("fieldOptions");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const options =
        fieldOptions[stream] || [];


    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.type = "button";

        button.innerHTML = `

            <span>
                ${option.icon}
            </span>

            <div>

                <strong>
                    ${escapeCampusHTML(option.name)}
                </strong>

                <small>
                    ${escapeCampusHTML(option.description)}
                </small>

            </div>

        `;


        button.onclick = function () {

            selectField(
                option.name,
                button
            );

        };


        container.appendChild(button);

    });

}


// =========================================================
// FIELD
// =========================================================

function selectField(value, button) {

    studentProfile.field = value;

    highlightOption(button);

    generateDegreeOptions(value);

    setTimeout(() => {

        showStep(4);

    }, 250);

}


// =========================================================
// DEGREE OPTIONS
// =========================================================

function generateDegreeOptions(field) {

    const container =
        document.getElementById("degreeOptions");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    const options =
        degreeOptions[field] || [

            [
                "Explore Options",
                "Let AI suggest suitable programs",
                "✨"
            ]

        ];


    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.type = "button";


        button.innerHTML = `

            <span>
                ${option[2]}
            </span>

            <div>

                <strong>
                    ${escapeCampusHTML(option[0])}
                </strong>

                <small>
                    ${escapeCampusHTML(option[1])}
                </small>

            </div>

        `;


        button.onclick = function () {

            selectDegree(
                option[0],
                button
            );

        };


        container.appendChild(button);

    });

}


// =========================================================
// DEGREE
// =========================================================

function selectDegree(value, button) {

    studentProfile.degree = value;

    highlightOption(button);

    setTimeout(() => {

        showStep(5);

    }, 250);

}


// =========================================================
// BUDGET
// =========================================================

function selectBudget(value, button) {

    studentProfile.budget = value;

    highlightOption(button);

    setTimeout(() => {

        showStep(6);

    }, 250);

}


// =========================================================
// LOCATION
// =========================================================

function submitLocation() {

    const locationInput =
        document.getElementById("location");


    if (!locationInput) {
        return;
    }


    const location =
        locationInput.value.trim();


    if (!location) {

        alert(
            "Tell us where you wanna study 📍"
        );

        locationInput.focus();

        return;

    }


    studentProfile.location =
        location;


    showStep(7);

}


// =========================================================
// PRIORITIES
// =========================================================

function togglePriority(button, value) {

    button.classList.toggle("selected");


    if (
        studentProfile.priorities.includes(value)
    ) {

        studentProfile.priorities =
            studentProfile.priorities.filter(
                item => item !== value
            );

    } else {

        studentProfile.priorities.push(value);

    }

}


// =========================================================
// HIGHLIGHT OPTION
// =========================================================

function highlightOption(button) {

    if (!button) {
        return;
    }


    const currentOptions =
        document.querySelectorAll(
            ".question-card:not(.hidden) .option"
        );


    currentOptions.forEach(option => {

        option.style.borderColor =
            "#dfe6e3";

        option.style.background =
            "white";

    });


    button.style.borderColor =
        "#0ca89b";

    button.style.background =
        "#f0fbf9";

}


// =========================================================
// SHOW STEP
// =========================================================

function showStep(stepNumber) {

    document
        .querySelectorAll(".question-card")
        .forEach(card => {

            card.classList.add("hidden");

        });


    const step =
        document.getElementById(
            "step" + stepNumber
        );


    if (step) {

        step.classList.remove("hidden");

    }


    const percentage =
        Math.round(
            (stepNumber / 7) * 100
        );


    const progress =
        document.getElementById("progress");


    if (progress) {

        progress.style.width =
            percentage + "%";

    }


    const progressPercent =
        document.getElementById(
            "progressPercent"
        );


    if (progressPercent) {

        progressPercent.innerText =
            percentage + "%";

    }


    const stepText =
        document.getElementById(
            "stepText"
        );


    if (stepText) {

        stepText.innerText =
            "Step " +
            stepNumber +
            " of 7";

    }

}


// =========================================================
// UPDATE PROFILE UI
// =========================================================

function updateProfileDisplay() {

    setProfileValue(
        "profileEducation",
        studentProfile.education
    );


    setProfileValue(
        "profileStream",
        studentProfile.stream
    );


    setProfileValue(
        "profileField",
        studentProfile.field
    );


    setProfileValue(
        "profileDegree",
        studentProfile.degree
    );


    setProfileValue(
        "profileBudget",
        studentProfile.budget
    );


    setProfileValue(
        "profileLocation",
        studentProfile.location
    );


    updatePriorityDisplay();

}
function updatePriorityDisplay() {

    const container =
        document.getElementById("profilePriorities");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (studentProfile.priorities.length === 0) {

        const empty =
            document.createElement("span");

        empty.textContent =
            "No priorities selected";

        container.appendChild(empty);

        return;
    }


    const priorityIcons = {

        "Placements": "📈",

        "Affordable Fees": "💰",

        "Campus Life": "🏫",

        "Hostel": "🛏️",

        "Location": "📍",

        "Course Options": "🎓"

    };


    studentProfile.priorities.forEach(priority => {

        const chip =
            document.createElement("span");

        chip.textContent =
            `${priorityIcons[priority] || "✦"} ${priority}`;

        container.appendChild(chip);

    });

}


// =========================================================
// SET PROFILE VALUE
// =========================================================

function setProfileValue(id, value) {

    const element =
        document.getElementById(id);


    if (!element) {
        return;
    }


    element.textContent =
        value && String(value).trim()

            ? value

            : "Not provided";

}


// =========================================================
// FINAL SUBMIT
// =========================================================

async function submitAdvisor() {

    if (
        studentProfile.priorities.length === 0
    ) {

        alert(
            "Pick at least one thing that matters to you 👀"
        );

        return;

    }


    console.log(
        "Final Student Profile:",
        studentProfile
    );


    // IMPORTANT:
    // Show the values immediately.

    updateProfileDisplay();


    const button =
        document.querySelector(
            "#step7 .primary-button"
        );


    if (!button) {

        console.error(
            "Submit button not found."
        );

        return;

    }


    button.innerText =
        "Building your college shortlist... ✨";

    button.disabled = true;


    try {

        // =================================================
        // SAVE PROFILE
        // =================================================

        const profileResponse =
            await fetch(
                "https://campusai-backend-janavi.onrender.com/api/advisor",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            studentProfile
                        )

                }
            );


        if (!profileResponse.ok) {

            throw new Error(
                "Unable to save student profile."
            );

        }


        const profileResult =
            await profileResponse.json();


        console.log(
            "Profile Response:",
            profileResult
        );


        // =================================================
        // GET RECOMMENDATIONS
        // =================================================

        const recommendationResponse =
            await fetch(
                "/api/recommend",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            stream:
                                studentProfile.stream,

                            degree:
                                studentProfile.degree,

                            location:
                                studentProfile.location,

                            budget:
                                studentProfile.budget,

                            priorities:
                                studentProfile.priorities

                        })

                }
            );


        if (!recommendationResponse.ok) {

            throw new Error(
                "Unable to get college recommendations."
            );

        }


        const recommendationResult =
            await recommendationResponse.json();


        console.log(
            "Recommendation Response:",
            recommendationResult
        );

        console.log("Number of colleges:", recommendationResult.count);
        console.log("College results:", recommendationResult.results);

        // =================================================
        // HIDE ADVISOR FORM
        // =================================================

        const step7 =
            document.getElementById("step7");


        if (step7) {

            step7.classList.add("hidden");

        }


        // =================================================
        // SHOW RESULT
        // =================================================

        const resultSection =
            document.getElementById("result");


        if (resultSection) {

            resultSection.classList.remove("hidden");

            resultSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        // =================================================
        // UPDATE PROFILE
        // =================================================

        updateProfileDisplay();


        // =================================================
        // SHOW COLLEGES
        // =================================================

        displayCollegeRecommendations(
            recommendationResult.results || []
        );


    } catch (error) {

        console.error(
            "Advisor Error:",
            error
        );


        alert(
            "CampusAI hit a tiny roadblock 😭 Please try again."
        );


        button.innerText =
            "Get My College Recommendations ✨";

        button.disabled = false;

    }

}


// =========================================================
// DISPLAY COLLEGE RECOMMENDATIONS
// =========================================================

function displayCollegeRecommendations(colleges) {

    console.log(
        "College recommendations:",
        colleges
    );


    const resultSection =
        document.getElementById("result");


    if (!resultSection) {

        console.error(
            "Result section not found."
        );

        return;

    }


    const oldResults =
        document.getElementById(
            "collegeRecommendations"
        );


    if (oldResults) {

        oldResults.remove();

    }


    const container =
        document.createElement("div");


    container.id =
        "collegeRecommendations";


    // =====================================================
    // NO RESULTS
    // =====================================================

    if (!colleges || colleges.length === 0) {

        container.innerHTML = `

            <div class="college-empty">

                <h3>
                    Hmm... no exact matches yet 👀
                </h3>

                <p>
                    We couldn't find colleges matching
                    every selected filter.
                </p>

                <br>

                <p>
                    Try changing your location,
                    budget, or program.
                </p>

            </div>

        `;


        resultSection.appendChild(container);

        return;

    }


    // =====================================================
    // HEADER
    // =====================================================

    container.innerHTML = `

        <div class="college-results-header">

            <span class="result-kicker">
                CAMPUSAI MATCHES ✨
            </span>

            <h2>
                Colleges worth checking out
            </h2>

            <p>
                Matched to your course, budget,
                location and preferences.
            </p>

            <div class="degree-note">

                🎓 <strong>Quick note:</strong>

                One college can offer multiple
                degree programs. Check the
                <strong>Programs offered</strong>
                section on each card.

            </div>

        </div>

    `;


    // =====================================================
    // COLLEGE CARDS
    // =====================================================

    colleges.forEach((college, index) => {

        const card =
            document.createElement("div");


        card.className =
            "college-card";


        const programs =
            Array.isArray(college.programs)

                ? college.programs

                : [];


        const programHTML =
            programs.length > 0

                ? programs.map(program => `

                    <span class="program-tag">
                        ${escapeCampusHTML(program)}
                    </span>

                `).join("")

                : `

                    <span class="program-tag">
                        Program details unavailable
                    </span>

                `;


        const websiteHTML =
            college.website

                ? `

                    <a
                        href="${escapeCampusURL(
                            college.website
                        )}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="college-link"
                    >
                        Official Website ↗
                    </a>

                `

                : "";


        card.innerHTML = `

            <div class="college-card-top">

                <div>

                    <span class="college-rank">
                        #${index + 1} MATCH
                    </span>

                    <h3>
                        ${escapeCampusHTML(
                            college.college_name ||
                            "College Name Unavailable"
                        )}
                    </h3>

                    <p class="college-location">

                        📍

                        ${escapeCampusHTML(
                            college.city || ""
                        )}

                        ${
                            college.state

                                ? ", " +
                                  escapeCampusHTML(
                                      college.state
                                  )

                                : ""
                        }

                    </p>

                </div>


                <div class="match-score">

                    ✨
                    ${escapeCampusHTML(
                        String(
                            college.match_score ?? 0
                        )
                    )}

                    pts

                </div>

            </div>


            <div class="college-info-grid">

                <div class="college-info">

                    <span>💰</span>

                    <div>

                        <small>
                            Annual Fees
                        </small>

                        <strong>
                            ₹${formatIndianNumber(
                                college.annual_fees
                            )}
                        </strong>

                    </div>

                </div>


                <div class="college-info">

                    <span>📈</span>

                    <div>

                        <small>
                            Avg Placement
                        </small>

                        <strong>
                            ₹${formatIndianNumber(
                                college.avg_placement
                            )}
                        </strong>

                    </div>

                </div>


                <div class="college-info">

                    <span>🚀</span>

                    <div>

                        <small>
                            Highest Placement
                        </small>

                        <strong>
                            ₹${formatIndianNumber(
                                college.highest_placement
                            )}
                        </strong>

                    </div>

                </div>


                <div class="college-info">

                    <span>🏫</span>

                    <div>

                        <small>
                            College Type
                        </small>

                        <strong>
                            ${escapeCampusHTML(
                                college.college_type ||
                                "Not provided"
                            )}
                        </strong>

                    </div>

                </div>

            </div>


            <div class="college-programs">

                <h4>
                    🎓 Programs offered
                </h4>

                <p class="program-note">
                    Available programs:
                </p>

                <div class="program-tags">

                    ${programHTML}

                </div>

            </div>


            <div class="college-bottom">

                <div>

                    <strong>
                        Eligibility
                    </strong>

                    <p>
                        ${escapeCampusHTML(
                            college.eligibility ||
                            "Verify with the college."
                        )}
                    </p>

                </div>


                <div>

                    <strong>
                        Hostel
                    </strong>

                    <p>
                        ${escapeCampusHTML(
                            college.hostel ||
                            "Check with college."
                        )}
                    </p>

                </div>

            </div>


            <div class="college-actions">

                ${websiteHTML}

            </div>

        `;


        container.appendChild(card);

    });


    resultSection.appendChild(container);

}


// =========================================================
// NUMBER FORMAT
// =========================================================

function formatIndianNumber(value) {

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        value === "N/A"
    ) {

        return "N/A";

    }


    const number =
        Number(value);


    if (Number.isNaN(number)) {

        return "N/A";

    }


    return number.toLocaleString(
        "en-IN"
    );

}


// =========================================================
// CAMPUSAI CHATBOT
// =========================================================

function sendQuickPrompt(message) {

    const input =
        document.getElementById(
            "campusaiInput"
        );


    if (!input) {
        return;
    }


    input.value =
        message;


    sendCampusAIMessage();

}


// =========================================================
// SEND CHAT MESSAGE
// =========================================================

async function sendCampusAIMessage() {

    const input =
        document.getElementById(
            "campusaiInput"
        );


    if (!input) {
        return;
    }


    const message =
        input.value.trim();


    if (!message) {
        return;
    }


    addCampusMessage(
        message,
        "user"
    );


    input.value = "";


    const typing =
        document.getElementById(
            "typingIndicator"
        );


    if (typing) {

        typing.classList.remove(
            "hidden"
        );

    }


    scrollCampusChat();


    try {

        const response =
            await fetch(
                "https://campusai-backend-janavi.onrender.com/api/chat",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            message:
                                message,

                            studentProfile:
                                studentProfile

                        })

                }
            );


        const data =
            await response.json();


        if (typing) {

            typing.classList.add(
                "hidden"
            );

        }


        if (!response.ok) {

            throw new Error(
                data.error ||
                "CampusAI request failed"
            );

        }


        addCampusMessage(

            formatCampusAIResponse(
                data.reply
            ),

            "ai"

        );


    } catch (error) {

        console.error(
            "CampusAI Error:",
            error
        );


        if (typing) {

            typing.classList.add(
                "hidden"
            );

        }


        addCampusMessage(

            "CampusAI had a tiny brain freeze 😭 Please try again.",

            "ai"

        );

    }

}


// =========================================================
// FORMAT AI RESPONSE
// =========================================================

function formatCampusAIResponse(text) {

    if (!text) {

        return "Hmm, CampusAI has nothing to say right now.";

    }


    let formatted =
        escapeCampusHTML(text);


    formatted =
        formatted.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );


    formatted =
        formatted.replace(
            /^### (.*)$/gm,
            "<strong>$1</strong>"
        );


    formatted =
        formatted.replace(
            /\n/g,
            "<br>"
        );


    return formatted;

}


// =========================================================
// ADD CHAT MESSAGE
// =========================================================

function addCampusMessage(
    message,
    sender
) {

    const chat =
        document.getElementById(
            "campusaiChat"
        );


    if (!chat) {
        return;
    }


    const row =
        document.createElement("div");


    if (sender === "user") {

        row.className =
            "chat-row user-row";


        row.innerHTML = `

            <div class="chat-content">

                <div class="chat-bubble user-bubble">

                    ${escapeCampusHTML(message)}

                </div>

            </div>

        `;

    } else {

        row.className =
            "chat-row ai-row";


        row.innerHTML = `

            <div class="mini-avatar">
                ✦
            </div>

            <div class="chat-content">

                <div class="chat-name">
                    CampusAI
                </div>

                <div class="chat-bubble ai-bubble">

                    ${message}

                </div>

            </div>

        `;

    }


    chat.appendChild(row);

    scrollCampusChat();

}


// =========================================================
// SAFE HTML
// =========================================================

function escapeCampusHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text == null
            ? ""
            : String(text);


    return div.innerHTML;

}


// =========================================================
// SAFE URL
// =========================================================

function escapeCampusURL(url) {

    if (!url) {
        return "#";
    }


    const value =
        String(url).trim();


    if (
        !/^https?:\/\//i.test(value)
    ) {

        return "#";

    }


    return value
        .replace(/"/g, "%22")
        .replace(/'/g, "%27");

}


// =========================================================
// CHAT SCROLL
// =========================================================

function scrollCampusChat() {

    const chat =
        document.getElementById(
            "campusaiChat"
        );


    if (!chat) {
        return;
    }


    chat.scrollTo({

        top:
            chat.scrollHeight,

        behavior:
            "smooth"

    });

}


// =========================================================
// ENTER KEY
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById(
                "campusaiInput"
            );


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        sendCampusAIMessage();

                    }

                }
            );

        }

    }
);