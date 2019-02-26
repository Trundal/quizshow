const questions = [
  {
    "question": "What... is your name?",
    "answer": {
      "type": "input"
    }
  },
  {
    "question": "What... is your quest?",
    "answer": {
      "type": "input"
    }
  },
  {
    "question": "What... is your favourite color?",
    "answer": {
      "type": "select",
      "options": [
        {"value": ""},
        {"value": "Blue"},
        {"value": "Yellow"}
      ]
    }
  },
  {
    "question": "What... is the capital of Asseria?",
    "answer": {
      "type": "radio",
      "options": [
        {"value": "I don’t know"}
      ]
    }
  },
  {
    "question": "What... is the airspeed velocity of an unladen swallow?",
    "answer": {
      "type": "radio",
      "options": [
        {"value": "African"},
        {"value": "European"}
      ]
    }
  }
]

// const questions = {"error": "invalidJSON"}

export default questions
