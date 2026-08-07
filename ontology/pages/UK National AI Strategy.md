public:: true

# UK National AI Strategy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1207ae21b6ead5f655636363acc7b897044fdfeedcbf7ddbcaff50c481252ab2",
  "@type": "Page",
  "vc:slug": "uk-national-ai-strategy",
  "title": "UK National AI Strategy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:national-ai-strategy",
      "vc:label": "National Ai Strategy"
    },
    {
      "@id": "urn:visionflow:linked:alan-turing-institute",
      "vc:label": "Alan Turing Institute"
    },
    {
      "@id": "urn:visionflow:linked:ai-investment",
      "vc:label": "AI Investment"
    },
    {
      "@id": "urn:visionflow:linked:industrial-strategy",
      "vc:label": "Industrial Strategy"
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
  "@id": "urn:ngm:class:uk-national-ai-strategy",
  "@type": "Class",
  "label": "UK National AI Strategy",
  "definition": "The UK government's ten-year plan for artificial intelligence, published in September 2021, organised around three pillars: investing in the long-term needs of the AI ecosystem, ensuring AI benefits all sectors and regions, and governing AI effectively. It committed to skills programmes, compute and research investment through bodies including the Alan Turing Institute, and a pro-innovation regulatory approach, and was subsequently extended by the AI Opportunities Action Plan.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:national-ai-strategy",
    "label": "National AI Strategy"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:alan-turing-institute",
        "label": "Alan Turing Institute"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-investment",
        "label": "AI Investment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:industrial-strategy",
        "label": "Industrial Strategy"
      },
      {
        "@id": "urn:ngm:class:ai-safety-institute",
        "label": "AI Safety Institute"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The UK government's ten-year plan for artificial intelligence, published in September 2021, organised around three pillars: investing in the long-term needs of the AI ecosystem, ensuring AI benefits all sectors and regions, and governing AI effectively. It committed to skills programmes, compute and research investment through bodies including the Alan Turing Institute, and a pro-innovation regulatory approach, and was subsequently extended by the AI Opportunities Action Plan."

- ### Semantic Classification
  - owl-class:: governance:UkNationalAiStrategy
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[National Ai Strategy]]
  - has-part:: [[Alan Turing Institute]]
  - enables:: [[AI Investment]]
  - related-to:: [[Industrial Strategy]]

- ### Content

  ## Definition

  The **UK National AI Strategy** is the specific policy document published by the UK government in September 2021 setting a ten-year vision for the United Kingdom as "a global AI superpower". Where the corpus's generic [[National Ai Strategy]] class describes the country-agnostic genre of such plans, this class denotes the UK instance, with its particular commitments, institutions, and subsequent policy lineage.

  The strategy is organised around three pillars. *Investing in the long-term needs of the AI ecosystem* covers skills (postgraduate AI conversion courses, Turing AI Fellowships), access to compute and data, and support for AI research institutions — with the [[Alan Turing Institute]] as the national institute for data science and AI at the centre of the research pillar. *Ensuring AI benefits all sectors and regions* addresses diffusion beyond London and the South East, public-sector adoption, and programmes such as AI for Decarbonisation. *Governing AI effectively* set the direction later elaborated in the 2022 AI Governance white paper process and the 2023 "pro-innovation approach to AI regulation", which chose sector-regulator principles over a single horizontal AI statute — a deliberate contrast with the EU AI Act.

  The strategy sits within, and draws budget lines from, the broader UK [[Industrial Strategy]] tradition: it grew out of the 2018 AI Sector Deal (roughly £1 billion of joint public–private commitment) and channels national [[AI Investment]] into compute, research, and skills.

  ## Current Landscape

  The strategy's lineage has continued through successive governments. The November 2023 Bletchley Park AI Safety Summit and the creation of the AI Safety Institute (renamed the AI Security Institute in 2025) delivered on the governance pillar's frontier-risk strand; the January 2025 AI Opportunities Action Plan, whose fifty recommendations were accepted by the incoming government, effectively superseded the 2021 document's investment agenda with commitments to expand sovereign compute twenty-fold by 2030, designate AI Growth Zones, and drive adoption across public services.

  Assessments of the original strategy credit it with institutional durability — the Turing Institute, the Centre for Data Ethics and Innovation lineage, and sustained fellowship programmes — while criticising slow progress on compute (the 2023 independent Future of Compute review found UK capacity lagging peers) and the churn of governance bodies. As a knowledge-graph concept it functions as the anchor for UK-specific AI policy references, distinct from the generic national-strategy class and from other jurisdictions' plans.
