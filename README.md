This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## For Running Local

**test**/integration contains the api integrtion test written using jest and axios. HOST_URL is by default set to vercel deployment instance. For running and testing locally, HOST_URL shoudl be set to http://localhost:3000

First, run the development server in one terminal:

```bash
npm run dev
# or
yarn dev
```

Second, run the tests server in second terminal:

```bash
npm run test
# or
yarn test
```

## For Testing via cURL

Alternatively the following curl commands can show the result of two api calls

`curl --location --request GET 'https://green-got-nextjs.vercel.app/api/greetings/farooq' `

Here farooq is the param been sent to greetings api which returns it

```
{
    "payload": "Hello farooq!"
}
```

`curl -d '{ "firstName": "farooq", "lastName": "hameed" }' -H "Content-Type: application/json" -X POST https://green-got-nextjs.vercel.app/api/create_user`

This will return the following result

```
{
    "payload": {
        "firstName": "FAROOQ",
        "lastName": "HAMEED"
    }
}
```

## Deploy on Vercel

The app is deployed to [Vercel Platform](https://green-got-nextjs.vercel.app) with github integraiton.
