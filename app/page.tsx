import Demo from "@/app/components/demo/Index";
import User from "@/app/components/user/Index";

export default function Home() {

  return (
    <>
      <User />
      {false && <Demo />}
    </>
  );
}
