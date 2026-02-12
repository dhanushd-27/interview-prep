import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-[calc(100vh-4rem)] text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Recall</h1>
        <p className="text-muted-foreground">
          Welcome to Recall, your personal space for technical interview
          preparation. Navigate through the sidebar to access curated notes and
          questions on JavaScript, TypeScript, and other core technologies.
        </p>
        <p className="text-sm text-muted-foreground pt-4">
          If you liked it, follow the creator on{" "}
          <Link
            href="https://www.linkedin.com/in/dhanush27/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="https://x.com/orcatwt"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
