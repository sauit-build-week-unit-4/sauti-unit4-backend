const server = require('../server')
const request = require('supertest')
const db = require('../../data/db-config')

describe('auth test', async () => {
    const res = await request(server).post('api/auth/')
})