document.addEventListener('DOMContentLoaded', function(){
    
    const lock = document.querySelector('.lock');
    const video = document.querySelector('.nigga');
    const messageBlock = document.querySelector('.status_message_block');
    video.removeAttribute('controls');

    lock.addEventListener('click', async () =>{
        lock.style.width = '2000vw';
        await wait(0.1);
        lock.style.backgroundColor = 'black';       
        await wait(0.5);
        video.style.display = 'block';
        await wait(0.5);
        messageBlock.remove();
        video.play();
    });
});

function wait(s){
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}