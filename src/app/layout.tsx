import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "../app/globals.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torqbit Docs",
  description: "Documentation with Torqbit",
};

const footer = (
  <Footer className="flex item-center gap-[10px]">
    <div className="flex item-center gap-[8px]">
      <Image
        src={"https://cdn.torqbit.com/static/brand/brand-icon.png"}
        alt="logo"
        className="h-auto w-[40px]"
        height={40}
        width={40}
      />
      <h4 style={{ margin: 0, padding: 0, lineHeight: 1.9 }}>Torqbit</h4>
    </div>
    .
  </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          navbar={
            <Navbar
              logoLink="/"
              className="w-full justify-between px-[20px] border-(--border-color) border-b "
              logo={
                <div className="flex item-center gap-[8px]">
                  <Image
                    src={"https://cdn.torqbit.com/static/brand/brand-icon.png"}
                    alt="logo"
                    className="h-auto w-[40px]"
                    height={40}
                    width={40}
                  />
                  <h4 style={{ margin: 0, padding: 0, lineHeight: 1.9 }}>Torqbit</h4>
                </div>
              }
            />
          }
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
