// pages/index.js (or wherever you want to include the App component)
import dynamic from 'next/dynamic';

// Dynamically import the App component with ssr set to false
const App = dynamic(() => import('./app.jsx'), { ssr: false });

const Home = () => {
  return(
    <div className='border-2 border-black '>
      <div className="left w-[20%]">

      </div>
      <div className="right w-[100%]">
        <App />;
      </div>
    </div>

  ) 
};

export default Home;
