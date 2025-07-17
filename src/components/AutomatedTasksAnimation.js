import React, { useEffect, useRef, useState } from 'react';

const TASKS = [
  'Qualifying Lead',
  'Appointment Book!',
  'Follow-up Sent',
  'Lead Scored',
  'Client Notified',
  'Task Completed',
  'AI Response Sent',
  'Meeting Scheduled',
  'Deal Closed',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTask() {
  return TASKS[getRandomInt(0, TASKS.length - 1)];
}

const bubbleColors = [
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
  'bg-yellow-100 text-yellow-700',
  'bg-indigo-100 text-indigo-700',
];

// Bubbles will now originate from the bottom right corner
const BUBBLE_START = { right: 120, bottom: 120 }; // px offset from bottom right (where robot/laptop will be)

const AutomatedTasksAnimation = () => {
  const [bubbles, setBubbles] = useState([]);
  const bubbleId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bubbles.length < 7) {
        // Randomize the angle and distance for a more natural spread
        const angle = getRandomInt(-80, -30); // degrees, up and to the left
        const distance = getRandomInt(180, 320); // px
        const size = getRandomInt(90, 160); // px
        const color = bubbleColors[getRandomInt(0, bubbleColors.length - 1)];
        setBubbles((prev) => [
          ...prev,
          {
            id: bubbleId.current++,
            angle,
            distance,
            size,
            color,
            text: getRandomTask(),
            duration: getRandomInt(2, 4),
          },
        ]);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [bubbles.length]);

  useEffect(() => {
    if (bubbles.length === 0) return;
    const timeout = setTimeout(() => {
      setBubbles((prev) => prev.slice(1));
    }, 3500);
    return () => clearTimeout(timeout);
  }, [bubbles]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className={`absolute ${bubble.color} rounded-full shadow-lg px-4 py-2 text-sm font-semibold opacity-80 animate-float-bubble select-none`}
          style={{
            right: `${BUBBLE_START.right}px`,
            bottom: `${BUBBLE_START.bottom}px`,
            width: bubble.size,
            maxWidth: 200,
            zIndex: 0,
            animationDuration: `${bubble.duration}s`,
            '--bubble-angle': `${bubble.angle}deg`,
            '--bubble-distance': `${bubble.distance}px`,
          }}
        >
          {bubble.text}
        </span>
      ))}
      <style>{`
        @keyframes float-bubble {
          0% {
            opacity: 0.8;
            transform: translate(0, 0) scale(1);
          }
          70% {
            opacity: 0.9;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-1 * var(--bubble-distance, 200px) * cos(var(--bubble-angle, -45deg))), calc(-1 * var(--bubble-distance, 200px) * sin(var(--bubble-angle, -45deg)))) scale(0.9);
          }
        }
        .animate-float-bubble {
          animation: float-bubble linear forwards;
        }
      `}</style>
    </div>
  );
};

export default AutomatedTasksAnimation; 