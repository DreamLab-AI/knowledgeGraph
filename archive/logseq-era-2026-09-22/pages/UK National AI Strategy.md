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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  The strategy's lineage has continued through successive governments. The November 2023 Bletchley Park AI Safety Summit and the creation of the AI Safety Institute delivered on the governance pillar's frontier-risk strand; the AI Opportunities Action Plan (published 13 January 2025), whose fifty recommendations were accepted in full by the government, effectively superseded the 2021 document's investment agenda.

  Recent developments (2025-2026):

  - The **AI Opportunities Action Plan** was published on 13 January 2025 with all 50 recommendations accepted; its headline commitment is to expand the **AI Research Resource (AIRR) at least 20-fold by 2030** and to create **AI Growth Zones** with streamlined planning and accelerated clean-power connections.
  - On **14 February 2025** the UK's **AI Safety Institute was renamed the AI Security Institute (AISI)**, refocusing on serious security-implicated risks (chemical/biological weapons, cyber-attacks, fraud, child sexual abuse), adding a criminal-misuse team with the Home Office, and announcing a partnership with Anthropic via the new Sovereign AI unit (DSIT press release).
  - The **UK Compute Roadmap** (July 2025, CP 1352) committed **up to £2 billion** to the national compute ecosystem, including over £1 billion to scale the AIRR 20x by 2030 and up to £750 million for a new national supercomputer at EPCC, University of Edinburgh, with guaranteed dedicated compute tracks for AISI and the Sovereign AI Unit.
  - At **Spending Review 2025** the AI Security Institute was backed with **£240 million**; the *AI Opportunities Action Plan: One Year On* review (January 2026) reported delivery against **38 of the 50 actions**, plus a new Centre for AI Measurement at the National Physical Laboratory and an £11 million AI Assurance Innovation Fund.
  - Governance continues to favour a context-based, sector-regulator approach over a single horizontal AI statute, a deliberate contrast with the EU AI Act.

  **Sources**:
  - https://www.gov.uk/government/publications/ai-opportunities-action-plan/ai-opportunities-action-plan
  - https://www.gov.uk/government/news/tackling-ai-security-risks-to-unleash-growth-and-deliver-plan-for-change
  - https://www.gov.uk/government/publications/uk-compute-roadmap/uk-compute-roadmap
  - https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/ai-opportunities-action-plan-one-year-on
