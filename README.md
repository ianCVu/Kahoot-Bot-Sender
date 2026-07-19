# Kahoot Bot Sender
This open-source Node.js program is developed by Ian C. Vu designed for pranks, class disruption, and ruining classmates's joy. The Kahoot Bot Sender uses Express to create the functions and UI so the code can be executed, it also uses `kahoot.js-latest` to create the web bots and send them to the server. This works by getting letting the user input the game ID and bot's name. Once it's submitted it uses a fetch API to send it over to the `app.post` function which uses the input and sends the bots.
## How to set it up.
### Installing the libaries
This Node.js program runs on Express and `kahoot.js-latest`, so start by installing those first.
```
npm install express
npm install kahoot.js-latest
```

Then, download the raw file `botSender.js` on the Github Repo. Afterwards find the path to the JavaScript file on your computer. Then run the file by running:
```
node botSender.js
```
It should then start running. Open your browser to `http://localhost:3000`. Then you should be on the menu.
