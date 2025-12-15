import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { BlurFade } from '@/registry/magicui/blur-fade';
import { CheckCircle, Target, Users, Zap, Globe, Rocket, Shield, Heart, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/layout/page-hero';
import { PremiumButton } from '@/components/ui/premium-button';
import { Timeline } from '@/components/timeline';

// Detailed stats
const stats = [
  { label: "Clients Served", value: "150+", icon: Users, desc: "Trust our solutions" },
  { label: "Projects Delivered", value: "50+", icon: CheckCircle, desc: "Successful launches" },
  { label: "Years Experience", value: "6+", icon: Award, desc: "Industry expertise" },
];

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We embrace new technologies and creative approaches to drive progress and stay ahead of the curve."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We aim for the highest quality in every project, delivering outstanding value and measurable results."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, fostering partnership, transparency, and mutual success."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and high ethical standards in every interaction."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">

        {/* Original Dark Hero as requested */}
        <PageHero
          title="About Us"
          subtitle="Empowering businesses with AI solutions and digital innovation."
          breadcrumb="About"
          className="mb-0"
        />

        {/* Stats Section - Matching Service Page Grid Style */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                  <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center group">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-4xl font-bold text-foreground mb-1">{stat.value}</h3>
                    <p className="font-semibold text-primary mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story / Mission Section - Matching Process/Info Style */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <BlurFade delay={0.1} inView>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Our <span className="text-primary">Story</span> & Mission
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Nexon Inc is a global technology company specializing in digital transformation and AI solutions. Founded by entrepreneurs with decades of combined experience, we bring together top-tier talent from leading companies across the USA, Europe, and Asia.
                    </p>
                    <p>
                      Our mission is to empower businesses worldwide with innovative technology solutions that drive growth, enhance efficiency, and create lasting value.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="font-medium text-foreground">Global Perspective</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span className="font-medium text-foreground">Local Insight</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="font-medium text-foreground">Innovation Driven</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span className="font-medium text-foreground">Client Centric</span>
                    </div>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 blur-3xl rounded-full"></div>
                  <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Strategic Vision</h3>
                        <p className="text-muted-foreground">To be the world's most trusted technology partner for digital transformation.</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-border mb-8"></div>
                    <div className="flex items-start gap-6">
                      <div className="bg-accent/10 p-3 rounded-xl">
                        <Zap className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Rapid Execution</h3>
                        <p className="text-muted-foreground">Delivering scalable, secure, and performance-optimized solutions at speed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <Timeline />

        {/* Values Section - Matching Capabilities Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Core <span className="text-primary">Values</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our work and relationships.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((val, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                  <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <val.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Same as Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to work with us?
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Let's combine our expertise with your vision to build something extraordinary.
                  </p>
                  <Link href="/contact">
                    <PremiumButton variant="white" icon={<ArrowRight className="h-5 w-5" />}>
                      Contact Us Today
                    </PremiumButton>
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
