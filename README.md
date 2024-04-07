This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Connecting to Flickr

This project requires the following environment variables to connect to Flickr's API:

- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the Flickr API. This should be set to `https://www.flickr.com/services/rest/`.
- `API_KEY`: Your Flickr API key. This is used to authenticate requests to the Flickr API.
- `USER_ID`: The user ID of your Flickr account. This is used to fetch photos from your Flickr account.

You can set these environment variables in a `.env` file in the root of your project. Here's an example:

```bash
NEXT_PUBLIC_API_BASE_URL=https://www.flickr.com/services/rest/
API_KEY=your_flickr_api_key
USER_ID=your_flickr_user_id
```

## Learn More about the Flickr API

[Flickr API Documentation](https://www.flickr.com/services/developer/api) - Request an API key and learn about the methods and feeds available

## Learn More about Next

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
