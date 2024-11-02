import HeroSection from '../components/HeroSection';
import ProjectList from '../components/ProjectList';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="p-5">
      <HeroSection />
      <h2 className="text-3xl font-semibold">Projects</h2>
      <ProjectList />
      <ContactForm />
    </div>
  );
}
