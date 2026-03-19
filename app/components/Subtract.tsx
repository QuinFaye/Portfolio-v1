export default function Subtract({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" data-name="Subtract" data-node-id="13:17">
      {/* SVG Background */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-0 " 
        viewBox="0 0 1484 769" 
        fill="none"
      >
        <path 
          d="M1233.15 45.248C1234.48 46.752 1236.39 47.6132 1238.4 47.6133H1474C1479.52 47.6133 1484 52.0904 1484 57.6133V759C1484 764.523 1479.52 769 1474 769H358.619C355.017 769 351.704 767.055 349.712 764.054C347.861 761.267 345.617 758.097 343.031 754.444L319.671 721.444C316.741 717.306 315.276 715.236 313.115 714.118C310.954 713 308.418 713 303.347 713H5.36914C2.41887 713 0 710.61 0 707.66V10C0 4.47716 4.47715 0 10 0H1188.67C1191.54 0 1194.27 1.23054 1196.16 3.37914L1233.15 45.248Z" 
          fill="#DDDDDD"
        />
      </svg>

      {/* Content on top */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}