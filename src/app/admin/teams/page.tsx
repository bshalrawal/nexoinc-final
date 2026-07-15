'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, deleteDoc, doc, updateDoc, writeBatch } from 'firebase/firestore';
import { ArrowDown, ArrowUp, Edit, PlusCircle, Trash2 } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
  order?: number;
  userId?: string;
};

function EditTeamMemberForm({
  member,
  onUpdateMember,
}: {
  member: TeamMember;
  onUpdateMember: (member: TeamMember) => void;
}) {
  const [formData, setFormData] = useState(member);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdateMember(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name-edit">Name</Label>
          <Input id="name-edit" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="role-edit">Role</Label>
          <Input id="role-edit" name="role" value={formData.role} onChange={handleInputChange} required />
        </div>
      </div>
      <div>
        <Label htmlFor="bio-edit">Bio</Label>
        <Textarea id="bio-edit" name="bio" value={formData.bio} onChange={handleInputChange} required className="min-h-32" />
      </div>
      <div>
        <Label htmlFor="imageUrl-edit">Profile Image</Label>
        <Input id="imageUrl-edit" type="file" onChange={handleImageUpload} accept="image/*" />
        {uploadProgress !== null && <Progress value={uploadProgress} className="w-full mt-2" />}
        {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}
        {formData.imageUrl && (
          <div className="mt-4 p-2 border rounded-md">
            <p className="text-xs text-muted-foreground mb-2">Image Preview:</p>
            <Image src={formData.imageUrl} alt="Team member preview" width={100} height={100} className="object-cover rounded-md aspect-square" />
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="linkedinUrl-edit">LinkedIn URL</Label>
          <Input id="linkedinUrl-edit" name="linkedinUrl" type="url" value={formData.linkedinUrl || ''} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="email-edit">Email</Label>
          <Input id="email-edit" name="email" type="email" value={formData.email || ''} onChange={handleInputChange} />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  );
}

export default function TeamAdminPage() {
  const firestore = useFirestore();
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [sortedMembers, setSortedMembers] = useState<TeamMember[]>([]);

  const teamCollectionRef = useMemoFirebase(
    () => (firestore ? collection(firestore, 'team_members') : null),
    [firestore]
  );
  const { data: members, isLoading, error } = useCollection<TeamMember>(teamCollectionRef);

  useEffect(() => {
    if (!members) return;

    const membersWithOrder = members.filter((member) => typeof member.order === 'number');
    const membersWithoutOrder = members.filter((member) => typeof member.order !== 'number');
    membersWithOrder.sort((a, b) => a.order! - b.order!);
    membersWithoutOrder.sort((a, b) => a.name.localeCompare(b.name));
    setSortedMembers([...membersWithOrder, ...membersWithoutOrder]);
  }, [members]);

  const handleDeleteMember = async (id: string) => {
    if (!firestore) return;
    if (window.confirm('Are you sure you want to delete this team member?')) {
      await deleteDoc(doc(firestore, 'team_members', id));
    }
  };

  const handleUpdateMember = async (member: TeamMember) => {
    if (!firestore) return;
    const { id, ...data } = member;
    try {
      await updateDoc(doc(firestore, 'team_members', id), data as any);
      setEditingMember(null);
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  const handleMove = async (member: TeamMember, direction: 'up' | 'down') => {
    if (!firestore) return;

    const membersHaveOrder = sortedMembers.every((item) => typeof item.order === 'number');
    if (!membersHaveOrder) {
      const batch = writeBatch(firestore);
      sortedMembers.forEach((item, index) => {
        batch.update(doc(firestore, 'team_members', item.id), { order: index });
      });
      await batch.commit();
      return;
    }

    const currentIndex = sortedMembers.findIndex((item) => item.id === member.id);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (currentIndex === -1 || newIndex < 0 || newIndex >= sortedMembers.length) return;

    const otherMember = sortedMembers[newIndex];
    const batch = writeBatch(firestore);
    batch.update(doc(firestore, 'team_members', member.id), { order: otherMember.order });
    batch.update(doc(firestore, 'team_members', otherMember.id), { order: member.order });
    await batch.commit();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Teams</CardTitle>
            <CardDescription>Manage team members shown on the public teams page.</CardDescription>
          </div>
          <Button size="sm" className="gap-1" asChild>
            <Link href="/admin/teams/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Member</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading team members...</p>}
        {error && <p className="text-destructive">Error: {error.message}</p>}
        {!isLoading && !error && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedMembers.map((member, index) => (
                <TableRow key={member.id}>
                  <TableCell>
                    {member.imageUrl ? (
                      <Image src={member.imageUrl} alt={member.name} width={64} height={64} className="object-cover rounded-md aspect-square" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-500">No Image</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleMove(member, 'up')} disabled={index === 0 && sortedMembers.every((item) => typeof item.order === 'number')}>
                        <ArrowUp className="h-3.5 w-3.5" />
                        <span className="sr-only">Move Up</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleMove(member, 'down')} disabled={index === sortedMembers.length - 1 && sortedMembers.every((item) => typeof item.order === 'number')}>
                        <ArrowDown className="h-3.5 w-3.5" />
                        <span className="sr-only">Move Down</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setEditingMember(member)}>
                        <Edit className="h-3.5 w-3.5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDeleteMember(member.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {!isLoading && !error && members?.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            <p>No team members found.</p>
            <Button size="sm" className="gap-1 mt-4" asChild>
              <Link href="/admin/teams/new">
                <PlusCircle className="h-3.5 w-3.5" />
                <span>Add Member</span>
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
      {editingMember && (
        <Dialog open={!!editingMember} onOpenChange={(open) => !open && setEditingMember(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit Team Member</DialogTitle>
              <DialogDescription>Update the profile shown on the public teams page.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <EditTeamMemberForm member={editingMember} onUpdateMember={handleUpdateMember} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}
