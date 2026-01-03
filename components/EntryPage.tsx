
import React from 'react';

interface EntryPageProps {
  onEnter: () => void;
}

const EntryPage: React.FC<EntryPageProps> = ({ onEnter }) => {
  return (
    <div className="p-8 flex flex-col items-center text-center animate-fade-in">
      {/* The logo has been removed from this page to satisfy the request to remove the 'facebook' word from the initial view. */}
      
      <div className="mb-8 relative">
        <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
          <i className="fas fa-lock text-[#1877f2] text-4xl"></i>
        </div>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
          PRIVATE
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Exclusive Content</h1>
      <p className="text-gray-500 text-sm mb-8 max-w-[300px]">
        This post is hidden for your privacy. You must be logged in to view shared media and messages.
      </p>

      <button
        onClick={onEnter}
        className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-3"
      >
        <i className="fas fa-eye"></i>
        View hidden post
      </button>

      <div className="mt-8 grid grid-cols-3 gap-2 w-full">
        <div className="h-1 bg-gray-100 rounded-full"></div>
        <div className="h-1 bg-gray-100 rounded-full"></div>
        <div className="h-1 bg-gray-100 rounded-full"></div>
      </div>
      
      <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
        Secure Social Connection
      </p>
    </div>
  );
};

export default EntryPage;
