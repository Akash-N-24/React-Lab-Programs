import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ name, profilePicture, bio, color }) {
  return (
    <article className="profile-card" style={{ backgroundColor: color }}>
      <img src={profilePicture} alt={`${name} profile`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </article>
  );
}

export default function Exp7() {
  const [color, setColor] = useState('#e8f7f4');
  const colors = ['#e8f7f4', '#eaf2ff', '#fff3df', '#f4eafe'];

  return (
    <section className="lab-program">
      <h1>Program 7: Profile Card</h1>
      <p>Demonstrates external CSS, inline styling, props and dynamic presentation.</p>
      <div className="profile-actions">
        {colors.map((value) => <button key={value} onClick={() => setColor(value)}>Change background</button>)}
      </div>
      <ProfileCard
        name="Akash N"
        profilePicture="https://i.pravatar.cc/300?img=12"
        bio="Computer Science and Engineering student exploring React and AI-enabled applications."
        color={color}
      />
    </section>
  );
}