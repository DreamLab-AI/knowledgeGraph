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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
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

  Copyright litigation against AI developers has become a defining feature of the field: authors, news organisations, image libraries, and record labels have sued model providers in the US, UK, and Germany over training-data use, with early decisions split on fair use and several disputes settling on licensing terms. In parallel, a licensing market is emerging in which publishers strike paid data-access deals with AI companies — an outcome copyright law is designed to enable through [[Licensing]].

  Legislatures are moving too. The EU AI Act obliges general-purpose AI providers to publish training-content summaries and to respect the DSM Directive's TDM opt-out, effectively exporting EU copyright reservations worldwide. The UK has consulted repeatedly on a broad TDM exception with rights-reservation machinery, drawing strong resistance from the [[Creative Industries]]. Machine-readable opt-outs (robots.txt conventions, metadata standards) remain contested and inconsistently honoured, keeping the boundary between lawful mining and infringement the sharpest edge of AI governance.
