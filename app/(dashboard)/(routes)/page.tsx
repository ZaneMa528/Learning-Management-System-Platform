import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>This is a home page</h1>
      <UserButton />
    </div>
  );
}
