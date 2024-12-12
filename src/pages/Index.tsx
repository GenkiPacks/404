import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showHint, setShowHint] = useState(false);

  const addMessage = (msg: string) => {
    setMessages(prev => [...prev, msg]);
  };

  useEffect(() => {
    if (terminalOpen) {
      const initialMessages = [
        "SYSTEM INITIALIZED...",
        "ACCESSING CLASSIFIED FILES...",
        "WARNING: UNAUTHORIZED ACCESS DETECTED",
        "INITIATING SECURITY PROTOCOL: DELTA-7",
        "Enter command 'help' for available operations..."
      ];

      initialMessages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg);
        }, index * 1000);
      });
    }
  }, [terminalOpen]);

  const handleCommand = (cmd: string) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        addMessage("Available commands: help, scan, decrypt, status");
        break;
      case 'scan':
        addMessage("Scanning network...");
        setTimeout(() => {
          addMessage("Found hidden signal at coordinates: 34°03'N 118°15'W");
          setShowHint(true);
        }, 2000);
        break;
      case 'decrypt':
        addMessage("Decryption key required. Find the key in the source.");
        break;
      case 'status':
        addMessage("SYSTEM STATUS: COMPROMISED");
        addMessage("SECURITY LEVEL: CRITICAL");
        addMessage("BREACH DETECTED IN SECTOR 7");
        break;
      default:
        addMessage(`Command not recognized: ${cmd}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage(`> ${inputValue}`);
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4">
      {!terminalOpen ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Button 
            variant="outline" 
            className="text-green-500 border-green-500 hover:bg-green-500/10"
            onClick={() => setTerminalOpen(true)}
          >
            ACCESS TERMINAL
          </Button>
          {/* Hidden message in HTML comment for ARG players to find */}
          {/* Key: MN3IF1C4T10N_PR0T0C0L */}
        </div>
      ) : (
        <Card className="bg-black border-green-500">
          <CardContent className="p-4">
            <div className="h-[60vh] overflow-y-auto mb-4 space-y-2">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`typewriter-text ${
                    msg.startsWith('>') ? 'text-blue-400' : 'text-green-500'
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-green-500">></span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-transparent border-none text-green-500 focus:outline-none"
                autoFocus
              />
            </form>
            {showHint && (
              <div className="mt-4 text-xs opacity-30 hover:opacity-100 transition-opacity">
                "The key lies within the source, hidden from plain sight..."
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;