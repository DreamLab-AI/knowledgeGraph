public:: true

# Human Agency and Oversight
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:259f0c843434d2042671b0f12d032f3d1eb57fca7a505f49beec8e1ed7f739c3",
  "@type": "Page",
  "vc:slug": "human-agency-and-oversight",
  "title": "Human Agency and Oversight",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-ai-act-article-14",
      "vc:label": "EU AI Act Article 14"
    },
    {
      "@id": "urn:visionflow:linked:eu-hleg-ai",
      "vc:label": "EU HLEG AI"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p7000",
      "vc:label": "IEEE P7000"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0409"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Human Agency and Oversight"
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
  "@id": "urn:ngm:class:human-agency-and-oversight",
  "@type": "Class",
  "label": "Human Agency and Oversight",
  "definition": "Human Agency and Oversight is a trustworthiness dimension ensuring AI systems respect human autonomy, preserve meaningful human control, and implement appropriate human supervision mechanisms to prevent undue coercion, manipulation, or erosion of self-determination.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:human-agency-and-oversight:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:259f0c843434d2042671b0f12d032f3d1eb57fca7a505f49beec8e1ed7f739c3"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU AI Act Article 14]]",
      "resolved": "urn:visionflow:linked:eu-ai-act-article-14",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU HLEG AI]]",
      "resolved": "urn:visionflow:linked:eu-hleg-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P7000]]",
      "resolved": "urn:visionflow:linked:ieee-p7000",
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
  - Human Agency and Oversight is a trustworthiness dimension ensuring AI systems respect human autonomy, preserve meaningful human control, and implement appropriate human supervision mechanisms to prevent undue coercion, manipulation, or erosion of self-determination. This dimension encompasses two core components: human agency (protecting human freedom and decision-making capacity by preventing unfair coercion, manipulation through deceptive interfaces or dark patterns, and enabling informed decision-making through transparent presentation of AI involvement and capabilities) and human oversight (establishing supervision mechanisms ensuring humans can intervene in AI operations through human-in-the-loop requiring human approval for critical decisions before execution, human-on-the-loop enabling human operators to monitor system operation and intervene when necessary, and human-in-command allowing authorized humans to override or deactivate systems while maintaining ultimate control). The EU AI Act Article 14 mandates that high-risk AI systems be designed with appropriate human oversight, requiring qualified personnel to interpret system outputs and exercise intervention authority, with oversight mechanisms selected based on risk assessment considering decision impact, volume, reversibility, and affected populations. Implementation patterns emerging in 2024-2025 included hybrid approaches routing routine low-risk tasks to autonomous systems while escalating uncertain or high-impact decisions to humans, intervention triggers based on confidence thresholds, novelty detection, anomaly identification, and random sampling, and emergency stop capabilities enabling immediate suspension of automated operations. Practical challenges included the feasibility of meaningful oversight as systems grew increasingly complex and autonomous, particularly in domains like large-scale neural networks where human understanding of decision logic proved limited, and the tension between oversight requirements and operational efficiency in high-volume decision environments.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:HumanAgencyOversight
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Human Agency and Oversight — content pending enrichment.

- ### Provenance
  - sources:: [[EU AI Act Article 14]], [[EU HLEG AI]], [[IEEE P7000]]
  - migration-date:: 2026-04-26T00:00:00Z
