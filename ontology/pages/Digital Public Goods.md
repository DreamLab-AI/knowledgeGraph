public:: true

# Digital Public Goods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ff3794057ce3781130f25d9803b5df1e8becf6998d502dc40a55fb590b4c39f",
  "@type": "Page",
  "vc:slug": "digital-public-goods",
  "title": "Digital Public Goods",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-goods",
      "vc:label": "Public Goods"
    },
    {
      "@id": "urn:visionflow:linked:digital-commons",
      "vc:label": "Digital Commons"
    },
    {
      "@id": "urn:visionflow:linked:open-source-software",
      "vc:label": "Open Source Software"
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
  "@id": "urn:ngm:class:digital-public-goods",
  "@type": "Class",
  "label": "Digital Public Goods",
  "definition": "Open-source software, open data, open AI models, open standards, and open content that adhere to privacy and other applicable laws and best practices, do no harm by design, and help attain sustainable development goals; formalised by the UN-endorsed Digital Public Goods Alliance standard, they are freely adoptable and adaptable building blocks for digital public infrastructure worldwide.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:public-goods",
    "label": "Public Goods"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-commons",
        "label": "Digital Commons"
      },
      {
        "@id": "urn:ngm:class:digital-infrastructure",
        "label": "Digital Infrastructure"
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
  - "Open-source software, open data, open AI models, open standards, and open content that adhere to privacy and other applicable laws and best practices, do no harm by design, and help attain sustainable development goals; formalised by the UN-endorsed Digital Public Goods Alliance standard, they are freely adoptable and adaptable building blocks for digital public infrastructure worldwide."

- ### Semantic Classification
  - owl-class:: governance:DigitalPublicGoods
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Public Goods]]
  - has-part:: [[Open Source Software]]
  - has-part:: [[Open Data]]
  - related-to:: [[Digital Commons]]

- ### Content

  ## Definition

  **Digital public goods (DPGs)** transpose the economic notion of a public good — non-rivalrous and non-excludable — into the digital sphere: software, datasets, AI models, standards, and content that anyone may use, study, adapt, and redistribute at no cost. The term acquired a precise, operational meaning through the UN Secretary-General's 2020 Roadmap for Digital Cooperation and the **Digital Public Goods Alliance (DPGA)**, whose DPG Standard sets nine indicators covering open licensing (OSI-approved or equivalent open licences), relevance to the Sustainable Development Goals, platform independence, documentation, adherence to privacy and applicable law, and "do no harm by design".

  DPGs are the reusable components from which countries assemble **digital public infrastructure (DPI)** — national identity, payments, and data-exchange systems. Flagship examples include MOSIP (the modular open-source identity platform derived from lessons of India's Aadhaar programme), DHIS2 (health information management used in 80+ countries), Mojaloop (inclusive instant-payment switching), OpenCRVS (civil registration), and the X-Road data-exchange layer originating in Estonia. Because the code and specifications are open, adopting governments avoid vendor lock-in, can audit what they deploy, and share maintenance costs across an international community — the argument that distinguishes the DPG movement from conventional government IT procurement.

  The concept overlaps with, but is narrower than, the [[Digital Commons]]: the commons denotes the whole shared resource system and its community governance, whereas DPG certification is a quality bar applied to specific artefacts. Sustainability remains the central tension — public goods are chronically under-funded precisely because they are non-excludable, motivating pooled funding vehicles, philanthropic backing, and country co-investment models.

  ## Current Landscape

  - **Registry**: the DPGA maintains a public registry of certified DPGs (hundreds of entries spanning software, data, AI, standards, and content), with certification against the nine-indicator DPG Standard
  - **Institutional backing**: UNDP, UNICEF, the Gates Foundation, Co-Develop, and national governments including Norway, Germany, and India; the 2023 G20 leaders' declaration under India's presidency endorsed DPI built on digital public goods
  - **AI expansion**: the DPG Standard was updated to address open AI models (training-data transparency and openness criteria), a contested area as "open-weight" models test the boundary of genuine openness
  - **Critiques**: total-cost-of-ownership for adopters, capacity gaps in deploying countries, governance capture by large funders, and the risk that certification signals openness without guaranteeing long-term maintenance
