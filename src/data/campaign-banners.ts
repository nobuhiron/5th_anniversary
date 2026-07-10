/**
 * nav セクションのバナー一覧。
 * 画像は支給待ちのためプレースホルダ。
 * ratio / 間隔は nav.png（@4x）の実測値:
 *   バナー幅 335 / 左右余白 20 / 縦の間隔 12（いずれも CSS px）
 *   高さ 157(うちわ・CP01・CP02) / 145(CP03・CP04)
 */
export const CAMPAIGN_BANNERS = [
  {
    id: 'uchiwa',
    href: '#campaign-uchiwa',
    ratio: '335 / 157',
    theme: 'light',
    badge: '購入者全員に',
    lead: 'クーポン付き',
    title: 'ミニうちわ\nプレゼント!',
    note: '※なくなり次第終了',
    hasChevron: false,
  },
  {
    id: 'campaign01',
    href: '#campaign01',
    ratio: '335 / 157',
    theme: 'green',
    en: 'Campaign01',
    lead: 'すぐに使えるクーポン当たる!?',
    title: 'おめでとう! 大好き!\nキャンペーン',
    hasChevron: true,
  },
  {
    id: 'campaign02',
    href: '#campaign02',
    ratio: '335 / 157',
    theme: 'cream',
    en: 'Campaign02',
    lead: '商品ご購入で',
    title: 'オリジナルグッズ\nプレゼント',
    hasChevron: true,
  },
  {
    id: 'campaign03',
    href: '#campaign03',
    ratio: '335 / 145',
    theme: 'green-gradient',
    en: 'Campaign03',
    lead: '同商品２点以上の購入で',
    title: 'もう一つもらえる！',
    hasChevron: true,
  },
  {
    id: 'campaign04',
    href: '#campaign04',
    ratio: '335 / 145',
    theme: 'honey',
    en: 'Campaign04',
    lead: '8/3 はちみつの日',
    title: 'はちみつSALE',
    hasChevron: true,
  },
] as const;
