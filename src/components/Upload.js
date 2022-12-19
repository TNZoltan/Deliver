import { useState } from 'react';
import { getImageSize } from 'react-image-size';

import './Upload.scss';

function Upload ({ submit }) {
  const [file, setFile] = useState(null)

  const selectFile = e => {
    const selected = e.target.files[0]
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(selected.type)) {
      alert('Incorrect file type, please try again')
      return
    }
    const imgUrl = URL.createObjectURL(selected)
    getImageSize(imgUrl).then(({ width, height }) => {
      setFile({
        fileObj: selected,
        src: imgUrl,
        width, 
        height
      })
    });
  }

  return (
    <div className="c-Upload">
      <h3>Upload or re-upload your fresh new picture</h3>
      <form className={file && "selected"}>
        {file ? (
          <div className="selected-info">
            <img src={file.src} alt="upload-preview" />
            <span>Name: {file.fileObj.name}</span>
            <span>Type: {file.fileObj.type}</span>
            <span>Size: {Math.round(file.fileObj.size / 1000)} Kb</span>
            <span>Resolution: {file.width} x {file.height}</span>
            <span>Megapixels: {((file.width * file.height) / 1_000_000).toFixed(1)} MP</span>
          </div>
        ) : (
          <>
            <input type="file" onChange={selectFile} accept="image/png, image/jpeg" />
            Drag your files here or click in this area.
          </>
        )}
      </form>
      <button type="submit" onClick={() => {
        submit(file.fileObj)
        setFile(null)
      }}>Upload</button>
    </div>
  );
}

export default Upload;
