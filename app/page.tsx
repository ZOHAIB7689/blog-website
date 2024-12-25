import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/blog";
import { Blog } from "@/types/blog";

export default async function Home() {
  const posts: Blog[] = (await getPosts()).map((post) => ({
    ...post,
    metadata: post.metadata ?? "", // Default metadata if undefined
  }));

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: Blog) => <BlogItem key={post._id} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
