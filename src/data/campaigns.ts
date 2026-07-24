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
  'ティーバッグ形式なので手軽に作れて後片付けが簡単なのも嬉しい所。どれも美味しいですが、プレミアム煎茶は後味がすっきりしており、飲みやすいところが特におすすめです。';
const SY_WAKOCHA_COMMENT =
  '和紅茶ならではのすっきりとした味わい、そして白桃の「芳醇な甘い香り」は暑い夏にぴったりな一品。ぜひ、一度アイスティで楽しんでいて欲しいです！';
const KM_KOICHA_COMMENT =
  'フロストシュガーが入っているので、水でも簡単に溶けて使いやすくなっています。おすすめはミルクに溶かして飲む抹茶ラテ。お家で簡単に日本茶カフェ気分が味わえる優れものです。';
const NN_UJI_COMMENT =
  'ひと口目から抹茶の旨みがしっかり広がり、後味にはほどよい甘みが残ります。特に牛乳で溶くと、抹茶の濃さとミルクのまろやかさが合わさり、濃厚でリッチな味わいが楽しめます！';
const NN_KUROMAME_COMMENT =
  '口に含んだときの黒豆の自然な甘みがすっきりと感じられ、後味はルイボスらしく軽やか。焙煎香と黒豆の甘みにはしっかり存在感があり、口さみしいときにおやつ代わりに飲むのもおすすめです！';
const NM_HOJICHA_COMMENT =
  '優しい甘さのクッキー生地と、お茶の風味豊かなクリームが絶品のスイーツです。なかでも、濃厚なほうじ茶クリームは、ほかでは味わえないお茶屋さんならではの味わい。こだわりが詰まった、珠玉の一品です。';
const OT_CHASTA_COMMENT =
  'お茶だけでなくコーヒーも淹れられる、多用途さが一番の魅力です！お出汁を入れて、だし茶漬けを楽しんだりと自由奔放に使ってます。ずぼらな私でも使い続けられるくらい、洗いやすいのもお気に入りのポイント。販売開始と同じタイミングで入社したので、私にとっては「同期」のような存在です。';
const OT_COOKIE_COMMENT =
  '森半のお菓子の中で、一番お気に入りです！抹茶のほろ苦さがしっかり感じられて、一口でぱくっと食べられるサイズ感もちょうどいい。気づくと、ついもう一つ手が伸びてしまいます。';
const OT_ASATSUYU_COMMENT =
  'ひと口目の力強い味わいに、きっと驚くはず。そのインパクトがあるのに、不思議と「もう一口」と飲み進めたくなるお抹茶です。味わいがしっかりしているので、抹茶ラテにしても、お抹茶本来の存在感をしっかり楽しめます。';
const HR_KFK_COMMENT =
  '水出しならではの軽やかさで、まるで紅茶のような飲み口。ほのかに甘い香りはありますが強く主張してこないので、食事にも合わせやすいです。後味は軽く酸を残してすっと引いていくので、暑い日でもごくごく飲めてしまいます。';
const TE_DAIFUKU_COMMENT =
  '森半がスイーツ販売を始めた初期から、長く親しまれてきた定番の抹茶大福。もっちりとした食感に抹茶クリームのまろやかなコクと、こし餡の上品な甘さが重なり合い、ひと口で抹茶の魅力をしっかり感じられます。幅広い年代の方におすすめできる自信の一品です。';

const SHOP_ITEM = 'https://www.tea-and-coffee.shop/view/item/';

export const STAFF_PICKS = [
  { id: 'pick1', staff: 'KM', product: '氷茶プレミアム煎茶', comment: KM_HYOCHA_COMMENT, photo: 'hyocha', href: `${SHOP_ITEM}000000000111` },
  { id: 'pick2', staff: 'OT', product: 'CHASTA（チャスタ）', comment: OT_CHASTA_COMMENT, photo: 'chasta', href: `${SHOP_ITEM}000000000316` },
  { id: 'pick3', staff: 'NN', product: '宇治抹茶グリーンティープレミアム', comment: NN_UJI_COMMENT, photo: 'greentea', href: `${SHOP_ITEM}000000000666` },
  { id: 'pick4', staff: 'TE', product: '抹茶大福', comment: TE_DAIFUKU_COMMENT, photo: 'daifuku', href: `${SHOP_ITEM}000000000200` },
  { id: 'pick5', staff: 'SY', product: 'MINTON和紅茶「白桃」', comment: SY_WAKOCHA_COMMENT, photo: 'wakocha', href: `${SHOP_ITEM}000000000662` },
  { id: 'pick6', staff: 'OT', product: '抹茶クッキー', comment: OT_COOKIE_COMMENT, photo: 'cookie', href: `${SHOP_ITEM}000000000163` },
  { id: 'pick7', staff: 'KM', product: '濃い抹茶パウダー', comment: KM_KOICHA_COMMENT, photo: 'koicha', href: `${SHOP_ITEM}000000000012` },
  { id: 'pick8', staff: 'NM', product: 'ほうじ茶ヴァッフェル', comment: NM_HOJICHA_COMMENT, photo: 'waffel', href: `${SHOP_ITEM}000000000174` },
  { id: 'pick9', staff: 'OT', product: '品種抹茶「朝露（あさつゆ）」', comment: OT_ASATSUYU_COMMENT, photo: 'asatsuyu', href: `${SHOP_ITEM}000000000802` },
  { id: 'pick10', staff: 'HR', product: 'KFK 水出しアイスコーヒー', comment: HR_KFK_COMMENT, photo: 'icecoffee', href: `${SHOP_ITEM}000000000774` },
  { id: 'pick11', staff: 'NN', product: '黒豆ルイボスティー', comment: NN_KUROMAME_COMMENT, photo: 'kuromame', href: `${SHOP_ITEM}000000000857` },
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
