

const InfoList = ({ type }) => {
  const raceList = [
    "White",
    "Black or African American",
    "Asian",
    "Hispanic or Latino",
    "Native American",
    "Pacific Islander",
    "Middle Eastern"
  ];

  const ageList = [
    "Under 18",
    "18–24",
    "25–34",
    "35–44",
    "45–54",
    "55–64",
    "65-74",
  ];

  const selectedList = type === "race" ? raceList : ageList;

  return (
    <ul className={`info-list-${type} align-left`}>
      {selectedList.map((item, index) => (
        <li className="list-item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default InfoList;