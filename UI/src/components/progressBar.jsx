// Simple ProgressBar component (JavaScript version)
export default function ProgressBar({ value = 0, max = 100 }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

// Example usage:
// <ProgressBar value={60} />
