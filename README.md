# A.T.R.I.S.

#### Automated Tracking and Response Informational System

##### A coordinated response system to an emergency.

---

### Setup

- Clone this repo and install deps.
- Set the .env variables accordingly.
  - NEXT_PUBLIC_MAPBOX_ID
  - NEXT_PUBLIC_MAPBOX_DEV_API
  - UPSTASH_REDIS_REST_URL
  - UPSTASH_REDIS_REST_TOKEN
  - UPSTASH_REDIS_REST_URL
  - UPSTASH_REDIS_REST_TOKEN
  - NEXT_PUBLIC_ABLY_API_KEY
- To run the code in development mode: `npm run dev`
- To create a production build: `npm run build`
- To run the production build: `npm run start`

---

### Tech Stack :

#### UI

- Tailwind -> DaisyUI .

#### Front-End

- ReactJS -> NextJS.

#### Back-End

- Serverless -> Vercel functions (lambdas).
- Database -> Upstash Redis.
- WebSockets -> Ably.
