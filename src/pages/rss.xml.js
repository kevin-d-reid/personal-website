import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET (context) {
  const posts = (await getCollection("blogposts", ({ data }) => {return data.status === "published"})).sort((a, b) => b.data.date.uploaded.valueOf() - a.data.date.uploaded.valueOf());
  return rss({
    title: "Kevin Reid's Blog",
    description: "",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date.uploaded,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
    customData: `<language>en-ca</language><atom:link href="${context.site}rss.xml" rel="self" type="application/xml" />`,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom"
    },
    trailingSlash: false
  });
}