import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(content) {
  return (
    <div>
    <head></head>
    <body>
      <Header />
      <div>{content}</div>
      <Footer />{" "}
    </body>
  </div>
  )
}

export default Layout