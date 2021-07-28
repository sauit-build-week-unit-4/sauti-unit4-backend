const server = require('./server')
const request = require('supertest')



describe('GET /', () => {
    it('has process.envNODE_ENV as "development" ', () => {
        expect(process.env.NODE_ENV).toBe('development')
    })

    it('returns server is up', () => {
        return request(server).get('/')
        .expect('content-type', /json/)
        // .expect('content-length', '')
        .then(res => {
            expect(res.body.yodaSays).toBe('Server up it is')
        })
    })
})

