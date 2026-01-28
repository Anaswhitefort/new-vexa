import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Blog | Ecommerce Tips & Digital Marketing Insights - Vexa Abu Dhabi",
  description: "Read Vexa's blog for the latest ecommerce tips, Shopify guides, digital marketing strategies, and industry insights. Stay ahead with expert advice from Abu Dhabi's leading agency.",
  keywords: "ecommerce blog, Shopify tips, digital marketing articles, web design trends, business insights, marketing strategies",
  openGraph: {
    title: "Blog - Ecommerce & Digital Marketing Insights",
    description: "Explore the latest articles and news about ecommerce development and digital marketing.",
  },
};

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>
    </>
  );
};

export default BlogPage;
