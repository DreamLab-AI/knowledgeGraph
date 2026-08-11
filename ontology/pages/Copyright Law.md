public:: true

# Copyright Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28e37aedcce353b92afab0dc9887b35810cb0b26c28381247130fc11e3fcb9c6",
  "@type": "Page",
  "vc:slug": "intellectual-property-rights-framework-law",
  "title": "Copyright Law",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:intellectual-property",
      "vc:label": "Intellectual Property"
    },
    {
      "@id": "urn:visionflow:linked:copyright",
      "vc:label": "Copyright"
    },
    {
      "@id": "urn:visionflow:linked:licensing",
      "vc:label": "Licensing"
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
  "@id": "urn:ngm:class:intellectual-property-rights-framework-law",
  "@type": "Class",
  "label": "Copyright Law",
  "definition": "The body of statute and case law granting creators exclusive rights over the reproduction, distribution, adaptation, and communication of original works of authorship, including text, images, music, software, and audiovisual media. Copyright law defines the exceptions — fair use, fair dealing, text-and-data-mining carve-outs — that determine whether scraping and training artificial intelligence models on protected works is lawful, making it the central legal battleground of generative AI.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:intellectual-property",
    "label": "Intellectual Property"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:licensing",
        "label": "Licensing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-scrapers",
        "label": "AI Scrapers"
      },
      {
        "@id": "urn:ngm:class:creative-industries",
        "label": "Creative Industries"
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
  - "The body of statute and case law granting creators exclusive rights over the reproduction, distribution, adaptation, and communication of original works of authorship, including text, images, music, software, and audiovisual media. Copyright law defines the exceptions — fair use, fair dealing, text-and-data-mining carve-outs — that determine whether scraping and training artificial intelligence models on protected works is lawful, making it the central legal battleground of generative AI."

- ### Semantic Classification
  - owl-class:: governance:CopyrightLaw
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Intellectual Property]]
  - has-part:: [[Copyright]]
  - enables:: [[Licensing]]
  - related-to:: [[AI Scrapers]]

- ### Content

  ## Definition

  **Copyright Law** is the branch of [[Intellectual Property]] law that protects original works of authorship — literary and artistic works, software, photographs, film, and sound recordings — by granting their creators a bundle of exclusive economic rights (reproduction, distribution, adaptation, public communication) and, in many jurisdictions, moral rights of attribution and integrity. Protection arises automatically on fixation of the work, without registration, and endures for long statutory terms, typically the author's life plus seventy years.

  The framework is anchored internationally by the Berne Convention and the TRIPS Agreement, and implemented nationally through instruments such as the UK Copyright, Designs and Patents Act 1988, the US Copyright Act (Title 17), and the EU's copyright directives, including the 2019 Directive on Copyright in the Digital Single Market. National regimes differ most consequentially in their *exceptions*: the United States applies the open-ended, four-factor fair use doctrine, while the UK and EU enumerate closed lists of permitted acts — fair dealing, quotation, parody, and text-and-data-mining (TDM) exceptions of varying breadth.

  Those exceptions now carry enormous weight because generative AI systems are trained on corpora assembled by [[AI Scrapers]] from the open web, most of which is copyright-protected. Whether such copying is excused as fair use or TDM, whether model weights embody infringing reproductions, and whether model outputs can themselves infringe or attract protection, are all live questions being answered case by case.

  ## Current Landscape

  Copyright litigation against AI developers has become a defining feature of the field, and the first landmark outcomes point in opposite directions:

  - **Getty Images v Stability AI** ([2025] EWHC 2863 (Ch), judgment 4 November 2025): the first major UK generative-AI ruling. Getty abandoned its primary training-claim mid-trial (unable to prove training occurred in the UK); Mrs Justice Joanna Smith rejected secondary copyright infringement, holding that Stable Diffusion's model weights do not contain or store copies of training works and so are not "infringing copies" under the CDPA 1988 — while confirming that an intangible "article" can in principle be an infringing copy. Only "extremely limited" trade-mark infringement was found for early watermark-reproducing outputs. The copyright interpretation is under appeal.
  - **Bartz v Anthropic** (N.D. Cal.): the June 2025 summary judgment held that training on lawfully acquired books was transformative fair use, but that downloading books from pirate libraries was not; the resulting US$1.5 billion class settlement covering roughly 482,000 works — the largest copyright class settlement in history — received final court approval on 20 July 2026.
  - **EU AI Act**: Article 53 obliges general-purpose AI providers to publish "sufficiently detailed" training-content summaries (Commission template, obligations applying from 2 August 2025, with full enforcement from 2 August 2026 and fines up to €15m or 3% of global turnover) and to respect the DSM Directive's TDM opt-out — effectively exporting EU copyright reservations worldwide.
  - **UK policy**: after its 2024-25 consultation — in which 81% of respondents preferred strengthening copyright so licensing is required for AI training — the government published its Report on Copyright and Artificial Intelligence (April 2026), stepping back from the previously preferred broad TDM-with-opt-out exception and weighing transparency and licensing-first approaches, under strong pressure from the [[Creative Industries]].

  In parallel, a paid licensing market between publishers and AI companies continues to grow — an outcome copyright law is designed to enable through [[Licensing]] — while machine-readable opt-outs (robots.txt conventions, metadata standards) remain contested and inconsistently honoured, keeping the boundary between lawful mining and infringement the sharpest edge of AI governance.

  **Sources**:
  - https://www.judiciary.uk/wp-content/uploads/2025/11/Getty-Images-v-Stability-AI.pdf
  - https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence
  - https://natlawreview.com/article/ai-vs-authors-update-court-approves-historic-anthropic-settlement-while-meta
  - https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim
