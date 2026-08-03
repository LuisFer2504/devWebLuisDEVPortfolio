import Badge from '@/components/ui/Badge';

interface ProjectTagsProps {
  readonly tags: readonly string[];
}

export default function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} label={tag} />
      ))}
    </div>
  );
}
