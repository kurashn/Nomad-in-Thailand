"use client";

import React, { useEffect } from "react";

export default function RunClubLP() {
  useEffect(() => {
    // Scroll-triggered fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-h1-mobile-center">
              走る。整える。繋がる。<br />
              チェンマイで。
            </h1>
            <p className="hero-lead hero-lead-mobile-center">
              AI時代に、健康と繋がりを<br className="sp-only-br" />大切にする人たちのコミュニティ。<br />
              ノマド・フリーランス・経営者が中心。<br />
              平日 朝ラン 6時〜8時
            </p>

            <div className="hero-buttons">
              <a href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer" className="hero-cta">
                朝ランに参加する
              </a>
              <a href="#activities" className="hero-cta-secondary">
                活動内容を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* MAIN CONTENT */}

      <main className="main-content-area">

        {/* ABOUT */}
        <div className="section-wrapper" id="community-wrapper">
  <div className="content">
      <section className="panel about fade-in" id="community">
                <h2 className="section-title serif">Chiang Mai Run Clubとは</h2>
                <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.2em' }}>
                  <p style={{ margin: 0 }}>
                    平日朝6時〜8時、チェンマイの溜池を走ります。<br className="pc-only-br" />
                    ランの後はカフェに行くことも<br className="sp-only-br" />あります。
                  </p>
                  <p style={{ margin: 0 }}>
                    週4回（月・火・木・金）はジムで合同トレーニング。<br className="pc-only-br" />
                    その他のイベントも<br className="sp-only-br" />不定期で開催しています。
                  </p>
                  <p style={{ margin: 0 }}>
                    参加者はノマド、フリーランス、経営者、<br className="pc-only-br" />
                    投資家、チェンマイ在住者、<br className="sp-only-br" />移住検討者が中心です。
                  </p>
                </div>
                <div className="feature-grid">
                  <article className="feature-card fade-in">
                    <img src="/ctc-assets/icon3.webp" alt="" />
                    <h3>01. 週1から<br className="pc-only-br" />続けられる</h3>
                    <p>朝ランから始められます。<br className="sp-only-br" />ペースの指定はありません。</p>
                  </article>
                  <article className="feature-card fade-in">
                    <img src="/ctc-assets/icon4.webp" alt="" />
                    <h3>02. 似た環境の人が<br className="pc-only-br" />集まっている</h3>
                    <p>ノマド・フリーランス・経営者・投資家が<br className="sp-only-br" />中心です。</p>
                  </article>
                  <article className="feature-card fade-in">
                    <img src="/ctc-assets/icon2.webp" alt="" />
                    <h3>03. 名刺交換のない<br className="pc-only-br" />関係</h3>
                    <p>サウナや食事から始まる、<br className="sp-only-br" />肩書きのないつながり。</p>
                  </article>
                  <article className="feature-card fade-in">
                    <img src="/ctc-assets/icon1.webp" alt="" />
                    <h3>04. チェンマイに<br className="pc-only-br" />居場所ができる</h3>
                    <p>在住者にも移住検討者にも参加できます。</p>
                  </article>
                </div>
              </section>
  </div>
</div>

        {/* ACTIVITIES */}
        <div className="section-wrapper" id="activities-wrapper">
  <div className="content">
      <section className="panel activities fade-in" id="activities">
                <h2 className="section-title serif ornament-title">主な活動</h2>
      
                <div className="activity-grid">
                  <article className="activity-card fade-in">
                    <div className="activity-icon">
                      <img src="/ctc-assets/run.webp" alt="" />
                    </div>
                    <h3>朝ラン</h3>
                    <p>平日毎日 6:00〜。<br />溜池のほとりを自分のペースで。</p>
                  </article>
      
                  <article className="activity-card fade-in">
                    <div className="activity-icon">
                      <img src="/ctc-assets/gym.webp" alt="" />
                    </div>
                    <h3>合トレ</h3>
                    <p>月・火・木・金 16:00〜。<br />ジムで共に汗を流す。</p>
                  </article>
      
                  <article className="activity-card activity-card-full fade-in">
                    <div className="activity-icon">
                      <img src="/ctc-assets/event.webp" alt="" />
                    </div>
                    <div className="activity-card-full-content">
                      <span className="activity-card-full-badge">MONTHLY EVENT</span>
                      <h3>月1イベント</h3>
                      <div className="event-pills">
                        <span className="event-pill"><img src="/ctc-assets/party.webp" alt="" />食事会・飲み会</span>
                        <span className="event-pill"><img src="/ctc-assets/soccer.webp" alt="" />フットサル大会</span>
                        <span className="event-pill"><img src="/ctc-assets/sauna.webp" alt="" />サウナ / アイスバス</span>
                        <span className="event-pill"><img src="/ctc-assets/game.webp" alt="" />ゲーム大会</span>
                      </div>
                    </div>
                  </article>
                </div>
      
              </section>
  </div>
</div>



        {/* FLOW */}
        <div className="section-wrapper" id="flow-wrapper">
  <div className="content">
      <section className="panel flow fade-in" id="flow">
                <h2 className="section-title serif ornament-title">参加の流れ</h2>
                <div className="flow-row flow-row-3">
                  <article className="flow-card">
                    <div className="flow-num">01</div>
                    <div className="flow-icon"><img src="/ctc-assets/3.webp" alt="" /></div>
                    <h3>公式LINEを<br />追加する</h3>
                    <p><span style={{ display: 'inline-block' }}>まずは公式LINEに登録。</span><wbr/><span style={{ display: 'inline-block' }}>日程や集合場所を確認できます。</span></p>
                  </article>
                  <span className="flow-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#c0b5a4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <article className="flow-card">
                    <div className="flow-num">02</div>
                    <div className="flow-icon"><img src="/ctc-assets/2.webp" alt="" style={{ transform: 'scale(1.3)' }} /></div>
                    <h3>朝ランに<br />参加する</h3>
                    <p><span style={{ display: 'inline-block' }}>溜池のほとりへ。</span><wbr/><span style={{ display: 'inline-block' }}>自分のペースで気軽に参加してください。</span></p>
                  </article>
                  <span className="flow-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#c0b5a4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <article className="flow-card">
                    <div className="flow-num">03</div>
                    <div className="flow-icon"><img src="/ctc-assets/1.webp" alt="" /></div>
                    <h3>Discordへ<br />参加する</h3>
                    <p><span style={{ display: 'inline-block' }}>参加後、専用Discordへご招待。</span><wbr/><span style={{ display: 'inline-block' }}>イベント情報やメンバー同士の交流ができます。</span></p>
                  </article>
                </div>
              </section>
  </div>
</div>

        {/* RECOMMEND */}
        <div className="section-wrapper" id="recommend-wrapper">
  <div className="content">
      <section className="panel recommend fade-in">
                <h2 className="section-title serif">こんな人におすすめ</h2>
                <div className="recommend-inner">
                  <div className="recommend-grid">
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>スキルより、健康と人間関係を優先するようになった</p>
                    </article>
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>AIに任せるほど、自分が何をすべきか見えなくなった</p>
                    </article>
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>SNSの繋がりより、一緒に汗をかいた人と繋がりたい</p>
                    </article>
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>場所も時間も自由だからこそ、習慣と仲間が必要だと感じている</p>
                    </article>
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>チェンマイという選択をした、またはしようとしている</p>
                    </article>
                    <article className="recommend-card">
                      <div className="recommend-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>日本を離れるほど、リアルな繋がりの大切さがわかった</p>
                    </article>
                  </div>
                </div>
              </section>
  </div>
</div>



        {/* FAQ */}
        <div className="section-wrapper" id="faq-wrapper">
  <div className="content">
      <section className="panel faq fade-in" id="faq">
                <h2 className="section-title serif">よくある質問</h2>
                <div className="faq-list">
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>1人での参加でも大丈夫ですか？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>1人で参加しているメンバーがほとんどです。</p>
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>短期滞在中でも参加できますか？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>参加できます。チェンマイ滞在中であれば、期間の制限はありません。</p>
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>運動が苦手でも大丈夫ですか？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>朝ランのペースは自由です。走らず歩いても問題ありません。</p>
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>参加費はかかりますか？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>参加費は無料です。</p>
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>Discordコミュニティに参加するには？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>朝ランに参加した方をDiscordにご招待しています。まずは朝ランに来てください。</p>
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-icon">Q</span>
                      <h3>毎回参加しないといけませんか？</h3>
                      <span className="faq-toggle"></span>
                    </summary>
                    <div className="faq-a">
                      <p>来れる時に来てください。参加は自由、欠席の連絡も不要です。</p>
                    </div>
                  </details>
                </div>
              </section>
  </div>
</div>

        {/* LINE CTA */}
        <div className="section-wrapper" id="line-wrapper">
  <div className="content" style={{ paddingTop: '0' }}>
      <section className="line-section fade-in" id="line">
                <img className="bottom-logo" src="/ctc-assets/logowhite.webp" alt="Chiang Mai Run Club" style={{ maxWidth: '160px', height: 'auto', marginBottom: '16px' }} />
                <div className="line-text">
                  <h2>次の朝ランに来てみてください。</h2>
                  <p>公式LINEで最新のスケジュールをご案内しています。</p>
                </div>
                <a className="line-section-cta" href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer">
                  今週の活動スケジュールを見る
                </a>
              </section>
  </div>
</div>
      </main>

      
    </>
  );
}
