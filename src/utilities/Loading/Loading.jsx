import React from 'react';

import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;800&family=DM+Mono:wght@300;400&display=swap');

  .loader-root {
    position: fixed; inset: 0;
    background: #fff;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    overflow: hidden; z-index: 9999;
  }

  .blob {
    position: absolute; border-radius: 50%;
    filter: blur(60px); pointer-events: none;
  }
  .blob-1 {
    width: 300px; height: 300px;
    background: rgba(124,58,237,0.12);
    top: -60px; left: -60px;
    animation: float1 6s ease-in-out infinite;
  }
  .blob-2 {
    width: 200px; height: 200px;
    background: rgba(167,139,250,0.1);
    bottom: -40px; right: -40px;
    animation: float2 7s ease-in-out infinite;
  }
  @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,20px)} }
  @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,-15px)} }

  .spinner-wrap {
    position: relative; width: 120px; height: 120px;
    display: flex; align-items: center; justify-content: center; z-index: 2;
  }

  svg.rings { position: absolute; inset: 0; width: 100%; height: 100%; }

  .arc1 {
    fill: none; stroke: #7c3aed; stroke-width: 2.5; stroke-linecap: round;
    stroke-dasharray: 220 80;
    animation: rot1 1.6s cubic-bezier(.4,0,.2,1) infinite;
    transform-origin: center;
  }
  .arc2 {
    fill: none; stroke: #a78bfa; stroke-width: 1.8; stroke-linecap: round;
    stroke-dasharray: 140 120;
    animation: rot2 1.2s cubic-bezier(.4,0,.2,1) infinite reverse;
    transform-origin: center;
  }
  .arc3 {
    fill: none; stroke: rgba(124,58,237,0.25); stroke-width: 1.2; stroke-linecap: round;
    stroke-dasharray: 60 200;
    animation: rot3 2s linear infinite;
    transform-origin: center;
  }

  @keyframes rot1 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-300} }
  @keyframes rot2 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-260} }
  @keyframes rot3 { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-260} }

  .center-icon {
    width: 40px; height: 40px; border-radius: 12px;
    background: linear-gradient(135deg, #7c3aed, #a78bfa);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 24px rgba(124,58,237,0.35);
    animation: iconpulse 2s ease-in-out infinite; z-index: 3;
  }
  @keyframes iconpulse {
    0%,100%{ transform:scale(1); box-shadow:0 8px 24px rgba(124,58,237,0.35) }
    50%{ transform:scale(1.06); box-shadow:0 12px 32px rgba(124,58,237,0.5) }
  }

  .label-wrap { margin-top: 32px; text-align: center; z-index: 2; }
  .label-title {
    font-size: 15px; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase; color: #18101f;
  }
  .label-sub {
    font-family: 'DM Mono', monospace; font-size: 11px;
    color: #9d8fad; margin-top: 6px; letter-spacing: 0.06em;
    min-height: 16px; transition: opacity 0.3s;
  }

  .prog-wrap { margin-top: 28px; width: 240px; z-index: 2; }
  .prog-track { height: 4px; background: #ede9f9; border-radius: 99px; overflow: hidden; }
  .prog-fill {
    height: 100%; border-radius: 99px;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    transition: width 0.35s cubic-bezier(.4,0,.2,1);
    position: relative;
  }
  .prog-fill::after {
    content: ''; position: absolute; right: 0; top: 50%;
    transform: translateY(-50%);
    width: 8px; height: 8px; border-radius: 50%;
    background: #7c3aed; box-shadow: 0 0 8px rgba(124,58,237,.8);
  }
  .prog-pct  { font-family:'DM Mono',monospace; font-size:11px; color:#7c3aed; margin-top:10px; text-align:center; }

  .step-dots { display: flex; gap: 6px; margin-top: 22px; z-index: 2; }
  .step-dot { width: 6px; height: 6px; border-radius: 50%; background: #e8e0f8; transition: background .3s, transform .3s; }
  .step-dot.active { background: #7c3aed; transform: scale(1.3); }
  .step-dot.done   { background: #a78bfa; }
`;

const STEPS = [
    "initializing modules...",
    "fetching resources...",
    "compiling assets...",
    "almost ready...",
];

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [subVisible, setSubVisible] = useState(true);
    const [showProgress, setShowProgress] = useState(true);

    useEffect(() => {
        const iv = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) { clearInterval(iv); setShowProgress(false); setTimeout(() => onComplete?.(), 500); return 100; }
                return prev + 1;
            });
        }, 35);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        const idx = Math.min(Math.floor((progress / 100) * STEPS.length), STEPS.length - 1);
        if (idx !== stepIndex) {
            setSubVisible(false);
            setTimeout(() => { setStepIndex(idx); setSubVisible(true); }, 200);
        }
    }, [progress]);

    return (
        <>
            <style>{styles}</style>
            <div className="loader-root">
                <div className="blob blob-1" />
                <div className="blob blob-2" />

                <div className="spinner-wrap">
                    <svg className="rings" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" fill="none" stroke="#f0ebfe" strokeWidth="1" />
                        <circle cx="60" cy="60" r="40" fill="none" stroke="#f5f0ff" strokeWidth="1" />
                        <circle className="arc1" cx="60" cy="60" r="54" />
                        <circle className="arc2" cx="60" cy="60" r="40" />
                        <circle className="arc3" cx="60" cy="60" r="26" />
                    </svg>
                    <div className="center-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="4 17 10 11 4 5" />
                            <line x1="12" y1="19" x2="20" y2="19" />
                        </svg>
                    </div>
                </div>

                <p className="label-sub" style={{ opacity: subVisible ? 1 : 0, marginTop: '24px', textAlign: 'center' }}>
                    {progress >= 100 ? '' : STEPS[stepIndex]}
                </p>

                <div className="prog-wrap" style={{ opacity: showProgress ? 1 : 0, transition: 'opacity 0.4s', pointerEvents: showProgress ? 'auto' : 'none' }}>
                    <div className="prog-track">
                        <div className="prog-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="prog-pct">{Math.floor(progress)}%</p>
                </div>

                <div className="step-dots">
                    {STEPS.map((_, i) => {
                        const isComplete = progress >= 100;
                        const cls = isComplete ? "done" : i < stepIndex ? "done" : i === stepIndex ? "active" : "";
                        return <div key={i} className={`step-dot ${cls}`} />;
                    })}
                </div>
            </div>
        </>
    );
}


export default Loading;