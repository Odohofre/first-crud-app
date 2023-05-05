"use client";
import { AuthContextProvider } from "@/context/AuthContext";

import React from "react";

export default function Providers({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
