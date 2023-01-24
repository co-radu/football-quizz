import { Jersey } from './jersey';

describe('Jersey', () => {
    it('should create an instance', () => {
        expect(new Jersey(
            2,
            "Brésil",
            2022,
            "http://bresil-jersey.com"
        )).toBeTruthy();
    });
});
