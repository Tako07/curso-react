import React from 'react'
import { Svg } from './styles'

export const Logo = (props) => (
  <Svg
    width={390.026}
    height={122.021}
    viewBox='54.987 13.989 390.026 122.021'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='prefix__editing-shiny-gradient'
        x1={0.043}
        x2={0.957}
        y1={0.297}
        y2={0.703}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ffb200' />
        <stop offset={0.5} stopColor='#e10057' />
        <stop offset={1} stopColor='#5A1A80' />
      </linearGradient>
      <linearGradient
        id='prefix__editing-shiny-gradient2'
        x1={0}
        x2={0}
        y1={0}
        y2={1}
      >
        <stop offset={0.2} stopColor='#fff' stopOpacity={0.8} />
        <stop offset={0.8} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <filter
        id='prefix__editing-shiny2'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feMorphology radius={2} />
      </filter>
      <filter
        id='prefix__editing-shiny'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feFlood floodColor='#fff' result='flood' />
        <feConvolveMatrix
          in='SourceGraphic'
          result='conv'
          order='8,8'
          divisor={1}
          kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
        />
        <feOffset dy={4} in='conv' result='offset' />
        <feComposite operator='in' in='flood' in2='offset' result='comp' />
        <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
        <feColorMatrix
          in='shadow'
          values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
          result='dark-shadow'
        />
        <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
        <feOffset dy={2} in='conv' result='offset-2' />
        <feComposite
          operator='out'
          in='offset'
          in2='offset-2'
          result='edge-diff'
        />
        <feGaussianBlur in='edge-diff' stdDeviation={1} result='edge-blur' />
        <feColorMatrix
          in='edge-blur'
          result='edge-shadow'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feComposite
          operator='in'
          in='edge-shadow'
          in2='offset'
          result='edge-shadow-in'
        />
        <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
        <feMerge result='out'>
          <feMergeNode in='offset-shadow' />
          <feMergeNode in='comp' />
          <feMergeNode in='edge-shadow-final' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#prefix__editing-shiny)'>
      <path
        d='M29.18 1.28q-8.19 0-8.96-11.65h-11Q7.94-7.42 7.04-4.86L5.38 0h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zM14.72-23.17l-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05zM69.76-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47-3.64 0-4.92-.64l-1.99 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69zM55.3-22.34L51.9-3.58q1.35 1.15 3.01 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.44-3.08.44-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zm53.76 17.96q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47T90.43.64l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.25-4.55 6.28 0 9.6 4.04 2.95 3.64 2.95 9.21t-1.47 9.54q-1.48 3.97-4.16 6.69zM94.59-22.34L91.2-3.58q1.34 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.67-1.92 1.92-3.46 3.45-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.91 0-5.19 7.61zM138.3 0h-7.04l7.68-42.24h13.76l9.99 29.06L168-42.24l7.1.06L167.3 0h-14.66l-9.22-27.97L138.3 0zm41.19-1.92q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67zm39.27 24.38q-1.99 4.8-8.32 4.8-3.27 0-5.32-2.24-1.72-1.98-1.72-3.97 0-5.18 2.36-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.48-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.89-1.28-1.89-3.78zm34.05 19.08q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z'
        fill='url(#prefix__editing-shiny-gradient)'
        transform='translate(116.364 104.752)'
      />
    </g>
    <g filter='url(#prefix__editing-shiny2)'>
      <path
        d='M29.18 1.28q-8.19 0-8.96-11.65h-11Q7.94-7.42 7.04-4.86L5.38 0h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zM14.72-23.17l-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05zM69.76-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47-3.64 0-4.92-.64l-1.99 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69zM55.3-22.34L51.9-3.58q1.35 1.15 3.01 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.44-3.08.44-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zm53.76 17.96q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47T90.43.64l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.25-4.55 6.28 0 9.6 4.04 2.95 3.64 2.95 9.21t-1.47 9.54q-1.48 3.97-4.16 6.69zM94.59-22.34L91.2-3.58q1.34 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.67-1.92 1.92-3.46 3.45-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.91 0-5.19 7.61zM138.3 0h-7.04l7.68-42.24h13.76l9.99 29.06L168-42.24l7.1.06L167.3 0h-14.66l-9.22-27.97L138.3 0zm41.19-1.92q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67zm39.27 24.38q-1.99 4.8-8.32 4.8-3.27 0-5.32-2.24-1.72-1.98-1.72-3.97 0-5.18 2.36-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.48-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.89-1.28-1.89-3.78zm34.05 19.08q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z'
        fill='url(#prefix__editing-shiny-gradient2)'
        transform='translate(116.575 104.76)'
      />
    </g>
    <style />
  </Svg>

)
