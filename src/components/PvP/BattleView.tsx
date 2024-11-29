export const BattleView = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
            alt="You"
            className="w-16 h-16 rounded"
          />
          <div>
            <div className="h-2 w-32 bg-blue-500 rounded"></div>
            <p className="mt-1">Level: 1</p>
          </div>
        </div>

        <div className="text-2xl font-bold">VS</div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="h-2 w-32 bg-red-500 rounded"></div>
            <p className="mt-1">Level: 3</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop"
            alt="Steve"
            className="w-16 h-16 rounded"
          />
        </div>
      </div>
    </div>
  );
};
