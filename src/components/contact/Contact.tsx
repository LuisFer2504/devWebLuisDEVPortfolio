import Container from '@/components/ui/Container';
import FadeUp from '@/components/animations/FadeUp';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="pt-16 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
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
