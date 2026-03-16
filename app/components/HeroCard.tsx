import Subtract from './Subtract';

export default function HeroCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative
         w-full
         mx-3
         my-4
         h-[730px]
         ">
        
        <Subtract>
          <div className="p-8">
            {children}
          </div>
        </Subtract>

      </div>
    </div>
  );
}