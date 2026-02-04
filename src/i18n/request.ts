import { getRequestConfig } from 'next-intl/server';

async function loadMessages(locale: string) {
    // Statically import all translation files for the locale
    const messages = {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/home.json`)).default,
        ...(await import(`../../messages/${locale}/dtv-visa.json`)).default,
        ...(await import(`../../messages/${locale}/sponsor.json`)).default,
        ...(await import(`../../messages/${locale}/airalo.json`)).default,
        ...(await import(`../../messages/${locale}/safetywing.json`)).default,
        ...(await import(`../../messages/${locale}/nordvpn.json`)).default,
        ...(await import(`../../messages/${locale}/cafe-guide.json`)).default,
        ...(await import(`../../messages/${locale}/coworking-guide.json`)).default,
        ...(await import(`../../messages/${locale}/bangkok-roadmap.json`)).default,

        ...(await import(`../../messages/${locale}/tax-money-guide.json`)).default,
        ...(await import(`../../messages/${locale}/area-guide.json`)).default,
        ...(await import(`../../messages/${locale}/cheat-sheet.json`)).default,
        ...(await import(`../../messages/${locale}/sim-guide.json`)).default,
        ...(await import(`../../messages/${locale}/transport-guide.json`)).default,
        ...(await import(`../../messages/${locale}/medical-guide.json`)).default,
        ...(await import(`../../messages/${locale}/credit-card.json`)).default,
        ...(await import(`../../messages/${locale}/community.json`)).default,
        ...(await import(`../../messages/${locale}/nomad-tools.json`)).default,
    };

    return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !['en', 'ja'].includes(locale)) {
        locale = 'ja';
    }

    return {
        locale,
        messages: await loadMessages(locale)
    };
});
