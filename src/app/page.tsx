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
      </div>
    </div>
  );
}
