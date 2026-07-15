'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

type TeamMemberForm = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
  email: string;
};

export default function NewTeamMemberPage() {
  const firestore = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [formData, setFormData] = useState<TeamMemberForm>({
    name: '',
    role: '',
    bio: '',
    imageUrl: '',
    linkedinUrl: '',
    email: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      if (typeof reader.result !== 'string') {
        setUploadError('Failed to read file as data URL.');
        return;
      }

      try {
        setUploadError(null);
        setUploadProgress(50);
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ file: reader.result }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Upload failed');
        }

        const { url } = await response.json();
        setFormData((prev) => ({ ...prev, imageUrl: url }));
        setUploadProgress(100);
      } catch (error: any) {
        console.error('Error uploading team member image:', error);
        setUploadError(`Upload failed: ${error.message}`);
        setUploadProgress(0);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to convert image to Data URI.');
    };
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firestore || !user) {
      if (!user) alert('You must be logged in to add a team member.');
      return;
    }

    setIsSubmitting(true);
    try {
      const teamCollectionRef = collection(firestore, 'team_members');
      const snapshot = await getDocs(teamCollectionRef);

      await addDoc(teamCollectionRef, {
        ...formData,
        order: snapshot.size,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      router.push('/admin/teams');
    } catch (error) {
      console.error('Error adding team member:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Team Member</CardTitle>
        <CardDescription>Fill out the details for the new team profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" value={formData.role} onChange={handleInputChange} required />
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" name="bio" value={formData.bio} onChange={handleInputChange} required className="min-h-32" />
          </div>

          <div>
            <Label htmlFor="imageUrl">Profile Image</Label>
            <Input id="imageUrl" type="file" onChange={handleImageUpload} accept="image/*" />
            {uploadProgress !== null && <Progress value={uploadProgress} className="w-full mt-2" />}
            {uploadError && <div className="mt-2 text-sm text-destructive font-medium">{uploadError}</div>}
            {formData.imageUrl && (
              <div className="mt-4 p-2 border rounded-md">
                <p className="text-xs text-muted-foreground mb-2">Image Preview:</p>
                <Image src={formData.imageUrl} alt="Team member preview" width={120} height={120} className="object-cover rounded-md aspect-square" />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
              <Input id="linkedinUrl" name="linkedinUrl" type="url" value={formData.linkedinUrl} onChange={handleInputChange} placeholder="https://linkedin.com/in/name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="name@nexoninc.tech" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding Member...' : 'Add Member'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
