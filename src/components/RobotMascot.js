import React from 'react';

const RobotMascot = ({ width = '100%', height = 'auto', className = '', supercharged = false }) => {
  return (
    <svg 
      viewBox="0 0 600 700" 
      width={width} 
      height={height} 
      className={`robot-svg-mascot ${className}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Antennas */}
      <g fill="#172d63">
        <path d="M180 145 Q140 60 220 40 Q190 60 190 145Z" />
        <path d="M420 145 Q460 60 380 40 Q410 60 410 145Z" />
        <ellipse cx="220" cy="40" rx="25" ry="15" />
        <ellipse cx="380" cy="40" rx="25" ry="15" />
      </g>

      {/* Head */}
      <ellipse cx="300" cy="220" rx="185" ry="155" fill="#d9d9e8" />

      {/* Top Cap */}
      <path d="M240 95 Q300 75 360 95 L340 135 L260 135 Z" fill="#29abe2" />
      <path d="M255 110 Q300 95 345 110 L330 135 L270 135 Z" fill="#2947a3" />

      {/* Ear Pads */}
      <path d="M105 175 Q80 210 90 260 L130 280 Q140 220 135 175Z" fill="#29abe2" />
      <path d="M495 175 Q520 210 510 260 L470 280 Q460 220 465 175Z" fill="#29abe2" />
      <path d="M110 230 L135 220 L135 290 L105 280Z" fill="#2947a3" />
      <path d="M490 230 L465 220 L465 290 L495 280Z" fill="#2947a3" />

      {/* Face Screen */}
      <rect x="170" y="145" width="260" height="170" rx="85" fill="#343d93" />

      {/* Eyes */}
      <g className="mascot-eye-group eye-left" style={{ transformOrigin: '240px 245px' }}>
        <rect x="220" y="200" width="40" height="90" rx="20" fill="#fff" />
        <g className="mascot-pupil">
          <rect x="232" y="210" width="24" height="75" rx="12" fill={supercharged ? '#ff3366' : '#5bc0e5'} className="mascot-pupil-rect" />
          <circle cx="240" cy="225" r="4.5" fill="#fff" />
        </g>
      </g>

      <g className="mascot-eye-group eye-right" style={{ transformOrigin: '360px 245px' }}>
        <rect x="340" y="200" width="40" height="90" rx="20" fill="#fff" />
        <g className="mascot-pupil">
          <rect x="352" y="210" width="24" height="75" rx="12" fill={supercharged ? '#ff3366' : '#5bc0e5'} className="mascot-pupil-rect" />
          <circle cx="360" cy="225" r="4.5" fill="#fff" />
        </g>
      </g>

      {/* Neck */}
      <ellipse cx="300" cy="365" rx="115" ry="28" fill="#9ea0d2" />

      {/* Shoulders */}
      <ellipse cx="165" cy="430" rx="65" ry="70" fill="#172d63" />
      <ellipse cx="435" cy="430" rx="65" ry="70" fill="#172d63" />

      {/* Body Torso */}
      <path d="M180 360 Q300 330 420 360 Q430 520 300 620 Q170 520 180 360" fill="#d9d9e8" />

      {/* Chest Line */}
      <path d="M175 470 Q300 510 425 470" stroke="#343d93" strokeWidth="6" fill="none" />

      {/* Reactor Core */}
      <g>
        <circle cx="300" cy="470" r="45" fill={supercharged ? '#ef4444' : '#1f9ad1'} className="mascot-core-inner" />
        <path d="M245 470 A55 55 0 0 0 355 470" stroke={supercharged ? '#f59e0b' : '#2947a3'} strokeWidth="12" fill="none" className="mascot-core-outer" />
      </g>

      {/* Arms */}
      <g fill="#d9d9e8">
        <path d="M110 460 Q90 530 120 580 Q150 610 170 540 Q180 500 155 450" />
        <path d="M490 460 Q510 530 480 580 Q450 610 430 540 Q420 500 445 450" />
      </g>

      {/* Arm Lines */}
      <path d="M105 505 Q140 500 170 515" stroke="#343d93" strokeWidth="5" fill="none" />
      <path d="M495 505 Q460 500 430 515" stroke="#343d93" strokeWidth="5" fill="none" />
    </svg>
  );
};

export default RobotMascot;
