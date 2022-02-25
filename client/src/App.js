import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
// import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user" />
          <Route path="/daily" />
          <Route path="/recap" />
          <Route path="*" />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

