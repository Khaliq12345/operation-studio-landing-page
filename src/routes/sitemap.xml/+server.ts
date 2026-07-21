import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
  const site = "https://opsengine.tech2work.tech";

  // Core pages to index
  const pages = ["", "#solution", "#process", "#studies", "#faq"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
	<loc>${site}${page}</loc>
	<changefreq>weekly</changefreq>
	<priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`,
      )
      .join("")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
