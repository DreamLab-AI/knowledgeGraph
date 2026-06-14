public:: true

# Layer 2 Security Council
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:layer-2-security-council",
  "@type": "Page",
  "vc:slug": "layer-2-security-council",
  "title": "Layer 2 Security Council",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:layer-2-security-council",
  "@type": "Class",
  "label": "Layer 2 Security Council",
  "definition": "A Layer 2 Security Council is a designated multi-signature governance body empowered to take privileged actions on a Layer 2 rollup, such as pausing the bridge, executing emergency upgrades, or resolving stuck states during the maturation period before fully trustless operation. It typically comprises a quorum of independent signers from distinct organisations to mitigate single-party capture. The construct trades some decentralisation for the ability to respond rapidly to critical vulnerabilities.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi Sig Governance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Layer 2 Security Council is a multi-signature body that holds privileged emergency powers over a rollup, implemented through [[Multi-Sig Governance]] with signers drawn from independent organisations.
- ### Content
  - Security councils are common in optimistic and zero-knowledge rollups during their training-wheels phase. Action thresholds, signer diversity requirements, and time-locked execution are tuned to balance rapid incident response against the risk of governance capture.
