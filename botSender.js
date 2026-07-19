const Kahoot = require('kahoot.js-latest');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', function(req, res) {
    res.send(`
        <html>
            <head>
                <title>
                    Kahoot Bot Sender
                </title>
                <style>
                    body {
                        background-color: white;
                        color: black;
                    }
                    #kahootImg {
                        width: 1000px;
                        height: 500px;
                    }
                    input {
                        background-color: black;
                        color: white;
                        font-family: Courier New;
                        font-weight: bold;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div align="center">
                    <img id="kahootImg" src="https://cdn.prod.website-files.com/650aa5df2c7a3b8ebbf9beba/6825b2cab61ab061744381c9_kahoot%20logo.png">
                    <h3 style="font-family: Courier New; font-weight: bold;">
                        Bot Sender
                    </h3>
                    <div id="inputSection">
                        <p>
                            <input id="gameId" placeholder="Game ID">
                        </p>
                        <p>
                            <input id="botName" placeholder="Bot Name">
                        </p>
                        <p>
                            <input type="submit" id="submit" value="Start">
                        </p>
                    </div>
                    <h5 id="credits" style="font-family: Courier New; font-weight: bold;">
                        Developed by Ian C. Vu
                    </h5>
                </div>
                <script>
                    document.getElementById('submit').addEventListener('click', async function() {
                        let data = {
                            "gameId" : document.getElementById('gameId').value,
                            "botName" : document.getElementById('botName').value
                        };
                        try {
                            await fetch("/post", {
                                "method" : "POST",
                                "headers" : {
                                 "Content-Type" : "application/json"
                                },
                                body : JSON.stringify(data)
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    });
                </script>
            </body>
        </html>
    `);
});
app.post('/post', function(req, res) {
    let bot = 0;
    setInterval(function() {
        const client = new Kahoot();
        client.join(
            req.body.gameId,
            req.body.botName + "{" + bot + "}"
        ).catch(function(e) {
            console.log(e);
        });
        bot = bot + 1;
        client.on("QuestionStart", function(question) {
            question.answer(Math.floor(Math.random() * 4));
        });
    }, 2000);
});
app.listen(3000);
