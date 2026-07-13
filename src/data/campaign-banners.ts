/**
 * nav セクションのバナー一覧。
 * 支給画像（nav-image--*.jpg）は見出し・ピル・シェブロンまで焼き込まれた完成版なので、
 * 文言は alt で読み上げる。
 * nav.svg (viewBox 375x925) 実測:
 *   バナー幅 335 / 左右余白 20 / 縦の間隔 12 / 上 56 / 下 60（いずれも CSS px）
 *   高さ 157(うちわ・CP01・CP02) / 145(CP03・CP04)
 */
export const CAMPAIGN_BANNERS = [
  {
    id: 'uchiwa',
    href: '#campaign-uchiwa',
    alt: '購入者全員に クーポン付きミニうちわプレゼント! ※なくなり次第終了',
  },
  {
    id: 'campaign01',
    href: '#campaign01',
    alt: 'Campaign01 すぐに使えるクーポン当たる!? おめでとう! 大好き!キャンペーン',
  },
  {
    id: 'campaign02',
    href: '#campaign02',
    alt: 'Campaign02 商品ご購入で オリジナルグッズプレゼント',
  },
  {
    id: 'campaign03',
    href: '#campaign03',
    alt: 'Campaign03 同商品2点以上の購入で もう一つもらえる！',
  },
  {
    id: 'campaign04',
    href: '#campaign04',
    alt: 'Campaign04 8/3 はちみつの日 はちみつSALE',
  },
] as const;
