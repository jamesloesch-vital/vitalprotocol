import styles from "@app/styles/global.css?url";
import tailwind from "@app/styles/tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Vital Protocol" },
    {
      name: "description",
      content: "Boost Testosterone With Enclomiphene",
    },
    { name: "og:title", content: "Vital Protocol" },
    {
      name: "og:description",
      content: "Boost Testosterone With Enclomiphene",
    },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://vitalprotocol.co" },
    {
      name: "og:image",
      content: "",
    },
    { name: "og:image:type", content: "image/png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@" },
    { name: "twitter:creator", content: "@" },
    { name: "twitter:title", content: "Vital Protocol" },
    {
      name: "twitter:description",
      content: "Boost Testosterone With Enclomiphene",
    },
    {
      name: "twitter:image",
      content: "",
    },
    {
      name: "theme-color",
      content: "#e5ebff",
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
  {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#000000",
  },
  {
    rel: "icon",
    href: "/mstile-150x150.png",
    sizes: "150x150",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/android-chrome-256x256.png",
    sizes: "256x256",
  },
  {
    rel: "icon",
    href: "/android-chrome-512x512.png",
    sizes: "512x512",
  },
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
];

const App = () => {
  const [client] = useState<QueryClient>(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <html lang="en" className="bg-primary">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <ReactQueryDevtools />
        </body>
      </html>
    </QueryClientProvider>
  );
};

export default App;
