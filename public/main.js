const SignData = class {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
};

const signMapping = {
    'help': new SignData('Hallo, kann ich Ihnen helfen?', 'public/video/hallo-kann-ich-ihnen-helfen.mp4'),
    'exam': new SignData('Ich werde Sie jetzt untersuchen.', 'public/video2.mp4'),
    'hurt': new SignData('Haben Sie Schmerzen?', 'public/video1.mp4'),
    'ambulance': new SignData('Ich werde einen Krankenwagen rufen.', 'public/video/ich-werde-einen-krankenwagen-rufen.mp4'),
};

const signContainer = document.getElementById("sign-videos");
const player = document.getElementById('player');

player.addEventListener('ended', () => {
    let activeElement = document.getElementsByClassName('active-sign-video');
    activeElement.classList.remove('active-sign-video');
});

const playVideo = (id, link) => {
    player.src = link;
    player.play();
    document.getElementById(id).classList.add('active-sign-video'); 
};

document.addEventListener("DOMContentLoaded", () => {
    let mappingHtml = signContainer.innerHTML;
    for(const [index, sign] of Object.entries(signMapping)) {
        mappingHtml += (`<div id="sign-video-${index}">
            <form id="sign-form-${index}" method="post" onsubmit="playVideo('sign-button-${index}','${sign.link}');return false;" class="mt-2 sign-video-btn">
                <input type="submit" id="sign-button-${index}" value="${sign.text}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" />
            </form>
        </div>`);
    };
    signContainer.innerHTML = mappingHtml;
});

