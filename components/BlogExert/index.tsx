export default function BlogExert({ descriptions }: { descriptions: string }) {
  return (
    <div className="">
      <h3 className="text-6xl font-DmSerif">In this Blog</h3>
      <p className="text-lg mt-5">{descriptions}</p>
    </div>
  );
}
