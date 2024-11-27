'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3002');
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
