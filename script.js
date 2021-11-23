const showText = document.getElementsByClassName('showText');
const textInput = document.getElementsByClassName('textInput');
const send = document.getElementsByClassName('send');
let choosePerson = document.getElementsByClassName('choosePerson'); // select

const sendingMessage = (whom,textOneOrTwo,otherMessage) => {
    const miniContainer = document.createElement('div');
    const miniContainerForOther = document.createElement('div');

    const makingContent = (whichMiniCintainer) => {
        let text = textInput[textOneOrTwo].value;
        if(text === ""){
            return;
        }
        const textBox = document.createElement('div');
        textBox.append(text);
        
       
        /*text = "";
        textInput[textOneOrTwo].value = ""; */

        textBox.classList.add('textBox');
        whichMiniCintainer.classList.add('whichContainer')
        whichMiniCintainer.append(textBox);
    }

    makingContent(miniContainer);
    const bigMiniContainer = document.createElement('div');
    bigMiniContainer.classList.add('bigMiniContainer');
    bigMiniContainer.append(miniContainer);

    makingContent(miniContainerForOther);
    const bigMiniContainerForOther = document.createElement('div');
    bigMiniContainerForOther.classList.add('bigMiniContainerForOther');
    bigMiniContainerForOther.append(miniContainerForOther);

    const showTextToOther = document.getElementsByClassName('showText')[otherMessage];
   
    //console.log();
    showTextToOther.append(bigMiniContainerForOther);
    showText[whom].append(bigMiniContainer);

    //textInput[textOneOrTwo].value = "";

    scrollFunction(0);
    scrollFunction(1);
}

const scrollFunction = (number) => {
    showText[number].scrollTop = showText[number].scrollHeight;
}

const callingFunction1 = () => {
    sendingMessage(0,0,1);
}

const callingFunction2 = () => {
    sendingMessage(1,1,0);
}

const Enter1 = (event) => {
    if(event.key === "Enter"){
        sendingMessage(0,0,1);
    }
}

const Enter2 = (event) => {
    if(event.key === "Enter"){
        sendingMessage(1,1,0);
    }
}

send[0].addEventListener('click',callingFunction1);
send[1].addEventListener('click',callingFunction2);
textInput[0].addEventListener('keypress',Enter1);
textInput[1].addEventListener('keypress',Enter2);


//scrollFunction();

/* 
const callingFunction = (whoSend) => {
    if(whoSend == "send[0]"){
        sendingMessage(0);
    }else if (whoSend == "send[1]"){
        sendingMessage(1);
    }
const whoIsSended =toOrFrom + choosePerson[forChoosePerson].textContent;

        const toWhome = document.createElement('div');
        toWhome.classList.add('toWhome');
        toWhome.append(whoIsSended); 
}*/
