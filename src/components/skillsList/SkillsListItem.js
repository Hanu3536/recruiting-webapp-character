function SkillsListItem({skillName, skillPoints, skillModifier, playerModifier, subtractPoints, addPoints }) {
    
    return (
        
        <li>
            {skillName + ": " + skillPoints + " Modifier: " + skillModifier + ": " + playerModifier}
            <button onClick={()=>addPoints(skillName)}>+</button>
            <button onClick={()=>subtractPoints(skillName)}>-</button>
      </li>
    );
  }
  
  export default SkillsListItem;