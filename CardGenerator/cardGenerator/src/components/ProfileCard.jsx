import React, { useState } from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({ member }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={member.image} alt={member.name} className={styles.avatar} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>

      {showInfo && (
        <div className={styles.moreInfo}>
          <p>{member.bio}</p>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;