export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    category,
    withFrame,
    productName,
    size,
    store,
    site,
    delivery,
  } = req.body;

  // 示例映射（请根据实际需求修改）
  const categoryMap = {
    '数字油画': 'PBN',
    // 添加其他映射
  };

  const storeMap = {
    'sumgar': 'SG',
    // 添加其他映射
  };

  const siteMap = {
    '美国': 'US',
    // 添加其他映射
  };

  const categoryCode = categoryMap[category] || category;
  const storeCode = storeMap[store] || store;
  const siteCode = siteMap[site] || site;
  const frameTag = withFrame ? ' F' : '';
  const fbmTag = delivery === 'FBM' ? ' FBM' : '';

  const sku = `${categoryCode}${frameTag} ${productName} ${size} ${storeCode} ${siteCode}${fbmTag}`.trim();

  res.status(200).json({ sku });
}
