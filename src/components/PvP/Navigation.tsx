interface NavProps {
  active: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ active, onTabChange }: NavProps) => {
  const tabs = ["Karma Store", "Practice", "PVP", "Team"];

  return (
    <div className="flex border-b border-gray-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`nav-tab ${active === tab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
