import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/LoginForm";
import SignUp from "./components/SignupForm";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user" element={<User/>} />
          <Route path="/daily" />
          <Route path="/recap" />
          <Route path="*" />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

