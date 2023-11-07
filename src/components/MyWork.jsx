import { motion } from "framer-motion";
import projects from "../data/projects";
import { Link, useLocation } from "react-router-dom";

const MyWork = () => {
  const location = useLocation();

  return (
    <div id="my-work" className="min-h-screen grid grid-cols-12">
      <div className="mb-10 row-span-1 col-span-12 grid grid-cols-12 mt-14">
        <div className="col-span-1 hidden lg:block"></div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-10 flex col-span-12 flex-row lg:justify-between justify-center items-center"
        >
          <h1 className="lg:text-[86px] text-6xl text-primary-green">
            My Work
          </h1>
          <div className="h-[1px] mt-8 w-1/2 bg-light-green text-center mx-auto hidden lg:block"></div>
        </motion.div>
      </div>
      {/* Projects grid */}
      <div className="col-span-1 lg:block hidden"></div>
      <div className="lg:col-span-10 col-span-12 justify-center align-center grid grid-cols-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 md:col-span-6 col-span-12 px-3"
          >
            <Link
              to={`/projects/${project.id}`}
              state={{ background: location }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <img
                alt={`Thumbnail for ${project.title}`}
                className="opacity-60 group-hover:opacity-40 transition-all object-cover"
                height={200}
                width={375}
                src={`/images/${project.thumbnail}`}
              />
              <div className="flex flex-row gap-2 justify-center items-center my-5">
                <span className="w-[11px] h-[11px] bg-light-green rounded-full group-hover:bg-primary-green"></span>
                <span className="text-light-gray group-hover:text-white cursor-pointer">
                  {project.title}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
