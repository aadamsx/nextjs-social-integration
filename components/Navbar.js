import Link from "next/link";

export default function Navbar() {
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
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard-swr">
              <a>Dashboard SWR</a>
            </Link>
          </li>
          <li>
            <Link href="/timeline">
              <a>Timeline</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Instagram</a>
            </Link>
          </li>
          {/* {!session ? (
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
          )} */}
        </ul>
      </div>
    </nav>
  );
}
