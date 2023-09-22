"use client";
import { CSSProperties } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import { ConfigProvider, Layout } from "antd";

const { Header, Content } = Layout;

const layoutStyle: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const headerStyle: CSSProperties = {
  fontSize: "16px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 0,
  backgroundColor: "#ffffff",
  fontWeight: "bold",
};

const contentStyle: CSSProperties = {
  flexGrow: 1,
  color: "#fff",
  backgroundColor: "#f7f7f7",
  margin: "0 100px",
};

import "./globals.css";
import theme from "../theme/themeConfig";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <Head>
      <title>Covid Dashboard</title>
      <meta name="description" content="Covid data displayed in various graphs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className={inter.className}>
      <ConfigProvider theme={theme}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>App title</Header>
          <Content style={contentStyle}>{children}</Content>
        </Layout>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;
