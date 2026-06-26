# 🗣️ Prompt Engineering Basics

Welcome to the foundation of Generative AI! 

If you have ever been frustrated by an AI giving you a generic, boring, or incorrect answer, the problem usually isn't the AI—it is the prompt. **Prompt Engineering** is the skill of talking to computers in a way that gets exactly the results you want.

---

## 🤔 What is a Prompt?
A prompt is simply the text you type into an AI (like ChatGPT, Gemini, or Claude) to ask it to do something. 
* **Bad Prompt:** "Write a story about a dog."
* **Good Prompt:** "Write a 3-paragraph sci-fi story about a golden retriever who accidentally launches a rocket to Mars. Use a comedic tone."

---

## 🏗️ The Anatomy of a Perfect Prompt (The CREATE Framework)

To get professional results, stop treating the AI like a Google search bar and start treating it like a smart intern. Use this simple framework to structure your requests:

1. **Context:** Who are you and what is the background? *(e.g., "I am a high school science teacher...")*
2. **Role:** Who should the AI act as? *(e.g., "Act as a NASA astrophysicist...")*
3. **Exact Task:** What specific thing do you want? *(e.g., "...and explain black holes...")*
4. **Audience:** Who is reading this? *(e.g., "...to a classroom of 10-year-olds.")*
5. **Tone:** How should it sound? *(e.g., "Make it fun, energetic, and use simple analogies.")*
6. **Execution/Format:** How should it be delivered? *(e.g., "Format the answer as a bulleted list with no more than 5 points.")*

---

## 🚀 Two Essential Techniques

### 1. Zero-Shot Prompting
This is when you ask the AI to do something without giving it any examples. It relies entirely on its pre-trained knowledge.
> **Example:** "Classify the sentiment of this review as Positive, Neutral, or Negative: *'The food was okay, but the service was terrible.'*"

### 2. Few-Shot Prompting
AI learns best by example. "Few-Shot" means giving the AI 1 or 2 examples of exactly what you want before giving it the final task. This drastically improves accuracy.
> **Example:** > "Convert the following slang into professional workplace language:
> *Example 1:* 'My bad' -> 'I apologize for the oversight.'
> *Example 2:* 'That idea is trash' -> 'I have some concerns about that proposal.'
> *Task:* 'I am totally swamped today.'"

---

## 🛑 Hallucinations (When AI Lies)
LLMs are designed to predict the next word, not to tell the absolute truth. If an AI doesn't know the answer, it might confidently invent one. This is called a **hallucination**.

**How to fix it:** Add constraints to your prompt. 
> *"Answer the following question using only historical facts. If you do not know the answer, say 'I do not have enough information' instead of guessing."*

---

## ✅ Try It Yourself!
Open up your favorite AI chatbot and try the "CREATE Framework" above. Change the **Role** from "Astrophysicist" to "Pirate" and watch how dramatically the output changes based on your instructions!
