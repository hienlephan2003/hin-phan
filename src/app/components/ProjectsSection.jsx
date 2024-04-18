"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Ordering System Api",
    description: "Food ordering system with microservice architecture developed in Java, using DDD, CQRS, Saga, Outbox pattern,...",
    image: "/food.png",
    tag: ["All", "Rest Api", "Favourite"],
    gitUrl: "https://github.com/hienlephan2003/ordering-system",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Event Booking Website",
    description: "Employee Management website developed by React, React query allow user add events, manage events, booking tickets and make payment with zalo pay,...",
    image: "/event_book.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hienlephan2003/event_manager_backend/tree/dev_hien",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Fimae - Random Social Media App",
    description: "Fimae is a social networking application developed in Android Java that allows users to connect randomly with strangers, enabling them to exchange messages, make voice calls, and have video calls with each other. This app aims to bring people together in a unique and exciting way, fostering new connections and friendships.",
    image: "/fimae_1.png",
    tag: ["All", "Mobile", "Favourite"],
    gitUrl: "https://github.com/minhphan46/Fimae",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Football Manager App",
    description: "An football manager application that allow manage football clubs, players, matches,...",
    image: "/football.png",
    tag: ["All", "Window"],
    gitUrl: "https://github.com/tuonghuynh11/FootBallManager",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Staff Pro - Employee Management Api",
    description: "Employee Management Api with Express, MongoDB, allow manage employees, salaries, contracts, time offs,...",
    image: "/images/projects/5.png",
    tag: ["All", "Rest Api"],
    gitUrl: "https://github.com/hienlephan2003/staff_manager_backend",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Event Booking Api",
    description: "Employee Management Api with Express, MongoDB, allow manage events, add events, booking tickets, payment with zalo pay,...",
    image: "/event_ma.png",
    tag: ["All", "Rest Api"],
    gitUrl: "https://github.com/hienlephan2003/event_manager_backend/tree/dev_hien",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Nha Gia Re",
    image: "/nhagiare.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nhao2003/nha_gia_re",
    description: "Nha Gia Re is an flutter mobile application that allow user to find cheap house for rent in Vietnam, post property, chat with owner,...",
    previewUrl: "",
  },
  {
    id: 8,
    title: "Student Management App",
    description: "An student management application that allow manage school years, classes, students, time table,...",
    image: "/student_1.png",
    tag: ["All", "Window"],
    gitUrl: "https://github.com/nhao2003/StudentManagement",
    previewUrl: "",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6 ">
      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Favourite"
          isSelected={tag === "Favourite"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Window"
          isSelected={tag === "Window"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Rest Api"
          isSelected={tag === "Rest Api"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
