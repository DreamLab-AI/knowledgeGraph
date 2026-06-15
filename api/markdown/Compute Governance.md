public:: true

# Compute Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compute-governance",
  "@type": "Page",
  "vc:slug": "compute-governance",
  "title": "Compute Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compute-governance",
  "@type": "Class",
  "label": "Compute Governance",
  "definition": "Compute governance is the set of policies, controls, and oversight mechanisms applied to the large-scale computing hardware used to train and deploy advanced AI systems. Because frontier AI capability is tightly coupled to access to specialised accelerators, governing compute offers a measurable, supply-chain-anchored lever for AI policy. Mechanisms include export controls, usage reporting thresholds, and on-chip verification of training runs.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:export-controls", "label": "Export Controls"},
      {"@id": "urn:ngm:class:compute-reporting", "label": "Compute Reporting"},
      {"@id": "urn:ngm:class:hardware-attestation", "label": "Hardware Attestation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:semiconductor-supply-chain", "label": "Semiconductor Supply Chain"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"},
      {"@id": "urn:ngm:class:international-cooperation", "label": "International Cooperation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:frontier-model-oversight", "label": "Frontier Model Oversight"},
      {"@id": "urn:ngm:class:compute-threshold-monitoring", "label": "Compute Threshold Monitoring"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:gpu-cluster", "label": "GPU Cluster"},
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ai-policy", "label": "AI Policy"},
      {"@id": "urn:ngm:class:technology-export-regulation", "label": "Technology Export Regulation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:trusted-execution-environment", "label": "Trusted Execution Environment"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:algorithmic-governance", "label": "Algorithmic Governance"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"},
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"},
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:competition-in-ai", "label": "Competition in AI"},
      {"@id": "urn:ngm:class:ai-risks", "label": "AI Risks"},
      {"@id": "urn:ngm:class:geopolitics-of-ai", "label": "Geopolitics of AI"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ai-compute-oversight", "label": "AI Compute Oversight"},
    {"@id": "urn:ngm:class:hardware-governance", "label": "Hardware Governance"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.73
}
```

- ### Definition
  - Compute governance governs access to AI training hardware as a policy lever, addressing both [[Competition in AI]] and the mitigation of [[AI Risks]].
- ### Content
  - Because accelerators are physical, excludable, and produced by a concentrated supply chain, they are more governable than algorithms or data. Proposals span export controls, compute reporting thresholds, and hardware-enforced attestation of who ran what, balancing safety against innovation and concentration concerns.
