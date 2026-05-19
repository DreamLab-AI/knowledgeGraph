public:: true

# AI Trustworthiness Dimensions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f1001729fc7c6eacb396375ca801b58dd47a22bf536750681205fd3a1b2a6a1b",
  "@type": "Page",
  "vc:slug": "ai-trustworthiness-dimensions",
  "title": "AI Trustworthiness Dimensions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-charter-of-fundamental-rights",
      "vc:label": "EU Charter of Fundamental Rights"
    },
    {
      "@id": "urn:visionflow:linked:eu-hleg-ai",
      "vc:label": "EU HLEG AI"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0408"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Trustworthiness Dimensions"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:ai-trustworthiness-dimensions",
  "@type": "Class",
  "label": "AI Trustworthiness Dimensions",
  "definition": "AI Trustworthiness Dimensions are the seven interdependent assessment criteria that collectively define wher an AI system meets trustworthiness requirements, ensuring ical, lawful, and robust deployment while protecting fundamental rights and enabling societal benefit.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-trustworthiness-dimensions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f1001729fc7c6eacb396375ca801b58dd47a22bf536750681205fd3a1b2a6a1b"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU Charter of Fundamental Rights]]",
      "resolved": "urn:visionflow:linked:eu-charter-of-fundamental-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU HLEG AI]]",
      "resolved": "urn:visionflow:linked:eu-hleg-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI Trustworthiness Dimensions are the seven interdependent assessment criteria that collectively define whether an AI system meets trustworthiness requirements, ensuring ethical, lawful, and robust deployment while protecting fundamental rights and enabling societal benefit. Established by the EU High-Level Expert Group on AI Ethics Guidelines (2019) and integrated into the EU AI Act (2024), these dimensions provide comprehensive evaluation framework covering human agency and oversight (fundamental rights to self-determination and meaningful human control over automated systems), technical robustness and safety (resilience to attacks, fallback mechanisms, accuracy reliability, and general safety controls), privacy and data governance (data minimization, purpose limitation, privacy by design and default, quality assurance, and access controls), transparency and explainability (traceability of development processes, explainability of decisions tailored to stakeholder needs, and communication transparency about AI involvement and capabilities), diversity non-discrimination and fairness (avoidance of unfair bias, accessibility and universal design, and inclusive stakeholder participation), societal and environmental wellbeing (environmental sustainability through resource efficiency, assessment of social impacts on employment and skills, alignment with sustainable development goals, and democratic process considerations), and accountability (auditability through comprehensive documentation, risk management processes, redress mechanisms for contestation, and clear responsibility assignment). Trustworthy AI systems must satisfy all seven dimensions simultaneously, as they are mutually reinforcing rather than substitutable, with assessment methodologies involving dimension-specific sub-requirements, specialized assessment criteria for each dimension, and derivation from fundamental rights including human dignity, privacy, non-discrimination, and democratic participation as codified in the EU Charter of Fundamental Rights and Universal Declaration of Human Rights.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AITrustworthinessDimensions
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content
  AI Trustworthiness Dimensions — content pending enrichment.

- ### Provenance
  - sources:: [[EU HLEG AI]], [[EU Charter of Fundamental Rights]], [[EU AI Act]]
  - migration-date:: 2026-04-26T00:00:00Z
