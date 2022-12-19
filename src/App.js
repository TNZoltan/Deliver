import { useEffect, useState } from 'react';
import Preview from './components/Preview';
import Upload from './components/Upload';
import { downloadFile, replaceFile } from './services/api';

import './App.scss';

function App() {
  const [image, setImage] = useState()

  const refreshImage = () =>
  downloadFile('images', 'the-picture.jpg').then(setImage)

  useEffect(() => {
    refreshImage()
  }, [])

  const upload = (file) => {
    replaceFile('images', file, `the-picture.jpg`).then(() => {
      refreshImage()
    })
  }

  return (
    <div className="App">
      <h1>Let's Enhance Tech Task</h1>
      <Upload submit={upload} />
      <Preview image={image} />
    </div>
  );
}

export default App;
