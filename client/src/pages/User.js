import React, {useState} from 'react';
import Header from '../components/Header';
import Music from '../components/Music';
import Exercise from '../components/Exercise';
import Meditation from '../components/Meditation';
import SubstanceUse from '../components/SubstanceUse';
import DailyReminder from '../components/DailyReminder';
import Goal from '../components/Goal';
import Therapy from '../components/Therapy';


function User() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Blog') {
        return <Blog />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }


export default User