async function generateMeme() {
       const prompt = document.getElementById('prompt').value;
       const memeOutput = document.getElementById('meme-output');

       // Use Imgflip API for meme generation
       const templateId = '181913649'; // Drake Hotline Bling template
       const username = 'YOUR_IMGFLIP_USERNAME'; // Replace with your Imgflip username
       const password = 'YOUR_IMGFLIP_PASSWORD'; // Replace with your Imgflip password

       const response = await fetch(https://api.imgflip.com/caption_image?template_id=${templateId}&username=${username}&password=${password}&text0=${prompt});
       const data = await response.json();

       if (data.success) {
           memeOutput.innerHTML = <img src="${data.data.url}" alt="Generated Meme">;
       } else {
           memeOutput.innerHTML = <p>Error: ${data.error_message}</p>;
       }
   }
