import React, { useState, useEffect } from 'react';
import { SKILL_LIST } from './consts';

const SkillCheckResults = ({ dcValue, roll, selectedSkill, attributes }) => {
  const [skillValue, setSkillValue] = useState(0);

  useEffect(() => {

    const selectedSkillInfo = SKILL_LIST.find(skill => skill.name === selectedSkill);

    if (selectedSkillInfo) {

      const attributeValue = attributes[selectedSkillInfo.attributeModifier];

      const skillModifier = Math.floor((attributeValue - 10) / 2);

      setSkillValue(attributeValue + skillModifier);
    }
  }, [selectedSkill, attributes]);


  const result = (skillValue + roll > dcValue) ? "Successful" : "Failed";

  return (
    <div>
      <h3>Skill Check Results</h3>
      <h5>Skill: {selectedSkill} - Value: {skillValue}</h5>
      <h5>You Rolled: {roll}</h5>
      <h5>The DC Was: {dcValue}</h5>
      <h5>Result: {result}</h5>
    </div>
  );
};

export default SkillCheckResults;
