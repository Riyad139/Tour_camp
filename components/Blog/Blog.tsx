import Image from "next/image";
import FeturedArticles from "../FeturedArticles";
import ArticleCard from "../ArticleCard/ArticleCard";
import LandingArticleCard from "../ArticleCard/LandingArticle";

export default function Blog({
  blogs,
}: {
  blogs: {
    id: number;
    headline: string;
    coverImage: string;
    createdAt: string;
    slug: string;
  }[];
}) {
  return (
    <>
      <section className="grid mt-24 mb-16  text-center gap-y-10 sm:gap-y-0 sm:gap-10 grid-cols-4 lg:grid-cols-3">
        <h1 className="col-start-1 font-DmSerif mb-7 text-7xl font-semibold col-end-4">
          the blog.
        </h1>
        <div className="col-start-1 text-left col-end-6 sm:col-end-3  w-full">
          <LandingArticleCard {...blogs[0]} />
        </div>
        <div className=" col-start-1 sm:col-start-3  text-left col-end-5 lg:col-end-4 w-full">
          <LandingArticleCard {...blogs[1]} />
        </div>
      </section>
      <section className="grid mb-10   gap-14 grid-cols-4">
        <div className="col-start-1  sm:col-end-3 col-end-5">
          <LandingArticleCard {...blogs[2]} />
        </div>
        <div className=" col-start-1 sm:col-start-3  col-end-5">
          <LandingArticleCard {...blogs[3]} />
        </div>
      </section>
    </>
  );
}
