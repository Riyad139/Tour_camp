import Image from "next/image";

export default function Blog() {
  return (
    <>
      <section className="grid mt-24 mb-16  text-center gap-10 grid-cols-3">
        <h1 className="col-start-1 mb-7 text-7xl font-semibold col-end-4">
          the blog.
        </h1>
        <div className="col-start-1 text-left col-end-3 w-full">
          <Image
            className="col-end-3 w-full h-[350px] rounded-3xl  object-cover "
            src={"/surf.png"}
            width={1920}
            quality={100}
            height={1080}
            alt="surf"
          />

          <h4 className="text-2xl ml-2 mt-4 font-semibold">
            3 tips for a super fast take off
          </h4>
          <p className="text-sm ml-2 mt-1">Monday, June 05,2023</p>
        </div>
        <div className="col-start-3 text-left col-end-4 w-full">
          <Image
            className=" mb-3 rounded-3xl w-full object-cover h-[350px]"
            src={"/sands.png"}
            width={600}
            height={600}
            alt=""
          />
          <h4 className="text-2xl ml-2 font-semibold">
            your perfect stretching routine <br /> before your first <br />{" "}
            surfing session
          </h4>
          <p className="text-sm ml-2 mt-1">Monday, June 05,2023</p>
        </div>
      </section>
      <section className="grid mb-10   gap-14 grid-cols-4">
        <div className="col-start-1  col-end-3">
          <Image
            src={"/boats.png"}
            className="h-[21.875rem] object-cover rounded-2xl"
            alt="wa"
            width={700}
            height={800}
          />
          <h3 className="text-2xl ml-2 font-semibold mt-5">
            surfboard shaping and design: behind the scenes of crafting the
            perfect board
          </h3>
          <p className="text-sm ml-2 mt-1">Monday, June 05,2023</p>
        </div>
        <div className="col-start-3  col-end-5">
          <Image
            src={"/water.png"}
            className="h-[21.875rem] object-cover rounded-2xl"
            alt="wa"
            width={700}
            height={800}
          />
          <h3 className="text-2xl ml-2 font-semibold mt-5">
            environmental awareness in surfing: protecting our oceans and
            beaches
          </h3>
          <p className="text-sm ml-2 mt-1">Monday, June 05,2023</p>
        </div>
      </section>
    </>
  );
}
