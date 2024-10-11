import { CLASS_LIST } from '../../consts.ts';
import ClassListItems from './ClassListItems.js';

function ClassList({currentAttributes, setSelectedClass}) {
   
  return (
    <div>
        Classes
        <ul style={{ listStyleType: 'none' }}>
            {Object.entries(CLASS_LIST).map(([name, values]) =>
                <ClassListItems key={name} className={name} classAttributes={values} currentAttributes={currentAttributes} setSelectedClass={setSelectedClass} />
            )}
        </ul>
    </div>
  );
}

export default ClassList;