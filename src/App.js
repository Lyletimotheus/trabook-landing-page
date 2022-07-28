// import './App.css';

import React from 'react'
// import { client } from "./client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DesignSystem from './pages/DesignSystem';


function App() {

  // const [blogData, setBlogData] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch('*[_type == "blog"]')
  //     .then((data) => setBlogData(data))
  //     .catch(console.error);
  //   }, [])
  //   console.log(blogData)

  return (
    <div className="App">
      
        {/* {blogData.map((blog, index) => (
          <div>
            <p>{blog.title}</p>
            <span>{blog.date}</span>
        </div>
        ))} */}

        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="design-system" element={<DesignSystem />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
