import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/layout/page-hero';
import { services, Service } from '@/app/services/services-data';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { BlurFade } from '@/registry/magicui/blur-fade';
import Link from 'next/link';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service: Service | undefined = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { title, longDescription, details, icon: Icon } = service;

  // Get other services for the "Other Services" section
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <PageHero
          title={title}
          subtitle={longDescription}
          breadcrumb={`Services / ${title}`}
          icon={<Icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
        />

        {/* Our Capabilities Section */}
        <section id="capabilities" className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Our <span className="text-primary">Capabilities</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Comprehensive solutions tailored to your needs
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {details.map((detail, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                  <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                    {/* Icon/Number Badge */}
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>

                    <div className="flex items-start gap-4 mt-2">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {detail.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Our <span className="text-primary">Process</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  A proven methodology to deliver exceptional results
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                { num: "1", title: "Discovery & Planning", desc: "Understanding your goals and requirements" },
                { num: "2", title: "Design & Prototyping", desc: "Creating intuitive solutions" },
                { num: "3", title: "Development", desc: "Building with best practices" },
                { num: "4", title: "Testing & QA", desc: "Ensuring quality and reliability" },
                { num: "5", title: "Launch & Support", desc: "Deployment and ongoing care" }
              ].map((step, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                  <div className="text-center group">
                    <div className="relative mx-auto mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.num}
                      </div>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-10 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Left side - Title and description */}
              <BlurFade delay={0.1} inView>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Why Choose Our <span className="text-primary">{title}</span>?
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Partner with us to transform your business and achieve your goals with our expert solutions.
                  </p>
                </div>
              </BlurFade>

              {/* Right side - Checkmark list */}
              <BlurFade delay={0.2} inView>
                <div className="space-y-6">
                  {[
                    "Experienced team of certified professionals",
                    "Proven track record of successful projects",
                    "Cutting-edge technologies and best practices",
                    "Transparent communication and collaboration",
                    "Scalable solutions that grow with your business",
                    "Dedicated support and ongoing maintenance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 md:p-16 text-center overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help transform your business with our {title.toLowerCase()} services.
                  </p>
                  <Link
                    href="mailto:info@nexoninc.tech"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    Contact Us Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Other <span className="text-primary">Services</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Explore our complete range of solutions
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {otherServices.map((s, index) => (
                <BlurFade key={s.slug} delay={0.1 + index * 0.1} inView>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <s.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {s.shortDescription}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.4} inView>
              <div className="text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                >
                  View All Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
