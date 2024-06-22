import FeturedArticles from "@/components/FeturedArticles";
import FeturedBlog from "@/components/FeturedBlog";
import Subscriptions from "@/components/Subscriptions";
import { FetchBlogFromStrapi } from "@/utils/strapiutils";

export default async function Blog() {
  const result = await FetchBlogFromStrapi("/blogs");

  const feturedBlog = result.filter((item: any) => item.isHighlighted === true);
  const feturedArticles = result.filter(
    (item: any) => item.isHighlighted === false
  );

  return (
    <main>
      <FeturedBlog {...feturedBlog[0]} />
      <Subscriptions />
      <FeturedArticles blogs={feturedArticles} />
    </main>
  );
}
