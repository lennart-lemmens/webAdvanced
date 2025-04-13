'use strict';

const inputText = document.getElementById('inputText');
const tweetOutput = document.getElementById('tweetOutput');
const postOutput = document.getElementById('postOutput');
const comboOutput = document.getElementById('comboOutput');

const formatText = () => {
    let tweet = inputText.value.substr(0, 140);
    let post = inputText.value;
    
    tweetOutput.innerHTML = tweet;
    postOutput.innerHTML = post;
    comboOutput.innerHTML = tweet + post;
}

