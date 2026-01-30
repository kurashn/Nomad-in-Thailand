import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
    const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
    const secret = process.env.KEYSTATIC_SECRET;

    return NextResponse.json({
        NODE_ENV: process.env.NODE_ENV,
        VERCEL: process.env.VERCEL,
        KEYSTATIC_GITHUB_CLIENT_ID: {
            exists: !!clientId,
            length: clientId?.length,
            prefix: clientId?.substring(0, 5) + '...'
        },
        KEYSTATIC_GITHUB_CLIENT_SECRET: {
            exists: !!clientSecret,
            length: clientSecret?.length,
            startsWith: clientSecret ? clientSecret.substring(0, 3) + '...' : null
        },
        KEYSTATIC_SECRET: {
            exists: !!secret,
            length: secret?.length
        }
    });
}
