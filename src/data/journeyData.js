export const journeyData = {
    "countries": [
        {
            "id": 1,
            "name": "Thailand",
            "city": "Bangkok / Chumphon",
            "flag": "🇹🇭",
            "coordinates": [100.5018, 13.7563],
            "visits": [
                {
                    "period": "2008-2012",
                    "role": "Bachelor's Student",
                    "company": "Thammasat University",
                    "achievement": "Finance & Real Estate Management degree",
                    "phase": "foundation"
                },
                {
                    "period": "2019-2020",
                    "role": "Member Relations Executive",
                    "company": "PATA",
                    "achievement": "20% increase in membership renewals",
                    "phase": "management"
                }
            ],
            "color": "#FF6B6B"
        },
        {
            "id": 2,
            "name": "Switzerland",
            "city": "Lucerne",
            "flag": "🇨🇭",
            "coordinates": [8.3093, 47.0502],
            "visits": [
                {
                    "period": "2013-2014",
                    "role": "Hotel Management Student",
                    "company": "Swiss Hotel Management School",
                    "achievement": "Postgraduate Diploma in Hotel, Resort & Spa Management",
                    "phase": "foundation"
                }
            ],
            "color": "#4ECDC4"
        },
        {
            "id": 3,
            "name": "United Kingdom",
            "city": "London (Gatwick)",
            "flag": "🇬🇧",
            "coordinates": [-0.1901, 51.1537],
            "visits": [
                {
                    "period": "May-Nov 2014",
                    "role": "F&B Trainee",
                    "company": "Copthorne Hotel London Gatwick",
                    "achievement": "Balanced internship with Swiss studies",
                    "funFact": "Served travelers from 50+ countries daily",
                    "phase": "foundation"
                }
            ],
            "color": "#ce44fcff"
        },
        {
            "id": 4,
            "name": "Maldives",
            "city": "Huvafen Fushi",
            "flag": "🇲🇻",
            "coordinates": [73.5093, 4.1755],
            "visits": [
                {
                    "period": "Apr-Nov 2015",
                    "role": "Management Trainee",
                    "company": "Huvafen Fushi Resort",
                    "achievement": "Reduced food costs by 35%",
                    "phase": "hospitality"
                }
            ],
            "color": "#ff7802ff"
        },
        {
            "id": 5,
            "name": "Malaysia",
            "city": "Sepang",
            "flag": "🇲🇾",
            "coordinates": [101.7019, 2.7456],
            "visits": [
                {
                    "period": "Nov 2015 - Sep 2016",
                    "role": "Assistant Finance Manager",
                    "company": "AVANI Sepang Goldcoast Resort",
                    "achievement": "First Big Data exploration project",
                    "funFact": "This was the seed that led to tech!",
                    "phase": "hospitality"
                }
            ],
            "color": "#AA96DA"
        },
        {
            "id": 6,
            "name": "Denmark",
            "city": "Kolding",
            "flag": "🇩🇰",
            "coordinates": [8.4517, 55.4760],
            "visits": [
                {
                    "period": "2017-2018",
                    "role": "Master's Student",
                    "company": "University of Southern Denmark",
                    "achievement": "European Master in Tourism Management (Part 1)",
                    "phase": "academic"
                }
            ],
            "color": "#f5005eff"
        },
        {
            "id": 7,
            "name": "Slovenia",
            "city": "Ljubljana",
            "flag": "🇸🇮",
            "coordinates": [14.5058, 46.0569],
            "visits": [
                {
                    "period": "2018-2019",
                    "role": "Master's Student",
                    "company": "University of Ljubljana",
                    "achievement": "European Master in Tourism Management (Part 2)",
                    "phase": "academic"
                }
            ],
            "color": "#025b19ff"
        },
        {
            "id": 8,
            "name": "Spain",
            "city": "Girona",
            "flag": "🇪🇸",
            "coordinates": [2.8214, 41.9794],
            "visits": [
                {
                    "period": "2018-2019",
                    "role": "Master's Student",
                    "company": "University of Girona",
                    "achievement": "European Master in Tourism Management (Part 3)",
                    "phase": "academic"
                }
            ],
            "color": "#07688bff"
        },
        {
            "id": 9,
            "name": "Belgium",
            "city": "Antwerp",
            "flag": "🇧🇪",
            "coordinates": [4.4025, 51.2194],
            "visits": [
                {
                    "period": "2024-Present",
                    "role": "Data Engineer Trainee",
                    "company": "BeCode",
                    "achievement": "Hackathon Winner, Career Pivot to Tech",
                    "funFact": "Where hospitality met data engineering",
                    "phase": "tech"
                }
            ],
            "color": "#FDCB9E"
        }
    ],
    "routes": [
        { "from": 1, "to": 2, "year": 2012 }, // Thailand → Switzerland (2012)
        { "from": 2, "to": 3, "year": 2014 }, // Switzerland → UK (2014)
        { "from": 3, "to": 1, "year": 2014 }, // UK → Thailand (late 2014)
        { "from": 1, "to": 4, "year": 2015 }, // Thailand → Maldives
        { "from": 4, "to": 5, "year": 2015 }, // Maldives → Malaysia
        { "from": 5, "to": 1, "year": 2016 }, // Malaysia → Thailand
        { "from": 1, "to": 6, "year": 2017 }, // Thailand → Denmark
        { "from": 6, "to": 7, "year": 2018 }, // Denmark → Slovenia
        { "from": 7, "to": 8, "year": 2018 }, // Slovenia → Spain
        { "from": 8, "to": 1, "year": 2019 }, // Spain → Thailand
        { "from": 1, "to": 9, "year": 2024 }  // Thailand → Belgium
    ]
}