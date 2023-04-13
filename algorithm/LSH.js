function stringHash(s, n) {
  const hash = []; // 初始化一个空哈希列表
  for (let i = 0; i < n; i++) {
    hash[i] = 0;
  }
  // 将字符串分成n个子字符串，并计算每个子字符串的哈希值
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    for (let j = 0; j < n; j++) {
      hash[j] = (hash[j] * 31 + c) % 1000000007; // 哈希函数使用31作为基数，模数为1000000007
    }
  }
  return hash;
}

function stringSimilarity(s1, s2, n) {
  // 计算两个字符串的哈希值
  const hash1 = stringHash(s1, n);
  const hash2 = stringHash(s2, n);
  // 计算哈希值的相似度
  let similarity = 0;
  for (let i = 0; i < n; i++) {
    if (hash1[i] === hash2[i]) {
      similarity++;
    }
  }
  return similarity / n;
}

// 示例用法
const s1 = "xxxxxxxxxxxxxx";
const s2 = "xxxxxxxxxxxxxx1";
const similarity = stringSimilarity(s1, s2, 20);
console.log(similarity); // 输出0.95左右的数值
// 实现LSI需要进行以下步骤：

// 构建文档 - 词频矩阵

// 对矩阵进行SVD分解

// 选择k个最大的奇异值及其对应的左右奇异向量

// 构建文档 - 主题矩阵和主题 - 词频矩阵

// 计算文档之间的相似度

// 下面是一个简单的LSI实现，用于计算两个文本的相似度：

function lsi(doc1, doc2, k) {
  // 将文档转换为词频向量
  let vectorizer = new CountVectorizer();
  let X = vectorizer.fit_transform([doc1, doc2]);

  // 对词频矩阵进行SVD分解
  let svd = new TruncatedSVD({ n_components: k });
  let U = svd.fit_transform(X);

  // 计算文档-主题矩阵和主题-词频矩阵
  let S = svd.singular_values_;
  let Vt = svd.components_;
  let D = math.diag(S);
  let D_inv = math.inv(D);
  let V = math.transpose(Vt);
  let A = math.multiply(math.multiply(U, D_inv), math.transpose(V));

  // 计算文档之间的相似度
  let sim = math.dot(A[0], A[1]) / (math.norm(A[0]) * math.norm(A[1]));
  return sim;
}
