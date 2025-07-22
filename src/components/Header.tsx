
export function Header() {
  return (
    <header className="pt-12 px-4 pb-0 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block w-4 h-4 bg-[#0f172a] rounded-full mr-2" />
        <span className="font-semibold text-[#0f172a] text-lg tracking-tight">shadcn/ui</span>
      </div>
      <h1 className="text-5xl md:text-5xl font-extrabold text-[#0f172a] leading-tight tracking-tight max-w-4xl">
        Beautifully designed components<br />built with RadixUI and Tailwind CSS
      </h1>
    </header>
  );
} 