public:: true

# Web Scraping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-scraping",
  "@type": "Page",
  "vc:slug": "web-scraping",
  "title": "Web Scraping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-scraping",
  "@type": "Class",
  "label": "Web Scraping",
  "definition": "Web scraping is the automated extraction of structured data from websites by programmatically fetching HTML documents and parsing their content to capture specific fields, tables, or text. It encompasses tools ranging from simple HTTP request libraries to headless browser automation frameworks capable of executing JavaScript and interacting with dynamic single-page applications. Web scraping is widely used to construct training datasets for machine learning models, to aggregate pricing and market intelligence, and to archive public information. Its practice intersects with legal questions around terms of service compliance, copyright, and personal data protection under GDPR and equivalent regulations.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-scrapers", "label": "AI Scrapers"},
      {"@id": "urn:ngm:class:browser-automation", "label": "Browser Automation"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:data-processing", "label": "Data Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:training-dataset", "label": "Training Dataset"},
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"},
      {"@id": "urn:ngm:class:etl-pipeline", "label": "ETL Pipeline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Web Scraping is the automated extraction of structured data from websites, ranging from simple HTTP parsing to [[Browser Automation]]-driven interaction with dynamic pages, serving as a primary method for constructing [[Training Data]] corpora and [[Machine Learning Pipeline]] inputs.
- ### Relationships
  - Web Scraping is a specialised form of [[Data Processing]] and [[ETL Pipeline]] that acquires data at the source — the public web — rather than from structured databases. It feeds [[Training Dataset]] construction for large language models and is operationalised at scale through [[AI Scrapers]] and [[Computer Use and Browser Agents]] frameworks. The resulting data flows into [[Machine Learning Pipeline]] workflows, and [[Browser Automation]] tools handle JavaScript-heavy sites that cannot be accessed via static HTTP requests alone.
- ### Content
  - Web scraping has evolved from simple wget-based crawling and BeautifulSoup HTML parsing to sophisticated distributed systems capable of processing billions of web pages monthly. The Common Crawl project, a non-profit organisation, maintains a freely available corpus of petabyte-scale web snapshots that form the training data foundation for models including GPT, LLaMA, and BERT. Purpose-built scraping infrastructure incorporates proxy rotation, CAPTCHA solving, rate-limiting compliance, and JavaScript rendering via headless Chrome to maximise data yield while minimising detection.

  - The legal landscape around web scraping is contested and jurisdiction-dependent. In the United States, the 2022 Ninth Circuit ruling in hiQ Labs v. LinkedIn affirmed that scraping publicly accessible data does not violate the Computer Fraud and Abuse Act, though copyright claims against the use of scraped content for AI training remain active in multiple jurisdictions. Under GDPR, scraping websites that contain personal data of EU residents requires a lawful basis, and the aggregation of scraped profiles can constitute data processing subject to data subject rights. Publishers increasingly deploy technical countermeasures including JavaScript challenges, Cloudflare Bot Management, and robots.txt enforcement.

  - For AI training specifically, web scraping at scale raises quality and provenance concerns. Raw web data contains misinformation, toxic content, copyright-protected text, and demographic biases that propagate into trained models. Filtering pipelines using perplexity scoring, deduplication algorithms (e.g. MinHash LSH), and classifier-based quality filters are applied to Common Crawl snapshots to produce curated datasets such as C4, RefinedWeb, and FineWeb. Data governance frameworks and model cards now typically document data sourcing methodology, raising transparency expectations for how scraped web data is collected, filtered, and used.
