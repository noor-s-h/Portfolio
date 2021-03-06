import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Noor - Developer, designer."
        description="Full-stack Developer, UI Designer, and Open Source Advocate."
        twitter={{
          cardType: "summary_large_image",
          handle: "@NikolovLazar",
        }}
        openGraph={{
          url: "https://noor.works",
          title: "Noor - Developer, designer.",
          description:
            "Full-stack Developer, UI Designer.",
          locale: "en_US",
          images: [
            {
              url: "https://noor.works/media/banner.png",
              width: 1280,
              height: 720,
              alt: "Noor",
              type: "image/png",
            },
          ],
        }}
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
