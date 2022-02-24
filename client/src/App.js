import React, { useState } from 'react';
import Home from './pages/Home';
import Form from './pages/Form';
import User from './pages/User';

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Form') {
          return <Form />;
        }
        return <User />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    

      return (
        <div>
          <Home currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
    }
    