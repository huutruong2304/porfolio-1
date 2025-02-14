import Header from '@/components/layout/header';
import Image from 'next/image';
// import background from '../../public/background.jpg';
import { FaFacebookF, FaInstagramSquare, FaTiktok, FaYoutube } from 'react-icons/fa';

interface Skill {
  id: string;
  name: string;
  icon: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Home() {
  const skills: Skill[] = [
    { id: 'html', name: 'HTML', icon: '/icons/html.svg' },
    { id: 'css', name: 'CSS', icon: '/icons/css.svg' },
    { id: 'js', name: 'JavaScript', icon: '/icons/javascript.svg' },
    { id: 'ts', name: 'TypeScript', icon: '/icons/typescript.svg' },
    { id: 'react', name: 'React', icon: '/icons/react.svg' },
    { id: 'next', name: 'Next.js', icon: '/icons/next.svg' },
    { id: 'angular', name: 'Angular', icon: '/icons/angular.svg' },
    { id: 'nest', name: 'Nest.js', icon: '/icons/nest.svg' },
  ];

  const projects: Project[] = [
    {
      id: '1',
      name: 'Garden Guru',
      description: 'An app that helps you manage and care for your plants with personalized tips and reminders.',
      image: '/images/plant.jpg',
    },
    {
      id: '2',
      name: 'Auto Ally',
      description: 'A platform for car enthusiasts to share, review, and buy or sell vehicles.',
      image: '/images/car.jpg',
    },
    {
      id: '3',
      name: 'Phone Pal',
      description: 'A comprehensive mobile phone management app with features like backup, tracking, and performance optimization.',
      image: '/images/phone.jpg',
    },
    {
      id: '4',
      name: 'Social Sphere',
      description: 'A new social media network focused on connecting people with shared interests and hobbies.',
      image: '/images/social.jpg',
    },
    {
      id: '5',
      name: 'Garden Guru',
      description: 'An app that helps you manage and care for your plants with personalized tips and reminders.',
      image: '/images/plant.jpg',
    },
    {
      id: '6',
      name: 'Auto Ally',
      description: 'A platform for car enthusiasts to share, review, and buy or sell vehicles.',
      image: '/images/car.jpg',
    },
  ];

  return (
    <div className="w-full">
      <Header />
      <main className="min-h-screen">
        <section
          id="home"
          className="w-full h-screen bg-[url(/images/background-mobile.jpg)] lg:bg-[url(/images/background-pc.jpg)] bg-fixed bg-no-repeat bg-cover bg-center relative"
        >
          <div className="container md:px-20 mx-auto h-full flex items-center justify-start z-10 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl text-white">Nguyen</h2>
              <h1 className="font-bold text-8xl text-white">Truong</h1>
              <p className="text-4xl text-white">Front end Developer</p>
            </div>
          </div>
          <div className="absolute left-36 bottom-10 social-link flex gap-6 ">
            <a className=" text-white hover:text-blue-400 cursor-pointer">
              <FaYoutube size={30} />
            </a>
            <a className=" text-white hover:text-blue-400 cursor-pointer">
              <FaFacebookF size={30} />
            </a>
            <a className=" text-white hover:text-blue-400 cursor-pointer">
              <FaInstagramSquare size={30} />
            </a>
            <a className=" text-white hover:text-blue-400 cursor-pointer">
              <FaTiktok size={30} />
            </a>
          </div>
        </section>
        <section id="about" className="h-[800px] bg-black">
          <div className="h-full container  md:px-20 mx-auto flex flex-wrap justify-center items-center px-3">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="h-72 aspect-square relative ">
                <Image src={'/images/me.jpg'} alt="me" className="object-cover rounded-full" fill />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl text-white mb-8">About me</h2>
              <p className=" text-white leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="h-[800px] bg-black">
          <div className="h-full container md:px-20 mx-auto flex flex-col justify-center">
            <h2 className="text-5xl text-white mb-8">My Skills</h2>
            <div className="w-full grid grid-flow-col grid-rows-3 grid-cols-4 gap-1">
              <div className="row-span-3 col-span-1 flex justify-center items-center bg-white bg-opacity-30 p-1 rounded">
                <h3 className="text-white text-3xl text-center">
                  <b className="text-7xl">4+</b> <br />
                  years <br /> experience <br />
                  working
                </h3>
              </div>
              <div className="row-span-3 col-span-3 grid grid-flow-row grid-cols-4 gap-1">
                {skills.map((skill) => (
                  <div key={skill.id} className="col-span-1 h-36 md:h-48 shadow flex justify-center items-center bg-white bg-opacity-30 p-1 rounded">
                    <div key={skill.id} className="relative h-20  md:h-30 aspect-square">
                      <Image src={skill.icon} className="object-contain" alt={skill.name} fill />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="h-[800px] bg-black ">
          <div className="h-full container md:px-20 mx-auto flex flex-col justify-center">
            <h2 className="text-5xl text-white mb-8">Projects</h2>
            <div className="w-full h-96 flex overflow-auto gap-6">
              {projects.map((project) => (
                <div key={project.id} className="w-52 h-80 flex-none">
                  <div className="relative w-full h-4/5">
                    <Image src={project.image} className="object-cover rounded" alt={project.name} fill />
                  </div>
                  <div className="my-4">
                    <h5 className="text-white font-bold">{project.name}</h5>
                    <p className="text-white line-clamp-2 ">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="h-[400px] bg-black">
          <div className="h-full container md:px-20 mx-auto flex flex-col gap-2">
            <h2 className="text-5xl text-white font-bold mb-8">Contact me</h2>
            <h5 className="text-white text-2xl">Phone: +84 888888888 </h5>
            <h5 className="text-white text-2xl">
              Email:{' '}
              <a href="mailto:your.email@example.com" className="hover:underline">
                your.email@example.com
              </a>
            </h5>
            <h5 className="text-white text-2xl">
              LinkedIn:{' '}
              <a href="#" className="hover:underline">
                Truong Nguyen
              </a>
            </h5>
            <h5 className="text-white text-2xl">
              Github:{' '}
              <a href="#" className="hover:underline">
                Truongnguyen
              </a>
            </h5>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white">
        <div className="text-center py-3">
          <p className="text-sm">&copy; 2025 Truong Nguyen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
