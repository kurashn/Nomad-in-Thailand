"use client";

import { Link } from '@/i18n/routing';
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronRight, CheckCircle2 } from "lucide-react";

export default function RetreatPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="min-h-screen bg-[#020B18] text-white font-sans overflow-x-hidden">
            {/* 1. Hero Section */}
            <section className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.div 
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/images/retreat/retreat-hero.webp"
                            alt="Chiang Mai Retreat Hero"
                            fill
                            className="object-cover object-center opacity-50"
                            priority
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020B18]/40 via-[#020B18]/60 to-[#020B18]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020B18_100%)] opacity-90" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10 w-full">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div 
                            className="max-w-4xl flex flex-col items-center"
                            initial="hidden" animate="visible" variants={staggerContainer}
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-[#E5B55C] animate-pulse" />
                                <span className="text-[#E5B55C] font-semibold tracking-widest text-xs sm:text-sm">
                                    2026 SUMMER IN CHIANG MAI
                                </span>
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-black mb-6 leading-[1.1] tracking-tight">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 mb-2">
                                    TOTONOI THAI
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E5B55C] via-[#F3D38D] to-[#E5B55C]">
                                    WELLNESS RETREAT
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-lg sm:text-xl md:text-2xl font-medium mb-12 text-white/80 max-w-2xl leading-relaxed">
                                チェンマイの大自然で、心と体をリセットする<br className="hidden sm:block" />
                                <span className="text-white font-bold border-b-2 border-[#E5B55C]/50 pb-1">2泊3日のウェルネス合宿</span>。
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
                                {[
                                    { icon: Calendar, title: "2026年6〜8月", subtitle: "開催予定（調整中）" },
                                    { icon: MapPin, title: "タイ・チェンマイ", subtitle: "大自然の中のヴィラ" },
                                    { icon: Users, title: "少人数限定", subtitle: "安心のコミュニティ" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center text-left gap-4 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 border border-white/10 backdrop-blur-md px-5 py-4 rounded-2xl w-full sm:w-auto hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(229,181,92,0.1)]">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E5B55C]/20 to-transparent flex items-center justify-center shrink-0 border border-[#E5B55C]/20">
                                            <item.icon className="w-5 h-5 text-[#E5B55C]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-sm md:text-base">{item.title}</div>
                                            <div className="text-xs text-white/60 mt-0.5">{item.subtitle}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeIn} className="flex flex-col items-center gap-4">
                                <div className="relative group w-full sm:w-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00A37E] to-[#00d6a4] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
                                    <a
                                        href="https://lin.ee/WYck3Sx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center justify-center gap-4 w-full sm:w-auto min-w-[320px] bg-gradient-to-r from-[#00A37E] to-[#008c6a] text-white px-8 py-5 rounded-full font-bold text-lg transition-all duration-300 border border-white/10"
                                    >
                                        <span>公式LINEで先行案内を受け取る</span>
                                        <div className="w-8 h-8 shrink-0 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#00A37E] transition-all duration-300 group-hover:scale-110 shadow-inner">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </a>
                                </div>
                                <p className="text-sm text-white/60 font-medium flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#00A37E]" />
                                    登録無料・いつでも解除可能
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Concept Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
                        <div className="text-[#E5B55C] text-xs font-bold tracking-[0.2em] mb-4">RETREAT CONCEPT</div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                            都会を離れ、<br />
                            自然の中で整う3日間。
                        </h2>
                        <p className="text-white/80 leading-relaxed mb-6 font-medium">
                            チェンマイの豊かな自然に包まれた豪華ヴィラで、<br className="hidden md:block" />
                            サウナやアイスバス、マッサージ、食事、焚き火を通じて、<br className="hidden md:block" />
                            心と体をリセットしませんか？
                        </p>
                        <p className="text-white/80 leading-relaxed font-medium">
                            日常の喧騒から離れ、仲間とゆるくつながり、<br className="hidden md:block" />
                            自分らしさを取り戻す特別な時間をお届けします。
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/images/retreat/retreat-nature.webp"
                            alt="Nature Concept"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 border-t border-white/10"
                >
                    {[
                        { icon: "🔄", title: "リセット", desc: "心と体を整える" },
                        { icon: "🤝", title: "つながり", desc: "仲間と深く交流" },
                        { icon: "🌿", title: "自然", desc: "大自然に癒される" },
                        { icon: "🧘", title: "ウェルネス", desc: "本質的な健康習慣" },
                        { icon: "✨", title: "非日常", desc: "贅沢なひととき" },
                        { icon: "📈", title: "成長", desc: "自分をアップデート" },
                    ].map((item, idx) => (
                        <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center text-center group">
                            <div className="w-14 h-14 rounded-full border border-[#E5B55C]/30 flex items-center justify-center text-2xl mb-4 bg-[#E5B55C]/5 group-hover:bg-[#E5B55C]/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-[#E5B55C] mb-2">{item.title}</h3>
                            <p className="text-xs text-white/60">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. Experience Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#020B18]/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
                        <div className="text-[#E5B55C] text-xs font-bold tracking-[0.2em] mb-4">EXPERIENCE</div>
                        <h2 className="text-3xl md:text-4xl font-bold">心と体を整える、<br className="md:hidden" />贅沢な体験</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { src: "/images/retreat/retreat-sauna.webp", title: "サウナ", desc: "心と体で汗をかき、\n心身をデトックス。" },
                            { src: "/images/retreat/retreat-icebath.webp", title: "アイスバス", desc: "冷水で引き締め、\n深い整いへ。" },
                            { src: "/images/retreat/retreat-massage.webp", title: "マッサージ", desc: "プロの施術で\n疲れをリリース。" },
                            { src: "/images/retreat/retreat-smoothie.webp", title: "スムージー", desc: "新鮮なフルーツで\n内側からチャージ。" },
                            { src: "/images/retreat/retreat-bonfire.webp", title: "焚き火", desc: "炎を囲んで語らい、\n心を開放。" },
                            { src: "/images/retreat/retreat-bbq.webp", title: "BBQ", desc: "みんなで楽しむ\n美味しい食事。" },
                        ].map((exp, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#E5B55C]/40 transition-colors">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={exp.src} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-[#E5B55C] text-xl font-bold mb-3">{exp.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8 text-xs text-white/50">
                        ※天候や現地状況により内容が変更になる場合がございます。
                    </div>
                </div>
            </section>

            {/* 4. Villa & Lifestyle Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                    <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] w-full">
                        <Image src="/images/retreat/retreat-villa.webp" alt="Luxury Villa" fill className="object-cover" />
                    </div>
                    <div className="lg:col-span-6 p-8 lg:p-12">
                        <div className="text-[#E5B55C] text-xs font-bold tracking-[0.2em] mb-4">VILLA & LIFESTYLE</div>
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[2rem] xl:text-4xl font-bold leading-tight mb-8">
                            <span className="inline-block whitespace-nowrap">大自然の中の豪華ヴィラで、</span><br />
                            <span className="inline-block whitespace-nowrap">心身を深く癒す特別な時間を。</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "プライベートプール付きの贅沢なヴィラに宿泊",
                                "チェンマイの豊かな自然に囲まれた静かな環境",
                                "仲間とゆるくつながり、新しい自分に出会う",
                                "Wi-Fi完備でワーケーションにも最適"
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#E5B55C] shrink-0 mt-0.5" />
                                    <span className="text-white/80 font-medium whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap text-sm lg:text-base">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Schedule Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
                <div className="text-center mb-16">
                    <div className="text-[#E5B55C] text-xs font-bold tracking-[0.2em] mb-4">SCHEDULE (予定)</div>
                    <h2 className="text-3xl md:text-4xl font-bold">2泊3日の<br className="md:hidden" />リトリートプログラム</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Day 1 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                        <div className="text-[#00A37E] font-bold tracking-widest text-sm mb-2">DAY 1</div>
                        <h3 className="font-bold text-lg mb-6">到着・ウェルカム・美味しいディナー</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">15:00</span><span>チェンマイ到着・チェックイン</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">16:00</span><span>ウェルカムスムージー・<br className="md:hidden" />オリエンテーション</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">18:00</span><span>ディナー、交流タイム</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">20:00</span><span>自由時間</span></li>
                        </ul>
                    </div>
                    {/* Day 2 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                        <div className="text-[#00A37E] font-bold tracking-widest text-sm mb-2">DAY 2</div>
                        <h3 className="font-bold text-lg mb-6">整う・癒す・自由時間・焚き火</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">07:00</span><span>チェンマイ大朝ラン</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">09:00</span><span>自由時間</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">15:00</span><span>アイスバス＆サウナ</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">17:00</span><span>マッサージで癒しの時間</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">19:00</span><span>ディナー</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">20:00</span><span>焚き火を囲んで語る</span></li>
                        </ul>
                    </div>
                    {/* Day 3 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                        <div className="text-[#00A37E] font-bold tracking-widest text-sm mb-2">DAY 3</div>
                        <h3 className="font-bold text-lg mb-6">朝整い・交流・解散</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">07:00</span><span>朝の瞑想・整い</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">08:30</span><span>チェックアウト準備・自由時間</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">10:00</span><span>シェア・振り返り・交流</span></li>
                            <li className="flex gap-4"><span className="text-[#E5B55C] w-12 shrink-0">12:00</span><span>チェックアウト・解散</span></li>
                        </ul>
                        <p className="mt-8 text-xs text-white/40">※スケジュールは一部変更となる場合があります。</p>
                    </div>
                </div>
            </section>

            {/* 6. Recommend Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">こんな方におすすめ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "日常から離れて\nリセットしたい方", desc: "忙しい毎日を手放し、\n心と体を整えたい。", img: "/images/retreat/retreat-hero.webp" },
                        { title: "新しい出会いや\nつながりが欲しい方", desc: "価値観の合う仲間と\n深いつながりを。", img: "/images/retreat/retreat-community.webp" },
                        { title: "ウェルネス習慣を\n始めたい方", desc: "サウナや健康的な\n習慣を体験したい。", img: "/images/retreat/retreat-sauna.webp" },
                        { title: "チェンマイの自然を\n満喫したい方", desc: "豊かな自然と\n文化に触れたい。", img: "/images/retreat/retreat-nature.webp" },
                    ].map((item, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden group aspect-[4/3] lg:aspect-square">
                            <Image src={item.img} alt={item.title.replace('\n', '')} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="font-bold text-sm md:text-base text-white mb-2 whitespace-pre-line">{item.title}</h3>
                                <p className="text-xs text-white/70 whitespace-pre-line leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Bottom CTA Section */}
            <section className="py-24 px-6 relative border-t border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/images/retreat/retreat-hero.webp" alt="Background" fill className="object-cover blur-sm" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <div className="text-[#E5B55C] font-bold text-base lg:text-lg mb-2">2026年 6〜8月ごろ開催予定（調整中）</div>
                        <h2 className="text-3xl lg:text-4xl font-black mb-4 whitespace-nowrap">詳細は近日公開！</h2>
                        <p className="text-white/80 text-sm lg:text-base">少人数限定のため、先行案内をお見逃しなく。</p>
                        
                        <div className="flex gap-6 mt-8 hidden md:flex">
                            <div className="flex items-center gap-2 text-sm text-[#E5B55C] whitespace-nowrap">
                                <Users className="w-4 h-4" /> 安心・濃い交流
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#E5B55C] whitespace-nowrap">
                                <CheckCircle2 className="w-4 h-4" /> 整うプログラム満載
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#E5B55C] whitespace-nowrap">
                                <MapPin className="w-4 h-4" /> 贅沢ヴィラで快適に
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-center">
                        <a
                            href="https://lin.ee/WYck3Sx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 bg-[#00A37E] hover:bg-[#008c6a] text-white px-8 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,126,0.4)] hover:shadow-[0_0_30px_rgba(0,163,126,0.6)] w-full md:w-auto"
                        >
                            公式LINEで先行案内を受け取る
                            <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-[#00A37E] transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </a>
                        <p className="mt-4 text-xs text-white/50">LINEで簡単登録！最新情報をお届けします</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
