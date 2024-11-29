interface CodeOutputProps {
  output: string;
}

export function CodeOutput({ output }: CodeOutputProps) {
  return (
    <div className="bg-black/95 rounded-lg border border-white/10">
      <div className="p-3 border-b border-white/10">
        <h3 className="text-sm font-medium text-white/70">Output</h3>
      </div>
      <div className="p-4 font-mono text-sm text-white/90 min-h-[300px]">
        {output || '// Awaiting your solution, detective...'}
      </div>
    </div>
  );
}