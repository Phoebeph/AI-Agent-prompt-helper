import React from 'react';

import './index.css'

export const TopHeader = () => {

  return (
    <div className='top-header-wrapper'>
      <div className='header'>
        <div className='header-title'>Prompt Helper 多模型对比工具</div>
        <div className='header-description'>输入 Prompt，选择模型，一键对比不同 AI 模型的优化效果</div>
      </div>
    </div>
  )
};
