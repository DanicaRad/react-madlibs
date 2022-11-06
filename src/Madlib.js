import {useState, useEffect} from 'react';
import Story from './Story';
import NewMadlibForm from './NewMadlibForm';

const Madlib = () => {
  const [words, setWords] = useState([]);
  const [story, setStory] = useState(null)
  
  const addWords = (newWord) => {
    setWords(words => [...words, newWord]);
  };

  useEffect(() => {
    setStory(() => Story(words[0]));
  }, [words]);

  return (
    <div>
      <h3>Madlib!</h3>
      <NewMadlibForm makeMadlib={addWords}/>
      <div>
        {story}
      </div>
    </div>
  )
}

export default Madlib;