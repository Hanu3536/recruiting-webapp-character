function AttributeListItem({attribute, value, changeAttributePoints, modifier}) {
    return (
      <li>
        {attribute + ": " + value + " Modifier: " + modifier}
        <button onClick={()=>changeAttributePoints(attribute,value+1)}>+</button>
        <button onClick={()=>changeAttributePoints(attribute, value-1)}>-</button>
      </li>
    );
}

export default AttributeListItem;