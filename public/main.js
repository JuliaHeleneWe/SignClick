const SignData = class {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
};

const signMapping = {
    'help': new SignData('Hallo, ich werde Ihnen helfen.', 'public/video1.mp4'),
    'exam': new SignData('Ich werde Sie jetzt untersuchen.', 'public/video2.mp4'),
    'hurt': new SignData('Haben Sie Schmerzen?', 'public/video1.mp4'),
    'ambulance': new SignData('Ich rufe Ihnen jetzt einen Krankenwagen.', 'public/video1.mp4'),
};

const signContainer = document.getElementById("sign-videos");
const player = document.getElementById('player');

const playVideo = (id, link) => {
    player.src = link;
    player.play();

    document.getElementsByClassName('active-sign-video').classList.remove('active-sign-video');
    document.getElementById(id).classList.add('active-sign-video'); 
};

document.addEventListener("DOMContentLoaded", () => {
    let mappingHtml = signContainer.innerHTML;
    for(const [index, sign] of Object.entries(signMapping)) {
        mappingHtml += (`<div id="sign-video-${index}">
            <form id="ideas-form-${index}" method="post" onsubmit="playVideo('ideas-form-${index}','${sign.link}');return false;" class="mt-2 sign-video-btn">
                <input type="submit" value="${sign.text}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" />
            </form>
        </div>`);
    };
    signContainer.innerHTML = mappingHtml;
});

