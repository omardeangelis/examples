import { FeedbackForm } from "./_components/FeedbackForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold">Optimistic Update</h1>
      <div className="flex flex-col items-center justify-center mt-8 w-full">
        <FeedbackForm />
      </div>
    </main>
  );
}
