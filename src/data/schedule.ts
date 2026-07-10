/** キャンペーンスケジュールの 2×2 カード */
export const SCHEDULE_CARDS = [
  {
    id: 'campaign01',
    en: 'Campaign01',
    title: 'おめでとう!\n大好き!\nキャンペーン',
    href: '#campaign01',
    theme: 'green',
  },
  {
    id: 'campaign02',
    en: 'Campaign02',
    title: 'オリジナル\nグッズ\nプレゼント',
    href: '#campaign02',
    theme: 'cream',
  },
  {
    id: 'campaign03',
    en: 'Campaign03',
    title: '同商品\n2点以上の購入で\nもう一つもらえる!',
    href: '#campaign03',
    theme: 'green-gradient',
  },
  {
    id: 'campaign04',
    en: 'Campaign04',
    title: '8/3 はちみつの日\nはちみつSALE',
    href: '#campaign04',
    theme: 'honey',
  },
] as const;

/**
 * カレンダー上の帯（開始日〜終了日, 色）。
 * lane: セル下端からの段数。0 が最下段、1 はその 18px 上。
 * カンプ実測: 帯高 15px / 段の間隔 18px / 行高 69px。
 * ポイントUP DAY は Plus1 の帯の上に重なる。
 */
export const CALENDAR_BARS = [
  { label: 'Plus1キャンペーン 第1弾', from: 1, to: 17, tone: 'green-light', lane: 0 },
  { label: 'Plus1キャンペーン 第2弾', from: 21, to: 31, tone: 'blue-sky', lane: 0 },
  { label: 'ポイントUP DAY', from: 7, to: 8, tone: 'green-deep', lane: 1 },
] as const;

/** 淡い塗りのセル（対象日を強調） */
export const CALENDAR_HIGHLIGHTS = [
  { day: 7, tone: 'green' },
  { day: 8, tone: 'green' },
  { day: 20, tone: 'blue' },
] as const;

/**
 * カレンダー上のマーカー（吹き出し / バッジ）。
 * カンプ実測(カード左上基準, CSS): 吹き出し w125 / 六角形 w49 / 円 w46 / 印 w55。
 * anchor はマーカーをその日のセルのどちら側に寄せるか。
 */
export const CALENDAR_MARKS = [
  { day: 1, label: 'Plus1\nキャンペーン\n第1弾', shape: 'bubble', tone: 'green-light', anchor: 'right' },
  { day: 3, label: 'はちみつ\n紅茶\nセール', shape: 'hexagon', tone: 'orange', anchor: 'center' },
  { day: 7, label: 'ポイント\nUP\nDAY', shape: 'circle', tone: 'green-vivid', anchor: 'center' },
  { day: 20, label: '毎月恒例\nSALE', shape: 'seal', tone: 'teal-dark', anchor: 'center' },
  { day: 21, label: 'Plus1\nキャンペーン\n第2弾', shape: 'bubble', tone: 'teal-dark', anchor: 'left' },
] as const;

export const CALENDAR_YEAR = 2026;
export const CALENDAR_MONTH = 8;
export const WEEKDAY_LABELS = ['日', '月', '火', '水', '木', '金', '土'] as const;
