import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Daily from "./pages/Daily"

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
        <Switch>
          <Routes>
           
            <Header />
            <Quote />
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user" element={<User />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/recap" element={<Recap />} />
            <Route path="*" element={<NotFound />} />
            <Footer />
          </Routes>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
{
  /* <div>
     <Home currentPage={currentPage} handlePageChange={handlePageChange} />
     {renderPage()}
    </div> */
}
