const { main } = require('../index');

describe('invokes the compiler', () => {
    it('prints the right message', async () => {
        const compileResult = await main()
        expect(compileResult).toBe("hi there");
    })
})