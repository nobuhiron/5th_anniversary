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
      { id: 'greentea', lead: '国産素材100%使用', name: '宇治抹茶グリーンティー', spec: '[500g]', code: '000000000608' },
      { id: 'mjb', lead: 'MJB(エムジェービー)', name: '水出しアイスコーヒー', spec: '[18g×6袋]', code: '000000000783' },
    ],
  },
  {
    id: 'term2',
    period: '2026年8/21(金)10:00 - 8/31(月)9:59',
    items: [
      { id: 'koricha', lead: '＜ティーバッグ＞', name: '氷茶 水出し煎茶', spec: 'プレミアム [10P入り]', code: '000000000111' },
      { id: 'minton', lead: 'MINTON(ミントン)', name: '和紅茶バラエティーパック', spec: '(2杯分×5種類) [10P]', code: '000000000659' },
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
    code: '000000000281',
  },
  {
    id: 'hotto-instant',
    lead: '＜インスタント＞',
    name: 'ほっと安らぐはちみつ紅茶 [200g]',
    priceBefore: '540円(税込)',
    priceAfter: '380',
    code: '000000000634',
  },
  {
    id: 'kfk-coffee',
    lead: 'KFK(カフカ) ＜コーヒーバッグ＞',
    name: 'はちみつ珈琲 [8袋]',
    priceBefore: '756円(税込)',
    priceAfter: '696',
    code: '000000000568',
  },
] as const;

/** Campaign01 — スタッフの推し商品紹介。1件ずつ支給され次第、上から埋める。
   staff/product/comment が揃った枠は本表示、無い枠は「準備中」プレースホルダ。
   photo は Campaign01.astro 側の画像マップ(PICK_PHOTOS)のキー。 */
const KM_HYOCHA_COMMENT =
  'お湯で淹れて苦みや渋みを楽しむ煎茶とは違い、お茶の甘み・旨味を楽しめる水出し茶。そんな水出し茶を、当社の氷茶なら簡単に作れます。ティーバッグ形式なので簡単に作れて後片付けが簡単なのも嬉しい所。どれも美味しいですが、プレミアム煎茶は後味がすっきりしており、飲みやすいところが特におすすめです。';
const KM_WAKOCHA_COMMENT =
  '国産紅茶「和紅茶」は品質が高く、世界的な評価が高まっています。MINTONの和紅茶はその中でも早くから販売を始めてきました。和紅茶ならではのすっきりとした味わい、そして白桃の「芳醇な甘い香り」は暑い季節にぴったりな一品。ぜひ、一度アイスティで楽しんでいて欲しいです。';
const KM_KOICHA_COMMENT =
  'カフェでも使われている本格的な商品。フロストシュガーが入っているので、水でも簡単に溶けて使いやすくなっています。おすすめはミルクに溶かして飲む抹茶ラテ。お家で簡単に日本茶カフェ気分が味わえる優れものです。';
const NN_UJI_COMMENT =
  'ひと口目から抹茶の旨みがしっかり広がり、後味にはほどよい甘みが残ります。特に牛乳で溶くと、抹茶の濃さとミルクのまろやかさが合わさり、濃厚でリッチな味わいが楽しめます！';
const NN_KUROMAME_COMMENT =
  '口に含んだときの黒豆の自然な甘みがすっきりと感じられ、後味はルイボスらしく軽やか。焙煎香と黒豆の甘みにはしっかり存在感があり、口さみしいときにおやつ代わりに飲むのもおすすめです！';

const SHOP_ITEM = 'https://www.tea-and-coffee.shop/view/item/';

export const STAFF_PICKS = [
  { id: 'pick1', staff: 'KM', product: '氷茶プレミアム煎茶', comment: KM_HYOCHA_COMMENT, photo: 'hyocha', href: `${SHOP_ITEM}000000000111` },
  { id: 'pick2', staff: 'KM', product: 'MINTON和紅茶「白桃」', comment: KM_WAKOCHA_COMMENT, photo: 'wakocha', href: `${SHOP_ITEM}000000000662` },
  { id: 'pick3', staff: 'KM', product: '濃い抹茶パウダー', comment: KM_KOICHA_COMMENT, photo: 'koicha', href: `${SHOP_ITEM}000000000012` },
  { id: 'pick4', staff: 'NN', product: '宇治抹茶グリーンティープレミアム', comment: NN_UJI_COMMENT, photo: 'greentea', href: `${SHOP_ITEM}000000000666` },
  { id: 'pick5', staff: 'NN', product: '黒豆ルイボスティー', comment: NN_KUROMAME_COMMENT, photo: 'kuromame', href: `${SHOP_ITEM}000000000857` },
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
