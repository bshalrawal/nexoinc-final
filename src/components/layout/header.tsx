
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import {
  Menu, Instagram, Linkedin, Code, Cloud, LineChart, Shield,
  Database, Lightbulb, Brain, Palette, ChevronRight, ArrowRight,
  Target, Zap, Rocket, Award, Users
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { services } from '@/app/services/services-data';

const categories = [
  {
    id: 'development',
    title: 'Development',
    description: 'Custom software solutions',
    icon: Code,
    slugs: ['web-development', 'mobile-applications', 'custom-software-development', 'ecommerce-solutions']
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions',
    icon: Cloud,
    slugs: ['cloud-solutions', 'maintenance-and-support', 'qa-and-test-automation']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Grow your online presence',
    icon: LineChart,
    slugs: ['digital-marketing', 'professional-content-writer']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets',
    icon: Shield,
    slugs: ['cybersecurity']
  },
  {
    id: 'data',
    title: 'Data Analytics',
    description: 'Transform data into insights',
    icon: Database,
    slugs: ['data-analytics']
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology guidance',
    icon: Lightbulb,
    slugs: ['it-consulting']
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Future-ready AI solutions',
    icon: Brain,
    slugs: ['ai-strategy-consulting', 'generative-ai', 'agentic-ai', 'ai-governance', 'machine-learning', 'intelligent-automation']
  },
  {
    id: 'design',
    title: 'Creative Design',
    description: 'User-centric design solutions',
    icon: Palette,
    slugs: ['ui-ux-creative-design', 'graphic-design']
  }
];


const navLinks = [
  //{ href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200",
          "hover:bg-slate-50 hover:shadow-sm ring-1 ring-transparent hover:ring-slate-100",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="bg-primary/10 text-primary p-2 rounded-lg transition-colors duration-200 group-hover:bg-primary group-hover:text-white shrink-0">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div className="text-sm font-semibold leading-none text-gray-900 transition-colors duration-200 group-hover:text-primary">{title}</div>
        </div>
        <p className={cn(
          "line-clamp-2 text-xs leading-relaxed text-slate-500 mt-1.5 group-hover:text-slate-600",
          Icon ? "pl-12" : "pl-0"
        )}>
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('development');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute top-0 w-full py-2 z-30">
      <div className="w-full px-4 md:px-12 flex items-center justify-between">

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-secondary text-white border-none p-0">
              <SheetHeader className='sr-only'>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                <SheetDescription>A list of links to navigate the website.</SheetDescription>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 p-4">
                  <Link href="/" className="block">
                    <img
                      src="/logo.png"
                      alt="Nexon Inc"
                      width={180}
                      height={60}
                      className="h-32 w-auto"
                    />
                  </Link>
                </div>

                <div className="flex flex-col space-y-4 p-4 mt-8">
                  {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/services', label: 'Services' }, ...navLinks].map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg hover:text-primary">
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex items-center space-x-4 pt-4 border-t border-white/10">

                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 items-center w-full">

          {/* Logo */}
          <div className="justify-self-start flex items-center h-full">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Nexon Inc"
                width={200}
                height={100}
                className="h-28 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Sticky Navigation */}
          <div className="justify-self-center">
            <nav
              className={cn(
                "fixed left-1/2 -translate-x-1/2 top-8 z-50 transition-all duration-300",
                "flex items-center space-x-1 px-3 py-2 rounded-full",
                isScrolled
                  ? "bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200"
                  : "bg-white/20 backdrop-blur-md"
              )}
            >
              <NavigationMenu>
                <NavigationMenuList>

                  {/* Home */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isScrolled
                            ? 'text-gray-900 hover:text-primary hover:bg-primary/10'
                            : 'text-white hover:bg-primary/80'
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      onClick={() => router.push('/about')}
                      className={cn(
                        isScrolled
                          ? 'text-gray-900 hover:text-primary hover:bg-primary/10 data-[state=open]:bg-primary/10'
                          : 'text-white hover:bg-primary/80 data-[state=open]:bg-primary/80',
                        "cursor-pointer"
                      )}
                    >
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4 bg-white rounded-xl shadow-xl ring-1 ring-gray-900/5">
                        <div className="flex flex-col gap-1">
                          <ListItem
                            title="Our Story"
                            icon={Users}
                            href="/about"
                          >
                            Empowering businesses with AI solutions and digital innovation.
                          </ListItem>

                          <ListItem
                            title="Mission & Vision"
                            icon={Target}
                            href="/about"
                          >
                            To be the world's most trusted technology partner for digital transformation.
                          </ListItem>

                          <ListItem
                            title="Core Values"
                            icon={Award}
                            href="/about"
                          >
                            Guided by Innovation, Excellence, Collaboration, and Integrity.
                          </ListItem>

                          <ListItem
                            title="Our Journey"
                            icon={Rocket}
                            href="/about"
                          >
                            Explore the milestones and timeline of Nexon Inc's growth.
                          </ListItem>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      onClick={() => router.push('/services')}
                      className={cn(
                        isScrolled
                          ? 'text-gray-900 hover:text-primary hover:bg-primary/10 data-[state=open]:bg-primary/10'
                          : 'text-white hover:bg-primary/80 data-[state=open]:bg-primary/80',
                        "cursor-pointer"
                      )}
                      onMouseEnter={() => setActiveTab('development')}
                    >
                      Services
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="flex w-[64rem] min-h-[500px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                        {/* Sidebar Tabs */}
                        <div className="w-[280px] flex flex-col p-3 bg-slate-50/50 border-r border-gray-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-4 mt-2">Our Services</p>
                          <div className="flex-1 space-y-1">
                            {categories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveTab(category.id)}
                                className={cn(
                                  "w-full group flex items-start gap-3 rounded-lg p-3 text-left transition-all duration-200 relative",
                                  activeTab === category.id
                                    ? 'bg-white text-primary shadow-sm ring-1 ring-gray-100'
                                    : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                                )}
                              >
                                {activeTab === category.id && (
                                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                                )}
                                <div className={cn(
                                  "mt-0.5 transition-colors duration-200",
                                  activeTab === category.id ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                                )}>
                                  <category.icon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-sm leading-tight">{category.title}</h4>
                                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                                    {category.description}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>

                          <Link
                            href="/services"
                            className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-primary hover:text-primary text-slate-600 text-xs font-semibold transition-all group"
                          >
                            View All Services
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>

                        {/* Services Grid Content */}
                        <div className="flex-1 p-8 bg-white">
                          {categories.map((category) => (
                            activeTab === category.id && (
                              <div key={category.id} className="animate-in fade-in duration-300">
                                <div className="mb-6 border-b border-gray-50 pb-5">
                                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    {category.title} Solutions
                                  </h3>
                                  <p className="text-sm text-slate-500 mt-1">
                                    {category.description}
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                  {services
                                    .filter(s => category.slugs.includes(s.slug))
                                    .map((service) => (
                                      <ListItem
                                        key={service.slug}
                                        title={service.title}
                                        href={`/services/${service.slug}`}
                                        icon={service.icon}
                                      >
                                        {service.shortDescription}
                                      </ListItem>
                                    ))
                                  }
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Other Links */}
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            isScrolled
                              ? 'text-gray-900 hover:text-primary hover:bg-primary/10'
                              : 'text-white hover:bg-primary/80'
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="justify-self-end flex items-center space-x-2">

          </div>

        </div>

        {/* Mobile Logo */}
        <div className="lg:hidden">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Nexon Inc"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Spacer */}
        <div className="lg:hidden w-10 h-10"></div>

      </div>
    </header>
  );
}


