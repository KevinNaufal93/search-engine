import React from "react";
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-colorSet1 sticky top-0 overflow-hidden">
        <div className="container mx-auto px-2 h-full ">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <div className="flex items-center justify-center bg-colorSet2 rounded-full w-12 h-12">
                <Icon path={mdiHome} size={1} className="text-background"/>
              </div>
            </Link>
            <div className="flex flex-col text-end">
              <p className="font-extrabold text-xl text-foreground">
                Sentiment Analyzer
              </p>
              <p className="font-bold text-md text-foreground">
                By Kevin NP
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;