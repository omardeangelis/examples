import { UserForm } from "./_components/UserForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold">Form Management</h1>
      <div className="flex flex-col items-center justify-center mt-8 w-full">
        <UserForm />
      </div>
    </main>
  );
}
