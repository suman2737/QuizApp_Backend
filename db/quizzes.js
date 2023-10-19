const {v4:uuid}=require("uuid");

const quizzes={
    "users":[
        //Fist Quiz Card
        {
            id: uuid(),
            category: "marvel",
            image: "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwOTkzMTk0MDc1MjYx/marvel-quiz-copy.webp",
            title: "Marvel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "Takanda", isCorrect: false },
                        { id: uuid(), option: "Zakanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false }
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
            ]

        }
        
    ]
}

module.exports = quizzes;