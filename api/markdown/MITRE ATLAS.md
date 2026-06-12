public:: true

# MITRE ATLAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91de33e19cc5c50f075f98ef1964b6b104b009c91b610f6fc5109b9f463f5315",
  "@type": "Page",
  "vc:slug": "mitre-atlas",
  "title": "MITRE ATLAS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adversarial-machine-learning",
      "vc:label": "Adversarial Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:security-framework",
      "vc:label": "Security Framework"
    },
    {
      "@id": "urn:visionflow:linked:https-atlas-mitre-org",
      "vc:label": "https://atlas.mitre.org"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-mitre-atlas",
      "vc:label": "https://github.com/mitre-atlas"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MITRE ATLAS"
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
  "@id": "urn:ngm:class:mitre-atlas",
  "@type": "Class",
  "label": "MITRE ATLAS",
  "definition": "MITRE ATLAS is a knowledge base of adversary tactics and techniques against machine learning systems. It is modelled on the MITRE ATT&CK framework and curated by MITRE.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security-framework",
      "label": "Security Framework"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:adversarial-machine-learning",
        "label": "Adversarial Machine Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mitre-atlas:d4d2d323b375",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91de33e19cc5c50f075f98ef1964b6b104b009c91b610f6fc5109b9f463f5315"
  },
  "vc:resolutions": [
    {
      "raw": "[[Adversarial Machine Learning]]",
      "resolved": "urn:visionflow:linked:adversarial-machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Framework]]",
      "resolved": "urn:visionflow:linked:security-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://atlas.mitre.org]]",
      "resolved": "urn:visionflow:linked:https-atlas-mitre-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/mitre-atlas]]",
      "resolved": "urn:visionflow:linked:https-github-com-mitre-atlas",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - MITRE ATLAS is a knowledge base of adversary tactics and techniques against machine learning systems. It is modelled on the MITRE ATT&CK framework and curated by MITRE.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MITREATLAS
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Security Framework]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[Adversarial Machine Learning]]
  - enables:: [[AI Safety]]

- ### Content
  - MITRE ATLAS documents how attackers can target machine learning systems, organising real-world techniques such as data poisoning, model evasion, and model theft into a structured matrix. It draws on observed incidents and published research.
  - Security teams use ATLAS to reason about threats to AI systems and to plan defences and evaluations. Its structure mirrors ATT&CK so that practitioners familiar with that framework can apply similar thinking to machine learning.

- ### Provenance
  - sources:: [[https://atlas.mitre.org]], [[https://github.com/mitre-atlas]]
  - migration-date:: 2026-05-29T00:00:00Z
