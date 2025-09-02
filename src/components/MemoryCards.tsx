// card layout
import { useState } from "react";
import ProgressTrackerModal from './ProgressTrackerModal';


const MemoryCard = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative px-5 md:px-10 mx-auto">
      <div className="bg-white rounded-2xl h-[450px] w-[288px]">
        <img
          src="https://i.ibb.co/JVWzGvN/Mistsea-Descent-Icon.png"
          alt="placeholdder"
          className="rounded-t-2xl h-[200px] w-[288px] object-cover"
        />
      </div>
      {/* wishlist && if u have the card or not */}
      <div className="z-7 absolute top-0 flex flex-row gap-1.5 text-yellow-400 pl-2.5 pt-2.5">
        <button>yes/no</button> {/*state that handles whether you have the card or not*/}
        <button className="bg-white w-8 rounded-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-heart w-4 h-4 text-gray-600 justify-self-center flex "
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
      </div>

      {/* stellactrum & rarity */}
      <div className="z-7 absolute bottom-[46%] p-[12px] text-pink-500 flex items-center w-[288px] px-5 justify-between">
        <div className="flex flex-row items-center gap-2.5">
          <p>solar/lunar</p>
          <p>stellactrum</p>
        </div>
        <div className="flex items-center">rarity</div>
      </div>

      {/* Which banner this is from and the progress bar  */}
      <div className="absolute bottom-[30%] p-[12px] flex flex-row justify-between w-[288px]">
        <p>myth/solo/bday-xspace</p>
        <p>limit/permanent</p>
      </div>

      {/* track ur progress */}
      <div className="z-7 absolute bottom-0 stext-blue-500 pl-2.5 pb-2.5">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-4"
          >
            <path
              d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Edit Progress
        </button>
        <ProgressTrackerModal open={isOpen} onClose={() => setIsOpen(false)}>
          hey
          efh9dnefdvf
          ifbeibfe
          feiefefbe
          fiebfeibfef kfneofneofneonfeonfoefnef
          eoneofneonfoenf
          foneonefneofn
          wdondnw
          fiebfeibfefeobfefo
          eofeof
          </ProgressTrackerModal>
      </div>
    </div>
  );
};

export default MemoryCard;
