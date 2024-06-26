"use client"
import React from 'react'
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Logo = styled.svg`
 
 
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const Spinner = styled.svg`
  animation: spin 1s linear infinite;
  margin-left: -4px;
  margin-right: 12px;
  height: 20px;
  width: 20px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

const Preloader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #21c65c;
  border-radius: 90%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1px;
`;

function page() {
  return (


    <>

      <Container>

        <div className="flex items-center justify-center mt-60 h-full">
          <Logo
            id="logo"
            className="w-96 h-96 md:w-56 md:h-56 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 408 97.71"
          >
            <path
              d="M65.6,42.57c.13-5.09-2.21-12.01-2.21-12.02,0,0,6.8,24.74-19.23,32.77-2.59.8-5.25-1.01-5.25-3.57h0c0-1.75,1.28-3.26,3.09-3.66,5.65-1.25,17.34-5.29,20.57-17.56-6.53-7.54-16.18-12.3-26.93-12.3s-20.4,4.77-26.93,12.3c3.22,12.27,14.92,16.31,20.57,17.56,1.81.4,3.09,1.91,3.09,3.66h0c0,2.56-2.66,4.37-5.25,3.57C1.29,55.36,7.77,30.97,7.88,30.56h0s-2.34,6.92-2.21,12.01c-3.59,5.56-5.67,12.18-5.67,19.29,0,19.68,15.95,35.63,35.63,35.63s35.63-15.95,35.63-35.63c0-7.11-2.08-13.73-5.67-19.29ZM54.19,68.25l-8.56,12.08c-.59.83-.47,1.94.28,2.65l2.06,1.94c.87.82.87,2.15,0,2.97l-4.96,4.67c-.42.39-.99.61-1.58.61h-11.58c-.59,0-1.16-.22-1.58-.61l-4.96-4.67c-.87-.82-.87-2.15,0-2.97l2.06-1.94c.75-.71.87-1.82.28-2.65l-8.56-12.08c-.59-.83-.47-1.94.28-2.65l3.6-3.39c1.32.76,2.8,1.45,4.44,2.07l-2,1.88c-.75.71-.87,1.82-.28,2.65l8.56,12.08c.59.83.47,1.94-.28,2.65l-1.46,1.38c-.87.82-.87,2.15,0,2.97l.27.26c.42.39.99.61,1.58.61h7.69c.59,0,1.16-.22,1.58-.61l.27-.26c.87-.82.87-2.15,0-2.97l-1.46-1.38c-.75-.71-.87-1.82-.28-2.65l8.56-12.08c.59-.83.47-1.94-.28-2.65l-2-1.88c1.64-.61,3.11-1.31,4.44-2.07l3.6,3.39c.75.71.87,1.82.28,2.65Z"
              style={{ fill: "#21c65c", strokeWidth: 0 }}
            />
            <g>
              <path
                d="M116.03,67.87l2.77-24.1h12.98l-7.13,38.62h-16.33l-3.62-21.54-4.2,21.54h-15.64l-7.13-38.62h12.98l2.71,23.78,4.26-23.78h14.2l4.15,24.1Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M156.77,82.39c.21-5.21.32-10.02.32-14.42,0-1.56-.38-2.8-1.14-3.72-.76-.92-1.73-1.38-2.9-1.38-1.24,0-2.3.6-3.17,1.81-.87,1.21-1.3,2.85-1.3,4.95l-.05-.11c0,5.78.07,10.07.21,12.87h-12.71c.28-5.11.43-12.02.43-20.75s-.14-15.64-.43-20.75h12.66l.05,16.38-.05,2.82c.85-2.48,2.12-4.32,3.8-5.5,1.68-1.19,3.59-1.78,5.72-1.78s3.97.47,5.53,1.41c1.56.94,2.74,2.21,3.54,3.8s1.2,3.39,1.2,5.37v7.66c0,4.72.09,8.49.27,11.33h-11.97Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M207.09,73.56c0,1.21.14,2.06.42,2.55.29.5.85.85,1.7,1.06l-.21,5c-1.13.18-2.12.3-2.95.37-.83.07-1.94.11-3.32.11-3.05,0-5.07-.68-6.06-2.05-.99-1.36-1.49-3.11-1.49-5.24v-1.33c-1.03,2.91-2.53,5.07-4.49,6.49-1.97,1.42-4.48,2.13-7.53,2.13-3.55,0-6.22-.71-8.01-2.13-1.79-1.42-2.69-3.53-2.69-6.33,0-2.3.76-4.11,2.29-5.43,1.52-1.31,3.88-2.22,7.07-2.71-2.7-1.92-5.39-3.58-8.08-5,2.13-2.69,4.56-4.74,7.29-6.14,2.73-1.4,6.05-2.1,9.95-2.1,5.46,0,9.51,1.18,12.16,3.54,2.64,2.36,3.96,5.98,3.96,10.88v6.33ZM187.31,63.08c-1.38.6-2.62,1.51-3.72,2.71,2.13-.25,4.79-.37,7.98-.37,1.31,0,2.23-.16,2.77-.48.53-.32.8-.73.8-1.22,0-.42-.27-.79-.8-1.09-.53-.3-1.28-.45-2.23-.45-1.81,0-3.4.3-4.79.9ZM191.88,72.84c1.6-.76,2.69-1.76,3.3-3.01v-1.38c-.85.43-1.79.75-2.82.98s-2.27.45-3.72.67l-1.91.32c-1.99.39-2.98,1.06-2.98,2.02,0,1.03.92,1.54,2.77,1.54,1.98,0,3.78-.38,5.37-1.14Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M224.86,70.9c0,5.28.03,9.11.11,11.49h-12.55l.05-6.01c.07-6.6.11-11.68.11-15.27s-.04-8.23-.11-14.47l-.05-5.75h12.55c-.07,5.04-.11,9.15-.11,12.34,0,3.55.02,6.17.05,7.87-.04,2.13-.05,5.39-.05,9.79Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M257.36,69.09h-17.34c.28,1.56.98,2.83,2.1,3.8,1.12.98,2.7,1.46,4.76,1.46,1.49,0,2.89-.29,4.2-.88,1.31-.58,2.36-1.41,3.14-2.47,2.38,1.17,5.53,2.43,9.47,3.78-1.1,2.48-3.09,4.46-5.98,5.93-2.89,1.47-6.66,2.21-11.3,2.21-6.03,0-10.49-1.39-13.38-4.18-2.89-2.78-4.33-6.44-4.33-10.98s1.44-8.03,4.31-10.8c2.87-2.77,7.34-4.15,13.4-4.15,3.62,0,6.76.6,9.42,1.81,2.66,1.21,4.7,2.88,6.12,5.03,1.42,2.15,2.13,4.6,2.13,7.37,0,.92-.04,1.61-.11,2.08h-6.6ZM242.78,61.85c-1.13.67-1.93,1.6-2.39,2.77h12.55c-.43-1.13-1.12-2.05-2.07-2.74-.96-.69-2.2-1.04-3.72-1.04-1.77,0-3.23.34-4.36,1.01Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M291.94,43.82c7.06,0,11.97,1.25,14.73,3.75,2.77,2.5,4.15,6.02,4.15,10.56,0,3.12-.55,5.77-1.65,7.95-1.1,2.18-3.03,3.88-5.8,5.11-2.77,1.22-6.58,1.83-11.44,1.83h-11.06v9.36h-13.08c.28-6.88.43-13.32.43-19.31s-.14-12.43-.43-19.31h13.08v.05h11.06ZM288.21,62.76c2.94,0,5.15-.12,6.62-.35s2.5-.65,3.09-1.25c.58-.6.88-1.49.88-2.66s-.27-2.05-.82-2.63-1.56-.98-3.03-1.2c-1.47-.21-3.71-.32-6.73-.32h-7.34v8.4h7.34Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M317.23,48.56c-1.08-1.1-1.62-2.54-1.62-4.31s.54-3.17,1.62-4.31c1.08-1.13,2.74-1.7,4.97-1.7s3.76.58,4.89,1.73c1.13,1.15,1.7,2.58,1.7,4.28s-.55,3.21-1.65,4.31c-1.1,1.1-2.75,1.65-4.95,1.65s-3.89-.55-4.97-1.65ZM316.03,82.39c.25-5.71.37-10.43.37-14.15,0-4.43-.14-9.4-.43-14.89h12.77c-.28,5.28-.42,10.25-.42,14.89,0,3.9.12,8.62.37,14.15h-12.66Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M354.33,82.39c.21-5.21.32-10.02.32-14.42,0-1.56-.38-2.8-1.14-3.72-.76-.92-1.73-1.38-2.9-1.38s-2.16.52-2.98,1.57c-.82,1.05-1.29,2.47-1.44,4.28-.07,2.7-.11,4.61-.11,5.75,0,2.41.07,5.05.21,7.93h-12.71c.28-5.11.43-9.93.43-14.47s-.14-9.4-.43-14.57c2.34.11,4.13.16,5.37.16,1.31,0,3.1-.05,5.37-.16l1.54,7.82c.82-2.84,2.09-4.94,3.83-6.3,1.74-1.36,3.76-2.05,6.06-2.05,2.13,0,3.97.47,5.53,1.41s2.74,2.21,3.54,3.8,1.2,3.39,1.2,5.37v7.66c0,4.72.09,8.49.27,11.33h-11.97Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
              <path
                d="M395.66,53.34h10.21c-.18,5.82-.27,14.08-.27,24.79,0,4.22-.84,7.68-2.53,10.37-1.68,2.69-3.91,4.65-6.68,5.88-2.77,1.22-5.85,1.83-9.26,1.83s-6.38-.49-9.04-1.46c-2.66-.98-4.68-2.28-6.06-3.91l2.39-8.14c1.92,1.1,3.72,1.89,5.43,2.37,1.7.48,3.47.72,5.32.72,6.03,0,9.04-2.55,9.04-7.66,0-.74.02-1.28.05-1.6,0-.21,0-.5.03-.85s0-.82-.03-1.38c-1.81,5.04-5.64,7.55-11.49,7.55-2.38,0-4.5-.64-6.36-1.92-1.86-1.28-3.31-3-4.34-5.19-1.03-2.18-1.54-4.58-1.54-7.21s.51-5.17,1.54-7.42,2.46-4.03,4.31-5.35c1.84-1.31,3.92-1.97,6.22-1.97,5.99,0,9.89,2.11,11.7,6.33l1.33-5.8ZM390.87,72.78c.89-.37,1.65-.97,2.29-1.81.64-.83.96-1.87.96-3.11,0-2.2-.5-3.77-1.49-4.71-.99-.94-2.47-1.41-4.42-1.41-1.7,0-3.05.57-4.04,1.7-.99,1.14-1.49,2.61-1.49,4.42,0,1.63.54,2.95,1.62,3.96,1.08,1.01,2.42,1.52,4.02,1.52.81,0,1.67-.19,2.55-.56Z"
                style={{ fill: "#21c65c", strokeWidth: 0 }}
              />
            </g>
          </Logo>

        </div>

        <Preloader className='md:w-48 md:h-48' />





      </Container>
    </>







  )
}

export default page