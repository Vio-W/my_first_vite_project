import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({ title, status }) {
  return (
    <Card className="transition hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-gray-900">{title}</CardTitle>
        <Badge className="w-fit bg-blue-600 text-white">{status}</Badge>
      </CardHeader>
      <CardContent>
        <Button className="bg-blue-600 hover:bg-blue-700 transition">
          View project
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;