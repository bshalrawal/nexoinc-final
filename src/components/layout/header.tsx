
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Instagram, Linkedin } from 'lucide-react';
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
import { services } from '@/app/services/services-data';

const developmentServices = services.filter(s =>
  ['web-development', 'mobile-applications', 'custom-software-development', 'cloud-solutions', 'ui-ux-creative-design', 'graphic-design', 'ecommerce-solutions', 'qa-and-test-automation', 'maintenance-and-support', 'cybersecurity', 'it-consulting', 'data-analytics'].includes(s.slug)
).sort((a, b) => a.title.localeCompare(b.title));

const aiServices = services.filter(s =>
  ['ai-strategy-consulting', 'generative-ai', 'agentic-ai', 'ai-governance', 'machine-learning', 'intelligent-automation'].includes(s.slug)
).sort((a, b) => a.title.localeCompare(b.title));

const marketingServices = services.filter(s =>
  ['professional-content-writer', 'digital-marketing'].includes(s.slug)
).sort((a, b) => a.title.localeCompare(b.title));


const navLinks = [
  //{ href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200",
          "hover:bg-slate-50 hover:shadow-sm ring-1 ring-transparent hover:ring-slate-100", // Refined premium hover
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary p-2 rounded-lg transition-colors duration-200 group-hover:bg-primary group-hover:text-white shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-semibold leading-none text-gray-900 transition-colors duration-200 group-hover:text-primary">{title}</div>
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-slate-500 pl-12 mt-1.5 group-hover:text-slate-600">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
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
    <header className="absolute top-0 w-full py-4 px-4 sm:px-6 lg:px-8 z-30">
      <div className="container mx-auto flex items-center justify-between">

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
                      className="h-16 w-auto"
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
          <div className="justify-self-start flex items-center h-full -ml-60 -mt-8">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Nexon Inc"
                width={200}
                height={100}
                className="w-[400px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Sticky Navigation */}
          <div className="justify-self-center">
            <nav
              className={cn(
                "fixed left-1/2 -translate-x-1/2 top-4 z-50 transition-all duration-300",
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
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isScrolled
                            ? 'text-gray-900 hover:text-primary hover:bg-primary/10'
                            : 'text-white hover:bg-primary/80'
                        )}
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        isScrolled
                          ? 'text-gray-900 hover:text-primary hover:bg-primary/10 data-[state=open]:bg-primary/10'
                          : 'text-white hover:bg-primary/80 data-[state=open]:bg-primary/80'
                      )}
                      onMouseEnter={() => setActiveTab('development')}
                    >
                      Services
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="grid grid-cols-[250px_1fr] w-[64rem] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                        {/* Sidebar Tabs */}
                        <div className="flex flex-col gap-2 p-3 bg-slate-50/50 border-r border-gray-100">
                          <button
                            onMouseEnter={() => setActiveTab('development')}
                            className={cn(
                              "group flex items-start gap-3 rounded-lg p-3 text-left transition-all duration-200 relative",
                              activeTab === 'development'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-gray-100'
                                : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                            )}
                          >
                            {activeTab === 'development' && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                            )}
                            <div className={cn("mt-0.5 transition-colors duration-200", activeTab === 'development' ? 'text-primary' : 'text-slate-400 group-hover:text-primary')}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Development</h4>
                              <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                                Technical Solutions
                              </p>
                            </div>
                          </button>

                          <button
                            onMouseEnter={() => setActiveTab('ai')}
                            className={cn(
                              "group flex items-start gap-3 rounded-lg p-3 text-left transition-all duration-200 relative",
                              activeTab === 'ai'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-gray-100'
                                : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                            )}
                          >
                            {activeTab === 'ai' && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                            )}
                            <div className={cn("mt-0.5 transition-colors duration-200", activeTab === 'ai' ? 'text-primary' : 'text-slate-400 group-hover:text-primary')}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">AI & Innovation</h4>
                              <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                                Future Tech
                              </p>
                            </div>
                          </button>

                          <button
                            onMouseEnter={() => setActiveTab('marketing')}
                            className={cn(
                              "group flex items-start gap-3 rounded-lg p-3 text-left transition-all duration-200 relative",
                              activeTab === 'marketing'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-gray-100'
                                : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                            )}
                          >
                            {activeTab === 'marketing' && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                            )}
                            <div className={cn("mt-0.5 transition-colors duration-200", activeTab === 'marketing' ? 'text-primary' : 'text-slate-400 group-hover:text-primary')}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 3v4" /><path d="M3 7h10" /></svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Marketing</h4>
                              <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                                Growth & Strategy
                              </p>
                            </div>
                          </button>
                        </div>

                        {/* Services Grid */}
                        <div className="p-6 bg-white">
                          <div className="mb-5 border-b border-gray-50 pb-4">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                              {activeTab === 'development' && 'Development Solutions'}
                              {activeTab === 'ai' && 'AI & Intelligent Automation'}
                              {activeTab === 'marketing' && 'Digital Marketing & Growth'}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">
                              {activeTab === 'development' && 'Robust, scalable, and secure engineering for modern businesses.'}
                              {activeTab === 'ai' && 'Leverage cutting-edge AI to automate and optimize operations.'}
                              {activeTab === 'marketing' && 'Data-driven strategies to amplify your brand presence.'}
                            </p>
                          </div>
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {activeTab === 'development' && (
                              developmentServices.map((service) => (
                                <ListItem
                                  key={service.title}
                                  title={service.title}
                                  href={`/services/${service.slug}`}
                                  icon={service.icon}
                                  className="hover:bg-slate-50"
                                >
                                  {service.shortDescription}
                                </ListItem>
                              ))
                            )}

                            {activeTab === 'ai' && (
                              aiServices.map((service) => (
                                <ListItem
                                  key={service.title}
                                  title={service.title}
                                  href={`/services/${service.slug}`}
                                  icon={service.icon}
                                  className="hover:bg-slate-50"
                                >
                                  {service.shortDescription}
                                </ListItem>
                              ))
                            )}

                            {activeTab === 'marketing' && (
                              marketingServices.map((service) => (
                                <ListItem
                                  key={service.title}
                                  title={service.title}
                                  href={`/services/${service.slug}`}
                                  icon={service.icon}
                                  className="hover:bg-slate-50"
                                >
                                  {service.shortDescription}
                                </ListItem>
                              ))
                            )}
                          </ul>
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


