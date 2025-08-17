type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

import { Card, CardContent } from "@/components/ui/card";

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card className="bg-[#1f1f2f] shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <a href={link} className="text-pink-400 underline mt-2 inline-block">View Project</a>
      </CardContent>
    </Card>
  );
}
