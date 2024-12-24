import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/blog";
export default async function Home() {
  const posts = await getPosts();

  return <div className="py5">
    {posts.length > 0 ? (posts.map((post:any) =><BlogItem key={post.id} blog={post}/>)):(
      <p>no posts found</p>
    ) }
  </div>;
}
