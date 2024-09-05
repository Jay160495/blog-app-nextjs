import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Blog App</h1>
      <Link href="/blogs">
        <a>Go to Blogs</a>
      </Link>
    </div>
  );
}
