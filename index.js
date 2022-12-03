const TelegramAPi = require("node-telegram-bot-api")
const textFunction = require('./db');
const allAnswer = require('./falseAnswer');


const token = '5851600367:AAF3bW32ZWG5hjQpruRgEmeS5Gn4N4NDoUo';

const bot = new TelegramAPi(token, {polling: true})

bot.on('message', msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;

    //const myWord = "go"
    dbArray = textFunction("Book.txt")

    const result = dbArray.filter(element => element.includes(text))
    if (result.length === 0){
        console.log("Нет подходящих предложение");
        bot.sendMessage(chatId,`Нет подходящих предложение`)
    } else{
        let randomSentence = Math.floor(Math.random() * result.length);
        let resultSentence = result[randomSentence].replace(text , " _____ ");
        console.log(result[randomSentence]);
        console.log(resultSentence);
        let answer = allAnswer(text);
        bot.sendMessage(chatId,`${resultSentence}`)

        bot.sendMessage(chatId,`${answer}`)
    }

})



