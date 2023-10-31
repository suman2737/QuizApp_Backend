const { v4: uuid } = require("uuid")

const quizzes = {
    users: [
        // 1st Quiz Card --> will have title, category, description, quiz,
        {
            id: uuid(),
            category: "html",
            image: "data:image/png;base64,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",
            title: "HTML",
            description: "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page. HTML elements tell the browser how to display the content.",
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "What are the attributes used to chnage the size of an image?",
                    options: [
                        { id: uuid(), option: "Width and height", isCorrect: true },
                        { id: uuid(), option: "Big and Small", isCorrect: false },
                        { id: uuid(), option: "Top and Bottom", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                 //2nd question and options
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Captain America", isCorrect: false },
                        { id: uuid(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Hulk", isCorrect: false }
                    ]
                },
                 //3rd question and options
                {
                    id: uuid(),
                    question: "What is the smalles header in HTML by default?",
                    options: [
                        { id: uuid(), option: "h1", isCorrect: false },
                        { id: uuid(), option: "h2", isCorrect: false },
                        { id: uuid(), option: "h6", isCorrect: true },
                        { id: uuid(), option: "h4", isCorrect: false }
                    ]
                },
                 //4th question and options
                {
                    id: uuid(),
                    question: "What are thetypes of list available in HTML?",
                    options: [
                        { id: uuid(), option: "Ordered, Unordered Lists", isCorrect: true },
                        { id: uuid(), option: "Bulleted, Numbered Lists", isCorrect: false },
                        { id: uuid(), option: "Named, Unnamed Lists", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
            ]
        },
        //2nd quiz
        {
            id: uuid(),
            category: "css",
            image: "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo",
            title: "CSS",
            description: "CSS (Cascading Style Sheets) is used to style and layout web pages - for example, to alter the font, color, size, and spacing of the content and other decorative features.",
            quiz: [
                {
                    id: uuid(),
                    question: "How can we change the background color of aan element?",
                    options: [
                        { id: uuid(), option: "background-color", isCorrect: true},
                        { id: uuid(), option: "color", isCorrect: false },
                        { id: uuid(), option: "Both A and B", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What type of CSS is generally recommended for designing large web pages?",
                    options: [
                        { id: uuid(), option: "Inline", isCorrect: false },
                        { id: uuid(), option: "Internal", isCorrect: false },
                        { id: uuid(), option: "External", isCorrect: true },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Can negative values be allowed in padding property?",
                    options: [
                        { id: uuid(), option: "Yes", isCorrect: false },
                        { id: uuid(), option: "No", isCorrect: true },
                        { id: uuid(), option: "Depends on property", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "The CSS property used to specify the transparency of an element is?",
                    options: [
                        { id: uuid(), option: "Opacity", isCorrect: true },
                        { id: uuid(), option: "Visibility", isCorrect: false },
                        { id: uuid(), option: "Filter", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
            ]
        },
        //Quiz 3rd
        {
            id: uuid(),
            category: "javaScript",
            image: "https://img.freepik.com/premium-vector/computer-design-blue-background-vector-illustration_24908-44354.jpg?w=360",
            title: "JavaScript",
            description: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. JavaScript add funtionality to the web pages.",
            quiz: [
                {
                    id: uuid(),
                    question: "JavaScript is an ______ language?",
                    options: [
                        { id: uuid(), option: "Object-Oriented", isCorrect: true},
                        { id: uuid(), option: "Object-Based", isCorrect: false },
                        { id: uuid(), option: "Procedural", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following keywords is used to define a variable in Javascript?",
                    options: [
                        { id: uuid(), option: "var", isCorrect: false },
                        { id: uuid(), option: "let", isCorrect: false },
                        { id: uuid(), option: "Both A and B", isCorrect: true },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the use of the <noscript> tag in Javascript?",
                    options: [
                        { id: uuid(), option: "The contents are displayed by non-JS-based browsers", isCorrect: true },
                        { id: uuid(), option: "Clears all the cookies and cache", isCorrect: false },
                        { id: uuid(), option: "Both A and B", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "When an operator's value is NULL, the typeof returned by the unary operator is?",
                    options: [
                        { id: uuid(), option: "Boolean", isCorrect: false },
                        { id: uuid(), option: "Undefined", isCorrect: false },
                        { id: uuid(), option: "Object", isCorrect: true },
                        { id: uuid(), option: "Integer", isCorrect: false }
                    ]
                },
            ]
        },

    ]
}
module.exports = quizzes;