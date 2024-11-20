fechar_buttons = () => {
    const audio = document.querySelectorAll('.button_play');
    audio.forEach(audio => {
        audio.style.display = 'none';
        audio.pause();

    });
}

const cards = document.querySelectorAll('.button');
cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        //   console.log(e.currentTarget);
        var DivPai = e.currentTarget.parentElement;
        //   console.log(DivPai);
        var play = DivPai.querySelector('.button_play');
        if (play.style.display === 'none') {
            play.style.display = 'block';
        }
        else {
            play.style.display = 'none';
        }
    });

});

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        var DivPai = e.currentTarget.parentElement;
        // console.log(DivPai);
        var play = DivPai.querySelector('.button_play');
        fechar_buttons();
        if (play.style.display === 'none') {
            play.style.display = 'block';
        }
        else {
            play.style.display = 'none';
        }
    });
});

cards.forEach(card => {
    card.addEventListener('mouseleave', (e) => {
        //   console.log(e.currentTarget);
        var DivPai = e.currentTarget.parentElement;
        //   console.log(DivPai);
        var play = DivPai.querySelector('.button_play');
        if (play.style.display === 'none') {
            play.style.display = 'block';
        }
        else {
            play.style.display = 'none';
        }
    });
});

fechar_music = () => {
    const audio = document.querySelectorAll('.audio');
    audio.forEach(audio => {
        audio.style.display = 'none';
        audio.pause();

    });
}


pegaNomeDeUsuario = () => {
    let usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario)
    let elementoUsuario = document.querySelector(".usuario");
    elementoUsuario.textContent = usuario.user.name;
}

pegaNomeDeUsuario();

document.querySelectorAll('.button_play').forEach(button => {
    button.addEventListener('click', (e) => {
        const elementoPai = e.currentTarget.closest('.flex');
        const audio = elementoPai.querySelector('.audio');
        const canva = document.querySelector('#canvas');
        if (audio.style.display === 'none' || audio.style.display === '') {
            fechar_music();
            audio.style.display = 'block';
            canva.style.display = 'block'
        } else {
            audio.style.display = 'none';
            canva.style.display = 'none'
            audio.pause();
        }
    });
});

msg_sair = () => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', sai = async (e) => {
            let ok = await confirm(
                `
                Deseja realmente sair?
                `
            );
            if (!ok) {
                e.preventDefault()
            }
        });
    });
}

msg_sair();

document.addEventListener('DOMContentLoaded', () => {
    const audioElements = document.querySelectorAll('audio');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let animationId;

    audioElements.forEach(audioElement => {
        const audioSource = audioContext.createMediaElementSource(audioElement);
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);

        audioElement.addEventListener('play', () => {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            draw();
        });

        audioElement.addEventListener('pause', () => {
            cancelAnimationFrame(animationId);
        });

        audioElement.addEventListener('ended', () => {
            cancelAnimationFrame(animationId);
        });
    });

    let hue = 0;

    function draw() {
        animationId = requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 1.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.fillRect(x, canvas.height - barHeight / 1.8, barWidth, barHeight / 1.8);

            x += barWidth + 2;
        }

        hue += 1;
        if (hue >= 360) {
            hue = 0;
        }
    }
});




