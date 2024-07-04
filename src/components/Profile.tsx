"use client";
import { useSession } from "next-auth/react";

type Props = {};
function Profile({}: Props) {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client {JSON.stringify(session.data?.user)}</div>;
  }
  return <div>Profile: User not signed in</div>;
}
export default Profile;
