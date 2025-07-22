export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Synapxe",
        icon: "/synapxe.jpg",
        iconBg: "#ffff",
        date: "Jun 2025 - Dec 2025",
        points: [
            "Fullstack development of advanced healthcare system integrated with computer vision and generative AI, hosted on AWS cloud services.",
            "Implement multi-modal capabilities to enhance user experiences within the healthcare solution.",
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "NUS Computing",
        icon: "/nus.jpg",
        iconBg: "#ffff",
        date: "Aug 2024 - Present",
        points: [
            "Teaching support for BT2102 - Data Management and Visualisation.",
            "Teaching support for CP2106 - Independent Software Development Project (Orbital).",
        ],
    },
    {
        title: "Data Analyst Intern",
        company_name: "China CITIC Bank International",
        icon: "/citic.png",
        iconBg: "#E6DEDD",
        date: "May 2024 - Aug 2024",
        points: [
            "Lead design and development of a comprehensive risk analysis tools with VBA, strengthening risk management strategies and speeding up processes by 150% for risk department.",
            "Overhauled department's data management system with Power Query and Power Pivot, transitioning to a more robust and scalable system, optimising usability by 100% for risk department.",
        ],
    },
    {
        title: "Finance Intern",
        company_name: "Pilgrim Partners Asia",
        icon: "/pilgrim.png",
        iconBg: "#ffff",
        date: "Feb 2021 - Mar 2021",
        points: [
            "Digitalised 7 years worth of invoices using self-learned Excel into an invoice tracking list, saving ~45mins per invoice search for finance manager.",
            "Dispensed $12,000 worth of invoice payments over a 1 month period with ~100% accuracy, freeing up finance manager for other strategic work.",
        ],
    },
    // Add more experiences here...
];

export const projects = [
    {
        title: "CoconutSplit",
        description: "Telegram bot for tracking and splitting shared expenses between friends.",
        longDescription: "A Splitwise alternative on Telegram. Built with FastAPI, PyTelegramBotAPI, Next.js and Supabase, CoconutSplit helps users track and split shared expenses with friends directly on Telegram group chats, reducing the need for installing third-party apps. Through an integrated Mini App, CoconutSplit provides an easy to use interface to add expenses, settle debts, and view all transactions throughout history.",
        thumbnail: "/projects/coconutsplit.png",
        detailImage: "/projects/coconutsplit-detail.jpg",
        links: {
            github: "https://github.com/davidchanwz/coconutsplit",
            demo: "https://t.me/coconutsplit_bot",
        },
        iconLists: [
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/supabase.png",
            "/tech/huggingface.svg",
            "/tech/docker.png",
            "/tech/heroku.png",
            "/tech/nextjs.png",
        ]
    },
    {
        title: "ACE",
        description: "Podium-placing Rest API for detecting fraudulent blockhain transactions using machine learning.",
        longDescription: "ACE (AI Compliance Engine) is a cutting-edge REST API that empowers financial institutions to navigate fraud detection and regulatory compliance in blockchain transactions. \n \n Built with FastAPI and SQLAlchemy, it leverages machine learning to analyze blockchain data and detect fraudulent activities in real-time. \n\nThe system integrates directly with the Ethereum blockchain to fetch and process transaction data, assigning anomaly scores based on the latest blockchain information.  \n\nThe project achieved Finalist (Top 5 out of 88 Teams) at NUS Fintech Hackathon 2025 for its innovative approach to blockchain security and its potential impact on financial compliance.",
        thumbnail: "/projects/ace.png",
        detailImage: "/projects/ace-detail.png",
        links: {
            github: "https://github.com/davidchanwz/ai-compliance-engine",
        },
        iconLists: [
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/sklearn.png",
            "/tech/sqlalchemy.png",
            "/tech/pandas.png",
            "/tech/numpy.png",
            "/tech/supabase.png",

        ]
    },
    {
        title: "Gyatword",
        description: "Award-winning daily crossword web game based on Gen Alpha brainrot language.",
        longDescription: "Gyatword is an engaging crossword puzzle game that challenges your knowledge of brainrot vocabulary. Developed collaboratively by a team of four passionate developers in a short span of 24 hours (NUS Hacknroll), Gyatword aims to provide users with an exciting and challenging word game experience. \n\n The project was built with a React and Tailwind frontend and our own backend server, supported by a Supabase database. We utilised existing react components and open-sourced crossword-making algorithms to handle the logic and core feature of our game, using these in addition to our own creativity, ingenuity and technical skills to craft together a minimalistic user interface with a fun fully-functional game. \n\nAn interesting feature of our project is it is an amalgamation of various programming languages, such as React, Python, Pygyat, Typescript, Scala, Tailwind etc \n\n For this unique blend of programming languages, the project was awarded Best Polyglot Hack at NUS Hacknroll 2025.",
        thumbnail: "/projects/gyatword.jpeg",
        detailImage: "/projects/gyatword-detail.png",
        links: {
            github: "https://github.com/GyatGames/gyatword",
            demo: "https://gyatword.com",
        },
        iconLists: [
            "/tech/react.png",
            "/tech/typescript.png",
            "/tech/tailwind.png",
            "/tech/supabase.png",
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/docker.png"
        ]
    },
    {
        title: "SmartPantry",
        description: "Mobile app for generating tailored meal plans using AI and Retrieval Augmented Generation.",
        longDescription: "Smart Pantry Buddy is an AI-powered mobile app that helps users create personalized, health-conscious meal plans based on their pantry inventory and dietary preferences. Using a combination of LlamaIndex, Retrieval-Augmented Generation (RAG), and vector search, the app retrieves relevant recipes by matching available ingredients to a vector database of recipe embeddings. \n\nIt integrates OCR technology to scan grocery receipts and automatically update pantry data, while also pulling in nutritional information from external APIs. Through a React Native interface and FastAPI backend, Smart Pantry Buddy delivers tailored meal suggestions by combining structured (SQL), unstructured (API), and vector-based data sources, offering users a seamless, intelligent meal-planning experience.",
        thumbnail: "/projects/smartpantry.png",
        detailImage: "/projects/smartpantry-detail.png",
        links: {
            github: "https://github.com/lionsee77/smartpantry",
        },
        iconLists: [
            "/tech/react.png",
            "/tech/javascript.png",
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/supabase.png",
            "/tech/llamaindex.png",
            "/tech/pinecone.png",
            "/tech/docker.png",
            "/tech/heroku.png"
        ]
    },
];

