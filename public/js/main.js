const SignData = class {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
};

const signMapping = {
    'help': new SignData('Hallo, kann ich Ihnen helfen?', 'public/video/1.Satz.mp4'),
    'exam': new SignData('Ich werde Sie jetzt untersuchen.', 'public/video/6.Satz.mp4'),
    'hurt': new SignData('Haben Sie Schmerzen?', 'public/video/3.Satz.mp4'),
    'ambulance': new SignData('Ich werde einen &lt;b&gt;Krankenwagen&lt;/b&gt; rufen.', 'public/video/2.Satz.mp4'),
    'save': new SignData('Der Rettungssanitäter ist auf halbem Weg.', 'public/video/5.Satz.mp4'),
    'stay': new SignData('Ich bleibe hier.', 'public/video/4.Satz.mp4'),
    'alone': new SignData('Du bist nicht allein.', 'public/video/7.Satz.mp4'),
};

const signContainer = document.getElementById("sign-videos");
const player = document.getElementById('player');

player.addEventListener('ended', () => {
    let activeElement = document.getElementsByClassName('active-sign-video');
    activeElement[0].classList.remove('active-sign-video');
});

const playVideo = (id, link) => {
    player.src = link;
    player.play();
    document.getElementById(id).classList.add('active-sign-video'); 
};

document.addEventListener("DOMContentLoaded", () => {
    let mappingHtml = signContainer.innerHTML;
    for(const [index, sign] of Object.entries(signMapping)) {
        console.log((`<div id="sign-video-${index}">
            <form id="sign-form-${index}" method="post" onsubmit="playVideo('sign-button-${index}','${sign.link}');return false;" class="mt-2 sign-video-btn">
                <input type="submit" id="sign-button-${index}" value="${sign.text}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" />
            </form>
        </div>`));
        mappingHtml += (`<div id="sign-video-${index}">
            <form id="sign-form-${index}" method="post" onsubmit="playVideo('sign-button-${index}','${sign.link}');return false;" class="mt-2 sign-video-btn">
                <input contenteditable type="submit" id="sign-button-${index}" value="${sign.text}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" />
            </form>
        </div>`);
    };
    signContainer.innerHTML = mappingHtml;
});

