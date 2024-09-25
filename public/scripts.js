
let state = {
  assistant_id: null,
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
  state = await response.json();
  console.log(`back from fetch with state: ${JSON.stringify(state)}`)
}
async function getThread(){

// Enter Code Here

}
async function getResponse(){

// Enter Code Here

}