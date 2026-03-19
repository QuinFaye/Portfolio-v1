const chromeBlob = "/chrome-blob.png";
const chromeBlobReveal = "/chrome-blob-reveal.png";
const cherry = "/cherry.png";
const shroom = "/shroom.png";
const sparkle = "/sparkle.png";
const barcode = "/barcode.png";

interface HeroDecorationsProps {
  chromeBlobTop?: string;
  chromeBlobLeft?: string;
  chromeBlobRevealTop?: string;
  chromeBlobRevealLeft?: string;
  cherryTop?: string;
  cherryLeft?: string;
  shroomTop?: string;
  shroomLeft?: string;
  sparkleTop?: string;
  sparkleLeft?: string;
  barcodeTop?: string;
  barcodeLeft?: string;
}

export default function HeroDecorations({
  cherryTop = "5px",
  cherryLeft = "159.4px",
  sparkleTop = "550px",
  sparkleLeft = "750px",
  barcodeTop = "600px",
  barcodeLeft = "800px",
  //shroomTop = "500.25px",
  //shroomLeft = "20.23px",
}: HeroDecorationsProps) {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-screen pointer-events-none" data-name="Decorations" data-node-id="78:436">

      {/* Cherry decoration */}
      <div className="absolute flex h-[120.547px] items-center justify-center" style={{ top: cherryTop, left: cherryLeft, width: '112.339px' }}>
        <div className="flex-none" style={{ transform: 'rotate(19.55deg)' }}>
          <div className="h-[97.938px] relative w-[84.429px]">
            <img alt="" className="w-full h-full object-cover" src={cherry} />
          </div>
        </div>
      </div>

      {/* shroom decoration */}
      <div className="absolute flex items-center justify-center size-[181.476px]" style={{ top: 520, left: -90 }}>
        <div className="flex-none" style={{ transform: 'rotate(-29.84deg)' }}>
          <div className="relative size-[132.948px]">
            <img alt="" className="w-full h-full object-cover" src={shroom} />
      

          </div>
        </div>
      </div>
      {/* Sparkle decoration - lower right */}
      <div className="absolute flex items-center justify-center" style={{ top: sparkleTop, left: sparkleLeft, width: '81.563px', height: '145px' }}>
        <img alt="" className="w-full h-full object-cover" src={sparkle} />
      </div>

      {/* Barcode decoration - lower right */}
      <div className="absolute flex items-center justify-center" style={{ top: barcodeTop, left: barcodeLeft, width: '227px', height: '227px' }}>
        <img alt="" className="w-full h-full object-cover" src={barcode} />
      </div>

    </div>
  );
}
