export default function Subtract2({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full z-0" data-name="Subtract2" data-node-id="13:17">
      {/* SVG Background */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1512 2788" 
            fill="none"
            preserveAspectRatio="none">
          <path d="M1504 0C1508.42 0 1512 3.58172 1512 8V2780C1512 2784.42 1508.42 2788 1504 2788H8C3.58172 2788 2.46635e-08 2784.42 0 2780V8C0 3.58172 3.58172 0 8 0H614.834C618.861 0 622.495 2.41517 624.054 6.12773L640.625 45.583C643.276 51.8943 649.453 56 656.299 56H873.49C880.442 56 886.693 51.7677 889.274 45.3135L904.886 6.28599C906.405 2.48946 910.082 0 914.171 0H1504Z" 
          fill="#DDDDDD"/>
        </svg>

      {/* Content on top */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}