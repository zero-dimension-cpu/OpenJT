'use strict'
import getResponse from './api.js'
// 模拟AI回复的函数（实际中，这个函数会调用AI服务）  
function getAIResponse(userMessage) {
  // // 这里只是一个简单的示例，你可以替换为实际的AI逻辑  
  // const responses = {
  //   '你好': '你好！很高兴与你对话。',
  //   '你是谁': '我是一个简单的AI对话界面示例。',
  //   '再见': '再见，祝你有愉快的一天！'
  //   // 添加更多对话示例...  
  // };

  // // 查找匹配的回复，如果没有匹配则返回默认回复  
  // return responses[userMessage.trim().toLowerCase()] || '抱歉，我不太明白你的意思。';

  const response = '';
  getResponse(userMessage, response);
  return response;

}

// 发送消息的函数  
function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() !== '') {
    // 添加用户消息到聊天窗口  
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('chat-message', 'user-message');
    userMessageElement.textContent = userInput;
    document.getElementById('chatWindow').appendChild(userMessageElement);

    // 获取AI回复并添加到聊天窗口  
    const aiResponse = getAIResponse(userInput);
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('chat-message', 'ai-message');
    aiMessageElement.textContent = aiResponse;
    document.getElementById('chatWindow').appendChild(aiMessageElement);

    // 滚动到聊天窗口的底部  
    document.getElementById('chatWindow').scrollTop = document.getElementById('chatWindow').scrollHeight;

    // 清空输入框  
    document.getElementById('userInput').value = '';
  }
}

document.getElementById('sendButton').addEventListener('click', function () {
  sendMessage();
})