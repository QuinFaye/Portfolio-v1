const imgV112 = "https://www.figma.com/api/mcp/asset/d658879a-3f6d-44c4-a868-fdb131d555cc";
const imgCherry2 = "https://www.figma.com/api/mcp/asset/c9abd35a-fea9-4051-93b4-5e2dd467d809";
const img2Photoroom2 = "https://www.figma.com/api/mcp/asset/9221b8d8-3ab4-42a0-96ab-1a68c2f94f54";
const imgPhotoroom3 = "https://www.figma.com/api/mcp/asset/fdff7391-1bc2-435b-8980-3c50b504331b";

interface HeroDecorationsProps {
  mainShapeTop?: string;
  mainShapeLeft?: string;
  cherryTop?: string;
  cherryLeft?: string;
  leafTop?: string;
  leafLeft?: string;
  sparkleTop?: string;
  sparkleLeft?: string;
}

export default function HeroDecorations({
  mainShapeTop = "5px",
  mainShapeLeft = "242.19px",
  cherryTop = "5px",
  cherryLeft = "159.4px",
  leafTop = "316.25px",
  leafLeft = "20.23px",
  sparkleTop = "278px",
  sparkleLeft = "808px",
}: HeroDecorationsProps) {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-screen pointer-events-none" data-name="Decorations" data-node-id="78:436">
      {/* Main glossy shape */}
      <div className="absolute flex h-[493.543px] items-center justify-center" style={{ top: mainShapeTop, left: mainShapeLeft, width: '585.385px' }}>
        <div className="flex-none" style={{ transform: 'rotate(-6.87deg)' }}>
          <div className="h-[432.372px] relative w-[537.543px]">
            <img alt="" className="w-full h-full object-cover opacity-77" src={imgV112} />
          </div>
        </div>
      </div>

      {/* Cherry decoration */}
      <div className="absolute flex h-[120.547px] items-center justify-center" style={{ top: cherryTop, left: cherryLeft, width: '112.339px' }}>
        <div className="flex-none" style={{ transform: 'rotate(19.55deg)' }}>
          <div className="h-[97.938px] relative w-[84.429px]">
            <img alt="" className="w-full h-full object-cover" src={imgCherry2} />
          </div>
        </div>
      </div>

      {/* Bottom left decoration */}
      <div className="absolute flex items-center justify-center size-[181.476px]" style={{ top: leafTop, left: leafLeft }}>
        <div className="flex-none" style={{ transform: 'rotate(-29.84deg)' }}>
          <div className="relative size-[132.948px]">
            <img alt="" className="w-full h-full object-cover" src={img2Photoroom2} />
          </div>
        </div>
      </div>

    </div>
  );
}
