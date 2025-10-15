import React, { memo } from 'react';
import './App.css';
import DecryptText from './DecryptText';
import profileImage from './assets/profile.png';

const BentoItem = memo(({ title, description, className, bulletPoints, techItems, image }) => {
  return (
    <div className={`bento-item ${className}`}>
      <div className="bento-content">
        <h3>{title}</h3>
        {techItems ? (
          <ul>
            {techItems.map((item, index) => (
              <li key={index}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    {item.name} <img src={item.logo} alt={`${item.name} logo`} className="tech-logo" />
                  </a>
                ) : (
                  <span>
                    {item.name} <img src={item.logo} alt={`${item.name} logo`} className="tech-logo" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : bulletPoints ? (
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
        {image && (
          <div className="profile-image">
            <img 
              src={image} 
              alt="Profile" 
              onError={(e) => {
                console.error('Profile image failed to load:', image);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Profile image loaded successfully')}
            />
          </div>
        )}
      </div>
      <div className="blur-effect"></div>
    </div>
  );
});

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <DecryptText text="Kermari Magmayo" className="decrypt-text" />
        <p>Aspiring UI/UX Designer</p>
      </header>
      <main>
        <div className="bento-grid">
          <BentoItem
            className="item-1"
            title="ABOUT ME"
            description="I'm currently studying for a B.S. in Information Systems while also pursuing my passion for design and video editing."
            image={profileImage}
          />
          <BentoItem
            className="item-2"
            title="BRIEF HISTORY"
            description={<span>My interest in coding sparked when I played <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Plains_Grass_Block.png" alt="Minecraft logo" className="inline-logo" /> Minecraft and started learning Java ☕ after that.</span>}
          />
          <BentoItem
            className="item-3"
            title="TECH STACK"
            techItems={[
              { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
            ]}
          />
          <BentoItem
            className="item-4"
            title="GET IN TOUCH"
            description="Let's connect! Find me on my Social Media Accounts or GitHub."
            techItems={[
              { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", url: "https://instagram.com/itz_care/" },
              { name: "Github", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/ker-mari/" },
              { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://www.facebook.com/kermari.magmayo.3/" }
            ]}
          />
          <BentoItem
            className="item-5"
            title="REMINDER"
            description={<span>Always choose to be <span className="highlight-yellow">good.</span></span>}
          />
          <BentoItem
            className="item-6"
            title="INTERESTS"
            bulletPoints={[
              "Designing",
              "Video Editing",
              "Motion Graphics"
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default App;