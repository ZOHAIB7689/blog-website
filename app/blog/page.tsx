import React from "react";
import { getPostBySlug ,getPosts } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/components/RenderBodyContent";

interface Params {
  params: {
    slug: string;
  };
}

const SingleBlogPage = async ({ params }: Params) => {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="my-10">
      <div className="mb-5">
        <h1 className="text-3xl py-2">{post.title}</h1>
        <p className="pb-1">
          <span className="font-medium">Published:</span>{" "}
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">by </span>
          {post.author.name}
        </p>

        <p>{post.metadata}</p>
      </div>

      <article className="prose lg:prose-xl">
        <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

// Static params generation for Next.js
export async function generateStaticParams() {
  const posts = await getPosts(); // Replace with your own logic to fetch posts
  return posts.map((post: { slug: string }) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export default SingleBlogPage;
