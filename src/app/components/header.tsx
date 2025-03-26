"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth, useUser ,UserButton} from "@clerk/nextjs";
import Link from "next/link";

export default function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <header className="bg-gray-900 text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold"> Admin Dashbord</h1>

        {/* Desktop Menu */}
        {isSignedIn && (
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-400">Dashboard</Link>
            <Link href="/AddCarForm" className="hover:text-yellow-400">Add Car</Link>
            <Link href="/bookings" className="hover:text-yellow-400">Bookings</Link>
            
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isSignedIn && (
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4 ml-4">
        
              <span className="hidden md:inline-block gap-3">Hello, {user?.firstName}    <UserButton/></span>
              
          
          
        
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && isSignedIn && (
        <nav className="md:hidden bg-gray-800 mt-2 p-4 rounded">
          <Link href="/" className="block py-2 hover:text-yellow-400">Dashboard</Link>
          <Link href="/AddCarForm" className="block py-2 hover:text-yellow-400">Add Car</Link>
          <Link href="/bookings" className="block py-2 hover:text-yellow-400">Bookings</Link>
          
        </nav>
      )}
    </header>
  );
}