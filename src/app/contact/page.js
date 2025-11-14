import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Contact";

export const metadata = {
  title: 'Contact - Temuulen Norovpel',
  description: 'Get in touch with Temuulen Norovpel for your next project.',
};

export default function ContactPage() {
  return (
    <Layout>

      <div className="pt-32">
        <Contact />
      </div>
    </Layout>
  );
}
