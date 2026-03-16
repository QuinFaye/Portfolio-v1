const imgSubtract = "https://www.figma.com/api/mcp/asset/91031d35-d229-4818-882a-05e345ea6611";

export default function Subtract({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full" data-name="Subtract" data-node-id="13:17">
      <img 
        alt="" 
        className="absolute block max-w-none w-full h-full object-cover" 
        src={imgSubtract} 
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
