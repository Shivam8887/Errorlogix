import { useState } from 'react';
import { Header, Footer } from './components/header';
import { CodeError } from './components/Code';
import { Error } from './components/Error';
import { AboutFooter } from './components/About';
import {BlogModule } from './components/BlogsPost'

function App() {
  const [activeComponent, setActiveComponent] = useState('code'); // 'code' or 'error'

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="border border-t-0 bg-white w-full h-screen p-4">
          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <button
              className={`py-2 px-4 mr-2 rounded-md ${
                activeComponent === 'code' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => setActiveComponent('code')}
            >
              Show Code Error
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeComponent === 'error' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => setActiveComponent('error')}
            >
              Show Error Analysis
            </button>
          </div>

          {/* Conditional Rendering */}
          {activeComponent === 'code' ? <CodeError /> : <Error />}
        </div>
              <BlogModule></BlogModule>
        <AboutFooter />
      </div>
      <Footer />
    </>
  );
}

export default App;
