import { SKILL_LIST } from '../../consts.ts';
import SkillsListItem from './SkillsListItem.js';
import { useState, useEffect } from 'react';

function SkillsList({playerModifierList}) {
    let totalSkillPoints = 10+(4*playerModifierList['Intelligence'])

    
    const [availablePoints, setAvailablePoints] = useState(totalSkillPoints);

    const [skillPointsList, setSkillPointsList] = useState(
        SKILL_LIST.reduce((list,{name, attributeModifier}) => {
          list[name] = {attribute: attributeModifier, points: 0};
          return list;
        }, {})
    );

    //bug where you can reset the amount of skill points
    useEffect(() => {
        setAvailablePoints(10 + 4 * (playerModifierList['Intelligence']));
    }, [playerModifierList['Intelligence']]);

    const addSkillPoints = (skillName) => {
        if (availablePoints > 0) {
          setSkillPointsList((prevSkillPoints) => ({
            ...prevSkillPoints,
            [skillName]: {
                ...prevSkillPoints[skillName],
                points: prevSkillPoints[skillName].points + 1,
              },
          }));
          setAvailablePoints(availablePoints - 1);
        }
    };

    const subtractSkillPoints = (skillName) => {
        if (skillPointsList[skillName].points > 0) {
          setSkillPointsList((prevSkillPoints) => ({
            ...prevSkillPoints,
            [skillName]: {
                ...prevSkillPoints[skillName],
                points: prevSkillPoints[skillName].points - 1,
            },
          }));
          setAvailablePoints(availablePoints + 1);
        }
      };

    return (
      <div>
          Skills
          Total Available Points: {availablePoints}
          <ul style={{ listStyleType: 'none' }}>
              {Object.entries(skillPointsList).map(([name, value]) =>
                  <SkillsListItem key={name} skillName={name} skillPoints={value.points} skillModifier={ value.attribute } playerModifier={playerModifierList[value.attribute]} subtractPoints = {subtractSkillPoints} addPoints={addSkillPoints}/>
              )}
          </ul>
      </div>
    );
}
  
export default SkillsList