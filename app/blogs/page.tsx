import React from "react";
import BlogCard from "../components/blogs/BlogCard";

type BlogPostEdge = {
  node: {
    title: string;
    brief: string;
    url: string;
    coverImage: {
      url: string;
    };
  };
};

async function getBlogEdgesFromHashnode(
  endpoint: string,
  accessToken: string
): Promise<BlogPostEdge[]> {
  const graphQLQuery = `
        query {
          publication(host: "sudhz.hashnode.dev") {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage{
                    url
                  }
                }
              }
            }
          }
        }`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      query: graphQLQuery,
    }),
    next: { revalidate: 10 },
  });
  const jsonData = await response.json();
  return jsonData.data.publication.posts.edges;
}

async function Blogs() {
  const posts = await getBlogEdgesFromHashnode(
    process.env.HASHNODE_ENDPOINT!,
    process.env.HASHNODE_ACCESS_TOKEN!
  );

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      {posts.map((post: BlogPostEdge) => (
        <BlogCard
          key={post.node.url}
          title={post.node.title}
          brief={post.node.brief}
          url={post.node.url}
          imgUrl={post.node.coverImage.url}
        />
      ))}
    </div>
  );
}

export default Blogs;
