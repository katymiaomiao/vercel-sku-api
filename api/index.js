const categoryMap = {
  "数字油画": "PBN", "浴帘": "SC", "挂毯": "TP", "装饰画": "WA",
  "置物架": "FS", "阴影盒": "SB", "相框": "PF", "枕套": "PC",
  "钻石画": "DP", "桌子": "TB", "烛台": "CS", "手机壳": "IPC", "拼图": "JP"
};

const storeMap = {
  sumgar: "SG", Gronda: "GD", Takfot: "TK", Lamping: "LP", Adecuado: "AD",
  Geeignet: "GE", Kindom: "KD", Xstar: "XT", Slody: "SD", Talesay: "TS",
  Abert: "AB", Beitly: "BT", Ruby: "RB", Petrala: "PT", Ptlignt: "PL",
  "Green-s": "GS", Afuly: "AF", FTLhome: "FTL"
};

const siteMap = {
  美国: "US", 英国: "UK", 德国: "DE"
};

// ✅ 这是关键部分，Vercel 要求使用 default 导出一个 handler 函数
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed." });
  }

  const {
    category, withFrame, productName, size, store, site, delivery,
  } = req.body;

  const categoryCode = categoryMap[category] || category;
  const storeCode = storeMap[store] || store;
  const siteCode = siteMap[site] || site;
  const frameTag = withFrame ? " F" : "";
  const fbmTag = delivery === "FBM" ? " FBM" : "";

  const sku = `${categoryCode}${frameTag} ${productName} ${size} ${storeCode} ${siteCode}${fbmTag}`.trim();

  res.status(200).json({ sku });
}
