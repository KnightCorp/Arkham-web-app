import { useState } from 'react';
import { Play, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

export function CodeEditor({ value, onChange, onRun }: CodeEditorProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-black/95 rounded-lg border border-white/10">
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            title="Copy code"
          >
            <Copy className="w-4 h-4 text-white/70" />
          </button>
          <button
            onClick={onRun}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
          >
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Run</span>
          </button>
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full min-h-[300px] p-4 bg-transparent',
          'text-white/90 font-mono text-sm',
          'focus:outline-none resize-none'
        )}
        spellCheck="false"
      />
    </div>
  );
}