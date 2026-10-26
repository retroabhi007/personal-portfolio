/**
 * ABHISHEK SINGH - AI Chatbot Client
 * Communicates with /api/chat (Vercel Serverless Function).
 * Contains fallback answers for offline / static previews.
 */

document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chatMessages");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const chatStatus = document.getElementById("chatStatus");
  const clearChatBtn = document.getElementById("clearChatBtn");
  const suggestions = document.querySelectorAll(".sugg-chip");

  const conversationHistory = [];

  function appendMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${role === "user" ? "chat-user" : "chat-assistant"}`;
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Authentic fallback response generator for static or offline previews
  function getLocalFallback(query) {
    const q = query.toLowerCase().trim();

    if (q.includes("who are you") || q.includes("introduce") || q.includes("about you")) {
      return "I'm ABHISHEK SINGH's AI portfolio assistant. ABHISHEK SINGH is a 2nd-year B.Tech CSE (Core) student at JECRC University, Jaipur, focused on software engineering, web development, Python, and practical AI tools.";
    }
    if (q.includes("where do you study") || q.includes("college") || q.includes("university") || q.includes("education")) {
      return "ABHISHEK SINGH studies at JECRC University in Jaipur, pursuing his B.Tech in Computer Science and Engineering (CSE Core), currently in his 2nd year with an expected graduation in 2029.";
    }
    if (q.includes("skill") || q.includes("technologies") || q.includes("stack")) {
      return "ABHISHEK SINGH's skills include HTML, CSS, JavaScript, Python, C, C++, Git, GitHub, Web Development, and AI Tools.";
    }
    if (q.includes("what projects") || q.includes("completed") || q.includes("list projects") || q.includes("all projects") || q.includes("project")) {
      return "ABHISHEK SINGH has completed 6 featured projects: Book Reading List Application, Bug Fixing Using Cursor AI, Messy Python Code Improvement, Interactive Quiz Application, Personal Portfolio Website, and Python Basics Collection. All are available on his GitHub at https://github.com/retroabhi007.";
    }
    if (q.includes("book") || q.includes("reading list")) {
      return "The Book Reading List Application is an interactive web app with status tracking and category filtering. Repository: https://github.com/retroabhi007/book-reading-list-application";
    }
    if (q.includes("cursor") || q.includes("bug")) {
      return "The Bug Fixing Using Cursor AI project is a practical case study investigating and resolving edge-case bugs in Python algorithms. Repository: https://github.com/retroabhi007/bug-fixing-using-cursor-ai";
    }
    if (q.includes("messy") || q.includes("refactor")) {
      return "The Messy Python Code Improvement project is an AI-assisted refactoring study transforming disorganized Python scripts into clean, modular PEP 8 functions. Repository: https://github.com/retroabhi007/messy-python-code-improvement";
    }
    if (q.includes("quiz")) {
      return "The Interactive Quiz Application is a responsive CS & AI quiz web application with real-time scoring and feedback. Repository: https://github.com/retroabhi007/interactive-quiz-application";
    }
    if (q.includes("github") || q.includes("repo") || q.includes("where is your github")) {
      return "You can find ABHISHEK SINGH's GitHub profile here: https://github.com/retroabhi007";
    }
    if (q.includes("email") || q.includes("contact")) {
      return "You can reach ABHISHEK SINGH directly by email at retroabhi007@gmail.com or connect via his GitHub profile: https://github.com/retroabhi007";
    }

    // Default guardrail response
    return "I am ABHISHEK SINGH's academic portfolio assistant, designed specifically to answer questions about his educational background and skills. How can I help you learn more about his work?";
  }

  async function sendMessage(text) {
    const question = (text || userInput.value || "").trim();
    if (!question) return;

    appendMessage("user", question);
    userInput.value = "";
    userInput.disabled = true;
    sendButton.disabled = true;
    chatStatus.textContent = "AI is thinking...";

    conversationHistory.push({ role: "user", content: question });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: question,
          history: conversationHistory
        })
      });

      if (response.ok) {
        const data = await response.json();
        const answer = data.answer || "Thank you for asking!";
        appendMessage("assistant", answer);
        conversationHistory.push({ role: "assistant", content: answer });
      } else {
        // If serverless endpoint is unavailable (e.g. static preview or local static server)
        const errJson = await response.json().catch(() => ({}));
        if (errJson.error && errJson.error.includes("GROQ_API_KEY")) {
          appendMessage("assistant", `[Server Notice]: ${errJson.error}\n\n${getLocalFallback(question)}`);
        } else {
          const fallback = getLocalFallback(question);
          appendMessage("assistant", fallback);
          conversationHistory.push({ role: "assistant", content: fallback });
        }
      }
    } catch (err) {
      console.warn("API request fallback:", err.message);
      const fallback = getLocalFallback(question);
      appendMessage("assistant", fallback);
      conversationHistory.push({ role: "assistant", content: fallback });
    } finally {
      userInput.disabled = false;
      sendButton.disabled = false;
      chatStatus.textContent = "";
      userInput.focus();
    }
  }

  if (sendButton) {
    sendButton.addEventListener("click", () => sendMessage());
  }

  if (userInput) {
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Clickable suggested question chips
  suggestions.forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.textContent.trim();
      userInput.value = q;
      sendMessage(q);
    });
  });

  // Clear chat button
  if (clearChatBtn) {
    clearChatBtn.addEventListener("click", () => {
      chatMessages.innerHTML = `
        <div class="chat-message chat-assistant">
          Chat cleared. Ask me anything about ABHISHEK SINGH's background or skills!
        </div>
      `;
      conversationHistory.length = 0;
      chatStatus.textContent = "";
    });
  }
});
