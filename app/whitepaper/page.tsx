"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, BarChart3, Globe, Zap, Lock, ArrowLeft, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Logo = () => (
  <Image
    src="/Irion_logo.svg"
    alt="Irion Network Logo"
    width={100}
    height={100}
    className="h-20 w-auto opacity-100"
    priority
  />
);

const Text_Logo = () => (
  <Image
    src="/Irion_white_text_logo.svg"
    alt="Irion Network Text Logo"
    width={200}
    height={100}
    className="h-32 w-auto opacity-100"
    priority
  />
);

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-6 lg:px-20 max-w-[1400px] mx-auto z-50 relative">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase">
          <Link href="/" className="flex items-center gap-2 hover:text-[#ccff00] transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
        </nav>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 lg:px-20 py-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] text-[#ccff00] uppercase border border-[#ccff00]/30 rounded-full">
            Technical Specification v1.0
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-[0.9]">
            Irion <span className="text-[#ccff00]">Protocol</span><br />
            Whitepaper
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A unified financial infrastructure layer on Algorand for ZK-private credit and automated cross-border treasury management.
          </p>
        </motion.div>

        {/* Section 1: Executive Summary */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-[#ccff00] mb-8 uppercase tracking-tight">01. Executive Summary</h2>
          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-white/80 border-l border-[#ccff00]/20 pl-8">
            <p>
              Irion Protocol is designed to bridge the gap between two massive, underserved segments of global finance:
              <strong> The Unbanked</strong> and <strong>Corporate Treasuries (SMEs)</strong>. While these groups represent vastly different economic scales, they share a common need: access to transparent, automated, and privacy-preserving financial tools.
            </p>
            <p>
              Built on the Algorand blockchain, Irion implements a dual-module architecture sharing a single identity and compliance backbone. By combining Zero-Knowledge (ZK) credit scoring with autonomous multi-currency vaults, Irion provides a comprehensive ecosystem for the next generation of global commerce.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Core Problems */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-[#ccff00] mb-8 uppercase tracking-tight">02. Core Problems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Financial Exclusion</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                1.4 billion people globally remain unbanked. They have active financial lives but their repayment behaviors are invisible to traditional lenders.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-white/40"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> No formal credit score</li>
                <li className="flex items-center gap-3 text-xs text-white/40"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> Privacy vs. Accessibility trade-off</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Treasury Friction</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                SMEs managing multi-currency obligations face manual conversion hurdles and 0% yield on idle balances.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-white/40"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> High FX volatility exposure</li>
                <li className="flex items-center gap-3 text-xs text-white/40"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> Capital inefficiency</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 3: ZK Credit Rails */}
        <motion.section {...fadeInUp} className="mb-24">
          <div className="bg-[#ccff00] text-black rounded-[3rem] p-10 lg:p-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">Module 1</h2>
            <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8">ZK Credit Rails</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-black text-xl mb-4 flex items-center gap-2 italic">Privacy-First Scoring</h4>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  Our credit engine analyzes on-chain historical data locally. Using ZK-SNARKs (AlgoPlonk), Irion generates a proof of creditworthiness without revealing transaction history.
                </p>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4 flex items-center gap-2 italic">Portable Identity</h4>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  A credit score earned once becomes composable. Any third-party lender integrating our verification contract can accept the proof.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Automated Treasury */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-[#ccff00] mb-8 uppercase tracking-tight">03. Automated Treasury</h2>
          <div className="grid gap-6">
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Autonomous Rebalancing</h4>
                  <p className="text-white/60 text-sm italic leading-relaxed">
                    Protecting margins from currency volatility with integrated on-chain FX hedging.
                  </p>
                </div>
                <div className="text-4xl font-black text-[#ccff00]/20">01</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Yield Optimization</h4>
                  <p className="text-white/60 text-sm italic leading-relaxed">
                    Idle treasury balances are automatically deployed to earn yield across the ecosystem.
                  </p>
                </div>
                <div className="text-4xl font-black text-[#ccff00]/20">02</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Differentiation */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-12 uppercase tracking-tight text-center">Protocol <span className="text-[#ccff00]">Differentiation</span></h2>
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/10">
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="p-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">Capability</div>
              <div className="p-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">Standard DeFi</div>
              <div className="p-6 text-[10px] font-bold text-[#ccff00] uppercase tracking-widest">Irion</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">Credit Identity</div>
              <div className="p-6 text-sm text-white/40">Public history</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">ZK-Private, Portable</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">FX Logic</div>
              <div className="p-6 text-sm text-white/40">Manual swaps</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">Autonomous Hedging</div>
            </div>
            <div className="grid grid-cols-3 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">Compliance</div>
              <div className="p-6 text-sm text-white/40">Manual audit</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">MiCA/FINMA Ready Export</div>
            </div>
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section {...fadeInUp} className="text-center py-20 border-t border-zinc-900">
          <h3 className="text-3xl font-black uppercase mb-8">Humble Beginnings. <br /><span className="text-[#ccff00]">Revolutionary Potential.</span></h3>
          <p className="text-white/40 text-sm mb-12">Building the future of inclusive financial infrastructure.</p>
          <Link href="/#contact" className="bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all inline-block">
            Get In Touch
          </Link>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 lg:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Text_Logo />
        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          © 2026 Irion Network
        </div>
      </footer>
    </div>
  );
}
