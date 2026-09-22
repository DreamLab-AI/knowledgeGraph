public:: true

# WHO EVM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:who-evm",
  "@type": "Page",
  "vc:slug": "who-evm",
  "title": "WHO EVM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:who-evm",
  "@type": "Class",
  "label": "WHO EVM",
  "definition": "WHO EVM (Effective Vaccine Management) is a World Health Organization assessment framework and set of standards for evaluating and improving immunisation supply chains, with particular emphasis on cold-chain integrity, storage, and distribution. It defines criteria and scored indicators across receipt, storage, temperature monitoring, and stock management to ensure vaccine potency from manufacturer to point of use. EVM assessments guide investments in cold-chain equipment and monitoring practice.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cold-chain-monitoring", "label": "Cold Chain Monitoring"}, {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - WHO EVM is a World Health Organization standard for immunisation supply chains, prescribing the practices that [[Cold Chain Monitoring]] systems implement and maintained by a global health [[Standards Body]].
- ### Content
  - The framework scores supply-chain sites against criteria such as continuous temperature monitoring, appropriate storage capacity, and accurate stock records, producing improvement plans where thresholds are not met. EVM emphasises end-to-end temperature integrity for heat- and freeze-sensitive vaccines, driving adoption of digital data loggers and remote monitoring in low-resource settings.
