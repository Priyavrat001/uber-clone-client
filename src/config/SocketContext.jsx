import { createContext, useContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { server } from "../config/server"; // your server URL

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  // Memoize the socket instance so it's only created once
  const socket = useMemo(() => io(server, { autoConnect: false }), []);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

  socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
