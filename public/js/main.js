const SignData = class {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
};

const signMapping = {
    'help': new SignData(`Hallo, kann ich Ihnen <b>helfen</b>?`, 'public/video/1.Satz.mp4'),
    'exam': new SignData('Ich werde Sie jetzt <b>untersuchen</b>.', 'public/video/6.Satz.mp4'),
    'hurt': new SignData('Haben Sie <b>Schmerzen</b>?', 'public/video/3.Satz.mp4'),
    'ambulance': new SignData('Ich werde einen <b>Krankenwagen</b> rufen.', 'public/video/2.Satz.mp4'),
    'save': new SignData('Der <b>Rettungssanitäter</b> ist gleich da.', 'public/video/5.Satz.mp4'),
    'stay': new SignData('Ich <b>bleibe</b> hier.', 'public/video/4.Satz.mp4'),
    'alone': new SignData('Du bist <b>nicht allein</b>.', 'public/video/7.Satz.mp4'),
};

const signContainer = document.getElementById("sign-videos");
const player = document.getElementById('player');

const removeActivePlayer = () => {
    let activeElement = document.getElementsByClassName('active-sign-video');
    if(activeElement.length > 0) {
        activeElement[0].classList.remove('active-sign-video');
    }
};

player.addEventListener('ended', () => {
    removeActivePlayer();
});

const playVideo = (id, link) => {
    player.src = link;
    player.play();
    removeActivePlayer();
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
                <button type="submit" id="sign-button-${index}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" >${sign.text}</button>
              <!--  <input contenteditable type="submit" id="sign-button-${index}" value="${sign.text}" class="text-violet-200 bg-violet-700 border-solid border-2 border-violet-700 rounded p-2" />-->
            </form>
        </div>`);
    };
    signContainer.innerHTML = mappingHtml;
});

