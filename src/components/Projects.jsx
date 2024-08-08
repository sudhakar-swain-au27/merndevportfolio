import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../assets/data';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 bg-white' id='projects'>
      <div className='container mx-auto px-4'>
        <SectionTitle text='Web Creations' />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
