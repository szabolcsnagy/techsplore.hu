import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="mx-auto max-w-lg rounded-lg border border-gray-500 p-4">
        <div className="mb-2 mt-1 text-xl">Build together</div>
          <div>
            <span className="font-bold">techsplore %</span>
            <span className="blink">_</span>
          </div>
      </div>
  );
}
