const request = require('supertest')
const app = require('../app')

let token

beforeAll(async () => {
    const response = await request(app)
        .post('/login')
        .send({
            username: "john",
            password: "abc123"
        })
    token = response.body.access_token
    // console.log(token);
}, 10000);

describe('Test Product API Endpoint', () => {
    test('GET /product should returns 200 OK', async () => {
        const response = await request(app)
            .get('/product')
            .set("access_token", token)
        // console.log(response);
        expect(response.status).toBe(200)
    })
})