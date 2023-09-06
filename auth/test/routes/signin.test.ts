import request from "supertest";
import { app } from "../../src/app";

const invalidCredentials = { errors: [ { message: 'Invalid credentials!' } ] }

it('fails when a email that does not exist is supplied', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(400)
        .expect(invalidCredentials)
});

it('fails when an incorrect password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(201);

    await request(app)
        .post('/api/users/signin')
        .send({
            email: "test@test.com",
            password: "incorrect"
        })
        .expect(400)
        .expect(invalidCredentials);

});


it('responds with a cookie when given valid credentials', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(200)

    expect(response.get('Set-Cookie')).toBeDefined();
});