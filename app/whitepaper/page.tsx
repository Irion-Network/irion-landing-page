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
            Technical Specification v2.0 — Active
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-[0.9]">
            Irion <span className="text-[#ccff00]">Pay</span><br />
            Whitepaper
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A Buy Now Pay Later (BNPL) protocol on Algorand that lets users collateralise holdings to receive instant credit lines with auto-offsetting interest via yield.
          </p>
        </motion.div>

        {/* Section 1: Introduction */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-[#ccff00] mb-8 uppercase tracking-tight">01. What is IrionPay?</h2>
          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-white/80 border-l border-[#ccff00]/20 pl-8">
            <p>
              IrionPay is a Buy Now Pay Later (BNPL) protocol on Algorand that lets users collateralise their crypto holdings (stablecoins and ASAs) to receive an instant credit line, spend it at checkout, and have their interest automatically offset by yield generated from their own deposited assets.
            </p>
            <p>
              The core differentiator is the <strong>yield-offset repayment mechanic</strong>: users who deposit assets for yield generation earn returns that are applied directly against their outstanding interest. This creates a self-reinforcing debt reduction engine that rewards long-term holders while providing immediate liquidity for commerce.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Core Mechanic */}
        <motion.section {...fadeInUp} className="mb-24">
          <div className="bg-[#ccff00] text-black rounded-[3rem] p-10 lg:p-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">Core Innovation</h2>
            <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8">Yield-Offset Repayment</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-black text-xl mb-4 flex items-center gap-2 italic">Self-Liquidating Debt</h4>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  Idle collateral is deployed into lending pools (with potential future partners like Folks Finance) to earn yield. This yield is harvested and applied automatically to clear any outstanding interest on the credit line.
                </p>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4 flex items-center gap-2 italic">Compounding Growth</h4>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  If yield exceeds interest, the surplus compounds — reinvesting and generating further yield on itself. Under the right conditions, the user's net position improves even as they maintain an active credit line.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: System Architecture */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-[#ccff00] mb-8 uppercase tracking-tight">02. System Architecture</h2>
          <div className="grid gap-6">
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Collateral Vaults</h4>
                  <p className="text-white/60 text-sm italic leading-relaxed">
                    Phase 1 accepts Algorand-native stablecoins (USDCa, USDTa) to provide a safe 80% LTV ratio without complex liquidation risks.
                  </p>
                </div>
                <div className="text-4xl font-black text-[#ccff00]/20">01</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Yield Engine</h4>
                  <p className="text-white/60 text-sm italic leading-relaxed">
                    Harvests accrued on-chain yield daily to service interest balances, with remainder compounding back into the pool.
                  </p>
                </div>
                <div className="text-4xl font-black text-[#ccff00]/20">02</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">Merchant Checkout SDK</h4>
                  <p className="text-white/60 text-sm italic leading-relaxed">
                    A functional demo storefront demonstrates the viability of an IrionPay merchant widget that settles instantly in stablecoins.
                  </p>
                </div>
                <div className="text-4xl font-black text-[#ccff00]/20">03</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Differentiation */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-12 uppercase tracking-tight text-center">Competitive <span className="text-[#ccff00]">Landscape</span></h2>
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/10">
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="p-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">Protocol</div>
              <div className="p-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">Standard DeFi</div>
              <div className="p-6 text-[10px] font-bold text-[#ccff00] uppercase tracking-widest">IrionPay</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">Focus</div>
              <div className="p-6 text-sm text-white/40">Lending / Swaps</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">Consumer BNPL</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">UX</div>
              <div className="p-6 text-sm text-white/40">Complex Dashboards</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">One-Click Checkout</div>
            </div>
            <div className="grid grid-cols-3 hover:bg-white/5 transition-colors">
              <div className="p-6 text-sm font-bold text-white">Yield Utilization</div>
              <div className="p-6 text-sm text-white/40">Idle or Rewards</div>
              <div className="p-6 text-sm text-[#ccff00] font-bold">Interest-Offsetting</div>
            </div>
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section {...fadeInUp} className="text-center py-20 border-t border-zinc-900">
          <h3 className="text-3xl font-black uppercase mb-8">The Future of Credit. <br /><span className="text-[#ccff00]">On-Chain and Self-Servicing.</span></h3>
          <p className="text-white/40 text-sm mb-12">Building the infrastructure for the next billion crypto consumers.</p>
          <Link href="/" className="bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all inline-block">
            Back To Home
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