export const technologies = {
    languages: [
        {
            name: "TypeScript",
            description: "Statically typed JavaScript that scales",
            icon: "/tech/typescript.png"
        },
        {
            name: "Python",
            description: "General-purpose programming language",
            icon: "/tech/python.png"
        },
        {
            name: "JavaScript",
            description: "High-level programming language",
            icon: "/tech/javascript.png"
        },
        {
            name: "Java",
            description: "Object-oriented programming language",
            icon: "/tech/java.svg"
        },
        {
            name: "SQL",
            description: "Structured Query Language",
            icon: "/tech/sql.png"
        },
        {
            name: "HTML/CSS",
            description: "Markup and styling languages",
            icon: "/tech/htmlcss.png"
        },
    ],
    frameworks: [
        {
            name: "Next.js",
            description: "React framework for production",
            icon: "/tech/nextjs.png"
        },
        {
            name: "React",
            description: "JavaScript library for user interfaces",
            icon: "/tech/react.png"
        },
        {
            name: "Node.js",
            description: "JavaScript runtime built on Chrome's V8 engine",
            icon: "/tech/nodejs.png"
        },
        {
            name: "TailwindCSS",
            description: "Utility-first CSS framework",
            icon: "/tech/tailwind.png"
        },
        {
            name: "Flask",
            description: "Lightweight WSGI web application framework",
            icon: "/tech/flask.png"
        },
        {
            name: "FastAPI",
            description: "Modern, fast (high-performance) web framework",
            icon: "/tech/fastapi.svg",
        }
    ],
    tools: [
        {
            name: "Git",
            description: "Version control system",
            icon: "/tech/git.png"
        },
        {
            name: "Docker",
            description: "Container platform",
            icon: "/tech/docker.png"
        },
        {
            name: "Supabase",
            description: "Open-source Firebase alternative",
            icon: "/tech/supabase.png"
        },
        {
            name: "Firebase",
            description: "App development platform",
            icon: "/tech/firebase.png"
        },
        {
            name: "Heroku",
            description: "Cloud platform as a service",
            icon: "/tech/heroku.png"
        },
        {
            name: "Nginx",
            description: "Web server that can also be used as a reverse proxy",
            icon: "/tech/nginx.png"
        }
    ],
    libraries: [
        {
            name: "Pandas",
            description: "Data manipulation and analysis",
            icon: "/tech/pandas.png"
        },
        {
            name: "Scikit-learn",
            description: "Machine learning library",
            icon: "/tech/sklearn.png"
        },
        {
            name: "SQLAlchemy",
            description: "SQL toolkit and Object-Relational Mapping",
            icon: "/tech/sqlalchemy.png"
        },
        {
            name: "SciPy",
            description: "Scientific computing library",
            icon: "/tech/scipy.svg"
        }
    ]
};
