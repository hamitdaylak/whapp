"use client";
import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Pagination, Autoplay, EffectCube } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import "../app/custom.css";
import TradingViewWidget from './tradingview';
import Annoucment from './Annoucment';
import Image from 'next/image';
import styled, { keyframes } from "styled-components";


export default function Home() {
  const jsonString = `
  {
    "id": "189da436-d4bd-48ca-9f95-9f613d621717",
    "method": "trades.aggregate",
    "params": {
      "symbol": "BNBBTC",
      "fromId": 50000000,
      "limit": 1
    }
  }`;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedDarkMode = localStorage.getItem('color-theme') === 'dark' ||
      (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }


    let switchers = document.querySelectorAll(".switcher");
    switchers.forEach((switcher) => {
      switcher.addEventListener("click", () => {
        const newDarkMode = !document.documentElement.classList.contains("dark");
        setDarkMode(newDarkMode);
        if (newDarkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      });
    });


    const swiper = new Swiper('.proofSlides', {
      effect: "cube",
      cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        duration: 500,
      },
      grabCursor: true,
      modules: [Pagination, Autoplay, EffectCube],
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);
  return (
    <>

      <header className='sticky-navbar' >

        <nav className="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 backdrop-blur-2xl">
          <Annoucment />

          <div className="px-6 m-auto max-w-6xl 2xl:px-0">

            <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">

              <div className="w-full items-center flex justify-between lg:w-auto">

                <a href="/" aria-label=" logo">
                  <Image src="/logo.png" width={150} height={60} alt="Whale Tracker App Logo" />
                </a>


              </div>


              <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                <div className="mt-6 text-gray-600 dark:text-white md:-ml-4 lg:pr-4 lg:mt-0">
                  <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">

                  </ul>
                </div>
                <div className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                  <button className="w-full h-9 lg:w-fit group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-white dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
                    <span>Login</span>
                  </button>
                  <button className="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-white disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <br />
      <br />
      <br />
      <br />
      <main className="bg-white dark:bg-black dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50">
        <section className="relative">
          <div className="relative pt-24 lg:pt-28">
            <div className="mx-auto px-6 max-w-7xl md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <a
                  href="/"
                  className="border w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] p-1 group gap-2"
                >
                  <span className="block text-sm px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)] text-white bg-primary-600">
                    New
                  </span>

                  <span className="text-sm font-medium text-gray-700 dark:text-white flex gap-6">
                    Track the Whales, Master the Market
                    <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                      <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100" />
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </span>
                </a>
                <AnimatedGradientText className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">
                  Empowering Traders with AI-Driven
                  <br className="hidden sm:block" /> Insights and Whale Alerts
                </AnimatedGradientText>
                <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-white hidden sm:block">
                  WhalePing.com is your ultimate platform for tracking large-scale
                  transactions in the cryptocurrency market. Our advanced tools and
                  indicators, powered by cutting-edge AI, provide real-time insights
                  and alerts to help you stay ahead of the market. Whether you are a
                  seasoned trader or just starting, WhalePing offers the resources
                  and support you need to make informed trading decisions. Join us
                  and gain the edge with our whale alerts and AI-driven trading
                  tools.
                </p>
                <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-white sm:hidden">
                  Highly customizable components for building modern websites and
                  applications, with your personal spark.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4">

                  <a href='https://www.t.me/whaleping'>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      Join Telegram Group
                    </button>
                  </a>


                  <button className="hidden *:select-none *:disabled:opacity-20 dark:*:disabled:!text-white dark:hover:bg-gray-500/15 group h-9 items-center justify-center gap-1.5 rounded-[--btn-border-radius] bg-gray-100 px-3 text-base text-gray-800 hover:bg-gray-200/75 active:bg-gray-100 disabled:border disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950 dark:bg-gray-500/10 dark:text-white dark:active:bg-gray-500/10 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 [&>*:not(.sr-only)]:relative">
                    <span className="text-sm">Learn more</span>
                    <svg
                      className="-mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="m19 12l12 12l-12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>
                <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/10 mx-auto blur-3xl"></div>
                <div className="swiper proofSlides pb-6">
                  <div className="swiper-wrapper">
                    <div className="px-6 pt-2 pb-12 swiper-slide">
                      <div className="bg-white shadow-xl shadow-gray-950/5 p-[--card-padding] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]">
                        <div>
                          <svg
                            className="h-12 w-fit mx-auto dark justify-center text-center"
                            xmlns="http://www.w3.org/2000/svg"

                            id="svg20"
                            version="1.1"
                            viewBox="-76.3875 -25.59 662.025 153.54"
                          >
                            <defs id="defs14">
                              <style
                                id="style12"
                                dangerouslySetInnerHTML={{ __html: "" }}
                              />
                            </defs>
                            <g transform="translate(-39.87 -50.56)" id="g18">
                              <path
                                id="path16"
                                d="M63 101.74L51.43 113.3l-11.56-11.56 11.56-11.56zm28.05-28.07l19.81 19.82 11.56-11.56-31.37-31.37-31.37 31.37 11.56 11.56zm39.63 16.51l-11.56 11.56 11.56 11.56 11.55-11.56zm-39.63 39.63L71.24 110l-11.56 11.55 31.37 31.37 31.37-31.37L110.86 110zm0-16.51l11.56-11.56-11.56-11.56-11.56 11.56zm122 1.11v-.16c0-7.54-4-11.31-10.51-13.79 4-2.25 7.38-5.78 7.38-12.11v-.16c0-8.82-7.06-14.52-18.53-14.52h-26.04v56.14h26.7c12.67 0 21.02-5.13 21.02-15.4zm-15.4-24c0 4.17-3.45 5.94-8.9 5.94h-11.37V84.5h12.19c5.21 0 8.1 2.08 8.1 5.77zm3.13 22.46c0 4.17-3.29 6.09-8.75 6.09h-14.65v-12.33h14.27c6.34 0 9.15 2.33 9.15 6.1zM239 129.81V73.67h-12.39v56.14zm66.39 0V73.67h-12.23v34.57l-26.3-34.57h-11.39v56.14h12.19V94.12l27.18 35.69zm68.41 0l-24.1-56.54h-11.39l-24.05 56.54h12.59l5.15-12.59h23.74l5.13 12.59zm-22.45-23.5h-14.96l7.46-18.2zm81.32 23.5V73.67h-12.23v34.57l-26.31-34.57h-11.38v56.14h12.18V94.12l27.19 35.69zm63.75-9.06l-7.85-7.94c-4.41 4-8.34 6.57-14.76 6.57-9.62 0-16.28-8-16.28-17.64v-.16c0-9.62 6.82-17.48 16.28-17.48 5.61 0 10 2.4 14.36 6.33l7.83-9.06c-5.21-5.13-11.54-8.66-22.13-8.66-17.24 0-29.27 13.07-29.27 29v.16c0 16.12 12.27 28.87 28.79 28.87 10.81.03 17.22-3.82 22.99-9.99zm52.7 9.06v-11H518.6V107h26.47V96H518.6V84.66h30.08v-11h-42.35v56.14z"
                                fill="#f0b90b"
                              />
                            </g>
                          </svg>
                          <p className="mt-6 text-lg text-gray-950 dark:text-white text-center">
                            Binance Futures And Spot Whale Signals
                          </p>
                        </div>
                        <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                          <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]" />
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pt-2 pb-12 swiper-slide">
                      <div className="bg-white shadow-xl shadow-gray-950/5 p-[--card-padding] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:295] [--lightness:63%] [--opacity:1] [--radius:24] [--saturation:100%] [--speed:2]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-fit mx-auto dark"

                            viewBox="-18 -6.548 156 39.288"
                          >
                            <path
                              fill="#0667d0"
                              d="M9.34 22.89c.93 0 1.8-.17 2.62-.5 0 .03 1.67 2.62 1.7 2.63a9.88 9.88 0 01-4.81 1.17C3.72 26.2 0 22.81 0 17.42c0-5.43 3.9-8.8 8.85-8.8 1.75 0 3.14.38 4.53 1.12l-1.6 2.7c-.84-.33-1.7-.48-2.6-.48-3.03 0-5.38 1.93-5.38 5.46 0 3.34 2.27 5.47 5.54 5.47zM22.27 8.62c5.04 0 8.69 3.57 8.69 8.8 0 5.2-3.65 8.77-8.7 8.77-5 0-8.65-3.57-8.65-8.77 0-5.23 3.65-8.8 8.66-8.8zm0 3.22c-2.81 0-4.86 2.17-4.86 5.58 0 3.38 2.05 5.55 4.86 5.55 2.88 0 4.9-2.17 4.9-5.55 0-3.41-2.02-5.58-4.9-5.58zm11.08 13.97V9h3.76v16.8h-3.76zm-.5-21.98a2.36 2.36 0 014.71 0 2.4 2.4 0 01-2.35 2.4 2.4 2.4 0 01-2.35-2.4zm7.54 6.23a22.54 22.54 0 017.7-1.44c4.3 0 7.02 1.63 7.02 6.37v10.82H51.4V15.34c0-2.43-1.51-3.3-3.6-3.3-1.33 0-2.66.18-3.65.49V25.8H40.4V10.06zM58.26 0h3.76v9.45c.8-.42 2.35-.83 3.83-.83 4.86 0 8.5 3.1 8.5 8.5 0 5.43-3.6 9.07-9.82 9.07-2.43 0-4.56-.5-6.27-1.1V0zm3.76 22.62c.72.23 1.67.35 2.62.35 3.45 0 5.92-1.9 5.92-5.77 0-3.27-2.32-5.2-5.16-5.2-1.48 0-2.62.38-3.38.8zm23.2-8.08c0-1.82-1.38-2.66-3.24-2.66-1.93 0-3.45.57-4.85 1.37V9.98a11.21 11.21 0 015.46-1.36c3.68 0 6.3 1.52 6.3 5.73v11.12c-1.6.42-3.87.68-5.77.68-4.36 0-7.55-1.32-7.55-5.12 0-3.42 2.92-5.09 7.78-5.09h1.86v-1.4zm0 3.9h-1.6c-2.62 0-4.33.77-4.33 2.48 0 1.74 1.6 2.42 3.87 2.42.57 0 1.37-.07 2.05-.18v-4.71zm6.4 2.82a8.82 8.82 0 005.13 1.9c1.67 0 2.77-.57 2.77-1.9 0-1.37-.99-1.86-3.15-2.43-3.5-.8-4.97-2.2-4.97-5.13 0-3.41 2.58-5.08 6-5.08 1.9 0 3.41.41 4.82 1.29v3.45a7.79 7.79 0 00-4.71-1.7c-1.63 0-2.5.8-2.5 1.9 0 1.1.71 1.66 2.65 2.2 3.84.83 5.5 2.27 5.5 5.3 0 3.54-2.69 5.13-6.33 5.13a9.87 9.87 0 01-5.2-1.36v-3.57zm16.69-3v.07c.23 3 2.8 4.64 5.43 4.64 2.31 0 3.98-.54 5.65-1.64v3.3c-1.52 1.07-3.76 1.56-5.92 1.56-5.24 0-8.8-3.34-8.8-8.65 0-5.35 3.49-8.92 8.12-8.92 4.9 0 7.21 3.15 7.21 7.74v1.9h-11.7zm8.16-2.43c-.08-2.62-1.37-4.06-3.8-4.06-2.16 0-3.75 1.52-4.25 4.06z"
                              fillRule="evenodd"
                            />
                          </svg>
                          <p className="mt-6 text-lg text-gray-950 dark:text-white text-center">
                            Coinbase Futures And Spot Whale Trade Signals
                          </p>
                        </div>
                        <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                          <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]" />
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pt-2 pb-12 swiper-slide">
                      <div className="bg-white shadow-xl shadow-accent-950/5 p-[--card-padding] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:240] [--lightness:67%] [--opacity:1] [--radius:24] [--saturation:84%] [--speed:2]">
                        <div>
                          <div className="h-12 w-fit mx-auto justify-center">
                            <svg
                              width="150px"
                              viewBox="0 350 1080 1080"
                              fill="white"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={1080} fill="white" />
                              <path
                                d="M385.67 428H171.631C170.311 428 169.045 428.524 168.112 429.458C167.178 430.391 166.654 431.657 166.654 432.978V647.017C166.654 648.337 167.178 649.603 168.112 650.536C169.045 651.47 170.311 651.994 171.631 651.994H385.67C386.991 651.994 388.257 651.47 389.19 650.536C390.124 649.603 390.648 648.337 390.648 647.017V432.978C390.648 431.657 390.124 430.391 389.19 429.458C388.257 428.524 386.991 428 385.67 428ZM315.983 572.352C315.983 573.672 315.459 574.938 314.525 575.872C313.592 576.805 312.326 577.33 311.006 577.33H246.296C244.976 577.33 243.71 576.805 242.776 575.872C241.843 574.938 241.319 573.672 241.319 572.352V507.642C241.319 506.322 241.843 505.056 242.776 504.123C243.71 503.189 244.976 502.665 246.296 502.665H311.006C312.326 502.665 313.592 503.189 314.525 504.123C315.459 505.056 315.983 506.322 315.983 507.642V572.352Z"
                                fill="white"
                              />
                              <path
                                d="M833.783 502.673H769.074C766.325 502.673 764.096 504.901 764.096 507.65V572.36C764.096 575.109 766.325 577.338 769.074 577.338H833.783C836.532 577.338 838.761 575.109 838.761 572.36V507.65C838.761 504.901 836.532 502.673 833.783 502.673Z"
                                fill="white"
                              />
                              <path
                                d="M759.088 428.006H694.379C691.63 428.006 689.401 430.234 689.401 432.984V497.693C689.401 500.442 691.63 502.671 694.379 502.671H759.088C761.838 502.671 764.066 500.442 764.066 497.693V432.984C764.066 430.234 761.838 428.006 759.088 428.006Z"
                                fill="white"
                              />
                              <path
                                d="M908.418 428.006H843.708C840.959 428.006 838.73 430.234 838.73 432.984V497.693C838.73 500.442 840.959 502.671 843.708 502.671H908.418C911.167 502.671 913.395 500.442 913.395 497.693V432.984C913.395 430.234 911.167 428.006 908.418 428.006Z"
                                fill="white"
                              />
                              <path
                                d="M759.088 577.334H694.379C691.63 577.334 689.401 579.562 689.401 582.311V647.021C689.401 649.77 691.63 651.999 694.379 651.999H759.088C761.838 651.999 764.066 649.77 764.066 647.021V582.311C764.066 579.562 761.838 577.334 759.088 577.334Z"
                                fill="white"
                              />
                              <path
                                d="M908.418 577.334H843.708C840.959 577.334 838.73 579.562 838.73 582.311V647.021C838.73 649.77 840.959 651.999 843.708 651.999H908.418C911.167 651.999 913.395 649.77 913.395 647.021V582.311C913.395 579.562 911.167 577.334 908.418 577.334Z"
                                fill="white"
                              />
                              <path
                                d="M646.997 428.006H582.288C579.539 428.006 577.31 430.234 577.31 432.984V497.693C577.31 500.442 579.539 502.671 582.288 502.671H646.997C649.746 502.671 651.975 500.442 651.975 497.693V432.984C651.975 430.234 649.746 428.006 646.997 428.006Z"
                                fill="white"
                              />
                              <path
                                d="M646.997 577.334H582.288C579.539 577.334 577.31 579.562 577.31 582.311V647.021C577.31 649.77 579.539 651.999 582.288 651.999H646.997C649.746 651.999 651.975 649.77 651.975 647.021V582.311C651.975 579.562 649.746 577.334 646.997 577.334Z"
                                fill="white"
                              />
                              <path
                                d="M577.31 507.586C577.31 506.266 576.785 505 575.852 504.067C574.918 503.133 573.652 502.609 572.332 502.609H502.645V432.978C502.645 431.657 502.12 430.391 501.187 429.458C500.253 428.524 498.987 428 497.667 428H432.958C431.637 428 430.371 428.524 429.438 429.458C428.504 430.391 427.98 431.657 427.98 432.978V646.905C427.98 648.225 428.504 649.491 429.438 650.424C430.371 651.358 431.637 651.882 432.958 651.882H497.667C498.987 651.882 500.253 651.358 501.187 650.424C502.12 649.491 502.645 648.225 502.645 646.905V577.274H572.332C573.652 577.274 574.918 576.749 575.852 575.816C576.785 574.882 577.31 573.616 577.31 572.296V507.586Z"
                                fill="white"
                              />
                            </svg>

                          </div>
                          <p className="mt-6 text-lg text-gray-950 dark:text-white text-center">
                            OKX Futures And Spot Whale Trade Signals
                          </p>
                        </div>
                        <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                          <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]" />
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pt-2 pb-12 swiper-slide">
                      <div className="bg-white shadow-xl shadow-accent-950/5 p-[--card-padding] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:240] [--lightness:67%] [--opacity:1] [--radius:24] [--saturation:84%] [--speed:2]">
                        <div>
                          <br />

                          <div className="h-12 w-fit mx-auto">
                            <p
                              style={{
                                justifyContent: "center",
                                textAlign: "center"
                              }}
                              className="mt-6 text-lg text-gray-950 dark:text-white text-center"
                            >


                              And More Follow Us Telegram Channel
                            </p>
                          </div>
                        </div>
                        <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                          <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination -mb-3 *:!rounded-lg *:!w-14 *:!h-0.5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-36">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
              <div className="relative">
                <div className="relative z-10 grid gap-3 grid-cols-6">
                  <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                    <div className="size-fit m-auto relative">
                      <div className="relative h-24 w-56 flex items-center">
                        <svg
                          className="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                          viewBox="0 0 254 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                            fill="currentColor"
                          />
                        </svg>
                        <AnimatedGradientText className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-accent-600 dark:from-primary-400 dark:to-accent-400">
                          93%
                        </AnimatedGradientText>
                      </div>
                      <AnimatedGradientText className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                        Success Rate
                      </AnimatedGradientText>

                    </div>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                    <div>
                      <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                        <svg
                          className="w-24 m-auto h-fit"
                          viewBox="0 0 212 143"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="text-gray-400 dark:text-gray-600"
                            d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                            fill="currentColor"
                          />
                          <g clipPath="url(#clip0_0_1)">
                            <path
                              d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                              fill="url(#paint0_linear_0_1)"
                            />
                          </g>
                          <path
                            className="text-primary-600 dark:text-primary-500"
                            d="M3 72H209"
                            stroke="currentColor"
                            strokeWidth={6}
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="106.385"
                              y1="1.34375"
                              x2={106}
                              y2={72}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="white"
                                stopOpacity={0}
                                style={{ stopColor: "none", stopOpacity: 0 }}
                              />
                              <stop
                                className="text-primary-600 dark:text-primary-500"
                                offset={1}
                                stopColor="currentColor"
                              />
                            </linearGradient>
                            <clipPath id="clip0_0_1">
                              <rect
                                width={129}
                                height={72}
                                fill="white"
                                style={{ fill: "white", fillOpacity: 1 }}
                                transform="translate(41)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="mt-6 text-center relative z-10 space-y-2">
                        <h2 className="text-sm font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white ">
                          Track Unique Moves in the Crypto Ocean{" "}
                        </h2>
                        <p className="dark:text-white text-xs text-gray-700">
                          WhalePing empowers traders with real-time insights and
                          AI-driven alerts to track the largest transactions in the
                          cryptocurrency market. Stay ahead of the game by following
                          the unique moves of the crypto whales and make informed
                          trading decisions with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                    <div>
                      <div className="pt-6 lg:px-6">
                        <svg
                          className="w-full"
                          viewBox="0 0 386 123"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={386} height={123} rx={10} />
                          <g clipPath="url(#clip0_0_106)">
                            <circle
                              className="text-primary-600 dark:text-primary-500"
                              cx={29}
                              cy={29}
                              r={15}
                              fill="currentColor"
                            />
                            <path
                              d="M29 23V35"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M35 29L29 35L23 29"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M35 29L29 35L23 29"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                            fill="url(#paint0_linear_0_106)"
                          />
                          <path
                            className="text-primary-600 dark:text-primary-500"
                            d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                            stroke="currentColor"
                            strokeWidth={3}
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_106"
                              x1={3}
                              y1={60}
                              x2={3}
                              y2={123}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                className="text-primary-300 dark:text-primary-600/30"
                                stopColor="currentColor"
                              />
                              <stop
                                className="text-white dark:text-transparent"
                                offset={1}
                                stopColor="currentColor"
                                stopOpacity="0.103775"
                              />
                            </linearGradient>
                            <clipPath id="clip0_0_106">
                              <rect
                                width={358}
                                height={30}
                                fill="white"
                                style={{ fill: "white", fillOpacity: 1 }}
                                transform="translate(14 14)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="mt-14 text-center relative z-10 space-y-2">
                        <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                          Faster than light
                        </h2>
                        <p className="dark:text-white text-gray-700">
                          Experience lightning-fast transaction tracking and
                          insights. Stay ahead of the market with WhalePings
                          cutting-edge technology and real-time updates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                    <div className="grid sm:grid-cols-2">
                      <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                        <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                          <svg
                            className="size-6 m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                            Always Realtime
                          </h2>
                          <p className="dark:text-white text-gray-700">
                            WhalePing ensures you never miss a beat with
                            up-to-the-second data and alerts. Make informed
                            decisions with our continuous, real-time updates
                          </p>
                        </div>
                      </div>
                      <div className="relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)] dark:bg-white/5 dark:border-white/10">
                        <div className="absolute flex gap-1 top-2 left-3">
                          <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                          <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                          <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                        </div>
                        <svg
                          className="w-full sm:w-[150%]"
                          viewBox="0 0 366 231"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
                            fill="url(#paint0_linear_0_705)"
                          />
                          <path
                            className="text-primary-600 dark:text-primary-500"
                            d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_705"
                              x1="0.85108"
                              y1="0.947876"
                              x2="0.85108"
                              y2="230.114"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                className="text-primary-500/20 dark:text-primary-500/50"
                                stopColor="currentColor"
                              />
                              <stop
                                className="text-transparent"
                                offset={1}
                                stopColor="currentColor"
                                stopOpacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                    <div className="h-full grid sm:grid-cols-2">
                      <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                        <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                          <svg
                            className="size-6 m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none">
                              <path
                                stroke="currentColor"
                                d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                              />
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                                clipRule="evenodd"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                            Customized Private TradingView Indicators
                          </h2>
                          <p className="dark:text-white text-gray-700" />
                        </div>
                      </div>
                      <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-[--card-padding] before:absolute before:w-px before:inset-0 before:mx-auto before:bg-[--ui-light-border-color] dark:before:bg-[--ui-dark-border-color]">
                        <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                          <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              MA Indicator
                            </span>
                            <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <Image
                                className="rounded-full border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                                width={400}
                                height={400}
                                alt="Profile Image"
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                            <div className="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <Image
                                className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                            <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              CCI Indikator
                            </span>
                          </div>
                          <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                              RSI Indicator
                            </span>
                            <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                              <Image
                                className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                                src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pt-36">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
              <div className="grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24">
                <div className="lg:col-span-2">
                  <div className="md:pr-6 lg:pr-0">
                    <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
                      Api Documentation Coming Soon
                    </h2>
                    <p className="mt-6 text-gray-700 dark:text-white">
                      Stay tuned for detailed API documentation that will help you
                      seamlessly integrate WhalePings powerful features into your
                      applications. Comprehensive guides and examples will be
                      available soon.
                    </p>
                  </div>
                  <ul className="mt-8 divide-y border-y border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] divide-[--ui-light-border-color] dark:divide-[--ui-dark-border-color] *:py-3 *:flex *:items-center *:gap-3 text-gray-700 dark:text-white">
                    <li>
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m7 9l5 3.5L17 9"
                          />
                          <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                        </g>
                      </svg>
                      Telegram Support And Mail Support
                    </li>
                    <li>
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
                        />
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fast response time
                    </li>
                    <li>
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"
                        />
                      </svg>
                      Monitoring and analytics
                    </li>
                    <li>
                      <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"
                        />
                      </svg>
                      Architectural review
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <div className="flex gap-2 py-6 *:size-2.5 *:rounded-full px-[--card-padding]">
                    <div className="bg-[#f87171]" />
                    <div className="bg-[#fbbf24]" />
                    <div className="bg-[#a3e635]" />
                  </div>
                  <div className="flex gap-3 px-[--card-padding] text-gray-600 dark:text-white *:aspect-square *:border *:p-4 *:rounded-[calc(var(--card-border-radius)/2)] *:border-[--ui-light-border-color] dark:*:border-[--ui-dark-border-color]">
                    <div>
                      <svg
                        width="30px"
                        viewBox="0 -31.5 256 256"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                      >
                        <g>
                          <path
                            d="M192.440223,144.644612 L224.220111,144.644612 L224.220111,68.3393384 L188.415329,32.5345562 L165.943007,55.0068785 L192.440223,81.5040943 L192.440223,144.644612 L192.440223,144.644612 Z M224.303963,160.576482 L178.017688,160.576482 L113.451687,160.576482 L86.954471,134.079266 L98.1906322,122.843105 L120.075991,144.728464 L165.104487,144.728464 L120.746806,100.286931 L132.06682,88.9669178 L176.4245,133.324599 L176.4245,88.2961022 L154.622994,66.4945955 L165.775303,55.3422863 L110.684573,0 L56.3485097,0 L56.3485097,0 L0,0 L31.6960367,31.6960367 L31.6960367,31.7798886 L31.8637406,31.7798886 L97.4359646,31.7798886 L120.662954,55.0068785 L86.7029152,88.9669178 L63.4759253,65.7399279 L63.4759253,47.7117589 L31.6960367,47.7117589 L31.6960367,78.9046839 L86.7029152,133.911562 L64.3144448,156.300033 L100.119227,192.104815 L154.45529,192.104815 L256,192.104815 L256,192.104815 L224.303963,160.576482 L224.303963,160.576482 Z"
                            fill="gray"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                      <svg
                        width="30px"

                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <path
                          d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"
                          style={{ fill: "#22C55D" }}
                        />
                      </svg>

                    </div>

                    <div>
                      <svg
                        width="30px"

                        viewBox="0 0 50 52"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Logomark</title>
                        <path
                          d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                          fill="gray"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div>
                      <br />  <br />
                      <pre className="px-[--card-padding]">
                        Response Data
                        <code className="text-sm font-mono" dangerouslySetInnerHTML={{ __html: jsonString }}></code>



                      </pre>
                      <br />

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <br />
        <br />
        <br />
      </main>
      <footer className="rounded-xl border bg-white dark:bg-black  border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
        <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
            <a href="/" aria-label=" logo">
              <Image src="/logo.png" width={150} height={60} alt="Whale Tracker App Logo" />


            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/-ui"
                target="blank"
                aria-label="github"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/_ui"
                target="blank"
                aria-label="twitter"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com/@-ui"
                target="blank"
                aria-label="medium"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <span className="font-medium text-gray-950 dark:text-white">
                Enterprise
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Product
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Docs
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Utils
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Principles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Jargon
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Plugin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customizer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Boilerplates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Community
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Slack
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    X / Twitter
                  </a>
                </li>
              </ul>
              <form className="mt-12 max-w-xs w-full">
                <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                  <label className="block font-medium text-sm" htmlFor="email">
                    Subscribe to our newsletter
                  </label>
                  <input
                    className="w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-base h-9 px-3"
                    placeholder="Your email"
                    type="email"
                    id="email"
                    required=""
                    name="email"
                  />
                  <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-white text-sm">
                    Helper message
                  </span>
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-white disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-100 px-6 py-3 dark:bg-black">
            <span className="text-gray-600 dark:white">
              <p className='text-xl text-white font-semibold'> Disclaimer</p>
              <br></br>
              <p className='text-sm font-xl text-white font-semibold'>The blockchain data and other information provided on our website are obtained from various exchanges and are continuously updated to ensure the most accurate and up-to-date information. However, no guarantee is given regarding the accuracy, completeness, or timeliness of the data. Due to the complex and volatile nature of blockchain technology, there may be discrepancies or errors in the data.

                All information provided on our website is for informational purposes only and should not be considered as investment advice. Caution should be exercised when conducting transactions related to blockchain and cryptocurrencies, and independent professional advice should be sought.

                We do not accept any liability for any loss, damage, or cost incurred as a result of using the information and services provided on our website. By using our website, users agree to accept this disclaimer.

                We recommend conducting thorough research and consulting with your financial advisor before making any investment decisions.</p>
            </span>

          </div>
        </div>
      </footer >

    </>

  );

}
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

const AnimatedGradientText = styled.h1`
  background: linear-gradient(270deg, #cecedf, cyan, gray, skyblue);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 10s ease infinite;

  &.dark & {
    background: linear-gradient(290deg, black, gray, purple, red);
  }
`;
const buttongradient = styled.h1`
  background: linear-gradient(270deg, #cecedf, cyan, gray, skyblue);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 10s ease infinite;

  &.dark & {
    background: linear-gradient(290deg, black, gray, purple, red);
  }
`;