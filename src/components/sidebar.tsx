import Link from "next/link";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="flex-col py-8 px-4 w-72 hidden md:flex gap-2">
      <Link href={"/"}>
        <Button variant={"sidebar"} className="w-full">
          Home
        </Button>
      </Link>
      <Link href={"/my-blog"}>
        <Button variant={"sidebar"} className="w-full">
          My Blog
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;
