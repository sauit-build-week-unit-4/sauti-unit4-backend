const server = require('../server')
const request = require('supertest')
const db = require('../../data/db-config')


describe('items test', () => {


    it('new added item', async () => {
       const  res = await request(server).get('/api/items/')
        expect(res.statusCode).toBe(201)
        expect('content-type', /json/)

    })
    it('found the id', async () => {
        const res2 = await request(server).get('/api/items/:id')
        let expectedBody = req.body

        expect(res2.statusCode).toBe(200)
        expect(res2.body).toEqual(expectedBody)

    })

})