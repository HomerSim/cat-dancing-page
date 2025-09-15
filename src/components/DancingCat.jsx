import { useState, useEffect } from 'react';
import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDance, setCurrentDance] = useState('bounce');

  const danceTypes = ['bounce', 'wiggle', 'spin', 'jump', 'shake'];

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const changeDanceType = () => {
    const currentIndex = danceTypes.indexOf(currentDance);
    const nextIndex = (currentIndex + 1) % danceTypes.length;
    setCurrentDance(danceTypes[nextIndex]);
  };

  const getDanceClass = () => {
    if (!isPlaying) return '';
    return `dance-${currentDance}`;
  };

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${getDanceClass()}`}
          width="200"
          height="200"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className={`play-button ${isPlaying ? 'playing' : 'paused'}`}
        >
          {isPlaying ? '⏸️ 멈추기' : '▶️ 댄스 시작!'}
        </button>

        <button
          onClick={changeDanceType}
          className="dance-type-button"
          disabled={!isPlaying}
        >
          🕺 댄스 변경 ({currentDance})
        </button>
      </div>

      <div className="dance-info">
        <p className="current-dance">현재 댄스: <strong>{currentDance}</strong></p>
        <p className="dance-status">
          상태: <span className={isPlaying ? 'status-playing' : 'status-paused'}>
            {isPlaying ? '🎵 댄스 중' : '😴 휴식 중'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default DancingCat;