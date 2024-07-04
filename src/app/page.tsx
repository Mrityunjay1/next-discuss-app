import { Button } from "@/components/ui/button";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button variant="ghost">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button variant="ghost">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session?.user)}</div>
      ) : (
        <div>Sign Out</div>
      )}
      <Profile />
    </div>
  );
}
