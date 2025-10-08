"use client";
import React, { useState } from 'react';

import './index.css'

export const OutputArea = ({prompts, setPrompts, selectedModels, setSelectedModels }) => {

  return (
    <div className='output-wrapper'>
      <div className='output-header'>
        <div className='title'>Generated results</div>
        <div className='result-info'> {prompts.length} prompts, {selectedModels.length * prompts.length} results</div>
      </div>
      {prompts.map((value, index) => (
        <div className='output-body'>
          <div className='body-header'>
            <div className='title'>Prompt</div>
            <div className='btns'>
              <button>Edit</button>
              <button>Regenerate</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}
