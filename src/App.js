import './App.css';
import { Home } from './components/Home.js';
import { Navbar } from './components/Navbar.js';
import { Profile } from './components/Profile.js';
import { Contact } from './components/Contact.js';
import { Form } from './components/Form.js';


//import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // must be BrowserRouter!!
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  // const [mydata, setMydata] = useState(null);
  // const [name, setName] = useState("");
  const client = new QueryClient( {defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

    // --------------- use-query ------------
 
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/execuse/:category" element={<QueryHook />} />
            <Route path="*" element={<h1> Page Not Found</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
        
    </div>
  );

}

export default App;
