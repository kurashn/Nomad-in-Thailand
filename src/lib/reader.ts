import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const readerConfig = {
    ...keystaticConfig,
    storage: {
        kind: 'local' as const,
    }
};

export const reader = createReader(process.cwd(), readerConfig);
