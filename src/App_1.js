import React from 'react';
import './App.css';

function App_1() {
  return (
    <div className="bg-custom-bg bg-cover bg-center min-h-screen">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

const Header = () => {
  return (
    <header className="text-white text-center py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">John Doe</h1>
        <p className="text-xl mt-4">Web Developer</p>
        <p className="text-gray-200 mt-2">Creating clean and modern websites with React and Tailwind CSS.</p>
      </div>
    </header>
  );
};

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A description of project 1.' },
    { title: 'Project 2', description: 'A description of project 2.' },
    { title: 'Project 3', description: 'A description of project 3.' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer className=" py-12 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="mt-4">Feel free to reach out at: <a href="mailto:john.doe@example.com" className="underline">john.doe@example.com</a></p>
        <div className="mt-6">
          <a href="#" className="text-white mx-2 hover:underline">LinkedIn</a>
          <a href="#" className="text-white mx-2 hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default App_1;
