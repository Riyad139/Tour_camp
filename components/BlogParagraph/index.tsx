import Markdown from "react-markdown";

export default function BlogParaGraph({
  description,
}: {
  description: string;
}) {
  return <Markdown className="py-7">{description}</Markdown>;
}
