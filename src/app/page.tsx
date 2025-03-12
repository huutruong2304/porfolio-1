import Header from '@/components/layout/header';
import Avatar from '@/components/ui/avatar';
import SectionContent from '@/components/section-content';
import SectionTitle from '@/components/section-title';
import SocialLink from '@/components/ui/social-link';
import { FaFacebookF, FaInstagramSquare, FaTiktok, FaYoutube } from 'react-icons/fa';
import SkillBoard from '@/components/skill-board';
import Footer from '@/components/layout/footer';
import ContactRow from '@/components/contact-row';
import FadeInSection from '@/components/motion/fade-in-section';
import InfoComponent from '@/components/info-component';
import ProjectCarousel from '@/components/project-carousel';

export default function Home() {
  const info = {
    fistName: 'Truong',
    lastName: 'Nguyen',
    role: 'Front end developer',
    avatar: '/images/me.jpg',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    `,
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
            <InfoComponent lastName={info.lastName} firstName={info.fistName} role={info.role} />
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

        <section id="about" className="h-[820px] bg-black px-10 md:px-20">
          <SectionContent className="flex-wrap justify-center items-center">
            <div className="mt-20 lg:mt-0 w-full lg:w-1/2 h-fit flex justify-center">
              <FadeInSection>
                <Avatar src={info.avatar} />
              </FadeInSection>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <SectionTitle>About me</SectionTitle>
              </FadeInSection>
              <FadeInSection>
                <p className=" text-white leading-relaxed">{info.description}</p>
              </FadeInSection>
            </div>
          </SectionContent>
        </section>
        <section id="skills" className="h-[800px] bg-black px-10 md:px-20 py-20">
          <SectionContent className="flex-col justify-center">
            <FadeInSection>
              <SectionTitle>My skills</SectionTitle>
            </FadeInSection>
            <SkillBoard amountYear="4+" skills={info.skills} />
          </SectionContent>
        </section>
        <section id="project" className="h-[800px] bg-black px-10 md:px-20">
          <SectionContent className="h-full  flex-col justify-center">
            <FadeInSection>
              <SectionTitle>Project</SectionTitle>
            </FadeInSection>
            <FadeInSection>
              <div className="w-full h-96 flex overflow-auto gap-6">
                <ProjectCarousel data={info.projects} />
              </div>
            </FadeInSection>
          </SectionContent>
        </section>
        <section id="contact" className="h-[900px] bg-black px-10 md:px-20 py-20">
          <SectionContent className="flex-col justify-center gap-2 ">
            <SectionTitle>Contact me</SectionTitle>
            <ContactRow title="Phone" content="+84 123456789" />
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
