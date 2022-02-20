import { useSession, getSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>You are not signed in.</p>;
  }

  return (
    <>
      <h1>Protected Page</h1>
      <p>You are signed in as {session.user.email}.</p>
    </>
  );
}
