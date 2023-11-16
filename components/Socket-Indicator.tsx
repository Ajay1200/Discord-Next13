"use client";

import { Badge } from "@/components/ui/badge";
import { useSocket } from "@/providers/SocketProvider";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="bg-yellow-600 text-white border-none font-sans"
      >
        Fallback: Polling every 1s
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="bg-emerald-600 text-white border-none font-sans"
    >
      Live: Real-time updates
    </Badge>
  )
}