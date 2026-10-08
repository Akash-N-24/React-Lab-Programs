import React, { useState } from 'react';

const initialFigures = [
  { id: 1, image: 'https://picsum.photos/id/1015/600/400', caption: 'Mountain landscape' },
  { id: 2, image: 'https://picsum.photos/id/1025/600/400', caption: 'Nature and wildlife' },
  { id: 3, image: 'https://picsum.photos/id/1035/600/400', caption: 'Forest landscape' },
];

function BasicFigure({ image, caption, onRemove }) {
  return (
    <figure className="figure-card">
      <img src={image} alt={caption} />
      <figcaption>{caption}</figcaption>
      <button onClick={onRemove}>Remove</button>
    </figure>
  );
}

export default function Exp5() {
  const [figures, setFigures] = useState(initialFigures);

  const addFigure = () => {
    const id = Date.now();
    setFigures((current) => [
      ...current,
      {
        id,
        image: `https://picsum.photos/seed/${id}/600/400`,
        caption: `Dynamic figure ${current.length + 1}`,
      },
    ]);
  };

  return (
    <section className="lab-program">
      <h1>Program 5: Figure List</h1>
      <p>Demonstrates component composition, props, dynamic lists and image presentation.</p>
      <button onClick={addFigure}>Add Image</button>
      <div className="figure-grid">
        {figures.map((figure) => (
          <BasicFigure
            key={figure.id}
            image={figure.image}
            caption={figure.caption}
            onRemove={() => setFigures((current) => current.filter((item) => item.id !== figure.id))}
          />
        ))}
      </div>
    </section>
  );
}