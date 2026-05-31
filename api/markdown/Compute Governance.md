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
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:competition-in-ai", "label": "Competition in AI"}, {"@id": "urn:ngm:class:ai-risks", "label": "AI Risks"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Compute governance governs access to AI training hardware as a policy lever, addressing both [[Competition in AI]] and the mitigation of [[AI Risks]].
- ### Content
  - Because accelerators are physical, excludable, and produced by a concentrated supply chain, they are more governable than algorithms or data. Proposals span export controls, compute reporting thresholds, and hardware-enforced attestation of who ran what, balancing safety against innovation and concentration concerns.
