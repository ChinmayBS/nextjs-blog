This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## client side routing

## code splitting and prefetching

## Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production)

## routes can be created using /pages/ directory

## Link is used to toggle between pages

# Assets, MetaData, and CSS

## Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

## Images are lazy loaded by default

## Accessing meta data

## css modules

## Important: You need to restart the development server when you add pages/\_app.js

## pre rendering

## By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

## If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript.

## Next.js has 2 forms of pre-renderning

## 1)Static Generation

## 2)Server-side rendering

## We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

## Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

## getStaticProps

## You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.

## This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

## server side rendering and static site generation

## client side rendering

## To render markdown content, we’ll use the remark library. First, let’s install it:

` npm install remark remark-html`

## Development v.s. Production

- In development (`npm run dev` or `yarn dev`), getStaticPaths runs on every request.
- In production, getStaticPaths runs at build time.

## API code is used to create forms

Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately on your page. You’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.

Next.js has a feature called Preview Mode to solve the problem above, and it utilizes API Routes. To learn more about it take a look at our Preview Mode documentation.

# Today's discussion

- CSS Design
- client side routing
- Link to toggle between pages (navigate between questions)
- Assests, Metadata and CSS
- pre render (static generation , server-side rendering)
- differnce between react and next js

# FAQ

- need data in file or csv format(FAQ data)
- authentication both strapi and directus
