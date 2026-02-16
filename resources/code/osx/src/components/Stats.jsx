export default function Stats() {
  return (
    <div className="flex-col gap-5 flex">
      <div className="flex flex-row gap-6">
        <img
          src="https://raw.githubusercontent.com/Anthony-Maxwell1/Anthony-Maxwell1/refs/heads/main/profile/stats.svg"
          className="h-44"
        />
        <img
          src="https://raw.githubusercontent.com/Anthony-Maxwell1/Anthony-Maxwell1/refs/heads/main/profile/top-langs.svg"
          className="h-44"
        />
      </div>
      <img src="https://streak-stats.demolab.com/?user=Anthony-Maxwell1" />
    </div>
  );
}
