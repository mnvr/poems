import { createContentLoader, type SiteConfig } from "vitepress";
import { writeFile } from "fs/promises";
import path from "path";

const baseURL = "https://poems.mrmr.io";

export const generateFeed = async (config: SiteConfig) => {
    const pages = await createContentLoader("*.md").load();
    const pageData = pages
        .map(({ url, frontmatter }) => {
            const { title, date } = frontmatter;
            // Ignore pages that don't have a frontmatter date (e.g. /random).
            if (!title || !date) return undefined;
            // `url` is the slug.
            const href = baseURL + url;
            return { title, date, href };
        })
        .filter((s) => !!s)
        // Descending order, most recent first
        .sort((a, b) => b.date - a.date);

    const entries = pageData
        .map(
            ({ title, date, href }) =>
                `  <entry>
    <title>${title}</title>
    <link href="${href}"/>
    <id>${href}</id>
    <updated>${date.toISOString()}</updated>
  </entry>`
        )
        .join("\n");

    const updated = pageData[0]!.date;
    const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Poems and other fiction by Manav</title>
  <id>${baseURL}</id>
  <link href="${baseURL}"/>
  <link rel="self" href="/feed.xml"/>
  <icon>/icon.png</icon>
  <updated>${updated.toISOString()}</updated>
  <author><name>Manav Rathi</name></author>
${entries}
</feed>
`;

    await writeFile(path.join(config.outDir, "feed.xml"), feed);
};
