describe('Game', () => {

    it("It should return Hello", ()=>{
        const game = new Game()
        const message = game.getHello();

        expect(message).toBe('Hello')
    })
})