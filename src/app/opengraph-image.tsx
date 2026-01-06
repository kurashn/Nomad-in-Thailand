import { ImageResponse } from 'next/og'
import { join } from 'path'
import { readFile } from 'fs/promises'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Nomad in Thailand -ノマタイ-'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    // Load the dog image
    const imageBuffer = await readFile(join(process.cwd(), 'public/character/nomad-dog-hero-white.png'))
    const imageData = imageBuffer.buffer.slice(imageBuffer.byteOffset, imageBuffer.byteOffset + imageBuffer.byteLength)

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #f1f5f9 2%, transparent 0%), radial-gradient(circle at 75px 75px, #f1f5f9 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                }}
            >
                <img
                    // @ts-ignore
                    src={imageData}
                    alt="Nomad Dog"
                    width="300"
                    height="300"
                    style={{
                        objectFit: 'contain',
                        marginBottom: '30px',
                    }}
                />

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{
                        fontSize: '80px',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(to right, #2a9d8f, #264653)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                        Nomad in Thailand
                    </div>
                    <div style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#64748b',
                        letterSpacing: '0.1em',
                    }}>
                        - ノマタイ -
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
