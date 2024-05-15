import { doesNotExist, testCoordinates } from '../../tools/tools';
import { CypressTimeouts, SMILUrls } from '../../enums/enums';

describe('repeatCountNoIntro.smil test', () => {
	it('processes smil file correctly', () => {
		cy.visit('/');
		cy.frameLoaded('iframe');
		cy.iframe().find('#SMILUrl').clear().type(SMILUrls.repeatCountNoIntro);
		cy.wait(CypressTimeouts.submitTimeout);
		cy.iframe().find('#SMILUrlWrapper').submit();
		cy.wait(2000);
		// doesNotExist(cy.get('body'), 'video[src*="videos/loader_fe864e57.mp4"]');

		cy.get('video[src*="videos/video-test_17354648.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'be.visible',
		);
		testCoordinates(cy.get('video[src*="videos/video-test_17354648.mp4"]'), 0, 0, 1920, 1080);

		cy.get('video[src*="videos/video-test_17354648.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'not.be.visible',
		);
		cy.iframe()
			.find('img[id*="landscape1_7a8cff48.jpg-main-img1"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('be.visible');
		testCoordinates(cy.iframe().find('img[id*="landscape1_7a8cff48.jpg-main-img1"]'), 0, 0, 1920, 1080);

		cy.iframe()
			.find('img[id*="landscape1_7a8cff48.jpg-main-img1"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('not.be.visible');
		cy.iframe()
			.find('img[id*="landscape2_20622151.jpg-main-img2"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('be.visible');
		testCoordinates(cy.iframe().find('img[id*="landscape2_20622151.jpg-main-img2"]'), 0, 0, 1920, 1080);

		cy.iframe()
			.find('img[id*="landscape1_7a8cff48.jpg-main-img1"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('be.visible');
		cy.iframe()
			.find('img[id*="landscape2_20622151.jpg-main-img2"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('not.be.visible');
		testCoordinates(cy.iframe().find('img[id*="landscape1_7a8cff48.jpg-main-img1"]'), 0, 0, 1920, 1080);

		cy.iframe()
			.find('img[id*="landscape1_7a8cff48.jpg-main-img1"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('not.be.visible');
		cy.iframe()
			.find('img[id*="landscape2_20622151.jpg-main-img2"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('be.visible');
		testCoordinates(cy.iframe().find('img[id*="landscape2_20622151.jpg-main-img2"]'), 0, 0, 1920, 1080);

		cy.get('video[src*="videos/video-test_54188510.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'be.visible',
		);
		cy.iframe()
			.find('img[id*="landscape2_20622151.jpg-main-img2"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('not.be.visible');
		testCoordinates(cy.get('video[src*="videos/video-test_54188510.mp4"]'), 0, 0, 1920, 1080);
		cy.wait(CypressTimeouts.videoTransitionTimeout);

		cy.get('video[src*="videos/video-test_54188510.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'be.visible',
		);
		cy.iframe()
			.find('img[id*="landscape2_20622151.jpg-main-img2"]', { timeout: CypressTimeouts.elementAwaitTimeout })
			.should('not.be.visible');
		testCoordinates(cy.get('video[src*="videos/video-test_54188510.mp4"]'), 0, 0, 1920, 1080);

		cy.get('video[src*="videos/video-test_17354648.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'be.visible',
		);
		cy.get('video[src*="videos/video-test_54188510.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should(
			'not.be.visible',
		);
		testCoordinates(cy.get('video[src*="videos/video-test_17354648.mp4"]'), 0, 0, 1920, 1080);
	});
});
