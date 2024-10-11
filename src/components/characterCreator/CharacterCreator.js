import AttributeList from "../attributeList/AttributeList.js";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../../consts.ts';
import { useState } from 'react';
import ClassList from "../classList/ClassList.js";
import ClassDescription from "./ClassDescriptions.js";
import SkillsList from "../skillsList/SkillsList.js";

function CharacterCreator({}) {

    const initialAttributeValue = 9;

    const calculateModifier = (attributePoints) => {
        return Math.floor((attributePoints - 10) / 2)
    }

    const initialAttributeState = ATTRIBUTE_LIST.reduce((acc, attribute) => {
      acc[attribute] = initialAttributeValue;
      return acc;
    }, {});
  
    const initialAttributeMod= ATTRIBUTE_LIST.reduce((acc, attribute) => {
        acc[attribute] = calculateModifier(initialAttributeValue);
        return acc;
    }, {});

    const [attributePoints, setAttributePoints] = useState(initialAttributeState);
    const [attributeMod, setAttributeMod] = useState(initialAttributeMod);
    const [selectedClass, setSelectedClass] = useState(null);
  
    const modifyAttributePoints = (attribute, newValue) => {
      setAttributePoints((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: newValue
      }));

      setAttributeMod((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: calculateModifier(newValue)
      }));
    };
    
    return (
      <div style={{display: 'flex', border: '2px solid red', padding: '10px', margin: '10px' }}>
        <div style={{ flex: 1 }}>
            <AttributeList changeAttributePoints={modifyAttributePoints} attributePointList={attributePoints} attributeModifierList={attributeMod}/>
        </div>
        
        <div style={{ flex: 2 }}>
            <ClassList currentAttributes={attributePoints} setSelectedClass={setSelectedClass}/>
        </div>
       
        {selectedClass && <div style={{ flex: 1 }}>
            <ClassDescription className={selectedClass} setClass={setSelectedClass}/>
        </div>}
        
        <div style={{ flex: 2 }}>
            <SkillsList playerModifierList={attributeMod}/>
        </div>
      </div>
    );
}
  
  export default CharacterCreator;