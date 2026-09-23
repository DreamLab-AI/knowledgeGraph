---
okf_version: "0.2"
type: Class
title: Common Crawl
resource: urn:ngm:class:common-crawl
domain: artificial-intelligence
description: Common Crawl is a California 501(c)3 non-profit organisation founded in 2008 by Gil Elbaz that maintains a petabyte-scale, freely accessible archive of web crawl data stored on Amazon S3 under the AWS Open Data Sponsorship Programme. The dataset — distributed as WARC, WAT, and WET files — underpins virtually every major open pre-training corpus including C4, FineWeb, RedPajama, Dolma, and DCLM, an
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:training-data
  - urn:ngm:class:open-data
  - urn:ngm:class:web-archive
hasPart:
  - urn:ngm:class:warc-files
  - urn:ngm:class:wet-files
  - urn:ngm:class:wat-files
  - urn:ngm:class:url-index
  - urn:ngm:class:crawl-statistics
  - urn:ngm:class:cdx-index
  - urn:ngm:class:columnar-index
  - urn:ngm:class:monthly-snapshot
requires:
  - urn:ngm:class:deduplication
  - urn:ngm:class:data-curation
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:web-scraping
  - urn:ngm:class:language-identification
  - urn:ngm:class:web-crawl-infrastructure
  - urn:ngm:class:cloud-storage
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:pre-training
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:multilingual-nlp
  - urn:ngm:class:web-science
dependsOn:
  - urn:ngm:class:amazon-s3
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:apache-nutch
  - urn:ngm:class:trafilatura
  - urn:ngm:class:fasttext
implements:
  - urn:ngm:class:warc-standard
  - urn:ngm:class:minhash-deduplication
  - urn:ngm:class:language-filtering
  - urn:ngm:class:trafilatura-extraction
  - urn:ngm:class:cdx-protocol
contrastsWith:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:curated-datasets
  - urn:ngm:class:proprietary-web-index
uses:
  - urn:ngm:class:apache-nutch
  - urn:ngm:class:trafilatura
  - urn:ngm:class:amazon-s3
  - urn:ngm:class:fasttext
  - urn:ngm:class:cdx-protocol
supports:
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:bert
  - urn:ngm:class:gpt
  - urn:ngm:class:gpt-3
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:fineweb
  - urn:ngm:class:c4-dataset
  - urn:ngm:class:redpajama
  - urn:ngm:class:dolma
  - urn:ngm:class:olmo
  - urn:ngm:class:datacomp-lm
  - urn:ngm:class:refinedweb
standardizedBy:
  - urn:ngm:class:iso-28500
  - urn:ngm:class:aws-open-data-sponsorship-programme
relatedTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:bias-in-large-language-models
  - urn:ngm:class:copyright
  - urn:ngm:class:data-governance
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:robotics
  - urn:ngm:class:language-model
  - urn:ngm:class:gpt
  - urn:ngm:class:synthetic-data
---

# Common Crawl

Common Crawl is a California 501(c)3 non-profit organisation founded in 2008 by Gil Elbaz that maintains a petabyte-scale, freely accessible archive of web crawl data stored on Amazon S3 under the AWS Open Data Sponsorship Programme. The dataset — distributed as WARC, WAT, and WET files — underpins virtually every major open pre-training corpus including C4, FineWeb, RedPajama, Dolma, and DCLM, and has been cited by the Mozilla Foundation (2024) as essential to the emergence of modern generative AI.
