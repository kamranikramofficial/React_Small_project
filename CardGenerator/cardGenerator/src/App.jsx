import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import styles from './App.module.css';

const team = [
  {
    id: 1,
    name: 'Kamran Ikram',
    role: 'Frontend Dev',
    email: 'kamran@example.com',
    bio: 'Loves building UI with React.',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Ammar',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'ahmad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 5,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=6'
  },
  {
    id: 6,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 7,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 8,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 9,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 10,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=15'
  },
  {
    id: 11,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: 12,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=35'
  },
  {
    id: 13,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=44'
  },
  {
    id: 14,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: 15,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=50'
  },
  {
    id: 16,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=54'
  },
  {
    id: 17,
    name: 'muhammad',
    role: 'UI/UX Designer',
    email: 'ammar@example.com',
    bio: 'Designs intuitive user experiences.',
    image: 'https://i.pravatar.cc/150?img=57'
  },
];

function App() {
  const [dark, setDark] = useState(false);


  const toggleTheme = () => setDark(prev => !prev);
  return (
    <div className={`${styles.app} ${dark ? styles.dark : ''}`}>
      <button onClick={toggleTheme} className={styles.toggleBtn}>
        Toggle Theme
      </button>

      <div className={styles.cardGrid}>
        {team.map(member => (
          <ProfileCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default App;
