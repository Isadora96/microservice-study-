import request from "supertest";
import { app } from "../../src/app";

const invalidEmailMsg = { errors: [ { message: 'Email must be valid!', field: 'email' }] };
const invalidPasswordMsg = { errors: [ { message: 'Password must be between 4 and 20 characters!', field: 'password' }] };

it('returns a 201 on successful signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(201);

    expect(response.body.email).toEqual('test@test.com')
});

it('returns a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "bad@email",
            password: "password"
        })
        .expect(400)
        .expect(invalidEmailMsg);
});

it('returns a 400 with an invalid password (less than 4) ', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "sl"
        })
        .expect(400)
        .expect(invalidPasswordMsg);
});

it('returns a 400 with an invalid password (more than 20) ', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "areallylonginvalidpassword"
        })
        .expect(400)
        .expect(invalidPasswordMsg);
});

it('returns a 400 with missing email and password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com"
        })
        .expect(400)
        .expect(invalidPasswordMsg);

    await request(app)
        .post('/api/users/signup')
        .send({
            password: "password"
        })
        .expect(400)
        .expect(invalidEmailMsg);
});

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(201)

    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(400)
        .expect({ errors: [ { message: 'Email in use!' } ] });
});

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: "password"
        })
        .expect(201)

    expect(response.get('Set-Cookie')).toBeDefined();
});