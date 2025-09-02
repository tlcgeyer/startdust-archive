import './App.css'
import MemoryCard from './components/MemoryCards';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      <Navbar />
      <p className="flex justify-center text-center text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 items-center gap-3 ">
        Love and Deepspace Memory Tracker
      </p>
      <p className="text-center">
        Collect memories with your favorite hunters ♡
      </p>
      <div className='flex flex-row'>
        <MemoryCard />
      </div>
    </div>
  );
}

export default App
