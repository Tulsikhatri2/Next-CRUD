import Link from "next/link";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center 
    justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 
    font-[family-name:var(--font-geist-sans)]"
    >
      <Link href="/user-form">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-2 focus:ring-blue-300 font-medium rounded-lg 
      text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
      focus:outline-none"
          type="button"
        >
          User Form
        </button>
      </Link>
    </div>
  );
}
