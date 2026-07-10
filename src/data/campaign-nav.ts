/**
 * PC 右カラム(chrome) の Campaign ナビ。
 * カンプの表記に合わせる。8/3 は月曜（カンプのフッター表記 (金) は誤りのため (月) に統一）。
 */
export const CAMPAIGN_NAV_ITEMS = [
  { label: '5周年イベント全体スケジュール', href: '#schedule' },
  { label: 'おめでとう! 大好き!キャンペーン', href: '#campaign01' },
  { label: 'オリジナルグッズプレゼント', href: '#campaign02' },
  { label: 'Plus1キャンペーン', href: '#campaign03' },
  { label: '8/3(月) はちみつSALE', href: '#campaign04' },
] as const;

/** フッターのナビ。1項目目だけ右カラムと文言が異なる（カンプ準拠） */
export const FOOTER_NAV_ITEMS = [
  { label: '5周年キャンペーンスケジュール', href: '#schedule' },
  { label: 'おめでとう! 大好き!キャンペーン', href: '#campaign01' },
  { label: 'オリジナルグッズプレゼント', href: '#campaign02' },
  { label: 'Plus1キャンペーン', href: '#campaign03' },
  { label: '8/3(月) はちみつSALE', href: '#campaign04' },
] as const;
