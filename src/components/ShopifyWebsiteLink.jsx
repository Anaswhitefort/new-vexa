import { shopifyUrl } from "@/lib/business";

export default function ShopifyWebsiteLink() {
  return (
    <a
      href={shopifyUrl}
      className="font-semibold underline underline-offset-4 hover:opacity-75"
    >
      Explore Vexa’s detailed Shopify services at shopify.vexa.ae
    </a>
  );
}
