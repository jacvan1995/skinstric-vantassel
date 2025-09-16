export const generateRandomPercentages = (count) => {
  const values = Array.from({ length: count }, () => Math.random());
  const total = values.reduce((sum, val) => sum + val, 0);
  return values.map((val) => Math.round((val / total) * 100));
};

const percentage = generateRandomPercentages(7);

const Value = () => {
  return (
    <ul className="percentage-list align-right">
      {percentage.map((value, index) => (
        <li key={index} className="list-item">
          {value}%
        </li>
      ))}
    </ul>
  );
};

export default Value;
