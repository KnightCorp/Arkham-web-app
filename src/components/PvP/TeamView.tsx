export const TeamView = () => {
  const teamMembers = [
    {
      id: "1",
      name: "Jake9705",
      stats: 67,
      salary: "20k",
      lastSeen: "30 mins",
    },
    { id: "2", name: "Jill897", stats: 72, salary: "25k", lastSeen: "30 mins" },
    { id: "3", name: "Joe91", stats: 72, salary: "25k", lastSeen: "30 mins" },
  ];

  return (
    <div className="space-y-4">
      <div className="stats-card flex justify-between items-center">
        <span>Team Karma Points: 10</span>
        <span>Team Budget: 100k</span>
      </div>

      <div className="space-y-2">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="stats-card flex justify-between items-center"
          >
            <span>{member.name}</span>
            <div className="flex space-x-4">
              <span>{member.stats}%</span>
              <span>{member.salary}</span>
              <span>{member.lastSeen}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <button className="action-button flex-1">Create or leave</button>
        <button className="action-button red flex-1">Manage Team</button>
      </div>
    </div>
  );
};
