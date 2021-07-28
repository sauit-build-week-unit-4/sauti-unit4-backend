const server = require('../server')
const request = require('supertest')
const db = require('../../data/db-config')


describe('items test', () => {


    it('new added item', async () => {
        res = await request(server).get('/api/items/')
        expect(res.statusCode).toBe(201)
        expect('content-type', /json/)

    })
})