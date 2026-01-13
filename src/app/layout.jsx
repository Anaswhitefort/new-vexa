import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "Vexa Agency",
    default: "Vexa Agency",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased text-neutral-100">
      <body className="min-h-full">
        <div className="fixed inset-0 -z-10 bg-site bg-site-grain" aria-hidden="true" />

        <div className="flex min-h-full flex-col">
          <RootLayout>{children}</RootLayout>
        </div>
      </body>
    </html>
  );
}
