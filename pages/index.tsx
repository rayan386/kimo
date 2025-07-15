import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>KIMO - Votre marketplace moderne</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="p-4 text-center">
          <h1 className="text-4xl font-bold text-orange-500">
            Bienvenue sur KIMO
          </h1>
          <p className="mt-4 text-gray-600">
            Votre plateforme pour acheter et vendre facilement
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Se connecter avec Google
          </button>
        </main>
      </div>
    </>
  );
}
