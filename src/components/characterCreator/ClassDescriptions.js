import { CLASS_LIST } from '../../consts.ts';

function ClassDescription({className, setClass}) {
    const classInfo = CLASS_LIST[className]
    return (
        <>
            {className} Minimum Requirements
            <ul>
                {Object.entries(classInfo).map(([attribute, value]) =>
                    <li key={attribute}>    
                        {attribute+': '+value}
                    </li> 
                )}
            </ul>

            <button onClick={() => setClass(null)}>
                Close Requirement View
            </button>
        </>
    );
}
  
export default ClassDescription;