export const LINK_BASE = import.meta.env.PUBLIC_LINK_BASE || process.env.PUBLIC_LINK_BASE || '#';

/** 森半 tea&coffee 公式 LINE（友だち追加 / 右カラムバナー） */
export const LINE_URL = import.meta.env.PUBLIC_LINE_URL || process.env.PUBLIC_LINE_URL || '#';

/** MakeShop の商品詳細 URL を組み立てる */
export const itemUrl = (code: string) => `${LINK_BASE}${code}`;
