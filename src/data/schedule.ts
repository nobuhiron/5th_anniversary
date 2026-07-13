/**
 * キャンペーンスケジュールの 2×2 カード。
 * 支給画像（campaign01-04.png）は見出し・ピルまで焼き込まれた完成版で、
 * カードはリンクにしない（遷移は nav セクションのバナーが担う）。
 * 文言は alt で読み上げるためだけに持つ。
 */
export const SCHEDULE_CARDS = [
  {
    id: 'campaign01',
    en: 'Campaign01',
    title: 'おめでとう!\n大好き!\nキャンペーン',
  },
  {
    id: 'campaign02',
    en: 'Campaign02',
    title: 'オリジナル\nグッズ\nプレゼント',
  },
  {
    id: 'campaign03',
    en: 'Campaign03',
    title: '同商品\n2点以上の購入で\nもう一つもらえる!',
  },
  {
    id: 'campaign04',
    en: 'Campaign04',
    title: '8/3 はちみつの日\nはちみつSALE',
  },
] as const;

/* カレンダーは支給の calendar.png（日付・帯・バッジ込みの一枚画）に置き換えたため、
   帯・強調セル・マーカーの定義は不要になった。内容は画像の alt に持たせている。 */
