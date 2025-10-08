"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react';
import { TopHeader } from "./components/top-header";
import { InputArea } from "./components/user-input";
import { OutputArea } from "./components/user-output";

import './index.css'

export default function Home() {
  const [prompts, setPrompts] = useState([""]);
  const [selectedModels, setSelectedModels] = useState([]);

  return (
    <div className="home-page">
      <TopHeader />
      <div className="body-wrapper">
        <InputArea prompts={prompts} setPrompts={setPrompts} selectedModels={selectedModels} setSelectedModels={setSelectedModels} />
        <OutputArea prompts={prompts} setPrompts={setPrompts} selectedModels={selectedModels} setSelectedModels={setSelectedModels} />
      </div>
    </div>
  )
}
