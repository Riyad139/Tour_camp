import BlogExert from "@/components/BlogExert";
import BlogHeadLine from "@/components/BlogHeadLine";
import BlogHeader from "@/components/BlogHeader";
import BlogImageParaGraph from "@/components/BlogImageParaGraph";
import BlogParaGraph from "@/components/BlogParagraph";
import FeturedArticles from "@/components/FeturedArticles";
import BlogLandScapeImage from "@/components/BlogLandScapeImage";
import { FetchBlogFromStrapi } from "@/utils/strapiutils";

export default async function Slug({ params }: { params: { slug: string } }) {
  const result = await FetchBlogFromStrapi("/blogs");

  const selectedSlug = result.find(
    (item: { slug: string }) => item.slug === params.slug
  );

  return (
    <main>
      <BlogHeader
        img={
          process.env.NEXT_PUBLIC_strapi_image_path + selectedSlug.coverImage
        }
        text={selectedSlug.headline}
        author={selectedSlug.author}
        createdAt={selectedSlug.createdAt}
        textColor="white"
      />
      <BlogExert descriptions={selectedSlug.short_descriptions} />
      {selectedSlug.BlogContent.map(
        (content: {
          __component: string;
          Headline: string;
          description: string;
          LandScapeImage: boolean;
          showImageRight: boolean;
          id: number;
          image: any;
        }) => {
          switch (content.__component) {
            case "blog-article.headline":
              return (
                <BlogHeadLine
                  key={selectedSlug.slug + content.id}
                  headline={content.Headline}
                />
              );
            case "blog-article.paragraph-image":
              return (
                <BlogImageParaGraph
                  description={content.description}
                  LandScapeImage={content.LandScapeImage}
                  showImageRight={content.showImageRight}
                  image={
                    process.env.NEXT_PUBLIC_strapi_image_path +
                    content.image.data.attributes.url
                  }
                />
              );
            case "blog-article.paragraph":
              return <BlogParaGraph description={content.description} />;
            case "blog-article.landscape-image":
              return (
                <BlogLandScapeImage
                  image={
                    process.env.NEXT_PUBLIC_strapi_image_path +
                    content.image.data.attributes.url
                  }
                />
              );
          }
        }
      )}

      <FeturedArticles blogs={result} />
    </main>
  );
}

export async function generateStaticParams() {
  const result = await FetchBlogFromStrapi("/blogs");
  return result.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}
