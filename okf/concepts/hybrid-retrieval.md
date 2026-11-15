---
okf_version: "0.2"
type: Class
title: Hybrid Retrieval
resource: urn:ngm:class:hybrid-retrieval
domain: ai
description: Hybrid retrieval is an information-retrieval technique that combines lexical (sparse, keyword-based) scoring such as BM25 with semantic (dense, embedding-based) vector search to rank documents. By fusing the complementary strengths of exact-term matching and meaning-based similarity, it improves recall and precision over either method alone. Fusion is typically performed with reciprocal rank fusio
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
enables:
  - urn:ngm:class:ai-search
relatedTo:
  - urn:ngm:class:semantic-search
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hybrid Retrieval

Hybrid retrieval is an information-retrieval technique that combines lexical (sparse, keyword-based) scoring such as BM25 with semantic (dense, embedding-based) vector search to rank documents. By fusing the complementary strengths of exact-term matching and meaning-based similarity, it improves recall and precision over either method alone. Fusion is typically performed with reciprocal rank fusion or weighted score combination.
