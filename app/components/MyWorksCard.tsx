import Subtract2 from './Subtract2';

export default function MyWorksCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center z-0 overflow-visible">
      <div className="relative
         w-full
         -mt-[210px]
         mb-[320px]
         z-0
         overflow-visible
         h-[2450px]
         ">
        
        <Subtract2>
          <div className="p-8">
            {children}
          </div>
        </Subtract2>

      </div>
    </div>
  );
}