import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Nomad Place - タイ移住・ノマド生活コミュニティ'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    // Font
    // const interSemiBold = fetch(
    //   new URL('./Inter-SemiBold.ttf', import.meta.url)
    // ).then((res) => res.arrayBuffer())

    // Load the image
    // In a real app, you might fetch this from your public folder URL or import it if supported
    // For Vercel/Next.js dynamic OG, it's often easiest to use an absolute URL or fetch
    const imageData = await fetch(new URL('../../public/character/nomad-dog-waving-new.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    )

    const logoData = await fetch(new URL('../../public/images/nplogo.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    )

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    position: 'relative',
                }}
            >
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '24px',
                    background: 'linear-gradient(90deg, #2a9d8f 0%, #264653 100%)',
                }} />

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '12px',
                    background: '#e2e8f0',
                }} />

                {/* Content Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    padding: '80px 80px',
                }}>

                    {/* Left Side: Text Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flex: 1,
                            paddingRight: '40px',
                        }}
                    >
                        {/* Logo */}
                        <img
                            // @ts-ignore
                            src={logoData}
                            alt="Nomad Place Logo"
                            style={{
                                width: '380px',
                                objectFit: 'contain',
                                marginBottom: '40px'
                            }}
                        />

                        {/* Badge/Tag */}
                        <div style={{
                            display: 'flex',
                            backgroundColor: '#f1f5f9',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            width: 'fit-content',
                            marginBottom: '24px',
                            border: '1px solid #e2e8f0',
                        }}>
                            <span style={{
                                fontSize: '24px',
                                color: '#475569',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                            }}>
                                タイ移住・ノマド生活コミュニティ
                            </span>
                        </div>

                        {/* Main Heading Text */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span
                                style={{
                                    fontSize: '64px',
                                    color: '#0f172a',
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                世界を旅する<br />
                                新しい働き方を。
                            </span>
                        </div>

                        {/* URL/Footer */}
                        <span style={{
                            marginTop: '40px',
                            fontSize: '28px',
                            color: '#2a9d8f',
                            fontWeight: 700,
                            fontFamily: 'monospace',
                        }}>
                            nomad-place.com
                        </span>
                    </div>

                    {/* Right Side: Image */}
                    <div style={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Circle Element behind dog */}
                        <div style={{
                            position: 'absolute',
                            width: '560px',
                            height: '560px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #e6fffa 0%, #ebf8ff 100%)',
                            zIndex: -1,
                        }} />

                        <img
                            // @ts-ignore
                            src={imageData}
                            alt="Nomad Dog"
                            width="580"
                            height="580"
                            style={{
                                objectFit: 'contain',
                                transform: 'translateY(20px) scale(1.1)',
                            }}
                        />
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
