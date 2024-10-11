import { useState } from 'react';
import type { Class } from './types';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts';
import CharacterCreator from './components/characterCreator/CharacterCreator.js';
import SkillCheck from './SkillCheck.js';
import SkillCheckResults from './SkillCheckResult';

function App() {
  const [characters, setCharacters] = useState<Record<string, any>[]>([{}]);
  const [num, setNum] = useState<number>(0);
  const [dcValue, setDcValue] = useState<number>(10);
  const [roll, setRoll] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<string>("Acrobatics");



  const [selectedClass, setSelectedClass] = useState<Class>("Barbarian");
  const attributes = CLASS_LIST[selectedClass];

  const handleIncrement = () => {
    setNum(prevNum => prevNum + 1);
  };

  const handleDecrement = () => {
    setNum(prevNum => (prevNum > 0 ? prevNum - 1 : 0));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        
        <SkillCheckResults dcValue={dcValue} roll={roll} selectedSkill={selectedSkill} attributes={attributes} />

        
        <div style={{ border: '1px solid white', padding: '10px' }}>
          <SkillCheck
            dcValue={dcValue}
            setDcValue={setDcValue}
            roll={roll}
            setRoll={setRoll}
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
            attributes={attributes}
          />
        </div>

        <CharacterCreator />
      </section>
    </div>
  );
}

export default App;
