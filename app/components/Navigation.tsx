export default function Navigation() {
  return (
    <nav className="flex gap-20 items-center px-8 py-6" data-node-id="84:139">
      <button 
            className="relative font-koho font-bold text-[20px] text-black px-1 py-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#399A2E] before:transition-all before:duration-300 hover:before:w-full"
        >
        About
      </button>
      <button 
      className="relative font-koho font-bold text-[20px] text-black px-1 py-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#399A2E] before:transition-all before:duration-300 hover:before:w-full">
        Resumé
      </button>
      <p className="font-necosmic text-[35px] text-black">
        SDFD
      </p>
      <button 
      className="relative font-koho font-bold text-[20px] text-black px-1 py-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#399A2E] before:transition-all before:duration-300 hover:before:w-full">
        Works
      </button>
      <button className="relative font-koho font-bold text-[20px] text-black px-1 py-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#399A2E] before:transition-all before:duration-300 hover:before:w-full">
        Contact
      </button>
    </nav>
  );
}
