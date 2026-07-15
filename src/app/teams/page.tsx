import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/layout/page-hero';
import Team from '@/components/team';

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Our Teams"
          subtitle="Meet the strategists, engineers, designers, and delivery experts behind Nexon Inc."
          breadcrumb="Teams"
        />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
