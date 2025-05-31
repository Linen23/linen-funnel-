const input = document.getElementById('terminalInput');
const output = document.getElementById('output');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    output.innerText += `\nuser@funnel:~$ ${command}`;
    handleCommand(command);
    input.value = '';
  }
});

function handleCommand(cmd) {
  switch (cmd) {
    case 'start':
      output.innerText += '\nWelcome! Type `social` to see my social media links.';
      break;

    case 'social':
      output.innerText += `
      
📡 Social Links:
- YouTube: type 'youtube'
- TikTok: type 'tiktok'
- Facebook: type 'facebook'

Or just type the platform name to open the page.
`;
      break;

    case 'youtube':
      window.open('https://youtube.com/@linenX', '_blank');
      break;

    case 'tiktok':
      window.open('https://tiktok.com/@linenxaipw', '_blank');
      break;

    case 'facebook':
      window.open('https://www.facebook.com/LJairoPerez', '_blank');
      break;

    default:
      output.innerText += '\nCommand not recognized.';
  }
}

