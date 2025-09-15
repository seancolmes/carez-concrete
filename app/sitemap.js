// app/sitemap.js
export default function sitemap() {
  const base = "https://carezconcrete.com";

  // List every top-level route you want indexed
  return [
    { url: `${base}/`,        changefreq: "weekly",  priority: 1.0 },
    { url: `${base}/services`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/projects`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/about`,    changefreq: "yearly",  priority: 0.5 },
    { url: `${base}/faq`,      changefreq: "yearly",  priority: 0.5 },
    { url: `${base}/estimate`, changefreq: "monthly", priority: 0.7 },
  ];
}
