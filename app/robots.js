// app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://carezconcrete.com/sitemap.xml",
    host: "https://carezconcrete.com",
  };
}
