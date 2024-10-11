import React from 'react';
import { SKILL_LIST } from './consts';

const SkillCheck = ({ dcValue, setDcValue, roll, setRoll, selectedSkill, setSelectedSkill, attributes }) => {

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleDcChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== '') {
      const numberValue = Math.max(Number(value), 0);
      setDcValue(numberValue);
    } else {
      setDcValue('');
    }
  };

  const handleRollClick = () => {
    const randomRoll = Math.floor(Math.random() * dcValue) + 1;
    setRoll(randomRoll);
  };


  const selectedSkillInfo = SKILL_LIST.find(skill => skill.name === selectedSkill);
  const attributeModifier = selectedSkillInfo ? attributes[selectedSkillInfo.attributeModifier] : 0;


  const skillModifier = Math.floor((attributeModifier - 10) / 2);

  return (
    <div>
      <h3>Skill Check</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="skills-dropdown">Skill: </label>
        <select
          id="skills-dropdown"
          value={selectedSkill}
          onChange={handleSkillChange}
        >
          {SKILL_LIST.map((skill, index) => (
            <option key={index} value={skill.name}>
              {skill.name}
            </option>
          ))}
        </select>

        <div>
          <label htmlFor="dc-input">DC: </label>
          <input
            id="dc-input"
            type="number"
            value={dcValue}
            onChange={handleDcChange}
          />
        </div>

        <button onClick={handleRollClick}>Roll</button>
      </div>


      <h5>Skill: {selectedSkill} - Modifier: {skillModifier}</h5>
    </div>
  );
};

export default SkillCheck;
