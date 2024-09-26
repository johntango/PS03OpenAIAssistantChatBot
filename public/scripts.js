// Initiate the state object with the assistant_id and threadId as null and an empty array for messages
let state = {
  assistant_id: null,
  assistant_name: null,
  threadId: null,
  messages: [],
};
async function getAssistant(){
  let name = document.getElementById('assistant_name').value;
  console.log(`assistant_id: ${name}`)
  const response = await fetch('/api/assistants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  });
  state = await response.json();  // the state object is updated with the response from the server
  writeToMessages(`Assistant ${state.assistant_name} is ready to chat`);
  console.log(`back from fetch with state: ${JSON.stringify(state)}`)
}

async function getThread(){

// Enter Code Here

}
async function getResponse(){

// Enter Code Here

}
async function writeToMessages(message){
  let messageDiv = document.getElementById("message-container");
  messageDiv.innerHTML = message;
  document.getElementById('messages').appendChild(messageDiv);
}