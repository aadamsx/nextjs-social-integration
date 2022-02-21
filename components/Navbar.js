import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between py-6 px-8">
      <div className="text-xl font-semibold">
        <Link href="/">
          <a>Social Demo</a>
        </Link>
      </div>
      <div className="text-xl font-semibold">
        <ul className="flex gap-6">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Twitter</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Instagram</a>
            </Link>
          </li>
          {!session ? (
            <li>
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  Sign In
                </a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
