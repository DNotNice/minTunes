"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface AppBarProps {
  currentTab: 'record' | 'marketplace';
}

const AppBar: React.FC<AppBarProps> = ({ currentTab }) => {
  return (
    <div className="w-full bg-black border-b " >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">minTunes</span>
            </Link>
          </div>

          <nav className="flex space-x-4">
            <Link href="/record" passHref>
              <Button
                variant={currentTab === 'record' ? 'default' : 'ghost'}
              >
                Record
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button
                variant={currentTab === 'marketplace' ? 'default' : 'ghost'}
              >
                Marketplace
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AppBar;