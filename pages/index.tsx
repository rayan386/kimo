import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-bold text-primary">Bienvenue sur KIMO</h2>
        <p className="text-gray-600 mt-2">Votre marketplace inspirée de Temu et AliExpress</p>
      </main>
    </div>
  );
}
