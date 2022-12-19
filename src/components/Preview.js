import './Preview.scss'

function Preview({ image }) {
  if (!image) return null

  return (
    <div className="c-Preview">
      <a href={image} download>
        <button>Download image</button>
      </a>
      <i>Last uploaded image:</i>
      <img src={image} alt="uploaded" />
    </div>
  );
}

export default Preview;
