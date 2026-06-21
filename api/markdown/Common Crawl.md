public:: true

# Common Crawl
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:afa5254885f1174b1014f388b0f8e2d3d55a7e2217f6bc721dc7019c7648e7d3",
  "@type": "Page",
  "vc:slug": "common-crawl",
  "title": "Common Crawl",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-training",
      "vc:label": "Model Training"
    },
    {
      "@id": "urn:visionflow:linked:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-data",
      "vc:label": "Synthetic Data"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:training-data",
      "vc:label": "Training Data"
    },
    {
      "@id": "urn:visionflow:linked:data-curation",
      "vc:label": "Data Curation"
    },
    {
      "@id": "urn:visionflow:linked:pre-training",
      "vc:label": "Pre-training"
    },
    {
      "@id": "urn:visionflow:linked:foundation-models",
      "vc:label": "Foundation Models"
    },
    {
      "@id": "urn:visionflow:linked:web-scraping",
      "vc:label": "Web Scraping"
    },
    {
      "@id": "urn:visionflow:linked:deduplication",
      "vc:label": "Deduplication"
    },
    {
      "@id": "urn:visionflow:linked:tokenisation",
      "vc:label": "Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    },
    {
      "@id": "urn:visionflow:linked:data-pipeline",
      "vc:label": "Data Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:bert",
      "vc:label": "BERT"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:bias-in-large-language-models",
      "vc:label": "Bias in Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:linked:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:linked:copyright",
      "vc:label": "Copyright"
    },
    {
      "@id": "urn:visionflow:linked:open-data",
      "vc:label": "Open Data"
    },
    {
      "@id": "urn:visionflow:linked:scaling-laws",
      "vc:label": "Scaling Laws"
    },
    {
      "@id": "urn:visionflow:linked:amazon-s3",
      "vc:label": "Amazon S3"
    },
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:multimodal-ai",
      "vc:label": "Multimodal AI"
    },
    {
      "@id": "urn:visionflow:linked:gpt-3",
      "vc:label": "GPT-3"
    },
    {
      "@id": "urn:visionflow:linked:llama",
      "vc:label": "Llama"
    },
    {
      "@id": "urn:visionflow:linked:dolma",
      "vc:label": "Dolma"
    },
    {
      "@id": "urn:visionflow:linked:red-pajama",
      "vc:label": "RedPajama"
    },
    {
      "@id": "urn:visionflow:linked:fineweb",
      "vc:label": "FineWeb"
    },
    {
      "@id": "urn:visionflow:linked:c4-dataset",
      "vc:label": "C4 Dataset"
    },
    {
      "@id": "urn:visionflow:linked:https-commoncrawl-org",
      "vc:label": "https://commoncrawl.org"
    },
    {
      "@id": "urn:visionflow:linked:https-commoncrawl-org-the-data",
      "vc:label": "https://commoncrawl.org/the-data"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Common Crawl"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:common-crawl",
  "@type": "Class",
  "label": "Common Crawl",
  "definition": "Common Crawl is a California 501(c)3 non-profit organisation founded in 2008 by Gil Elbaz that maintains a petabyte-scale, freely accessible archive of web crawl data stored on Amazon S3 under the AWS Open Data Sponsorship Programme. The dataset — distributed as WARC, WAT, and WET files — underpins virtually every major open pre-training corpus including C4, FineWeb, RedPajama, Dolma, and DCLM, and has been cited by the Mozilla Foundation (2024) as essential to the emergence of modern generative AI.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:training-data",
      "label": "Training Data"
    },
    {
      "@id": "urn:ngm:class:open-data",
      "label": "Open Data"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:foundation-models",
        "label": "Foundation Models"
      },
      {
        "@id": "urn:ngm:class:pre-training",
        "label": "Pre-training"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:warc-files",
        "label": "WARC Files"
      },
      {
        "@id": "urn:ngm:class:wet-files",
        "label": "WET Files"
      },
      {
        "@id": "urn:ngm:class:wat-files",
        "label": "WAT Files"
      },
      {
        "@id": "urn:ngm:class:url-index",
        "label": "URL Index"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:deduplication",
        "label": "Deduplication"
      },
      {
        "@id": "urn:ngm:class:data-curation",
        "label": "Data Curation"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:bias-in-large-language-models",
        "label": "Bias in Large Language Models"
      },
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:synthetic-data",
        "label": "Synthetic Data"
      },
      {
        "@id": "urn:ngm:class:curated-datasets",
        "label": "Curated Datasets"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:common-crawl:c5588b3d1007",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:afa5254885f1174b1014f388b0f8e2d3d55a7e2217f6bc721dc7019c7648e7d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Model Training]]",
      "resolved": "urn:visionflow:linked:model-training",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:linked:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT-3]]",
      "resolved": "urn:visionflow:linked:gpt-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Synthetic Data]]",
      "resolved": "urn:visionflow:linked:synthetic-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training Data]]",
      "resolved": "urn:visionflow:linked:training-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Curation]]",
      "resolved": "urn:visionflow:linked:data-curation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pre-training]]",
      "resolved": "urn:visionflow:linked:pre-training",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Foundation Models]]",
      "resolved": "urn:visionflow:linked:foundation-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deduplication]]",
      "resolved": "urn:visionflow:linked:deduplication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tokenisation]]",
      "resolved": "urn:visionflow:linked:tokenisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Information Retrieval]]",
      "resolved": "urn:visionflow:linked:information-retrieval",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Pipeline]]",
      "resolved": "urn:visionflow:linked:data-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BERT]]",
      "resolved": "urn:visionflow:linked:bert",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bias in Large Language Models]]",
      "resolved": "urn:visionflow:linked:bias-in-large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:linked:data-governance",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:linked:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Copyright]]",
      "resolved": "urn:visionflow:linked:copyright",
      "kind": "StubLink"
    },
    {
      "raw": "[[Open Data]]",
      "resolved": "urn:visionflow:linked:open-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scaling Laws]]",
      "resolved": "urn:visionflow:linked:scaling-laws",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Amazon S3]]",
      "resolved": "urn:visionflow:linked:amazon-s3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multimodal AI]]",
      "resolved": "urn:visionflow:linked:multimodal-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Llama]]",
      "resolved": "urn:visionflow:linked:llama",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dolma]]",
      "resolved": "urn:visionflow:linked:dolma",
      "kind": "StubLink"
    },
    {
      "raw": "[[RedPajama]]",
      "resolved": "urn:visionflow:linked:red-pajama",
      "kind": "StubLink"
    },
    {
      "raw": "[[FineWeb]]",
      "resolved": "urn:visionflow:linked:fineweb",
      "kind": "StubLink"
    },
    {
      "raw": "[[C4 Dataset]]",
      "resolved": "urn:visionflow:linked:c4-dataset",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web Scraping]]",
      "resolved": "urn:visionflow:linked:web-scraping",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://commoncrawl.org]]",
      "resolved": "urn:visionflow:linked:https-commoncrawl-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://commoncrawl.org/the-data]]",
      "resolved": "urn:visionflow:linked:https-commoncrawl-org-the-data",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-20T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Common Crawl is a California 501(c)3 non-profit organisation founded in 2008 by entrepreneur Gil Elbaz, with the mission of maintaining an open, freely accessible repository of web crawl data to democratise access to internet-scale information for research, education, and industry. The organisation continuously crawls the public web and releases monthly snapshots stored on [[Amazon S3]] under the AWS Open Data Sponsorship Programme, making petabyte-scale data available at no cost. Each crawl produces three file formats: WARC files (raw HTTP request and response records), WAT files (computed metadata and link graphs), and WET files (extracted plain text). By August 2025, a single monthly crawl added 2.42 billion pages and over 419 TiB of raw data, and the cumulative archive spans hundreds of billions of pages collected continuously since 2008. The dataset has been cited in more than 10,000 academic studies and, according to a 2024 Mozilla Foundation report, two-thirds of the 47 generative [[Large Language Models]] released between 2019 and 2023 relied on Common Crawl data during [[Pre-training]]. Virtually every major open [[Training Data]] corpus in the generative AI era — including [[C4 Dataset]], [[FineWeb]], [[RedPajama]], [[Dolma]], and the DataComp-LM (DCLM) corpus — originates from filtered and deduplicated subsets of Common Crawl snapshots. The archive therefore occupies a unique structural role in the [[AI]] ecosystem: it is simultaneously an infrastructure resource, a research object, and an increasingly contested legal and [[Data Governance]] artefact as publishers and rights-holders challenge its use in [[Model Training]] for [[Foundation Models]].

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CommonCrawl
  - owl-role:: DataResource | InfrastructureComponent | OpenDataset
  - owl-inferred:: ai:WebCorpus, ai:PretrainingResource, ai:OpenInfrastructure
  - belongs-to-domain:: [[DataManagementDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[DataLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Training Data]], [[Open Data]], [[Web Archive]]
  - has-part:: [[WARC Files]], [[WET Files]], [[WAT Files]], [[URL Index]], [[Crawl Statistics]], [[CDX Index]], [[Columnar Index]], [[Monthly Snapshot]]
  - requires:: [[Deduplication]], [[Data Curation]], [[Data Pipeline]], [[Tokenisation]], [[Web Scraping]], [[Language Identification]], [[Web Crawl Infrastructure]], [[Cloud Storage]]
  - enables:: [[Model Training]], [[Large Language Models]], [[Foundation Models]], [[Pre-training]], [[Transfer Learning]], [[Natural Language Processing]], [[Information Retrieval]], [[Scaling Laws]], [[Multilingual NLP]], [[Web Science]]
  - implements:: [[WARC Standard]], [[MinHash Deduplication]], [[Language Filtering]], [[Trafilatura Extraction]], [[CDX Protocol]]
  - supports:: [[Deep Learning]], [[BERT]], [[GPT]], [[GPT-3]], [[Llama]], [[FineWeb]], [[C4 Dataset]], [[RedPajama]], [[Dolma]], [[OLMo]], [[DataComp-LM]], [[RefinedWeb]]
  - depends-on:: [[Amazon S3]], [[Cloud Computing]], [[Apache Nutch]], [[Trafilatura]], [[fastText]]
  - related-to:: [[Bias in Large Language Models]], [[Copyright]], [[Data Governance]], [[EU AI Act]], [[Machine Learning Discipline]], [[Multimodal AI]], [[Robotics]], [[Language Model]], [[GPT]], [[Synthetic Data]]
  - contrasts-with:: [[Synthetic Data]], [[Curated Datasets]], [[Proprietary Web Index]]
  - standardized-by:: [[ISO 28500]], [[AWS Open Data Sponsorship Programme]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:WARCFiles))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:WETFiles))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:WATFiles))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:URLIndex))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:CrawlStatistics))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:MonthlySnapshot))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:CDXIndex))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:hasPart ai:ColumnarIndex))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:Deduplication))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:DataCuration))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:DataPipeline))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:WebCrawlInfrastructure))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:CloudStorage))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:LanguageIdentification))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:Tokenisation))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:requires ai:WebScraping))
    ```
  ## Capability Relationships
    ```
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:ModelTraining))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModels))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:FoundationModels))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:Pretraining))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:InformationRetrieval))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:WebScaleNLP))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:MultilingualNLP))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:TransferLearning))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:enables ai:ScalingLaws))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:WARCStandard))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:MinHashDeduplication))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:LanguageFiltering))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:TrafilaturaExtraction))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:CDXProtocol))
    SubClassOf(ai:CommonCrawl
      ObjectSomeValuesFrom(ai:implements ai:RobotsTxtCompliance))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(ai:CommonCrawlFilteredSubset
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:FineWeb
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:C4Dataset
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:Dolma
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:RefinedWeb
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:DataCompLM
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    SubClassOf(ai:EssentialWeb
      ObjectSomeValuesFrom(ai:reducesTo ai:CommonCrawl))
    ```
  ## About
    Common Crawl is the foundational open-data infrastructure underpinning most publicly available large-scale [[Natural Language Processing]] pre-training corpora. Founded by entrepreneur Gil Elbaz in 2008 — with initial board members Carl Malamud and Nova Spivack — the organisation was conceived as a counterpart to web search engine indexes: where search engines keep their crawls proprietary, Common Crawl makes its raw crawl data universally accessible. Elbaz, who had previously co-founded Applied Semantics (acquired by Google in 2003 for approximately USD 102 million, forming the basis of AdSense), was motivated by the conviction that democratising access to web data would unlock research and innovation that no proprietary actor could monopolise. The project was funded almost exclusively by the Elbaz Family Foundation Trust until 2023, when it began receiving donations from AI industry participants including major frontier model developers whose systems depended critically on Common Crawl data. The Mozilla Foundation's 2024 report described Common Crawl as so central to the generative AI supply chain that "generative AI likely would not have been possible without it," identifying it as a critical piece of shared infrastructure for the entire field.

    The technical architecture of Common Crawl centres on a distributed web crawler — maintained by a small team of engineers — that stores raw HTTP crawl records as WARC (Web ARChive) files conforming to ISO 28500:2017, the international standard for web archiving developed in concert with the Internet Archive and national libraries. A single WARC file is a concatenated sequence of typed records: warcinfo records describing the crawl configuration; request records preserving the outgoing HTTP request; response records capturing the full HTTP response including headers and body; resource records for converted content; and metadata records for computed annotations such as WARC-computed page title. Alongside WARC files, each monthly crawl release includes WAT files — JSON-encoded metadata computed by post-processing WARC records — capturing hyperlink graphs, detected language, server software identity, MIME content-type, and computed content hashes. WET files provide plain-text extractions of web page content with HTML markup removed, generated using the Trafilatura library (from 2021 onwards, replacing older boilerplate-removal heuristics), and are the most commonly used format for NLP pre-training pipelines because they eliminate the need for downstream HTML parsing. Monthly crawl statistics are published openly on GitHub, tracking page counts, unique URL counts, host and domain diversity, and language distribution per snapshot. As of the August 2025 crawl, individual monthly snapshots contained over 2.42 billion pages and more than 419 TiB of compressed raw data. The cumulative corpus spans several petabytes hosted on [[Amazon S3]] under the AWS Open Data Sponsorship Programme, enabling any researcher or organisation to access the full dataset at zero egress cost, subject only to network bandwidth constraints. The CDX (Capture Index) and CC-Index Parquet shards further enable URL-pattern-specific retrieval and petabyte-scale SQL queries via Amazon Athena without downloading full WARC files.

    The relationship between Common Crawl and modern [[Deep Learning]] is structural rather than incidental. The 2020 GPT-3 paper (Brown et al.) disclosed that Common Crawl comprised approximately 60% of the training token mixture after quality filtering — a figure later cited in the New York Times lawsuit against OpenAI in December 2023. Subsequent systems including BERT, T5, and the entire LLaMA family drew heavily from Common Crawl-derived corpora. The passage from raw crawl data to usable training tokens requires substantial processing spanning at least five distinct stages. First, **language identification**: tools such as fastText LangID (Joulin et al., 2016) and GlotLID (Kargaran et al., 2023) assign a language label and confidence score to each page; pages below a per-language confidence threshold are removed. Second, **near-duplicate detection**: MinHash over character n-gram shingles (typically 5-grams) computes Jaccard similarity signatures and identifies document pairs exceeding a similarity threshold (0.75–0.80 in most pipelines), from which one document is retained. The DCLM pipeline additionally applies BFF (Big-Friendly Filter), a scalable Bloom filter approach for both document-level and intra-document deduplication at 240 trillion token scale. Third, **heuristic content filtering**: rules derived from C4's pipeline remove documents lacking terminal punctuation on most lines, containing excessive special characters or digits, matching blacklisted domains, or falling outside plausible document-length ranges (typically 200–50,000 words). FineWeb additionally drops C4's terminal-punctuation rule as too aggressive for non-English text. Fourth, **boilerplate removal**: beyond WET extraction, Trafilatura-based pipelines identify and strip navigation menus, advertisement text, footer boilerplate, and other repetitive non-editorial content. Fifth, **optional model-based quality scoring**: FineWeb-Edu applies a fastText classifier trained on teacher-annotated educational content scores to retain pages with above-threshold educational value (FineWeb-Edu-10BT); DCLM-Baseline applies a fastText instruction-density classifier to retain pages resembling curated instructional text. The [[Scaling Laws]] literature — particularly the Chinchilla scaling result (Hoffmann et al., 2022), which established a compute-optimal token-to-parameter ratio of approximately 20:1 — intensified demand for ever-larger filtered Common Crawl subsets, since a 70B parameter compute-optimal model requires approximately 1.4 trillion training tokens, a quantity achievable only from web-scale crawls. The 2024 DataComp-LM (DCLM) benchmark standardised this process by releasing a fixed 240-trillion-token Common Crawl corpus with a suite of 53 downstream evaluation tasks, enabling reproducible controlled comparisons of competing filtering pipelines.

  ## Technical Data Pipeline in Depth
    Understanding the Common Crawl processing pipeline requires tracing the data flow from raw crawl to usable [[Training Data]] across six stages, each introducing specific design choices with downstream consequences for model quality, biases, and coverage.

    **Stage 1 — Crawl Execution**: Common Crawl's crawler uses Apache Nutch (modified) to follow hyperlinks from a seed URL set, respecting robots.txt exclusion directives. The crawl frontier is managed to ensure broad host diversity rather than depth within single domains. Each HTTP response is immediately serialised as a WARC response record. The crawl runs continuously with monthly snapshot releases; crawl depth and host revisit frequency are tuned to balance coverage breadth against storage and bandwidth costs. The 2025 monthly crawl at 2.42 billion pages represents roughly 1.5–2% of the estimated accessible web at that time.

    **Stage 2 — WET Extraction**: The Trafilatura Python library (Barbaresi, 2021) processes each WARC response record to extract main body text from HTML, using a heuristic scoring system that identifies text nodes belonging to the primary article or content region based on tag depth, sibling node density, word count, and punctuation density. This approach substantially outperforms simple HTML stripping (which preserves navigation text, advertisement copy, and repeated header/footer boilerplate) while avoiding the computational cost of ML-based segmentation. The output WET file preserves the WARC structure with one text-extraction record per original response record.

    **Stage 3 — Language Identification and Filtering**: GlotLID (used in FineWeb2 and similar multilingual pipelines) is a fastText model trained on text from over 1,600 languages, enabling per-document language classification with per-language calibrated confidence thresholds. This replaces the global confidence cutoff used in earlier pipelines (which systematically under-selected low-resource languages with inherently noisier training signal) with language-specific thresholds calibrated to a target precision for each language. For English-only pipelines, the older fastText LangID model with a single threshold of 0.65 remains standard.

    **Stage 4 — Deduplication**: Near-duplicate detection at Common Crawl scale requires sub-linear algorithms. MinHash with Locality-Sensitive Hashing (LSH) computes a fixed-size signature matrix for each document over its character n-gram shingle set; documents whose signatures share enough LSH band hash collisions are identified as near-duplicates and clustered, retaining only one member per cluster. This operation processes hundreds of billions of documents and requires cluster-level distributed execution (typically Apache Spark). The DCLM pipeline additionally runs BFF (Big-Friendly Filter) using Bloom filter membership testing to detect substring-level repetition within documents, further improving deduplication coverage at sub-quadratic cost.

    **Stage 5 — Heuristic Filtering**: C4-derived heuristics remain the industry baseline: removal of pages with fewer than three sentences, pages where fewer than 80% of lines end in terminal punctuation (applied selectively in non-English pipelines), pages containing blacklisted strings from the UT1 URL blocklist, and pages outside word-count bounds. RefinedWeb (Penedo et al., 2023) introduced more aggressive deduplication (Jaccard threshold 0.80) and URL-level domain quality scoring as additional filters, producing a 600-billion-token English corpus from Common Crawl that outperformed several filtered counterparts on downstream language model benchmarks.

    **Stage 6 — Quality Scoring (Optional)**: FineWeb-Edu trains a fastText classifier on a GPT-4-annotated sample of 500,000 Common Crawl pages scored on a 0–5 educational quality scale, then applies this classifier to the full FineWeb corpus to produce FineWeb-Edu (1.3T tokens) and FineWeb-Edu-10BT (10B tokens) subsets with above-threshold educational content density. DCLM-Baseline trains a similar classifier targeting instruction-following and knowledge-dense content. These model-based filters represent a second generation beyond heuristic rules and demonstrate downstream perplexity improvements on held-out language model evaluations.

  ## Components / Architecture
    - **WARC Files**: Raw ISO 28500 web archive records including HTTP request/response pairs, preserving original HTML, headers, and status codes. Each monthly crawl release compresses to hundreds of TiB. WARC files contain five record types: warcinfo (crawl metadata), request (outgoing HTTP request), response (full HTTP response with headers and body), resource (non-HTTP resources), and conversion (format-transformed content). The most important for NLP are response records, which contain the raw HTML, JavaScript, and text content of each crawled page.
    - **WET Files**: Plain-text extractions derived from WARC records, pre-processed to remove HTML tags and metadata using the Trafilatura library (from 2021 onward). WET files are the most commonly used format for NLP pre-training pipelines because they eliminate the need for downstream HTML parsing, though they sacrifice structural information (headings, lists, links) that may be valuable for document understanding tasks.
    - **WAT Files**: JSON metadata files computed from WARC records, encoding hyperlinks, language identification scores (fastText), server software identity (from Server HTTP header), MIME content-type, response status codes, content-length, and SHA-1 content digests. WAT files enable link-graph analysis, host-diversity studies, and language-based filtering without reprocessing full WARC files, reducing I/O cost by approximately 10–50x compared to WARC reprocessing.
    - **URL Index (CDX)**: A columnar capture index of all crawled URLs with HTTP status, MIME type, content length, and byte-range WARC offset pointers. Available via the Common Crawl Index Server REST API (http://index.commoncrawl.org), enabling selective retrieval of specific domain crawls or URL patterns without downloading multi-TiB WARC files. The CDX format (adapted from the Internet Archive's standard) encodes each URL's most recent crawl status and WARC location as a single text record.
    - **Columnar Index (CC-Index)**: Parquet-format columnar index shards stored on S3 under the s3://commoncrawl/cc-index/ prefix, enabling petabyte-scale SQL queries via Amazon Athena or Apache Spark without downloading raw WARC files. The CC-Index schema includes url, fetch_time, warc_filename, warc_record_offset, languages, content_mime_type, and content_digest columns, enabling domain-level, language-level, and time-series analysis of crawl coverage.
    - **Monthly Crawl Statistics**: Publicly released per-snapshot metrics on GitHub (commoncrawl/cc-crawl-statistics), tracking page counts, unique URL counts, host diversity, top-level domain distribution, and language proportions detected by the fastText model. These statistics are critical for understanding the representational biases of each snapshot and how they change over time as the web evolves.
    - **Derived Corpora**: Downstream filtered datasets including [[C4 Dataset]] (2019, 160B tokens, Raffel et al.), [[RedPajama]] (2023, 30T tokens, Together AI), [[FineWeb]] (2024, 15T tokens, HuggingFace), [[Dolma]] (2024, 3T CC tokens, AI2), and DataComp-LM DCLM-Baseline (2024, 3.6T tokens, DataComp consortium), each applying different filtering strategies to the same underlying Common Crawl snapshots to produce corpora optimised for different training objectives and model sizes.

  ## Use Cases / Major Families
    - **LLM Pre-training**: All major open-weight models (LLaMA 1/2/3, Mistral, Falcon, Yi, OLMo, Phi-3) use Common Crawl-derived tokens as the largest component of their pre-training mixture, typically comprising 50–80% of total tokens after filtering. For LLaMA-3 70B (Touvron et al., 2023), approximately 72% of the 15T-token training set consisted of Common Crawl-derived text (as reported in the model card). For GPT-3 (Brown et al., 2020), filtered Common Crawl constituted approximately 60% of the training mix by tokens. This dependency means that the quality, biases, and legal status of Common Crawl directly propagate into the capabilities and risks of these models.
    - **Multilingual NLP**: mC4 (101-language Common Crawl subset), mBERT (104 languages), and XLM-R (100 languages) use Common Crawl snapshots filtered to specific languages using CLD3 or fastText LangID. The FineWeb2 (2025) pipeline extends quality-filtered Common Crawl to 100+ languages using per-language GlotLID thresholds and language-specific quality classifiers, producing the first high-quality multilingual Common Crawl corpus covering low-resource languages including Swahili, Yoruba, Welsh, and Scottish Gaelic with publication-quality text.
    - **Information Retrieval Research**: Web-scale link-graph analysis uses the WAT files' hyperlink records to reconstruct the web's directed link graph, enabling PageRank-style domain authority computation, web topology studies, and spam domain identification. The CDX and CC-Index formats enable domain-specific corpus extraction for vertical domain studies without downloading multi-TiB WARC archives.
    - **Bias and Toxicity Research**: Researchers use Common Crawl to study the distribution of demographic stereotypes, offensive language, propaganda, and health misinformation in internet-scale text, with direct implications for [[Bias in Large Language Models]]. Studies have found that Common Crawl corpora systematically over-represent English (approximately 50% of pages), North American and European sources, and text produced after 2010, under-representing multilingual, non-Western, and historical content. The RealToxicityPrompts study (Gehman et al., 2020) showed that toxicity in Common Crawl-trained LLMs follows directly from the toxicity distribution in the underlying corpus.
    - **Web Science and Digital Humanities**: Longitudinal studies of web structure, hyperlink evolution, domain longevity, and content duplication across time use the cumulative crawl archive going back to 2008. Researchers have used Common Crawl to track the spread of misinformation across websites, measure the half-life of web content (median URL lifespan approximately 18 months), and study how web discourse around political events evolves over time.
    - **DataComp-LM Benchmark (DCLM, 2024)**: A data-curation benchmark standardising 240 trillion Common Crawl tokens with fixed pre-training recipes (a 6.9B parameter decoder-only [[Transformer Architecture]] trained for 138B tokens) and 53 downstream natural language understanding evaluation tasks, enabling reproducible controlled comparisons of filtering pipelines. DCLM-Baseline (3.6T tokens from Common Crawl filtered by a fastText instruction-density classifier) outperforms Dolma 1.6 and RedPajama-v2 by 4–7 percentage points on the MMLU benchmark at equivalent compute budgets.
    - **Legal and Compliance Research**: The legal status of Common Crawl content has become a subject of active research and litigation. The New York Times lawsuit against OpenAI (2023) cited Common Crawl as comprising 60% of GPT-3's training data. Digital Content Next's cease-and-desist (2024) represented the first direct legal challenge to Common Crawl's crawling practices. Academic researchers use Common Crawl itself to study the prevalence of copyrighted material in AI training data, including analysis of memorisation rates of specific copyrighted texts in LLMs trained on Common Crawl-derived corpora.
    - **Federated and Privacy Research**: Common Crawl's open availability enables researchers to simulate real-world data heterogeneity in federated learning studies, since its per-domain partitioning approximates the data siloing typical of federated deployments. Studies on differential privacy for LLM pre-training use Common Crawl as the canonical large-scale text source for measuring privacy-utility trade-offs.

  ## Academic Context
    The intellectual history of Common Crawl as a research resource can be divided into four phases. In the **early adoption phase (2008–2014)**, Common Crawl was primarily used for web science studies (link-graph analysis, domain longevity, language distribution) and early web-scale language modelling. Chelba et al.'s "One Billion Word Benchmark" (2013) established the canonical evaluation protocol for web-scale language models and used Google's proprietary web crawl, setting the stage for Common Crawl to serve a similar function in the research community. Wenzek et al.'s CCNet (2020) was an early systematic methodology for extracting high-quality monolingual corpora from Common Crawl using language identification, deduplication (deduplication of paragraphs via SHA-1 hashing), and perplexity-based quality filtering with KenLM language models trained on Wikipedia — an approach that dramatically improved downstream NLP performance for French, German, Italian, Arabic, Chinese, and Spanish models while requiring no manual data curation.

    In the **transformer pre-training phase (2019–2022)**, Common Crawl became the dominant source of pre-training data for large language models. The field-defining use was Raffel et al.'s T5 paper (2019), which introduced the C4 (Colossal Clean Crawled Corpus) by applying a set of heuristic filters to a Common Crawl dump to produce 160 billion tokens of cleaned English text, demonstrating that web-scale crawl data could match or exceed carefully curated corpora for text-to-text transfer tasks. The C4 filters — now canonical in the literature — include: removal of lines not ending in terminal punctuation; removal of pages containing fewer than 5 sentences; removal of pages with fewer than 100 words; removal of pages containing strings from a blocked-word list; and removal of pages with a lorem ipsum string, indicating template content. Brown et al.'s GPT-3 (2020) scaled Common Crawl usage to approximately 300 billion filtered tokens (after applying a quality filter trained on WebText), establishing the dominant pre-training data paradigm and for the first time making the exact composition of a flagship model's training data partially public. The Pile (Gao et al., 2020) demonstrated that diverse, carefully curated mixtures of Common Crawl and 21 other sources outperformed Common Crawl alone for many downstream tasks, triggering research into optimal mixture composition.

    In the **data-curation research phase (2022–2024)**, the focus shifted from whether to use Common Crawl to how to best process and filter it. The Chinchilla scaling paper (Hoffmann et al., 2022) established the compute-optimal token-to-parameter ratio of approximately 20:1, implying that future frontier models would require trillions of training tokens — quantities achievable only from Common Crawl and similar web-scale sources. This drove intense competition in [[Data Curation]] methodology. RefinedWeb (Penedo et al., 2023) demonstrated that aggressive deduplication and Trafilatura-based extraction alone (without extensive heuristic content filtering) could produce a 600B-token corpus competitive with or superior to heavily filtered alternatives on language model benchmarks, using a strategy called MacroData Refinement. RedPajama-v1 (Together AI, 2023) reproduced the LLaMA pre-training data at 1.2T tokens, making the precise mixture public for the first time. Dolma (Soldaini et al., 2024) integrated Common Crawl (2T tokens), Common Crawl News (381B tokens), GitHub code (141B tokens), scientific papers (221B tokens), Wikipedia/Wikibooks (38B tokens), and other sources into a 3.4T token open corpus with full data sheet documentation. FineWeb (Penedo et al., 2024) demonstrated that model-based quality filtering with an education-density classifier (FineWeb-Edu, 1.3T tokens) substantially outperformed purely heuristic approaches on knowledge-intensive benchmarks.

    The **legal escalation phase (2023–present)** fundamentally altered the normative landscape. The New York Times lawsuit against OpenAI and Microsoft (December 2023) explicitly named Common Crawl as comprising approximately 60% of GPT-3's training data and alleged that LLMs trained on Common Crawl could reproduce substantial portions of copyrighted articles. Digital Content Next (DCN), representing over 70 digital media publishers, sent a cease-and-desist letter to Common Crawl in 2024 demanding that it stop crawling member content and remove existing member content from datasets. The Mozilla Foundation's 2024 report analysed Common Crawl's supply chain role and found that two-thirds of 47 generative LLMs studied had relied on Common Crawl data — describing it as the "single most important data resource" for generative AI development. These events have triggered substantive legal, policy, and technical research into content consent, robots.txt compliance, TDMRep (Text and Data Mining Reservation Protocol), and the scope of fair use/fair dealing exceptions for AI training.

    The scaling implications of Hoffmann et al.'s Chinchilla paper (2022) drove demand for ever-larger filtered Common Crawl subsets: their compute-optimal token-to-parameter ratio of approximately 20:1 implied that a 70B parameter model requires 1.4T training tokens, a quantity achievable only from web-scale crawls. The DataComp-LM consortium's DCLM paper (2024) established the most comprehensive standardised benchmark to date, releasing a fixed 240T token Common Crawl corpus with 53 downstream evaluation tasks and a standardised 6.9B parameter model training recipe, enabling the first reproducible head-to-head comparisons of competing filtering methodologies at scale.

  ## Current Landscape (2026)
    As of mid-2026, Common Crawl continues to release monthly crawl snapshots, with the August 2025 crawl comprising 2.42 billion pages and over 419 TiB of compressed data. The organisation began accepting industry donations in 2023, reflecting the AI industry's recognition of its critical infrastructure status — frontier model developers whose commercial products depend on Common Crawl-derived training data now contribute financially to sustaining the crawl infrastructure. This funding shift represents a significant change from the original Elbaz Family Foundation model and raises governance questions about the organisation's independence from its commercial beneficiaries.

    The legal environment escalated dramatically in early June 2026. On 3 June 2026, Digital Content Next (DCN) — representing the Associated Press, the New York Times, NBC Universal, Bloomberg, NPR, and Fox Corporation — sent a cease-and-desist letter to Common Crawl demanding two things: that Common Crawl immediately stop crawling member publisher content, and that it remove member content already present in its datasets, including paywalled and subscriber-only news articles. The letter argues that copyright is not an opt-out regime and that Common Crawl should seek permission before including content rather than requiring publishers to request exclusion via robots.txt. As of mid-June 2026, Common Crawl had not publicly responded and no litigation had been filed. Common Crawl separately submitted written comments to the UK Government's Copyright and AI Consultation (running December 2024 – February 2025), supporting a text and data mining (TDM) legal exception while arguing that it respects creators' rights. Common Crawl emphasised in that submission that it is the source of an estimated 70–90% of tokens used in training data for nearly all major LLMs, characterising its role as analogous to a public library for the AI era.

    The [[EU AI Act]]'s General Purpose AI (GPAI) transparency requirements, applying from August 2025, require developers of GPAI models to publish training data summaries including the use of Common Crawl-derived corpora, the filters applied, and the copyright status of the source material. The European Commission released a mandatory template for public disclosure of AI training data in 2025, and every GPAI model provider must publish a summary using this template. The [[EU AI Act]]'s Digital Omnibus simplification proposal (political agreement reached 7 May 2026) adjusted some deadlines but preserved the GPAI training data disclosure requirement. This transparency mandate has created pressure on developers to document their Common Crawl usage more precisely and has triggered re-evaluation of whether heuristic-filtered Common Crawl constitutes "publicly available data" under the EU AI Act's definition. The UK ICO's response to the AI training data consultation (published 25 February 2025) proposes technical measures allowing publishers to exercise greater control over access provided to web crawlers depending on their intended purpose — a framework that would directly affect Common Crawl's operations if implemented.

    On the technical side, the dominant trend in 2024–2025 was the shift from heuristic filtering toward model-based and composite filtering pipelines, sometimes called "second-generation curation." The Essential-Web v1.0 project (2025) released 24 trillion organised tokens derived from Common Crawl using a six-stage layered pipeline combining URL-quality scoring, language identification, heuristic filtering, deduplication, model-based quality scoring, and domain-stratified sampling to achieve broad subject coverage alongside high quality. The FineWeb2 paper (2025) extended quality-filtered Common Crawl to all 100+ languages supported by GlotLID, replacing the single global confidence threshold with per-language thresholds calibrated to a target precision, making high-quality multilingual LLM pre-training feasible in languages where it was previously blocked by data sparsity. GneissWeb (Magnusson et al., 2025) introduced a novel pipeline emphasising structural HTML information preservation alongside text extraction, improving performance on document-understanding tasks relative to WET-based pipelines.

    The [[Synthetic Data]] movement — using frontier LLMs to generate synthetic training data — has begun to offer a partial alternative for post-training fine-tuning and capability elicitation, but synthetic data generation at the scale required for pre-training (trillions of tokens at trillion-parameter scale) remains computationally and economically infeasible compared to filtering Common Crawl, ensuring the archive's continued centrality for pre-training. Phi-3 (Abdin et al., 2024) demonstrated that heavily filtered synthetic data can substitute for web crawl data for smaller models (3.8B parameters), but the approach does not scale to the 70B+ parameter regime without complementary web-crawl data.

  ## UK Context
    UK academic and industrial users of Common Crawl are prominent in the pre-training data curation literature and in the emerging governance and legal research around training data. The Alan Turing Institute (ATI, headquartered in the British Library, London) has published research on bias characterisation in Common Crawl-derived corpora, analysing how gender, racial, and cultural biases embedded in web-crawl text propagate through LLM [[Pre-training]] into downstream model behaviour. The ATI's work directly informs the UK government's approach to AI training data governance through its advisory role to DSIT (Department for Science, Innovation and Technology).

    The University of Edinburgh's ILCC (Institute for Language, Cognition, and Computation) maintains one of Europe's strongest research programmes in multilingual [[Natural Language Processing]] and has published extensively on low-resource language processing using Common Crawl-derived data. Edinburgh researchers contributed to the multilingual curation methodology underlying mC4 and related multilingual extensions. Cambridge University's Computer Laboratory (Language Technology Group under Anna Korhonen and others) uses Common Crawl-based corpora for computational semantics, distributional word meaning, and cross-lingual transfer studies. UCL's AI Centre has produced research on data efficiency and the statistical properties of web-crawl data that inform sampling strategies for pre-training corpus construction.

    The UK AI Safety Institute (AISI) — operating under DSIT and later the Department for Science and Technology — has referenced training data provenance, including Common Crawl, in its frontier model evaluation frameworks and in its 2024 report on the evaluation of advanced AI systems. AISI's Structured Access programme for frontier model evaluation requires developers to disclose training data composition, including the proportion sourced from Common Crawl-derived corpora. UK companies including Stability AI (prior to 2024 restructuring) used Common Crawl-derived corpora for their foundational language model components (LAION-5B, which underpins Stable Diffusion's CLIP text encoder, was derived partly from Common Crawl-identified image URLs). Wayve (autonomous driving, London) uses Common Crawl as an indirect resource through pre-trained language encoders whose representations were learned from Common Crawl-derived text.

    Northern English universities contribute through specific applied research streams. The University of Manchester's Computer Science and Linguistics groups incorporate Common Crawl-based resources in biomedical NLP research, where the implicit medical common knowledge in web-crawl-trained models is critical for clinical text understanding. Sheffield's Natural Language Processing group (under Nikos Aletras and others) uses Common Crawl-derived text for sentiment analysis, stance detection, and social media NLP research. Leeds's Digital Humanities Centre uses Common Crawl's historical snapshots for longitudinal studies of online discourse around UK political events.

    The [[EU AI Act]]'s training data transparency provisions — which apply to UK-adjacent markets through the UK-EU data adequacy arrangement and the extraterritorial scope of the Act for models deployed in EU markets — have added significant regulatory urgency to the documentation of Common Crawl usage among UK-based GPAI model developers. UK ICO guidance on AI training data (issued 2024) addresses the legality of web scraping under UK GDPR, specifically examining whether personal data present in Common Crawl snapshots (emails, names, contact information scraped from public websites) constitutes unlawful processing for AI training purposes — a question with direct implications for UK-based model developers using Common Crawl-derived corpora.

  ## Future Directions (2026–2030)
    The trajectory of Common Crawl's role in AI development over the next five years is shaped by three interacting forces: the technical demands of scaling models beyond the current frontier, the legal and regulatory constraints that will impose new requirements on training data provenance and consent, and the emerging alternatives to web crawl data for specific training objectives.

    **Consent and provenance infrastructure**: The industry pressure from publishers, the [[EU AI Act]]'s GPAI transparency requirements, and the emerging TDMRep (Text and Data Mining Reservation Protocol) standard will drive the development of machine-readable consent signals embedded in web pages that future crawl pipelines honour at the document level rather than the domain level. This will transform Common Crawl from an unconditional public corpus into a layered resource where some content carries explicit consent for AI training (with or without attribution requirements), some carries explicit opt-out, and the remainder falls into a contested legal grey zone. The practical implication is a bifurcation of Common Crawl-derived corpora into "consented" subsets used for regulated applications and "full" subsets used for research or in jurisdictions with broader TDM exceptions.

    **Multilingual quality scaling**: FineWeb2's (2025) language-specific filtering approach using GlotLID confidence thresholds calibrated per language points toward the next major milestone: high-quality multilingual corpora from Common Crawl covering 200+ languages, including African and Pacific languages currently underserved by LLM pre-training. The key remaining challenge is acquiring language-specific quality annotations for low-resource languages without relying on teachers from high-resource language models (which may embed biases from those languages' training corpora). Collaborative annotation efforts with native-speaker communities are likely to become standard practice for low-resource multilingual curation.

    **Structured data extraction**: Future [[Data Pipeline]] architectures will likely move beyond plain-text WET extraction toward structured entity and relation extraction from WARC records, producing Common Crawl-derived [[Knowledge Graph]] fragments alongside text corpora. Schema.org markup, JSON-LD structured data, and microformat annotations embedded in web pages provide a partially structured signal that current pipelines discard along with HTML. Leveraging these structured signals will enable Common Crawl-derived knowledge bases as a complement to or replacement for manually constructed knowledge graphs in RAG (retrieval-augmented generation) architectures.

    **Continuous curation and feedback loops**: Rather than static monthly snapshots filtered by fixed heuristics, future systems may implement continuous quality-feedback loops where model perplexity signals, downstream benchmark performance, and factual consistency scores guide targeted re-crawl priorities and per-document filtering decisions, improving data efficiency per compute dollar. Active learning principles applied to data curation — selecting which web pages to re-crawl more frequently based on their estimated utility for model improvement — represent a convergence of [[Active Learning]] methodology with large-scale corpus construction.

    **Legal settlement and licensing frameworks**: The current trajectory of publisher-AI litigation suggests that negotiated licensing agreements (on the model of the AP-OpenAI content deal announced 2024, the Reddit-Google data deal 2024, and similar arrangements) will proliferate, eventually covering a substantial fraction of high-quality publisher content. Common Crawl may evolve to offer a "licensed tier" of content where rights-holders have agreed to inclusion in exchange for attribution, compensation, or other consideration, alongside a "public domain tier" of clearly unencumbered content, and a "contested tier" of content whose legal status remains unresolved. This three-tier structure would allow AI developers to choose training data with different legal risk profiles for different applications and markets.

    **Carbon and sustainability accounting**: As sustainability scrutiny of AI training intensifies, future work will quantify the end-to-end carbon cost of crawling, storing, transmitting, and processing Common Crawl at petabyte scale, from crawler energy consumption through S3 storage overhead to the distributed processing cost of filtering pipelines. Estimates for the energy cost of a single FineWeb-style filtering run over Common Crawl at 15T token scale exceed 100 MWh; the full DCLM 240T token pipeline at 6.9B model training scale is estimated to exceed 1,000 MWh. Efficiency improvements to crawl infrastructure (more targeted re-crawl, semantic deduplication at crawl time, adaptive crawler scheduling) will become economically and environmentally important at the scales projected for 2028–2030 models.

    **Synthetic augmentation and hybrid corpora**: The emerging hybrid corpus paradigm — combining Common Crawl-derived text with synthetically generated high-quality content produced by strong teacher models — is likely to become the standard pre-training approach for the next generation of frontier models. Common Crawl will continue to provide the breadth and diversity that synthetic generation cannot replicate at scale, while synthetic data will supplement coverage in domains (mathematics, code, scientific reasoning, low-resource languages) where Common Crawl quality is insufficient. The optimal mixture ratio will be established empirically through DCLM-style controlled experiments.

  ## Key Terminology
    - **WARC (Web ARChive)**: ISO 28500:2017 standard format for storing web crawl records including raw HTTP request/response pairs (response records), outgoing HTTP requests (request records), format-converted content (conversion records), and crawl metadata (warcinfo records). Developed collaboratively by the Internet Archive, national libraries, and web archiving organisations. The standard allows web archives to be self-describing and inter-operable across institutions.
    - **WET File**: Plain-text extraction of web page editorial content from WARC records, with HTML markup, headers, navigation, and boilerplate removed using the Trafilatura library. WET files represent the most commonly used format for NLP pre-training pipelines because they require no HTML parsing expertise, though they sacrifice structural document information (heading hierarchy, list structure, table data) that may be useful for document AI tasks.
    - **WAT File**: JSON-format metadata file computed by post-processing WARC response records, capturing all hyperlinks in the page, language identification scores from fastText LangID, server software from HTTP headers, content MIME type, response status, and SHA-1 content digest. WAT files enable large-scale web analytics (link graph analysis, server technology surveys, language distribution) at a fraction of the I/O cost of reprocessing WARC files.
    - **MinHash Deduplication**: Locality-sensitive hashing technique that computes Jaccard similarity between documents' character n-gram shingle sets (typically 5-grams) using compact MinHash signatures, then uses banding (LSH) to efficiently identify near-duplicate pairs without all-pairs comparison. Applied with Jaccard similarity thresholds of 0.75–0.80 in most Common Crawl pipelines; documents identified as near-duplicates are clustered and one representative retained.
    - **Trafilatura**: Open-source Python library (Barbaresi, 2021) for main-content extraction from HTML web pages, using a scoring algorithm based on tag depth, sibling node density, word count, and punctuation density to identify the primary editorial content region. Used in FineWeb, RefinedWeb, and DCLM as the preferred alternative to simple HTML stripping, which retains boilerplate; Trafilatura achieves approximately 93% precision on editorial content identification versus approximately 71% for HTML stripping.
    - **CDX Index**: URL-keyed columnar capture index format originally developed by the Internet Archive, storing WARC byte offsets, HTTP status codes, MIME types, content lengths, and SHA-1 content digests for each crawled URL. The Common Crawl Index Server provides REST API access to CDX records, enabling selective WARC retrieval by URL pattern or domain without downloading multi-TiB archives.
    - **Language Identification**: Process of classifying web page text language using machine learning models such as fastText LangID (Joulin et al., 2016, supporting 176 languages) or GlotLID (Kargaran et al., 2023, supporting 1,600+ languages). Applied to WAT files or WET files as a first filtering step; pages below a language-specific confidence threshold are excluded. Per-language quality thresholds in FineWeb2 replaced the single global threshold that systematically under-selected low-resource languages.
    - **C4 (Colossal Clean Crawled Corpus)**: 160-billion-token filtered English corpus derived from Common Crawl by Raffel et al. (2019) for training the T5 (Text-to-Text Transfer Transformer) model family. C4's filtering pipeline — terminal punctuation, sentence count, word count, blocked-word list, lorem ipsum detection — became the canonical baseline for subsequent Common Crawl pipelines, widely reproduced, extended, and critiqued in data curation literature.
    - **FineWeb**: 15-trillion-token quality-filtered English corpus derived from 96 Common Crawl snapshots spanning 2013–2024, released by HuggingFace (Penedo et al., 2024). Uses Trafilatura extraction, MinHash deduplication, C4-derived heuristics (modified), and fastText language identification. The FineWeb-Edu subset (1.3T tokens) applies a GPT-4-annotated educational-content classifier to further filter for high-educational-value pages, outperforming FineWeb on knowledge-intensive benchmarks (MMLU, ARC-C) at equivalent training compute.
    - **DCLM (DataComp-LM)**: Standardised 240-trillion-token Common Crawl benchmark corpus released by the DataComp consortium in 2024 (Li et al.), with a fixed 6.9B-parameter decoder-only [[Transformer Architecture]] pre-training recipe and 53 downstream NLU evaluation tasks. DCLM-Baseline (3.6T tokens) uses BFF deduplication and a fastText instruction-density classifier. Enables reproducible head-to-head comparisons of data curation strategies at multiple compute budgets (0.4B, 1B, 7B parameter scales).
    - **GlotLID**: A fastText-based language identification model (Kargaran et al., 2023) supporting identification of 1,600+ languages and scripts, developed to replace fastText LangID and CLD3 for multilingual Common Crawl processing. Uses script-specific preprocessing and per-language calibrated confidence thresholds to improve recall for low-resource languages where training signal is sparse.
    - **Robots.txt**: A de-facto standard protocol (now proposed for IETF standardisation) allowing website operators to specify which user agents (crawlers) may access which URL paths. Common Crawl's crawler respects robots.txt exclusion directives, but the scope of robots.txt as a legal consent mechanism for AI training — versus its original web indexing context — is contested in ongoing litigation and regulatory proceedings.

  ## Governance and Organisational Context
    Common Crawl Foundation's organisational structure is a 501(c)3 California non-profit, which provides tax-exempt status under US law and constrains its activities to those with a public benefit purpose. Its governance is managed by a small board including founder Gil Elbaz (Chairman) alongside other directors. The operational team is lean — typically fewer than ten full-time employees — responsible for maintaining crawl infrastructure, processing pipelines, customer support for research users, and communications. This small team sustains a data product used by virtually every major AI laboratory and research institution globally, a structural dependency that creates governance risks: if Common Crawl's funding were interrupted, the loss of its monthly snapshots would disrupt ongoing research and development across the entire AI industry. The 2023 decision to accept AI industry donations addressed immediate financial sustainability but also creates potential for conflicts of interest between the Foundation's public-benefit mission and the commercial interests of its major donors, whose frontier models depend on Common Crawl data.

    The legal personality of Common Crawl as a non-profit complicates its position in AI training data litigation. It is neither a commercial company (making it an unusual litigation target) nor a government entity (making safe harbour provisions inapplicable). The Internet Archive, a comparable non-profit web archiving organisation, has faced similar legal challenges over its Wayback Machine and its lending library services, providing a partial precedent. Common Crawl's legal counsel has argued that its crawling activities are protected under fair use as a non-commercial transformative use, and that its respect for robots.txt exclusions demonstrates good-faith compliance with web publishing norms — arguments that have not yet been tested in court.

    The governance question of who decides how Common Crawl evolves — what to crawl, how frequently, which content to exclude, how to respond to takedown requests — is increasingly consequential as the archive becomes more central to AI infrastructure. Currently these decisions are made by Common Crawl's small team without a formal public stakeholder consultation process, though the organisation does maintain a public mailing list and blog for announcements. As the [[EU AI Act]] and other regulations impose transparency requirements on GPAI model developers, the upstream governance of Common Crawl may come under indirect regulatory scrutiny through its downstream users.

  ## Biases and Limitations
    Common Crawl's open nature and massive scale make it valuable, but its uncurated character introduces systematic biases that propagate into models trained on it. Understanding these biases is essential for responsible deployment of Common Crawl-trained models.

    **Language and geographic bias**: Approximately 50% of Common Crawl pages are in English, reflecting English's dominance in global web content. European languages (German, French, Spanish, Russian) represent 30–40% combined; all other languages account for less than 20%. This reflects underlying internet access and content production inequalities rather than linguistic value or speaker population, systematically under-representing the billions of speakers of Swahili, Hindi, Arabic, Bengali, and hundreds of other languages. Models trained on Common Crawl without multilingual rebalancing exhibit lower capability in under-represented languages.

    **Temporal bias**: Common Crawl's monthly snapshots capture the web as it exists at crawl time. Historical content (pre-2008 web pages) is absent unless archived at the Internet Archive; content removed from the web after crawl time remains in the dataset. This produces a systematic recency bias in pre-training data that may not reflect the full historical development of topics, and a corresponding bias toward contemporary English web writing styles, vocabulary, and conventions.

    **Source and demographic bias**: Common Crawl's crawl frontier is seeded from a relatively small number of initial URLs and extended via hyperlinks. This means popular, well-linked websites are more likely to be crawled than obscure but high-quality sources; English-language sites linking to each other are over-represented relative to isolated high-quality content in other languages or on platforms not well-integrated into the English-language web graph. The resulting demographic and socioeconomic biases in Common Crawl have been documented to propagate into LLM outputs as stereotyped associations between demographic groups and attributes.

    **Toxicity and misinformation**: Common Crawl includes substantial amounts of hate speech, conspiracy theories, health misinformation, and other problematic content from the open web. Heuristic filters remove some of this material (via blacklisted URL lists and blocked-word filters) but cannot remove all of it at scale without significant false positives on legitimate content. LLMs trained on Common Crawl without targeted toxicity filtering inherit elevated toxicity rates compared to models trained on carefully curated corpora (as documented by RealToxicityPrompts, Gehman et al., 2020).

    **Copyright and consent**: As documented in the Legal section, a substantial fraction of Common Crawl's content consists of material produced by professional writers, journalists, and publishers who have not consented to AI training use. The legal status of this use under fair use / fair dealing is contested; the ethical status is separately contested regardless of legal outcome. Researchers and developers working with Common Crawl-derived corpora bear responsibility for engaging with these questions rather than treating them as solely the responsibility of Common Crawl Foundation.

  ## Research & Literature
    1. Gil Elbaz et al. (2008). Common Crawl Foundation — founding mission statement. https://commoncrawl.org
    2. Chelba, C. et al. (2013). One Billion Word Benchmark for Measuring Progress in Statistical Language Modeling. Interspeech 2013.
    3. Raffel, C. et al. (2019). Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (T5). JMLR 21(140):1–67.
    4. Brown, T. et al. (2020). Language Models are Few-Shot Learners (GPT-3). NeurIPS 2020. https://arxiv.org/abs/2005.14165
    5. Wenzek, G. et al. (2020). CCNet: Extracting High Quality Monolingual Datasets from Web Crawl Data. LREC 2020. https://arxiv.org/abs/1911.00359
    6. Gao, L. et al. (2020). The Pile: An 800GB Dataset of Diverse Text for Language Modeling. arXiv:2101.00027.
    7. Hoffmann, J. et al. (2022). Training Compute-Optimal Large Language Models (Chinchilla). NeurIPS 2022. https://arxiv.org/abs/2203.15556
    8. Penedo, G. et al. (2023). The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only. NeurIPS 2023 Datasets. https://arxiv.org/abs/2306.01116
    9. Touvron, H. et al. (2023). Llama 2: Open Foundation and Fine-Tuned Chat Models. arXiv:2307.09288.
    10. Together AI (2023). RedPajama: An Open Dataset for Training Large Language Models. https://github.com/togethercomputer/RedPajama-Data
    11. Kaddour, J. et al. (2023). Challenges and Applications of Large Language Models. arXiv:2307.10169.
    12. Mozilla Foundation (2024). Training Data for the Price of a Sandwich: Common Crawl's Impact on Generative AI. https://www.mozillafoundation.org/en/research/library/generative-ai-training-data/common-crawl/
    13. Soldaini, L. et al. (2024). Dolma: An Open Corpus of Three Trillion Tokens for Language Model Pre-Training Research. ACL 2024. https://arxiv.org/abs/2402.00159
    14. Penedo, G. et al. (2024). FineWeb: Decanting the Web for the Finest Text Data at Scale. NeurIPS 2024 Datasets. https://arxiv.org/abs/2406.17557
    15. Li, J. et al. (2024). DataComp-LM: In Search of the Next Generation of Training Sets for Language Models. NeurIPS 2024. https://arxiv.org/abs/2406.11794
    16. Ustun, A. et al. (2024). Aya Model: An Instruction Finetuned Open-Access Multilingual Language Model. ACL 2024.
    17. Abdin, M. et al. (2024). Phi-3 Technical Report. arXiv:2404.14219.
    18. Common Crawl Foundation (2024). Blog: Common Crawl Enters a New Phase. https://commoncrawl.org/blog/common-crawl-enters-a-new-phase
    19. Digital Content Next (2024). Cease-and-Desist to Common Crawl Foundation. https://digitalcontentnext.org
    20. Penedo, G. et al. (2024). FineWeb2: One Pipeline to Scale Them All — Adapting Pre-Training Data Processing to Every Language. arXiv:2506.20920.
    21. Magnusson, I. et al. (2025). GneissWeb: Preparing High Quality Data for LLMs at Scale. arXiv:2502.14907.
    22. Common Crawl Foundation (2025). Statistics of Common Crawl Monthly Archives. https://commoncrawl.github.io/cc-crawl-statistics/
    23. Copyright Alliance (2025). AI Copyright Lawsuit Developments in 2025: A Year in Review. https://copyrightalliance.org/ai-copyright-lawsuit-developments-2025/
    24. Rustagi, M. et al. (2025). Essential-Web v1.0: 24T Tokens of Organised Web Data. arXiv:2506.14111.
    25. Guo, D. et al. (2024). DeepSeek-V3 Technical Report. arXiv:2412.19437.
    26. Groeneveld, D. et al. (2024). OLMo: Accelerating the Science of Language Models. ACL 2024. https://arxiv.org/abs/2402.00838
    27. Common Crawl Statistics (2025). Monthly archive statistics. https://commoncrawl.github.io/cc-crawl-statistics/
    28. Common Crawl Foundation (2025). Submission to the UK's Copyright and AI Consultation. https://commoncrawl.org/blog/submission-to-the-uks-copyright-and-ai-consultation
    29. Digital Content Next (2026). Cease-and-Desist to Common Crawl Foundation (June 2026). https://digitalcontentnext.org
    30. Press Gazette (2026). US publishers tell Common Crawl to stop scraping and delete archive. https://pressgazette.co.uk/media_law/common-crawl-ai-news-publishers-scraping-cease-and-desist-letter/
    31. ICO (2025). UK Government's consultation on copyright and artificial intelligence — ICO response. https://ico.org.uk/about-the-ico/consultations/2025/02/uk-governments-consultation-on-copyright-and-artificial-intelligence/
    32. WilmerHale (2025). European Commission Releases Mandatory Template for Public Disclosure of AI Training Data. https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/european-commission-releases-mandatory-template-for-public-disclosure-of-ai-training-data

- ### Provenance
  - sources:: [[https://commoncrawl.org]], [[https://commoncrawl.org/the-data]], https://commoncrawl.github.io/cc-crawl-statistics/, https://www.mozillafoundation.org/en/research/library/generative-ai-training-data/common-crawl/, https://arxiv.org/abs/2406.17557, https://arxiv.org/abs/2406.11794, https://arxiv.org/abs/2402.00159, https://commoncrawl.org/blog/submission-to-the-uks-copyright-and-ai-consultation, https://pressgazette.co.uk/media_law/common-crawl-ai-news-publishers-scraping-cease-and-desist-letter/, https://ico.org.uk/about-the-ico/consultations/2025/02/uk-governments-consultation-on-copyright-and-artificial-intelligence/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
