
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Before we can recieve your application, you'll need to do a quick survey:",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "numberofpages",
                    title: "How many pages do you feel is ideal for a quiz?",
                    choices: [
                        "All questions on one page", "Two questions per page", "I prefer the whole quiz be served in a series of pop up alerts", "No questions per page, my data is my own"
                    ],
                    correctAnswer: "Two questions per page"
                },
                {
                    type: "radiogroup",
                    name: "stolenproperty",
                    title: "How many times in the past three weeks have you been fired for stealing company property?",
                    choices: [
                        "Zero to One times", "Two to Four times", "Five to Nine times", "I am currently incarcerated for theft of company property"
                    ],
                    correctAnswer: "I am currently incarcerated for theft of company property"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "alignment1",
                    title: "What would you describe your moral alignment as? (1 of 2)",
                    choices: [
                        "Good", "Neutral", "Evil"
                    ],
                    correctAnswer: "Neutral"
                },
                {
                    type: "radiogroup",
                    name: "alignment2",
                    title: "What would you describe your moral alignment as? (2 of 2)",
                    choices: [
                        "Lawful", "Neutral", "Chaotic"
                    ],
                    correctAnswer: "Neutral"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "assimilation",
                    title: "Assimilation into our company is the process of:",
                    choices: [
                        "A great opportunity to grow with us and our family", "A stable source of employment and a point of pride", "Borg Integration"
                    ],
                    correctAnswer: "A great opportunity to grow with us and our family"
                },
                {
                    type: "radiogroup",
                    name: "rightanswer",
                    title: "The correct answer to this question is:",
                    choices: [
                        "A", "B", "C","D","B and C"
                    ],
                    correctAnswer: "B and C"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "insanity",
                    title: "The scientific definition of insanity is described as:",
                    choices: [
                        "Doing the same thing over and over again, expecting a different outcome", "Doing the same thing over and over again, expecting a different outcome",
                         "Doing the same thing over and over again, expecting a different outcome", "Doing the same thing over and over again, expecting a different outcome",
                         "Doing the same thing over and over again, expecting a different outcome", "Doing the same thing over and over again, expecting a different outcome"
                    ],
                    correctAnswer: "Doing the same thing over and over again, expecting a different outcome"
                },
                {
                    type: "radiogroup",
                    name: "whatoftheboss",
                    title: "What do you think about the boss, here at business company?",
                    choices: [
                        "he seems pretty cool, I like the guy", "I felt he was very professional, and he has earned my respect", "I feel as though a duel with him would present quite a challenge, possibly resulting in my untimely demise"
                    ],
                    correctAnswer: "I feel as though a duel with him would present quite a challenge, possibly resulting in my untimely demise"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "loremipsum",
                    title: "Lorem ipsum dolor ______",
                    choices: [
                        "dans temor", "sit amet", "gam etra", "be more creative"
                    ],
                    correctAnswer: "sit amet"
                },
                {
                    type: "radiogroup",
                    name: "canyoutell",
                    title: "Can you tell whether I'm running out of fake question ideas yet?",
                    choices: [
                        "Yes", "No", "Not until now", "It was pretty obvious"
                    ],
                    correctAnswer: "No"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });