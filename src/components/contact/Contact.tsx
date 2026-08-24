import Container from '@/components/ui/Container';
import FadeUp from '@/components/animations/FadeUp';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 lg:py-32">
      <Container>
        <FadeUp>
          <div className="glass-card overflow-hidden rounded-3xl lg:rounded-[40px] flex flex-col lg:flex-row">
            <ContactInfo />
            <ContactForm />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
