# 📚 English Janala: Vocabulary Learning Platform

Welcome to **English Janala**, a comprehensive web application designed to help users learn and practice English vocabulary categorized by difficulty levels.

---

## ✨ Features

This application implements the following key functionalities:

### 1. Level Management
* Dynamically fetch and display all available lesson levels from the API.
* Generate interactive buttons for each lesson level on page load.
* Highlight the **active lesson button** to indicate the currently viewed vocabulary set.

### 2. Vocabulary Display
* Load and display all words for a selected level in a responsive card format.
* Each card shows the **Word, Meaning, and Pronunciation** (text).
* Display a default message initially and a "No Word Found" message if a lesson has no words.

### 3. Word Details & Learning
* Open a **modal** on clicking the details icon.
* The modal fetches detailed information (Example Sentence, Synonyms) for the specific word.
* Includes a "Complete Learning" button to close the modal.

### 4. Interactive Tools
* **Search Functionality:** An input box allows real-time searching of words in the UI. Searching resets the active level button.
* **Save Word Feature:** A heart icon button on each word card allows users to save words to a dedicated "Saved Box" section.
* **Voice Pronunciation:** Implement text-to-speech functionality (sound icon) for vocabulary words.

### 5. User Experience & Robustness
* Display a **Loading Spinner** while fetching vocabulary data from the API.
* Implement robust **Data Handling** to avoid displaying falsy values (`undefined`, `null`) and show relevant messages for empty data.

---

## 🚀 API Endpoints

This project consumes data from the following public API endpoints provided by `programming-hero.com`.

| # | Endpoint Description | Method | URL Structure | Example |
| :--- | :--- | :--- | :--- | :--- |
| **01** | Get All Levels | `GET` | `https://openapi.programming-hero.com/api/levels/all` | `/api/levels/all` |
| **02** | Get Words by Level | `GET` | `https://openapi.programming-hero.com/api/level/{id}` | `/api/level/5` |
| **03** | Get Word Detail | `GET` | `https://openapi.programming-hero.com/api/word/{id}` | `/api/word/5` |
| **04** | Get All Words | `GET` | `https://openapi.programming-hero.com/api/words/all` | `/api/words/all` |

---

## ⚙️ Technical Implementation

### **Pronunciation Function**

The voice pronunciation feature utilizes the browser's built-in `SpeechSynthesisUtterance` Web API.

```javascript
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // Sets the language to English
  window.speechSynthesis.speak(utterance);
}
