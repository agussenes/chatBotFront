async function enviarMensaje() {
    const input = document.getElementById('chat-input');
    const output = document.getElementById('chat-output');
    const mensajeUsuario = input.value;

    if (mensajeUsuario.trim() === '') return;

    // Mostrar el mensaje del usuario
    output.innerHTML += `<div class="user-message">${mensajeUsuario}</div>`;
    input.value = '';

    // Enviar el mensaje a la API
    const response = await fetch('https://api.chatbot.com/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TU_TOKEN_API'
        },
        body: JSON.stringify({ prompt: mensajeUsuario })
    });
    const data = await response.json();

    // Mostrar la respuesta del chatbot
    output.innerHTML += `<div class="bot-message">${data.respuesta}</div>`;
    output.scrollTop = output.scrollHeight;
}
