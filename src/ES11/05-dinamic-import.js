const button = document.getElementById('btn');

button.addEventListener('click', async () => {
    const module = await import('./module.js');
    module.hello();
});