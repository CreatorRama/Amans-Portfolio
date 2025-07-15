import React, { useState, useRef } from 'react';
import chatbot from '../videos/chatbot.mp4'
import excalidraw from '../videos/excali.mp4'
import blogApp from '../videos/blog-app-video.mp4';   
import excal from '../assets/chatbot.png';
import chat from '../assets/excalidraw.png';
import student from '../assets/student.png';
import apollo from '../assets/Apollo.png';
import blog from '../assets/Blog.png';
import task from '../assets/task.png';
import CollabTodo from '../assets/Collab-Todo.png';
import stayfinder from '../assets/stayfinder.png';

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Stayfinder",
            description: "StayFinder is a full-stack property rental platform inspired by Airbnb, built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse, book, and list properties with features like JWT authentication, interactive maps, and a mock payment system. The app includes host dashboards, advanced search filters, and responsive design for seamless user experience.",
            technologies: ["React", "express.js", "MongoDB", "Map-Box", "Stripe"],
            videoUrl: chatbot,
            demoUrl: "https://stay-finder-4a7u.vercel.app/",
            thumbnailUrl: stayfinder,
            githubUrl: "https://github.com/CreatorRama/StayFinder",
        },
        {
            id: 2,
            title: "Collaborative-todo-board",
            description: "A collaborative to-do board that's like Trello, but supercharged with live sync and smart features!",
            technologies: ["React", "express.js", "MongoDB", "Socket.io"],
            videoUrl: chatbot,
            demoUrl: "https://collab-todo-black.vercel.app",
            thumbnailUrl: CollabTodo,
            githubUrl: "https://github.com/CreatorRama/Collab-Todo",
        },
        {
            id: 3,
            title: "A chatbot using gemini-api",
            description: "A comprehensive dashboard for tracking sales, inventory, and customer analytics with real-time data visualization.",
            technologies: ["React", "express.js", "MongoDB", "record-rtc", "tailwind"],
            videoUrl: chatbot,
            demoUrl: "https://ai-chatbot-50b27.web.app/",
            thumbnailUrl: chat,
            githubUrl: "https://github.com/CreatorRama/chatbot-backend",
        },
        {
            id: 4,
            title: "A custom Excalidraw Web App",
            description: "A machine learning application that generates unique artwork based on text prompts using transformer architecture.",
            technologies: ["React", "React-Konva", "Konva.js", "Tailwind"],
            videoUrl: excalidraw,
            demoUrl: "https://custom-excalidraw-app.vercel.app/",
            thumbnailUrl: excal,
            githubUrl: "https://github.com/CreatorRama/Custom-Excalidraw-App",
        },
        {
            id: 5,
            title: "Student Teacher Appointment System",
            description: "A cross-platform mobile application for workout tracking, nutrition planning, and fitness goals with social features.",
            technologies: ["React", "Express", "Mongodb", "Nodemailer"],
            videoUrl: chatbot,
            demoUrl: "https://student-techer-appointment-system.vercel.app",
            thumbnailUrl: student,
            githubUrl: "https://github.com/CreatorRama/student-techer-appointment-system",
        },
        {
            id: 6,
            title: "Blog-Creator-App",
            description: "A Blog Creating App where we can publish and edit blogs ",
            technologies: ["NextJs", "Express", "Mongodb"],
            videoUrl: blogApp,
            demoUrl: "https://blog-app-fawn-delta.vercel.app",
            thumbnailUrl: blog,
            githubUrl: "https://github.com/CreatorRama/Blog-App",
        },
        {
            id: 7,
            title: "Task Tracker System",
            description: "A Task creating app and track the status ",
            technologies: ["React", "Express", "Mongodb"],
            videoUrl: blogApp,
            demoUrl: "https://task-tracker-tau-neon.vercel.app",
            thumbnailUrl: task,
            githubUrl: "https://github.com/CreatorRama/Task-Tracker",
        },
        {
            id: 8,
            title: "Apollo-clone",
            description: "A doctor appointment system through apollo where we filter doctors based on various categories",
            technologies: ["NextJs", "Express", "Mongodb"],
            videoUrl: blogApp,
            demoUrl: "https://apollo-clone-alpha.vercel.app",
            thumbnailUrl: apollo,
            githubUrl: "https://github.com/CreatorRama/Apollo-clone",
        }
    ];

    return (
        <section 
            id='projects' 
            className="py-20 relative"
            style={{
                background: 'radial-gradient(circle at center, #4338ca, #3b82f6, #1e40af)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative shapes for added modern look */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
                    <div className="w-24 h-1 bg-white mb-6"></div>
                    <p className="text-white text-center max-w-2xl opacity-90">
                        Explore my recent work and creative projects. Hover over any project to see it in action.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    // Handle hover video playback
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Project Media (Video/Image) */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={project.thumbnailUrl || project.videoUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <video
                    ref={videoRef}
                    src={project.videoUrl}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    muted
                    loop
                    playsInline
                />
                <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-xs font-semibold text-white px-2 py-1 rounded-full bg-blue-500">
                        Web Development
                    </span>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded bg-blue-500 text-white font-medium text-sm hover:bg-blue-600 transition-colors duration-300"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;