import { remark } from "remark";
import html from "remark-html";

export default async function MarkdownToHtml(markDown: string) {
  const res = await remark().use(html).process(markDown);
  return res.toString();
}
