import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services";

export const metadata = {
  title: 'Services - Temuulen Norovpel',
  description: 'Professional services offered by Temuulen Norovpel.',
};

export default function ServicesPage() {
  return (
    <Layout>

      <div className="pt-32">
        <Services />
      </div>
    </Layout>
  );
}
