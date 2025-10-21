export default function CrewLeaderboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none" aria-label="Sort">
            <option>Time</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm">
            <tr>
              <th className="py-2">Rank</th>
              <th className="py-2">User</th>
              <th className="py-2">Posts</th>
              <th className="py-2">Reach</th>
              <th className="py-2">Sales</th>
            </tr>
          </thead>
          <tbody className="dark:text-black">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-t">
                <td className="py-2">#{i}</td>
                <td className="py-2">User {i}</td>
                <td className="py-2">{200 - i * 10}</td>
                <td className="py-2">{1200 - i * 50}</td>
                <td className="py-2">{80 - i * 3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
