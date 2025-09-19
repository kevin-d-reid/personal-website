import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { copyright } from "@scripts/copyright";

export async function GET (context: APIContext) {
  const posts = (await getCollection("blogposts", ({ data }) => {
    return data.status === "published"})).sort((a, b) => b.data.date.uploaded.valueOf() - a.data.date.uploaded.valueOf()
  );
  return rss({
    title: "Kevin Reid's Blog",
    description: "",
    site: String(context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date.uploaded,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
    customData: `
      <atom:link href="${context.site}rss.xml" rel="self" type="application/xml" />
      <language>en-ca</language>
      <copyright>${copyright()}</copyright>
      `,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom"
    },
    trailingSlash: false
  });
}