import { Mail, MessageCircle, ExternalLink, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "お問い合わせ | 海外ノマドポッドキャスト",
    description: "海外ノマドポッドキャストへのお問い合わせはこちら。取材依頼、コミュニティへの参加、その他ご質問など。",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <div className="bg-primary/5 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        取材のご依頼、コミュニティに関するご質問、<br />
                        その他のお問い合わせはこちらから受け付けております。
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 py-16 px-4">
                <div className="max-w-3xl mx-auto space-y-8">

                    {/* Contact Option 1: General User Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 mb-2">一般のお問い合わせ</h2>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                    Podcastの感想や、コミュニティ参加に関するご質問はこちら。
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                    <li>Podcastのご感想・リクエスト</li>
                                    <li>コミュニティ参加前の相談</li>
                                    <li>その他、カジュアルなご質問</li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="https://forms.gle/Detn3QuqLe2kEy4y7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white font-bold w-full py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            お問い合わせフォームへ <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Contact Option 2: Business/Media */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 mb-2">取材・協業・スポンサー</h2>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                    活動の幅を広げるためのパートナーシップ。
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                    <li>番組スポンサーへのご応募</li>
                                    <li>タイ移住・ノマド関連の取材</li>
                                    <li>イベント登壇・共催のご依頼</li>
                                    <li>プロモーション企画のご相談</li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="https://forms.gle/4DU4CfPtEdavbhnD8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white font-bold w-full py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            お問い合わせフォームへ <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
