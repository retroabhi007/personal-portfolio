# Personal Portfolio Website with API-Based Chatbot Integration

An individual practical **Internal Assessment** project developed for the Computer Science & Engineering curriculum at JECRC University by **ABHISHEK SINGH**.

- **Author**: ABHISHEK SINGH
- **College**: JECRC University, Jaipur, Rajasthan
- **Degree**: B.Tech in Computer Science and Engineering (CSE Core)
- **Current Year**: 2nd Year
- **Expected Graduation**: 2029
- **Email**: [retroabhi007@gmail.com](mailto:retroabhi007@gmail.com)
- **GitHub Profile**: [https://github.com/retroabhi007](https://github.com/retroabhi007)
- **Live Deployed Portfolio (Vercel)**: [https://personal-portfolio-iota-six-33.vercel.app](https://personal-portfolio-iota-six-33.vercel.app)
- **Live Deployed Portfolio (GitHub Pages)**: [https://retroabhi007.github.io/personal-portfolio/](https://retroabhi007.github.io/personal-portfolio/)

---

## 1. Project Overview
This repository contains a personalized, responsive portfolio website. The website incorporates modern UI/UX design, mobile responsiveness, a persistent light/dark mode toggle, a real-time project search and filter engine, and a secure API-based chatbot integrated with Groq.

---

## 2. Featured Projects & Coursework Repositories

| # | Project Name | Description | Technologies | Repository Link |
|:---:|:---|:---|:---|:---|
| **1** | **Book Reading List Application** | Track, sort, and manage reading lists with status tracking and category filtering. | JavaScript, HTML5, CSS3, LocalStorage | [GitHub Repository](https://github.com/retroabhi007/book-reading-list-application) |
| **2** | **Bug Fixing Using Cursor AI** | Practical case study investigating, isolating, and fixing numerical logic and boundary bugs. | Python, Cursor AI, Unit Testing | [GitHub Repository](https://github.com/retroabhi007/bug-fixing-using-cursor-ai) |
| **3** | **Messy Python Code Improvement** | AI-assisted refactoring project transforming disorganized Python code into modular PEP 8 functions. | Python, Clean Code, PEP 8 | [GitHub Repository](https://github.com/retroabhi007/messy-python-code-improvement) |
| **4** | **Interactive Quiz Application** | Dynamic Computer Science & AI quiz web application with real-time scoring and instant feedback. | JavaScript, CSS3, HTML5 | [GitHub Repository](https://github.com/retroabhi007/interactive-quiz-application) |
| **5** | **Python Basics Collection** | Core coursework implementations in Python covering recursion, algorithms, and data structures. | Python, Algorithms, Recursion | [GitHub Repository](https://github.com/retroabhi007/PYTHON-BASICS-25BCON1202) |
| **6** | **Personal Portfolio & AI Chatbot** | Responsive academic portfolio website with integrated Vercel serverless Groq chatbot. | HTML5, CSS3, JavaScript, Groq API | [GitHub Repository](https://github.com/retroabhi007/personal-portfolio) |

---

## 3. Implemented Features

### A. Dynamic Project Search & Filter (Task 3)
- Real-time search across project names, technologies, and tags.
- Instant category filter buttons (`All`, `Python`, `Web Development`, `AI & Tools`).
- Live counter updating with search results.
- Direct clickable cards and GitHub buttons opening each repository in a new tab.

### B. Light & Dark Mode Toggle (Task 3)
- Smooth toggle switch in the sticky header accessible on both desktop and mobile devices.
- Automatically respects system preferences (`prefers-color-scheme`) and persists user preference across sessions using `localStorage`.

### B. Secure AI Chatbot Integration (Task 6)
- Allows visitors to ask questions about ABHISHEK SINGH's academic background at JECRC University and his skills.
- **Strict Security Architecture**: Secret API keys are **never** bundled into frontend client JavaScript or committed to GitHub.
- Communicates with `/api/chat`, a secure **Vercel Serverless Function** reading `process.env.GROQ_API_KEY`.
- Includes suggested question chips for quick testing (*"Who are you?"*, *"Where do you study?"*, *"What are your skills?"*, *"Where can I find your GitHub?"*).
- Includes graceful client fallback handling for local static demonstrations.

---

## 3. Technologies Used
- **Frontend**: Semantic HTML5, CSS3 (Custom CSS variables, Grid, Flexbox, media queries), Vanilla JavaScript (ES6+).
- **Backend / Serverless**: Node.js Serverless Function (`api/chat.js`) on Vercel.
- **AI API**: Groq API (`openai/gpt-oss-20b`) with role-based system prompts.
- **Typography**: Google Fonts (`Bricolage Grotesque` and `IBM Plex Sans`).
- **DevOps & Hosting**: Git, GitHub, Vercel CLI, GitHub Pages.

---

## 4. Local Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/retroabhi007/personal-portfolio.git
cd personal-portfolio
```

### Step 2: Running Frontend Locally
To view the frontend locally:
```bash
npx serve .
# Or using Python:
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Step 3: Running with Local Vercel Serverless Function (Optional)
To test the live Groq backend server locally:
```bash
# Add your GROQ_API_KEY to .env.local (this file is ignored by git)
echo GROQ_API_KEY=your_groq_api_key_here > .env.local

# Run Vercel development server
npx vercel dev
```

---

## 5. Vercel Deployment & Environment Variables

When deploying this project to Vercel:

1. **Import the repository** into Vercel from GitHub (`retroabhi007/personal-portfolio`).
2. **Add Environment Variable**:
   - **Key**: `GROQ_API_KEY`
   - **Value**: Your private Groq API key (`gsk_...`)
3. **Deploy**: Vercel automatically deploys both the static assets and the serverless `/api/chat` route.

---

## 6. Author Information
- **ABHISHEK SINGH** (2nd Year B.Tech CSE Core)
- Department of Computer Science & Engineering, JECRC University, Jaipur
- Email: [retroabhi007@gmail.com](mailto:retroabhi007@gmail.com)
- GitHub: [@retroabhi007](https://github.com/retroabhi007)
