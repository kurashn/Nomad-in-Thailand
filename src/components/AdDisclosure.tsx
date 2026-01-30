
import { useTranslations } from 'next-intl';

export default function AdDisclosure() {
    const t = useTranslations('Common');

    return (
        <div className="text-xs text-muted-foreground/60 mb-4">
            {t('ad_disclosure')}
        </div>
    );
}
