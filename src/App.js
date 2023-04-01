
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef } from 'react';
import Header from './component/Header/Header';
import { HomeContext } from './context/HomeState';
import Home from './pages/Home';
import Typewriter from 'typewriter-effect';
import Resume from './component/Resume/Resume';
import Resume2 from './component/Resume2/Resume';
import ReactToPrint from 'react-to-print';
function App() {
  const resumeRef = useRef();
  return (
    <div>
      <Header />
      <div >
        <h1 className='text-center mt-2 text-danger'><Typewriter
          options={{
            strings: ['Resume Maker', 'Designed By Jatin'],
            autoStart: true,
            loop: true,
          }}
        /></h1>
      </div>
      <Home />
      <div >
        <h1 className='text-center mt-2 text-danger'><Typewriter
          options={{
            strings: ['Your Award Winning  Resume', 'Designed By Jatin'],
            autoStart: true,
            loop: true,
          }}
        /></h1>
      </div>
      <div>
        <ReactToPrint
          trigger={() => {
            return (
              <button className='btn btn-primary ' style={{
                position: "relative", left: "1020px"
              }}>
                Download Now
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        <Resume ref={resumeRef} />

      </div>
    </div>
  );
}

export default App;
