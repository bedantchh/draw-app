"use client";

import { useEffect, useState } from "react";
import { WS_URl } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(`${WS_URl}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjFlMWFiZS02YzIyLTQ5NDUtYTUxMC01ZmYyNzFiZTgzZjIiLCJpYXQiOjE3NTk3NzU4MDN9.pPSh0tYExe3mm5cxNtGQSg2Jd9FrJ4KoePqVRVFRrJ4`);
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws)
    };
  }, []);

  return {
    socket,loading
  }
}
