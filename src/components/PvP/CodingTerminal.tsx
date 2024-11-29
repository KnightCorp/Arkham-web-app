import Editor from "@monaco-editor/react";
import { Play, Terminal } from "lucide-react";

interface CodingTerminalProps {
  examType: string;
}

export const CodingTerminal = ({ examType }: CodingTerminalProps) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      // Handle code changes
    }
  };

  return (
    <div className=" rounded-sm h-[600px] flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5" />
          <span>{examType} Challenge</span>
        </div>
        <button className="action-button red flex items-center space-x-2">
          <Play className="w-4 h-4" />
          <span>Run Tests</span>
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// Write your solution here"
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            lineNumbers: "on",
          }}
        />
      </div>
    </div>
  );
};
