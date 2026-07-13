/** Campaign02 — 商品合計金額に応じたオリジナルグッズ */
export const GOODS_ITEMS = [
  { id: 'soebumisen', range: '3,240円〜5,399円', name: 'そえぶみ箋', tone: 'olive' },
  { id: 'pukupuku', range: '5,400円〜8,639円', name: 'ぷくぷくシール', tone: 'green' },
  { id: 'tenugui', range: '8,640円〜14,999円', name: '手ぬぐい', tone: 'green' },
  { id: 'kumahan', range: '15,000円〜', name: 'くま半ぬいぐるみ', tone: 'olive' },
] as const;

export const GOODS_NOTES = [
  'ご注文者様とお届け先が異なる場合、プレゼントはお届け先に同送いたします。',
  '数に限りがございます。予定数量に達し次第予告なく終了となりますので予めご了承ください。',
  'ご注文時に複数配送先をご希望された場合は、対象外となります。',
  '対象金額は送料を除く、ポイント・クーポン使用前の商品合計金額です。',
  'ケース配送品・冷凍商品は対象外となります。',
] as const;

/** Campaign03 — Plus1キャンペーン。期間ごとの対象商品 */
export const PLUS1_TERMS = [
  {
    id: 'term1',
    period: '2026年8/1(土)10:00 - 8/17(月)9:59',
    items: [
      { id: 'greentea', lead: '国産素材100%使用', name: '宇治抹茶グリーンティー', spec: '[500g]', code: '' },
      { id: 'mjb', lead: 'MJB(エムジェービー)', name: '水出しアイスコーヒー', spec: '[18g×6袋]', code: '' },
    ],
  },
  {
    id: 'term2',
    period: '2026年8/21(金)10:00 - 8/31(月)9:59',
    items: [
      { id: 'koricha', lead: '＜ティーバッグ＞', name: '氷茶 水出し煎茶', spec: 'プレミアム [10P入り]', code: '' },
      { id: 'minton', lead: 'MINTON(ミントン)', name: '和紅茶バラエティーパック', spec: '(2杯分×5種類) [10P]', code: '' },
    ],
  },
] as const;

export const PLUS1_CONDITION = [
  { text: 'キャンペーンは、', em: false },
  { text: '同一対象商品を2点同時に', em: true },
  { text: '\n', em: false },
  { text: 'ご購入の場合に適応', em: true },
  { text: 'されます。\n', em: false },
  { text: '対象商品でも“異なる2品の組み合わせ”、また\nは“対象外との組み合わせ”のみご購入の場合は、\nプレゼント付与対象外となります。\n2点ご購入毎ではありません。', em: false },
] as const;

/** Campaign04 — はちみつ紅茶SALE（8/3 限定） */
export const HONEY_SALE_PERIOD = '2026年8/3(月)0:00 - 8/3(月)23:59';

export const HONEY_SALE_ITEMS = [
  {
    id: 'shiawase-tea',
    lead: '＜ティーバッグ＞',
    name: 'しあわせのはちみつ紅茶 [20P]',
    priceBefore: '1000円(税込)',
    priceAfter: '888',
    code: '',
  },
  {
    id: 'hotto-instant',
    lead: '＜インスタント＞',
    name: 'ほっと安らぐはちみつ紅茶 [200g]',
    priceBefore: '540円(税込)',
    priceAfter: '380',
    code: '',
  },
  {
    id: 'kfk-coffee',
    lead: 'KFK(カフカ) ＜コーヒーバッグ＞',
    name: 'はちみつ珈琲 [8袋]',
    priceBefore: '756円(税込)',
    priceAfter: '696',
    code: '',
  },
] as const;

/** Campaign01 — スタッフの推し商品紹介（コメントは支給待ちのダミー） */
export const STAFF_PICKS = [
  { id: 'pick1', staff: 'A.A', comment: 'ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。' },
  { id: 'pick2', staff: 'A.A', comment: 'ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。' },
  { id: 'pick3', staff: 'A.A', comment: 'ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。' },
] as const;

/** ポイントアップセール */
export const POINT_UP = {
  lead: '毎月恒例の\nポイントアップ・セールは\n周年期間中でも開催いたします！',
  titleEn: 'POINT UP',
  titleJa: 'キャンペーン',
  period: '2026年8/7(金)10:00 - 8/8(土)9:59',
  brands: '森半・CAFE KFK(カフェ カフカ)・\nMJB(エムジェービー)・MINTON(ミントン)・\nKAUAI coffee(カウアイコーヒー)の',
  brandsEm: '5ブランドの全商品のポイントを+6％還元！',
  href: 'https://www.tea-and-coffee.shop/view/category/ct102',
} as const;

export const LIMITED_SALE = {
  lead: '24時間限定',
  title: 'SALE',
  period: '2026年8/20(木)0:00 - 8/20(木)23:59',
  href: 'https://www.tea-and-coffee.shop/view/category/sale',
} as const;
