import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vission">Vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
