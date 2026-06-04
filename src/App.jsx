import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Card({image, title, description}) {
  return (
    <div className="card">
      <img src={image}/>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card
        title="Software   Engineering"
        description="A Software Engineer designs, develops, tests, and maintains computer programs and applications."
        image = "https://www.isit.co.in/images/IT-Engineering2.jpg"
      />

      <Card
        title="Information Technology"
        description="Information Technology focuses on managing networks, databases, and information systems."
        image = "https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2024/04/Information-Technology-1-1024x462-1.webp?resize=640%2C289&ssl=1"
      />

      <Card
        title="Civil Engineering"
        description="Civil Engineering focuses on the design, construction, and maintenance of buildings, roads, bridges, and other infrastructure."
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJ4tw8qvwVGug1RMsJ72o3Itz1qLz4tujw&s"
      />
    </div>
  );
}


export default App

