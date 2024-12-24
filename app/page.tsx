import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post) => <BlogItem key={post._id}  />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
