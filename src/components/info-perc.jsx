import InfoList from "./info-list";

const getRandomPercentage = () => {
  return Math.floor(Math.random() * 101);
};

const Value = () => {
  const percentage = getRandomPercentage(7);

  return (
    <ul className="percentage-list align-right">
      {percentage.map((value, index) => (
        <li key={index} className="list-item">{value}%</li>
      ))}
    </ul>

  );
};

export default Value;