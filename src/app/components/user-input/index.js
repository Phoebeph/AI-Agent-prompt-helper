"use client";
import React, { useState } from 'react';

import './index.css'

const options = ["DeepSeek", "Qwen", "月之暗面", "GPT-4", "Claude", "Gemini", "Mistral"];

export const InputArea = ({prompts, setPrompts, selectedModels, setSelectedModels }) => {
  const handleChange = (index, value) => {
    const newPrompts = [...prompts];
    newPrompts[index] = value;
    setPrompts(newPrompts);
  };

  const handleAddPrompt = () => {
    setPrompts(prev => [...prev, ""]);
  };

  const handleDeletePrompt = (index) => {
    if (prompts.length === 1) return; // 保证至少一个输入框
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  const handleChangeModels = (value) => {
    setSelectedModels(prev => {
      if (prev.includes(value)) {
        // 取消选中
        return prev.filter(item => item !== value);
      } else {
        // 选中
        return [...prev, value];
      }
    });
  };

  return (
    <div className='input-wrapper'>
      <div className='prompt-input-container'>
        <div className='input-header'>
          <div className='title'>Prompt Input</div>
          <button className='add-prompt-btn' onClick={handleAddPrompt}> + Add Prompt</button>
        </div>
        {prompts.map((value, index) => (
          <div className='prompt-input' key={index}>
            <div className="prompt-index">{index + 1}</div>
            <textarea
              className='input-area'
              name={`prompt-${index}`}
              value={prompts[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Please enter prompt #${index + 1}`}
            />
            <div
              className="delete"
              onClick={() => handleDeletePrompt(index)}
            >
              ✕
            </div>
          </div>
        ))}
      </div>
      <div className='module-select-container'>
        <div className='title'>Select Models</div>
        <div className='select-wrapper'>
          {options.map(option => (
            <label key={option} className='options'>
              <input
                type="checkbox"
                checked={selectedModels.includes(option)}
                onChange={() => handleChangeModels(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button className='generate-btn'>Generate</button>
      <div className='input-info-container'>
        <div className='valid-prompt'>
          <div className='text'>Valid prompts' number :</div>
          <div className='number'>{prompts.length}</div>
        </div>

        <div className='models-num'>
          <div className='text'>Select models' number :</div>
          <div className='number'>{selectedModels.length}</div>
        </div>
        <div className='results-info'>
          <div className='text'>Expected generated results :</div>
          <div className='number'>{selectedModels.length * prompts.length}</div>
        </div>
      </div>
    </div>
  )
};
