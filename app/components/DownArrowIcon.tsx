const imgDownArrow = "https://www.figma.com/api/mcp/asset/cb008150-5756-4ded-b8b0-c43daf1b14e9";

type IconProps = {
  className?: string;
};

export default function DownArrowIcon({ className }: IconProps) {
  return (
    <div className={`relative w-full h-full ${className}`} data-node-id="33:195">
      <div className="absolute bottom-[14.9%] left-[22.37%] right-1/4 top-[30.27%]" data-node-id="33:194">
        <div className="absolute inset-[-9.6%_-10%]">
          <img alt="down arrow" className="w-full h-full object-contain" src={imgDownArrow} />
        </div>
      </div>
    </div>
  );
}
