import Layout from "../../components/Layout/Layout";
import Projects from "../../components/Projects";

export const metadata = {
  title: 'Projects - Temuulen Norovpel',
  description: 'View the portfolio projects of Temuulen Norovpel.',
};

export default function ProjectsPage() {
  return (
    <Layout>

      <div className="pt-32">
        <Projects />
      </div>
    </Layout>
  );
}
