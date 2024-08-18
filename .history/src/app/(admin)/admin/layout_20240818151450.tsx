"use client";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "@/components/LoginPage";
import Nav from "@/components/Nav";
import Loading from "./loading";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import StoreProvider from "@/redux/Provider";
import Toast from "@/components/Toast";
import { useState } from "react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const [isNavOpen, setNavOpen] = useState(false);
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="w-full relative z-[9999] bg-white text-zinc-800">
        <Toast />
        {user ? (
          <>
            <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
            <div className="min-w-full min-h-screen bg-[#222430]">
              <StoreProvider>{children}</StoreProvider>
            </div>
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    );
}
