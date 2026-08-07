public:: true

# EU AI Act Article 53
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ab13e329badc1fb1e68ac138dc7f66717a95f8eb3a7df1f90ebd35d82025e9a",
  "@type": "Page",
  "vc:slug": "eu-ai-act-regulatory-instrument-article-53",
  "title": "EU AI Act Article 53",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:training-data",
      "vc:label": "Training Data"
    },
    {
      "@id": "urn:visionflow:linked:ai-scrapers",
      "vc:label": "AI Scrapers"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument-article-53",
  "@type": "Class",
  "label": "EU AI Act Article 53",
  "definition": "The article of the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) that imposes obligations on providers of general-purpose AI models: maintaining technical documentation, supplying information to downstream integrators, putting in place a policy to comply with EU copyright law including text-and-data-mining opt-outs, and publishing a sufficiently detailed public summary of the content used for training. It is the principal legal hook connecting web scraping and training-data practices to EU regulatory enforcement.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:eu-ai-act",
    "label": "EU AI Act"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:eu-ai-act",
        "label": "EU AI Act"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-scrapers",
        "label": "AI Scrapers"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The article of the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) that imposes obligations on providers of general-purpose AI models: maintaining technical documentation, supplying information to downstream integrators, putting in place a policy to comply with EU copyright law including text-and-data-mining opt-outs, and publishing a sufficiently detailed public summary of the content used for training. It is the principal legal hook connecting web scraping and training-data practices to EU regulatory enforcement."

- ### Semantic Classification
  - owl-class:: governance:EuAiActArticle53
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[EU AI Act]]
  - part-of:: [[EU AI Act]]
  - requires:: [[Transparency]]
  - related-to:: [[AI Scrapers]]

- ### Content

  ## Definition

  **Article 53 of the EU AI Act** sets out the baseline obligations that apply to every provider of a general-purpose AI (GPAI) model placed on the EU market, regardless of whether the model is classified as posing systemic risk. It sits in Chapter V of Regulation (EU) 2024/1689 and became applicable on 2 August 2025, one year after the Act entered into force.

  The article imposes four core duties. Providers must (a) draw up and keep up to date technical documentation of the model, including its training and testing process and evaluation results, for supply to the AI Office and national authorities on request; (b) make information and documentation available to downstream providers who integrate the model into their own AI systems, so those providers can meet their own obligations; (c) put in place a policy to comply with Union copyright law — in particular to identify and respect rights reservations (text-and-data-mining opt-outs) expressed under Article 4(3) of the Copyright in the Digital Single Market Directive; and (d) publish a sufficiently detailed summary of the content used to train the model, following a template issued by the AI Office.

  Article 53 is distinct from the Act's transparency provisions for AI *systems* (such as Article 50's disclosure duties for chatbots and synthetic media): its subject is the upstream model provider and the provenance of [[Training Data]]. Because duties (c) and (d) reach directly into how corpora are assembled, the article effectively regulates the conduct of [[AI Scrapers]] — a scraper-fed training pipeline must now honour machine-readable opt-outs and be documentable in a public summary.

  ## Current Landscape

  Operationalisation arrived through the GPAI Code of Practice (July 2025), whose Transparency and Copyright chapters give signatories a presumption-of-conformity route to Article 53 compliance, and the AI Office's training-content-summary template published the same month. Open-source model providers enjoy a partial exemption from duties (a) and (b) — but not from the copyright policy or the training-content summary — unless their model is designated as carrying systemic risk.

  The AI Office's formal enforcement powers, including the ability to impose fines of up to 3% of global annual turnover or 15 million euros for GPAI infringements, activated on 2 August 2026 — the obligations themselves had applied since 2 August 2025, so the intervening year was compliance without penalty exposure. Notably, the 2026 "Digital Omnibus on AI", which deferred the Act's standalone high-risk (Annex III) obligations to 2 December 2027 and embedded (Annex I product) high-risk obligations to 2 August 2028, explicitly left the GPAI obligations of Articles 51-56 — Article 53 among them — and their enforcement dates untouched. The article's extraterritorial pull is significant: any provider whose model reaches the EU market must apply an EU-grade copyright-reservation policy to training conducted anywhere in the world, making Article 53 a de facto global standard for training-data governance and a template debated in other jurisdictions.

  **Sources**:
  - https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/
  - https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act
  - https://www.regulatoryai.eu/eu-ai-act-observatory/
