
import $ from "jquery";
import sos from '@signageos/front-applet';
import { SmilPlayer } from './components/smilPlayer';

declare let global: any;

global.jQuery = $;

sos.onReady().then(async function () {
	const contentElement = document.getElementById('root');
	console.log('sOS is ready');
	contentElement!.innerHTML = 'sOS is ready';
});

$("#repeatCount").on("click", () => {
    const myHTML: string = `
              <b>
                Start player
              </b>`;
    $('#dialog-container').html(myHTML);

    const smilPlayer = new SmilPlayer("https://s3.us-west-2.amazonaws.com/dev-resources.enplug.in/smil/repeatCount.smil");

    smilPlayer.start();
});

$("#zones").on("click", () => {
    const myHTML: string = `
              <b>
                Start player
              </b>`;
    $('#dialog-container').html(myHTML);

    const smilPlayer = new SmilPlayer("https://s3.us-west-2.amazonaws.com/dev-resources.enplug.in/smil/zones.smil");

    smilPlayer.start();
});