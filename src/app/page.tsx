import Link from "next/link";
import MyForm from "./test/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Signal, Wifi, Battery, ChevronLeft, ChevronRight, Share, Bookmark, Layers, LayoutGrid, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import GoodSection from "@/components/Featrures";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-tr f min-h-screen w-screen my-5">
     
      <div className="flex  px-5 flex-col gap-5">
        <div className="flex justify-around">
        {/* First Section */}
        <div className="my-10 bg-background w-1/2 justify-center flex flex-col">
          <h1 className="text-5xl font-bold mb-5 ">Shadcn Form Builder</h1>
        
      
      <GoodSection/>
      
      
      </div>
        <div className="w-[300px] h-[600px] bg-gray-100 dark:bg-gray-700 m-0 rounded-[60px] overflow-hidden shadow-xl border-8 border-gray-800 dark:border-gray-600 relative flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl z-10"></div>

          {/* Status Bar */}
          <div className="pt-12 px-6 pb-2 bg-gray-100 dark:bg-gray-700 flex justify-between items-center text-xs z-10 text-black dark:text-white">
            <div>9:41</div>
            <div className="flex items-center space-x-1">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Address Bar */}
          <div className="px-4 py-2 bg-gray-200 dark:bg-gray-600 flex items-center space-x-2 z-10">
            <Input className="flex-grow h-8 text-sm rounded-full bg-white dark:bg-gray-800 text-black dark:text-white px-3" defaultValue="https://shadcn-formbuilder.vercel.app/" />
            <button className="text-blue-500 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-grow bg-white dark:bg-black p-4 overflow-y-auto text-black dark:text-white">
            <MyForm />
          </div>

          {/* Bottom Navigation */}
          <div className="bg-gray-200 dark:bg-gray-600 px-4 py-2 flex justify-between items-center z-10">
            <button className="text-blue-500 dark:text-blue-300 p-2">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="text-blue-500 dark:text-blue-300 p-2">
              <ChevronRight className="h-6 w-6" />
            </button>
            <button className="text-blue-500 dark:text-blue-300 p-2">
              <Share className="h-6 w-6" />
            </button>
            <button className="text-blue-500 dark:text-blue-300 p-2">
              <Bookmark className="h-6 w-6" />
            </button>
            <button className="text-blue-500 dark:text-blue-300 p-2">
              <Layers className="h-6 w-6" />
            </button>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black dark:bg-white rounded-full"></div>
        </div>
        </div>
        <h1 className="text-5xl font-bold mb-5 self-center ">Fully Responsive </h1>

        {/* Second Section */}
        <div className="w-full max-w-3xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl border border-gray-300 dark:border-gray-600">
          {/* Menu Bar */}
          <div className="bg-gray-100 dark:bg-gray-600 px-4 py-1 flex justify-between items-center text-sm text-black dark:text-white">
            <div className="flex space-x-4">
              <span className="font-semibold">Safari</span>
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>History</span>
              <span>Bookmarks</span>
              <span>Window</span>
              <span>Help</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>100%</span>
              <Battery className="w-4 h-4" />
              <span>Wed 10:30 AM</span>
            </div>
          </div>

          {/* Window Controls and Toolbar */}
          <div className="bg-gray-200 dark:bg-gray-600 px-4 py-2 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-grow flex items-center space-x-2">
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex-grow relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                <Input className="w-full pl-8 pr-4 py-1 rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white" defaultValue="https://shadcn-formbuilder.vercel.app/" />
              </div>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Plus className="w-5 h-5" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white dark:bg-black h-[calc(100vh-8rem)] p-6 overflow-y-auto text-black dark:text-white">
            <MyForm />
          </div>
        </div>
      </div>
    </main>
  );
}
