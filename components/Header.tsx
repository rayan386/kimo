import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-primary text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">
        KIMO
      </h1>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-white text-primary font-medium px-4 py-2 rounded hover:bg-gray-100 transition">
            Se connecter
          </button>
        </Link>
        <Link href="/vendeur">
          <button className="bg-white text-primary font-medium px-4 py-2 rounded hover:bg-gray-100 transition">
            Devenir Vendeur
          </button>
        </Link>
      </div>
    </header>
  );
}
