public:: true

# ai policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:683889669e4aa4989501a92f452ef21f4638aec85a08bf1f788b8edd72d4695c",
  "@type": "Page",
  "vc:slug": "ai-policy",
  "title": "ai policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-policy",
  "@type": "Class",
  "label": "AI Policy",
  "definition": "AI policy refers to the ensemble of government strategies, investment frameworks, voluntary guidelines, and mandatory regulatory instruments through which states shape the development, adoption, and societal impact of artificial intelligence. Policy instruments span public funding allocation for research, national AI strategies, procurement standards for government AI use, export controls on frontier hardware and models, and requirements for transparency and accountability in high-stakes applications. Effective AI policy navigates tensions between competitiveness, safety, and equitable access.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - AI policy refers to the ensemble of government strategies, investment frameworks, voluntary guidelines, and mandatory regulatory instruments through which states shape the development, adoption, and societal impact of artificial intelligence. Policy instruments span public funding allocation for research, national AI strategies, procurement standards for government AI use, export controls on frontier hardware and models, and requirements for transparency and accountability in high-stakes applications. Effective AI policy navigates tensions between competitiveness, safety, and equitable access.

- ### Semantic Classification
  - owl-class:: ai-policy:AI Policy
  - owl-role:: Concept

- ### Relationships
  - supports [[AI Governance]]
  - supports [[Responsible AI]]
  - relatedTo [[AI Regulation]]
  - relatedTo [[AI Ethics]]
  - enables [[AI Governance Framework]]

- ### Content
  - AI policy operates across three broad dimensions. The first is industrial and research policy: national AI strategies (e.g. the UK AI Opportunities Action Plan, the US Executive Order on AI, China's New Generation AI Development Plan) direct public investment, set talent immigration priorities, and define compute infrastructure ambitions. The second dimension is regulatory policy, establishing rules for how AI may be used in specific domains — such as healthcare diagnostics, criminal justice risk assessment, or autonomous vehicles — and specifying accountability mechanisms when systems cause harm.
  - The third dimension is international policy: export controls on advanced semiconductors (such as US restrictions on high-end GPUs), multilateral agreements on AI safety testing (the Bletchley Declaration), and standard-setting via bodies such as ISO/IEC JTC1 SC42, OECD, and ITU. The tension between national competitiveness and global safety norms is a defining challenge in this dimension.
  - AI policy increasingly interacts with adjacent domains: data governance (GDPR and its equivalents constrain AI training data), intellectual property law (determining copyright in AI-generated content), and competition policy (assessing concentration in foundation model markets). Policy coherence across these domains remains an active challenge for regulators globally.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
