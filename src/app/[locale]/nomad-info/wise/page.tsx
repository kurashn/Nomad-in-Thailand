import React from "react";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { ArrowLeft, Check, ArrowRight, ExternalLink, Globe, CreditCard, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    if (locale === 'en') {
        return {
            title: "Wise Guide: Why It's Essential for Digital Nomads | Nomad in Thailand",
            description: "2026 Guide: Complete review of Wise for international transfers. Up to 8x cheaper than banks, real exchange rates, and essential money tips for Thailand nomads.",
        };
    }
    return {
        title: "海外送金「Wise」完全ガイド。なぜノマドの必須ツールなのか？ | Nomad in Thailand",
        description: "【2026年最新】海外送金Wise（ワイズ）のメリット・デメリットを徹底解説。銀行の最大8倍安い手数料、タイバーツへのリアルレート両替など、海外ノマドやタイ移住者が損をしないためのお金の知識をまとめました。",
    };
}

export default async function WiseGuidePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const AFFILIATE_LINK = "https://wise.com/invite/ihpc/shunk138";

    if (locale === 'en') {
        return (
            <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
                {/* Standard Hero Header */}
                <div className="relative h-[50vh] w-full">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="w-full h-full relative">
                        <Image
                            src="/images/wise_hero_v2.png"
                            alt="Wise International Money Transfer & Multi-Currency Account"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                        <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Articles
                        </Link>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Money & Tax</span>
                            <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Essential Tool</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                            Wise Complete Guide: 2026 Edition<br />
                            <span className="text-xl md:text-3xl font-medium mt-3 block text-white/90 leading-normal">
                                Why It's the #1 Essential Tool for Digital Nomads
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container max-w-3xl mx-auto px-4 mt-12">

                    {/* Introduction / Hook */}
                    <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                        <p className="leading-loose font-medium text-slate-800 mb-8">
                            "I sent money from my home bank to Thailand and lost $50 in hidden fees..."<br />
                            "I exchanged cash at the airport and was shocked by the terrible rate..."
                        </p>
                        <p className="leading-loose text-slate-700 mb-8">
                            The biggest waste of money in overseas nomad life is <strong>"Money Movement Costs"</strong>.
                            Most people unknowingly lose the equivalent of several nice meals every time they move funds due to hidden bank markups.
                        </p>
                        <p className="leading-loose text-slate-700 mb-8">
                            The solution is <strong>Wise</strong>, used by over 16 million people worldwide.<br />
                            Simply put, if you are living in Thailand or traveling as a nomad, <strong>not having this account means you are losing money every day</strong>.
                        </p>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8 not-prose">
                            <h3 className="text-green-800 font-bold text-lg mb-4 mt-0 ml-0 flex items-center gap-2">
                                <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                                3 Reasons Why Nomads Choose Wise
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-700 min-w-[4rem]">Cheap</span>
                                    <span><strong>Up to 8x cheaper than banks.</strong> Save significantly on every transfer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-700 min-w-[4rem]">Clear</span>
                                    <span><strong>Real Exchange Rate.</strong> No hidden markups like airports or traditional banks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-700 min-w-[4rem]">Easy</span>
                                    <span><strong>Multi-currency Debit Card.</strong> Spend like a local anywhere in the world.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Problem: Comparison Simulation */}
                    <section className="mb-20 scroll-mt-24" id="comparison">
                        <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                            How much can you save? (Real Comparison)
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed text-slate-700">
                            Let's simulate sending <strong>1,000 USD to Thailand (THB)</strong>.<br />
                            See the difference in how much Thai Baht you actually receive in your pocket.
                        </p>

                        {/* Table Comparison to match NordVPN/Japanese style */}
                        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
                            <table className="w-full text-sm md:text-base bg-white">
                                <thead>
                                    <tr className="bg-slate-100 text-slate-700 h-12">
                                        <th className="p-4 w-1/3 text-left">Item</th>
                                        <th className="p-4 w-1/3 text-left">Traditional Bank</th>
                                        <th className="p-4 w-1/3 text-left text-[#2a9d8f]">Wise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="p-4 font-bold bg-slate-50">Transfer Fee</td>
                                        <td className="p-4 text-red-500 font-bold">
                                            High<br />
                                            <span className="text-xs text-slate-400 font-normal">($30 - $50+)</span>
                                        </td>
                                        <td className="p-4 text-[#2a9d8f] font-bold bg-[#2a9d8f]/5">
                                            Low<br />
                                            <span className="text-xs text-slate-400 font-normal">(Small % fee)</span>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="p-4 font-bold bg-slate-50">Exchange Rate</td>
                                        <td className="p-4 text-red-500 font-bold">
                                            Bad (Hidden Markup)<br />
                                            <span className="text-xs text-slate-400 font-normal">Bank Rate (Markup added)</span>
                                        </td>
                                        <td className="p-4 text-[#2a9d8f] font-bold bg-[#2a9d8f]/5">
                                            Real Rate<br />
                                            <span className="text-xs text-slate-400 font-normal">Mid-Market Rate (Same as Google)</span>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="p-4 font-bold bg-slate-50">You Receive</td>
                                        <td className="p-4 font-bold text-slate-600">
                                            Less THB<br />
                                            <span className="text-xs text-red-500">(Significantly less)</span>
                                        </td>
                                        <td className="p-4 font-bold text-[#2a9d8f] bg-[#2a9d8f]/5 relative">
                                            More THB
                                            <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">WIN!</span>
                                            <br />
                                            <span className="text-xs text-green-600">You save money!</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Solution: Key Benefits */}
                    <section className="mb-20 scroll-mt-24">
                        <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">2</span>
                            Why is it so cheap? (The Secret)
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-lg mb-4 text-center text-slate-600">Old Way (SWIFT Bucket Relay)</h3>
                                <div className="flex items-center justify-center gap-2 text-lg text-slate-400 mb-4">
                                    <span>🇺🇸 Bank</span>
                                    <ArrowRight className="w-4 h-4" />
                                    <span>🏦 Relay</span>
                                    <ArrowRight className="w-4 h-4" />
                                    <span>🇹🇭 Bank</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Traditional banks use the SWIFT network, passing your money through multiple intermediary banks.
                                    Each step incurs a <strong>"Relay Fee"</strong> and a poor exchange rate, eating away your funds.
                                </p>
                                <div className="mt-4 text-center">
                                    <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">Slow & Expensive</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border-2 border-[#2a9d8f] shadow-lg shadow-[#2a9d8f]/5">
                                <h3 className="font-bold text-lg mb-4 text-center text-[#2a9d8f]">Wise Way (Smart Matching)</h3>
                                <div className="flex items-center justify-center gap-2 text-base md:text-lg text-[#2a9d8f] mb-4 font-bold whitespace-nowrap">
                                    <span>🇺🇸 Wise US</span>
                                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                    <span>🇹🇭 Wise Thai</span>
                                </div>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Wise doesn't actually cross borders with your money.
                                    You send dollars to Wise US, and Wise Thailand pays out Baht to your recipient.
                                    Since it's a domestic transfer on both ends, it's <strong>incredibly fast and cheap</strong>.
                                </p>
                                <div className="mt-4 text-center">
                                    <span className="inline-block bg-[#2a9d8f] text-white text-xs font-bold px-2 py-1 rounded">Fast & Cheap</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Smart Usage Guide */}
                    <section className="mb-20 scroll-mt-24">
                        <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">3</span>
                            Nomad's Wise Strategy Guide (Thailand Edition)
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed text-slate-700">
                            "I signed up, but how do I use it best?"<br />
                            Here are the <strong>Top 3 smartest ways</strong> to use Wise as a digital nomad in Thailand.
                        </p>

                        <div className="space-y-8">
                            {/* Usage 1: Card */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <div>
                                    <span className="inline-block bg-[#2a9d8f] text-white text-xs font-bold px-2 py-1 rounded mb-2">MUST</span>
                                    <h3 className="font-bold text-xl text-slate-800 mb-4">1. Wise Debit Card: "Tap to Pay" (Zero Exchange Fees)</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        If you load your home currency into Wise, you can <strong>pay directly at 7-Eleven, supermarkets, and hotels in Thailand.</strong>
                                        Wise automatically converts it to Thai Baht at the real rate at the moment of purchase. No need to visit money changers.
                                    </p>
                                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                        <p className="font-bold text-slate-900 mb-2">💡 Pro Tip</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Just tap the card on the machine (Visa/Mastercard).</li>
                                            <li>If asked "Currency?", <strong>ALWAYS choose THB (Local Currency)</strong>. This ensures Wise does the conversion (cheaper) instead of the bank terminal (expensive).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Usage 2: PromptPay Warning */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                    <span className="text-amber-500">⚠️</span>
                                    2. Can I use Thai QR (PromptPay)?
                                </h3>
                                <div className="mb-4">
                                    <p className="text-slate-600 leading-relaxed mb-3">
                                        Short answer: <strong>No, you cannot use PromptPay directly from Wise.</strong><br />
                                        To scan QR codes at street food stalls, you need a local Thai bank account.
                                    </p>
                                </div>
                                <div className="bg-amber-50 text-amber-900 p-4 rounded-lg text-sm">
                                    <p className="font-bold mb-2">👇 The Nomad Route</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li><strong>First Month:</strong> Use Wise Card for ATM withdrawals and payments. Pay with cash for street food.</li>
                                        <li><strong>Long Term:</strong> Open a Bangkok Bank account and transfer money from Wise to it. Then use the bank app for PromptPay. (Note: DTV Visa holders may find opening a bank account difficult depending on the branch, so relying on the Wise Card for ATM withdrawals is often the primary strategy.)</li>
                                    </ol>
                                </div>
                            </div>

                            {/* Usage 3: ATM Strategy */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800 mb-4">3. ATM Withdrawal Strategy</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        Thai ATMs charge a flat fee of <strong>220 THB (approx. $6-7) per withdrawal</strong> for foreign cards.
                                        This fee is charged by the Thai bank and Wise cannot waive it.
                                    </p>
                                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                        <p className="font-bold text-slate-900 mb-1">💰 How to minimize loss</p>
                                        <p>
                                            Do not withdraw small amounts frequently. <strong>Withdraw the maximum allowed (usually 30,000 THB) once a month.</strong><br />
                                            Keep the cash safe in your hotel safe and only carry what you need for the day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Account Opening Guide */}
                    <section className="mb-20 scroll-mt-24">
                        <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">4</span>
                            How to Start (Takes 5 mins)
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                                <h3 className="font-bold mb-2">Register Online</h3>
                                <p className="text-sm text-slate-500 mb-4">Sign up with your email. Use the link below for a free transfer offer.</p>
                                <Link href={AFFILIATE_LINK} target="_blank" rel="sponsored noopener noreferrer" className="text-xs font-bold text-[#2a9d8f] hover:underline">
                                    Go to Registration →
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                                <h3 className="font-bold mb-2">Verify Identity (eKYC)</h3>
                                <p className="text-sm text-slate-500">Upload a photo of your ID (Passport/Driver's License) and a selfie.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                                <h3 className="font-bold mb-2">Order Card</h3>
                                <p className="text-sm text-slate-500">Order your debit card from the app. It takes about 2 weeks to arrive, so do it before you fly!</p>
                            </div>
                        </div>
                    </section>

                    {/* Trust / Safety */}
                    <section className="bg-white p-8 rounded-2xl border border-slate-200 mb-16 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            <div className="bg-slate-100 p-4 rounded-full flex-shrink-0">
                                <ShieldCheck className="w-10 h-10 text-[#2a9d8f]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-slate-800">Is it safe?</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Yes. Wise is regulated by the FCA (UK), FinCEN (USA), and other financial authorities around the world.
                                    They are required by law to safeguard your money in separate accounts from their own operating funds. It is as safe as a traditional bank.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                            <span className="text-[#2a9d8f]">QA</span> Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                    Q. Can I top up with a credit card?
                                    <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                    A. Yes, but it incurs a card processing fee. For the cheapest meaningful transfer, we recommend bank transfer (ACH/Wire) to fund your Wise account.
                                </div>
                            </details>
                            <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                    Q. Where can I use the Wise card in Thailand?
                                    <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                    A. Anywhere that accepts Visa/Mastercard (Malls, 7-11, Hotels, Grab App). Note that street food and local taxis often only take Cash or PromptPay, so keep some cash on hand.
                                </div>
                            </details>
                            <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                    Q. Do I need a Thai bank account if I have Wise?
                                    <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                    A. For short trips, Wise + Cash is enough. For long-term stays, a Thai bank account is convenient for PromptPay (QR payments). However, Wise is still essential for bringing money into Thailand cheaply.
                                </div>
                            </details>
                        </div>
                    </section>

                    {/* Conclusion CTA */}
                    <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                        <span className="inline-block bg-[#9fe870] text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">Free to Register</span>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Stop losing money to banks.<br />
                            Start moving freely.
                        </h2>
                        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Use the money you save on fees for more Pad Thai, Massages, or another week of coworking.<br className="hidden md:inline" />
                            Don't let banks eat your travel budget.
                        </p>
                        <Link
                            href={AFFILIATE_LINK}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#9fe870] text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#9fe870]/20"
                        >
                            Register Wise for Free
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <p className="text-sm text-slate-400 mt-6">
                            *Registration and account maintenance are free.
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="../nomad-info" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors underline">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Articles
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    // Japanese Content
    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            {/* Standard Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/wise_hero_v2.png"
                        alt="Wise（ワイズ）海外送金・マルチカレンシー口座"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">お金・税金</span>
                        <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">必須ツール</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        【2026年版】Wise完全ガイド<br />
                        <span className="text-xl md:text-3xl font-medium mt-3 block text-white/90 leading-normal">
                            なぜノマドの必須ツールなのか？
                        </span>
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-3xl mx-auto px-4 mt-12">

                {/* Introduction / Hook */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="leading-loose font-medium text-slate-800 mb-8">
                        「日本の銀行からタイへ送金したら、手数料で5,000円近く引かれていた...」<br />
                        「空港で両替したら、レートが悪すぎてびっくりした...」
                    </p>
                    <p className="leading-loose text-slate-700 mb-8">
                        海外生活で最も無駄なコスト、それは<strong>「お金の移動手数料」</strong>です。
                        多くの人が気づかないうちに、銀行の「隠れ手数料」や「悪い為替レート」によって、毎回ランチ数回分のお金を失っています。
                    </p>
                    <p className="leading-loose text-slate-700 mb-8">
                        それを解決するのが、世界1,600万人以上が利用する<strong>「Wise（ワイズ）」</strong>です。<br />
                        結論から言うと、タイ移住やノマド生活をするなら、<span className="bg-yellow-100 font-bold px-1">これを持っていないと確実に損をします。</span>
                    </p>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8 not-prose">
                        <h3 className="text-green-800 font-bold text-lg mb-4 mt-0 ml-0 flex items-center gap-2">
                            <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                            Wiseの3つの革命
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-green-700 min-w-[3rem]">安い</span>
                                <span>銀行より<strong>最大8倍安い</strong>手数料（10万円送金で数千円お得）。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-green-700 min-w-[3rem]">透明</span>
                                <span>Google検索と同じ<strong>「リアルレート」</strong>で両替。隠れコスト一切なし。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-green-700 min-w-[3rem]">便利</span>
                                <span><strong>デビットカード</strong>で現地決済。アプリ1つで資金管理。</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Problem: Comparison Simulation */}
                <section className="mb-20 scroll-mt-24" id="comparison">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                        どれくらいお得なの？（徹底比較）
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700">
                        例えば、<strong>日本からタイへ「10万円」を送金する場合</strong>のシミュレーションです。<br />
                        銀行とWiseでは、最終的に現地で受け取れる金額にこれだけの差が出ます。
                    </p>

                    {/* Table Comparison to match NordVPN style */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base bg-white">
                            <thead>
                                <tr className="bg-slate-100 text-slate-700 h-12">
                                    <th className="p-4 w-1/3 text-left">項目</th>
                                    <th className="p-4 w-1/3 text-left">一般的な銀行</th>
                                    <th className="p-4 w-1/3 text-left text-[#2a9d8f]">Wise (ワイズ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">送金手数料</td>
                                    <td className="p-4 text-red-500 font-bold">
                                        高い<br />
                                        <span className="text-xs text-slate-400 font-normal">（3,000円〜）</span>
                                    </td>
                                    <td className="p-4 text-[#2a9d8f] font-bold bg-[#2a9d8f]/5">
                                        格安<br />
                                        <span className="text-xs text-slate-400 font-normal">（数百円〜）</span>
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">為替レート</td>
                                    <td className="p-4 text-red-500 font-bold">
                                        悪い（隠れコスト）<br />
                                        <span className="text-xs text-slate-400 font-normal">1バーツ = 5.2円</span>
                                    </td>
                                    <td className="p-4 text-[#2a9d8f] font-bold bg-[#2a9d8f]/5">
                                        リアルレート<br />
                                        <span className="text-xs text-slate-400 font-normal">1バーツ = 5.0円 (Googleと同じ)</span>
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">受取額</td>
                                    <td className="p-4 font-bold text-slate-600">
                                        19,230 THB<br />
                                        <span className="text-xs text-red-500">(-770 THB)</span>
                                    </td>
                                    <td className="p-4 font-bold text-[#2a9d8f] bg-[#2a9d8f]/5 relative">
                                        20,000 THB
                                        <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">WIN!</span>
                                        <br />
                                        <span className="text-xs text-green-600">約3,800円お得！</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Solution: Key Benefits */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">2</span>
                        なぜそんなに安いの？（仕組みの秘密）
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                            <h3 className="font-bold text-lg mb-4 text-center text-slate-600">従来の銀行（バケツリレー方式）</h3>
                            <div className="flex items-center justify-center gap-2 text-lg text-slate-400 mb-4">
                                <span>🇯🇵銀行</span>
                                <ArrowRight className="w-4 h-4" />
                                <span>🏦中継</span>
                                <ArrowRight className="w-4 h-4" />
                                <span>🇹🇭銀行</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                SWIFT（国際銀行間通信協会）という古い仕組みを使って、複数の銀行を経由して送金します。
                                そのたびに<strong>「中継手数料」</strong>が引かれ、各銀行が独自の為替レートを適用して利益を抜くため、高額になります。
                            </p>
                            <div className="mt-4 text-center">
                                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">遅くて高い</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border-2 border-[#2a9d8f] shadow-lg shadow-[#2a9d8f]/5">
                            <h3 className="font-bold text-lg mb-4 text-center text-[#2a9d8f]">Wise（マッチング方式）</h3>
                            <div className="flex items-center justify-center gap-2 text-base md:text-lg text-[#2a9d8f] mb-4 font-bold whitespace-nowrap">
                                <span>🇯🇵 Wise日本</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                <span>🇹🇭 Wiseタイ</span>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                実際はお金を国境を越えて動かしていません。
                                「あなたが日本のWise口座に振り込む」→「Wiseがタイの自分の口座から相手に振り込む」という仕組み。
                                国内送金同士の組み合わせなので、<strong>圧倒的に安くて速い</strong>のです。
                            </p>
                            <div className="mt-4 text-center">
                                <span className="inline-block bg-[#2a9d8f] text-white text-xs font-bold px-2 py-1 rounded">速くて安い</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Smart Usage Guide */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">3</span>
                        【保存版】タイ移住者のWise活用術
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700">
                        「登録したけど、どうやって使うのが一番お得なの？」<br />
                        タイのノマドコミュニティで実践されている、<strong>最も賢い3つの使い方</strong>を伝授します。
                    </p>

                    <div className="space-y-8">
                        {/* Usage 1: Card */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <div>
                                <span className="inline-block bg-[#2a9d8f] text-white text-xs font-bold px-2 py-1 rounded mb-2">MUST</span>
                                <h3 className="font-bold text-xl text-slate-800 mb-4">1. Wiseデビットカードで「タッチ決済」（両替手数料ゼロ）</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    Wiseカードにお金（日本円）が入っていれば、<strong>タイのセブンイレブンやスーパー、Agodaの決済などでそのまま使えます。</strong>
                                    勝手にリアルレートで「円→バーツ」に両替して決済されるので、いちいち両替所で並ぶ必要はありません。
                                </p>
                                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                    <p className="font-bold text-slate-900 mb-2">💡 ここがポイント</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>支払いは端末にタッチするだけ（VISA/Mastercard）。</li>
                                        <li>端末で「JPY or THB?」と聞かれたら、<strong>必ず「THB（現地通貨）」</strong>を選んでください。Wiseの良いレートが適用されます。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Usage 2: PromptPay Warning */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                <span className="text-amber-500">⚠️</span>
                                2. タイのQR「PromptPay」はできる？
                            </h3>
                            <div className="mb-4">
                                <p className="text-slate-600 leading-relaxed mb-3">
                                    結論：<strong>Wiseから直接PromptPay（QRスキャン払い）はできません。</strong><br />
                                    タイの屋台支払いで普及しているPromptPayを使うには、現地の銀行口座が必要です。
                                </p>
                            </div>
                            <div className="bg-amber-50 text-amber-900 p-4 rounded-lg text-sm">
                                <p className="font-bold mb-2">👇 ノマドの正解ルート</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li><strong>到着直後 (最初の1ヶ月):</strong> WiseカードでATMから現金を引き出して、屋台は現金払い。</li>
                                    <li><strong>長期滞在 (ビザ取得後):</strong> バンコク銀行などの口座を開設し、Wiseからそこへ送金。その銀行アプリでQR払いをする。（※DTVビザでは銀行口座開設が難しい場合があるため、その場合はWiseカードでのATM引き出しが中心になります）</li>
                                </ol>
                            </div>
                        </div>

                        {/* Usage 3: ATM Strategy */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-4">3. 現金の引き出し方（ATM手数料対策）</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    タイのATMで日本のカードを使って現金を引き出すと、<strong>1回につき一律220バーツ（約1,100円）</strong>の手数料がかかります。
                                    これはWiseカードでも回避できません。
                                </p>
                                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                    <p className="font-bold text-slate-900 mb-1">💰 損しないコツ</p>
                                    <p>
                                        こまめに引き出すと損します。<strong>「月に1回、3万バーツ（約15万円）まとめて引き出す」</strong>のが鉄則です。<br />
                                        引き出した現金は、ホテルの金庫などで安全に保管し、使う分だけ財布に入れましょう。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Account Opening Guide */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">4</span>
                        最短5分！Wiseの始め方
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                            <h3 className="font-bold mb-2">公式サイトから登録</h3>
                            <p className="text-sm text-slate-500 mb-4">メールアドレスで登録。<br />下記リンクからだと初回手数料が無料。</p>
                            <Link href={AFFILIATE_LINK} target="_blank" rel="sponsored noopener noreferrer" className="text-xs font-bold text-[#2a9d8f] hover:underline">
                                登録ページへ →
                            </Link>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                            <h3 className="font-bold mb-2">本人確認 (eKYC)</h3>
                            <p className="text-sm text-slate-500">マイナンバーカードと顔写真をスマホで撮影してアップロード。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                            <h3 className="font-bold mb-2">カード発行</h3>
                            <p className="text-sm text-slate-500">アプリからデビットカードを注文。届くまで2週間かかるのでお早めに。</p>
                        </div>
                    </div>
                </section>

                {/* Trust / Safety */}
                <section className="bg-white p-8 rounded-2xl border border-slate-200 mb-16 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="bg-slate-100 p-4 rounded-full flex-shrink-0">
                            <ShieldCheck className="w-10 h-10 text-[#2a9d8f]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-slate-800">日本の法律でも認可されています</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Wiseは日本において<strong>「第一種・第二種資金移動業者」</strong>として関東財務局に登録されています（関東財務局長 第00040号）。
                                万が一の場合でも、顧客の資産は法令に基づき100%保全されているため、銀行と同じレベルで安心して利用できます。
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                        <span className="text-[#2a9d8f]">QA</span> よくある質問
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. クレジットカードチャージはできますか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. できますが、カード手数料がかかるため推奨しません。銀行振込（インターネットバンキング等）でWise口座に入金するのが、最も手数料が安くておすすめです。
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. タイでWiseカードが使えない店はありますか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. カード（Visa/Master）が使える店ならどこでも使えます。ただし、タイの屋台やローカル食堂、一部のタクシーは「現金」か「PromptPay」のみの場合が多いです。そのため、WiseカードでATMから現金を引き出しておく必要があります。
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. 英語が苦手でも口座開設できますか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. はい、公式サイトもアプリも、カスタマーサポートもすべて日本語に対応しています。日本のサービスと同じ感覚で使えます。
                            </div>
                        </details>
                    </div>
                </section>

                {/* Conclusion CTA */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                    <span className="inline-block bg-[#9fe870] text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">年会費・登録費無料</span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        お金の不安をなくして、<br />
                        もっと自由に移動しよう。
                    </h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                        浮いた手数料で、美味しいタイ料理を食べるもよし、マッサージに行くもよし。<br className="hidden md:inline" />
                        あなたの大切なお金を、銀行の手数料にするのはもう終わりにしましょう。
                    </p>
                    <Link
                        href={AFFILIATE_LINK}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#9fe870] text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#9fe870]/20"
                    >
                        Wiseに無料で登録する
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="text-sm text-slate-400 mt-6">
                        ※登録・維持費は無料です
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <Link href="../nomad-info" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors underline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
