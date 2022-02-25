import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Form from "./pages/Form";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  // const [currentPage, setCurrentPage] = useState('Home')

  // const renderPage = () => {
  //     if (currentPage === 'Home') {
  //       return <Home />;
  //     }
  //     if (currentPage === 'Form') {
  //       return <Form />;
  //     }
  //     return <User />;
  //   };

  //   const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
        <Switch>
          <Routes>
           
            <Header />
            <Quote />
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/user" element={<User />} />
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
