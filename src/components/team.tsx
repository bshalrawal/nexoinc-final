'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection } from 'firebase/firestore';
import { Linkedin, Mail, UserRound } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { BlurFade } from '@/registry/magicui/blur-fade';
import { cn } from '@/lib/utils';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
  order?: number;
};

export default function Team({ className }: { className?: string }) {
  const firestore = useFirestore();
  const teamCollectionRef = useMemoFirebase(
    () => (firestore ? collection(firestore, 'team_members') : null),
    [firestore]
  );
  const { data: members, isLoading, error } = useCollection<TeamMember>(teamCollectionRef);

  const sortedMembers = useMemo(() => {
    if (!members) return [];
    return [...members].sort((a, b) => {
      const aOrder = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
      const bOrder = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder || a.name.localeCompare(b.name);
    });
  }, [members]);

  return (
    <section className={cn('py-20 px-4 bg-background', className)} id="team">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people shaping strategy, engineering, design, and delivery for our clients.
            </p>
          </div>
        </BlurFade>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-[420px] rounded-2xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-destructive">Error loading team members: {error.message}</p>
        )}

        {!isLoading && !error && sortedMembers.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sortedMembers.map((member, index) => (
              <BlurFade key={member.id} delay={0.1 + index * 0.05} inView>
                <article className="h-full overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative aspect-[4/3] bg-muted">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-primary/10 text-primary">
                        <UserRound className="h-20 w-20" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                    <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                      {member.bio}
                    </p>
                    {(member.linkedinUrl || member.email) && (
                      <div className="flex items-center gap-2 mt-5">
                        {member.linkedinUrl && (
                          <Link
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        )}
                        {member.email && (
                          <Link
                            href={`mailto:${member.email}`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        )}

        {!isLoading && !error && sortedMembers.length === 0 && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Team members coming soon</h3>
            <p className="text-muted-foreground">
              New team profiles can be added from the admin panel.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
