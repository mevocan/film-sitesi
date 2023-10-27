'use client'
import React from "react";
import { Footer } from 'flowbite-react';
import {BsGithub, BsInstagram} from "react-icons/bs"

export default function FooterBolum() {
  return (
    <Footer container className="bg-black p-5 decoration-white">
      <Footer.Copyright
        by="Mevocan"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup >
        <Footer.Link href="https://www.instagram.com/mevlutcandag/" target="_blank" className="hover:list-none">
          <BsInstagram className="text-2xl"/>
        </Footer.Link>
        <Footer.Link href="https://github.com/mevocan" target="_blank">
         <BsGithub  className="text-2xl"/>
        </Footer.Link>
        
      </Footer.LinkGroup>
    </Footer>
  );
}
