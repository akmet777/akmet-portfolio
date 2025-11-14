import Layout from '../../components/Layout/Layout';
import AboutContent from '../../components/AboutContent';

export const metadata = {
  title: 'About - Temuulen Norovpel',
  description: 'Learn more about Temuulen Norovpel, a passionate full-stack and mobile developer from Mongolia.',
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}