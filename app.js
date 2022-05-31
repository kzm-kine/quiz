const quiz = [
    {
        question: "きねふちだいきの好きなことは？",
        answers: [
            "寝る",
            "食う",
            "おなる",
            "ネトフリ"
        ],
        correct: "おなる"
    }, {
        question: "きねふちだいきの好きな漫画は？",
        answers: [
            "いちご100%",
            "トラブル",
            "トラブルダークネス",
            "呪術廻戦"
        ],
        correct: "いちご100%"
    }, {
        question: "きねふちだいきの出身地は？",
        answers: [
            "新潟県産コシヒカリ",
            "福島",
            "東京",
            "神奈川"
        ],
        correct: "新潟県産コシヒカリ"
    },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName("button");
const buttonLength = button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if(quizIndex < quizLength){
       //問題数がまだあればこっちを実行 
       setupQuiz();
    } else {
        //問題数がもうなければこっちを実行
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です");
    }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
