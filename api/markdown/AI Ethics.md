schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#AIEthics
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:ai-ethics
public:: true

# AI Ethics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9227e0fd20cb7bf7b8d12f3d173cde36de7060878ae4bb775727afd6926bd1e8",
  "@type": "Page",
  "vc:slug": "ai-ethics",
  "title": "AI Ethics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:algorithmic-fairness",
      "vc:label": "Algorithmic Fairness"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:explainable-ai",
      "vc:label": "Explainable AI"
    },
    {
      "@id": "urn:visionflow:owl:class:responsible-ai",
      "vc:label": "Responsible AI"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-02cdd00067bc"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#AIEthics"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9004"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Ethics"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-ethics"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-ethics"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9227e0fd20cb7bf7b8d12f3d173cde36de7060878ae4bb775727afd6926bd1e8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-ethics",
  "@type": "Class",
  "label": "AI Ethics",
  "definition": "AI ics addresses the moral principles, values, and guidelines governing the design, development, deployment, and use of artificial intelligence systems.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aiethics",
      "label": "AIEthics"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-ethics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9227e0fd20cb7bf7b8d12f3d173cde36de7060878ae4bb775727afd6926bd1e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Algorithmic Fairness]]",
      "resolved": "urn:visionflow:linked:algorithmic-fairness",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:owl:class:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:owl:class:explainable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Responsible AI]]",
      "resolved": "urn:visionflow:owl:class:responsible-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9227e0fd20cb7bf7b8d12f3d173cde36de7060878ae4bb775727afd6926bd1e8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI Ethics addresses the moral principles, values, and guidelines governing the design, development, deployment, and use of artificial intelligence systems. This interdisciplinary field examines issues of fairness, accountability, transparency, privacy, bias mitigation, algorithmic justice, and the societal impact of AI technologies. AI ethics frameworks consider questions of autonomy, consent, human rights, environmental sustainability, and long-term existential risks associated with advanced AI. Practical implementations include ethical AI guidelines, impact assessments, and regulatory compliance mechanisms.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIEthics
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: ['owl:Thing']
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content

  #### Key Characteristics
  - Addresses fairness, accountability, and transparency (FAT) principles
  - Examines bias detection and mitigation strategies
  - Considers privacy-preserving machine learning techniques
  - Evaluates societal and environmental impacts of AI deployment
  - Incorporates stakeholder participation and value-sensitive design

  ## Overview

  AI Ethics addresses the moral principles, values, and guidelines governing the design, development, deployment, and use of artificial intelligence systems. This interdisciplinary field examines issues of fairness, accountability, transparency, privacy, bias mitigation, algorithmic justice, and the societal impact of AI technologies. AI ethics frameworks consider questions of autonomy, consent, human rights, environmental sustainability, and long-term existential risks associated with advanced AI. Practical implementations include ethical AI guidelines, impact assessments, and regulatory compliance mechanisms.

  #### Related Concepts
  - [[Responsible AI]]
  - [[Algorithmic Fairness]]
  - [[AI Governance]]
  - [[Explainable AI]]

  #### References
  - Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1(9), 389-399.
  - Floridi, L. et al. (2018). AI4People—An Ethical Framework for a Good AI Society. Minds and Machines, 28(4), 689-707.
  - Bender, E. et al. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? FAccT 2021.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
