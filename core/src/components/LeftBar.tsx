import './LeftBar.scss'

import { classnames, messenger } from '@power-playground/core'

import PP from '../../../resources/PP_P.svg'

const prefix = 'ppd-left-bar'

export interface LeftBarProps {
  style?: React.CSSProperties
  className?: string
}

export function LeftBar(props: LeftBarProps) {
  return <div className={classnames(prefix, props.className)}
              style={props.style}>
    <div className={`${prefix}__top`}>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-folder'></span>
      </button>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-symbol-snippet'></span>
      </button>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-source-control'></span>
      </button>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-book'></span>
      </button>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-extensions'></span>
      </button>
    </div>
    <div className={`${prefix}__bottom`}>
      <button onClick={() => messenger.then(m => m.display('warning', 'Not implemented yet'))}>
        <span className='cldr codicon codicon-gear'></span>
      </button>
      <img src={PP} alt='Power Playground menu icon.' />
    </div>
  </div>
}
