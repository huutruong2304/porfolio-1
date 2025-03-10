import Header from '@/components/layout/header';
import Avatar from '@/components/ui/avatar';
import SectionContent from '@/components/section-content';
import SectionTitle from '@/components/section-title';
import SocialLink from '@/components/ui/social-link';
import { FaFacebookF, FaInstagramSquare, FaTiktok, FaYoutube } from 'react-icons/fa';
import SkillBoard from '@/components/skill-board';
import ProjectCard from '@/components/project-card';
import Footer from '@/components/layout/footer';
import ContactRow from '@/components/contact-row';

export default function Home() {
  const info = {
    fistName: 'Truong',
    lastName: 'Nguyen',
    role: 'Front end developer',
    avatar: '/images/me.jpg',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    skills: [
      { id: 'html', name: 'HTML', icon: '/icons/html.svg' },
      { id: 'css', name: 'CSS', icon: '/icons/css.svg' },
      { id: 'js', name: 'JavaScript', icon: '/icons/javascript.svg' },
      { id: 'ts', name: 'TypeScript', icon: '/icons/typescript.svg' },
      { id: 'react', name: 'React', icon: '/icons/react.svg' },
      { id: 'next', name: 'Next.js', icon: '/icons/next.svg' },
      { id: 'angular', name: 'Angular', icon: '/icons/angular.svg' },
      { id: 'nest', name: 'Nest.js', icon: '/icons/nest.svg' },
    ],
    projects: [
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
    ],
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="min-h-screen">
        <section
          id="home"
          className="w-full h-screen bg-[url(/images/background-mobile.jpg)] lg:bg-[url(/images/background-pc.jpg)] bg-fixed bg-no-repeat bg-cover bg-center relative"
        >
          {/* info */}
          <div className="container px-10 md:px-20 mx-auto h-full flex items-center justify-start z-10 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl text-white">{info.lastName}</h2>
              <h1 className="font-bold text-8xl text-white">{info.fistName}</h1>
              <p className="text-4xl text-white">{info.role}</p>
            </div>
          </div>
          {/* social link */}
          <div className="absolute w-full container px-10 md:px-20 bottom-10 left-1/2 -translate-x-1/2 social-link flex gap-6 ">
            <SocialLink>
              <FaYoutube size={30} />
            </SocialLink>
            <SocialLink>
              <FaFacebookF size={30} />
            </SocialLink>
            <SocialLink>
              <FaInstagramSquare size={30} />
            </SocialLink>
            <SocialLink>
              <FaTiktok size={30} />
            </SocialLink>
          </div>
        </section>
        <section id="about" className="min-h-screen md:h-[820px] bg-black px-10 md:px-20 py-20">
          <SectionContent classes="flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Avatar src={info.avatar} />
            </div>
            <div className="w-full lg:w-1/2">
              <SectionTitle>About me</SectionTitle>
              <p className=" text-white leading-relaxed">{info.description}</p>
            </div>
          </SectionContent>
        </section>
        <section id="skills" className="h-auto md:h-[800px] bg-black px-10 md:px-20 py-20">
          <SectionContent classes="flex-col justify-center">
            <SectionTitle>My skills</SectionTitle>
            <SkillBoard amountYear="4+" skills={info.skills} />
          </SectionContent>
        </section>
        <section id="project" className="h-auto md:h-[800px] bg-black px-10 md:px-20 py-20">
          <SectionContent classes="flex-col justify-center">
            <SectionTitle>Project</SectionTitle>
            <div className="w-full h-96 flex overflow-auto gap-6">
              {info.projects.map((project) => (
                <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} />
              ))}
            </div>
          </SectionContent>
        </section>
        <section id="contact" className="h-auto md:h-[800px] bg-black px-10 md:px-20 py-20">
          <SectionContent classes="flex-col justify-center gap-2 ">
            <SectionTitle>Contact me</SectionTitle>
            <ContactRow title="Phone" content="+84 88888888" />
            <ContactRow title="Email" content="your.email@mail.com" href="mailto:your.email@example.com" />
            <ContactRow title="LinkedIn" content="Truong Nguyen" href="#" />
            <ContactRow title="Github" content="Truongnguyen" href="#" />
          </SectionContent>
        </section>
      </main>
      <Footer username="Truong Nguyen" />
    </div>
  );
}
