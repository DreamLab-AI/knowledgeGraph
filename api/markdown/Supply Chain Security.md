public:: true

# Supply Chain Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:supply-chain-security",
  "@type": "Page",
  "vc:slug": "supply-chain-security",
  "title": "Supply Chain Security",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:supply-chain-security",
  "@type": "Class",
  "label": "Supply Chain Security",
  "definition": "Supply chain security is the practice of protecting the integrity, provenance, and trustworthiness of the components, dependencies, and processes that compose a product, with particular emphasis on software supply chains. It addresses threats such as compromised dependencies, malicious build tooling, and tampered artefacts through measures like signed releases, software bills of materials, and reproducible builds. It has become a critical discipline as systems increasingly assemble third-party code and hardware.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"},
      {"@id": "urn:ngm:class:third-party-risk-management", "label": "Third-Party Risk Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Supply chain security protects the provenance and integrity of every component and dependency in a product, a discipline closely tied to [[Cyber Security and Cryptography]].
- ### Content
  - Software supply chain controls include cryptographic signing of releases, software bills of materials (SBOMs), dependency pinning, provenance attestations such as SLSA, and reproducible builds that let third parties verify artefacts. Hardware supply chains add concerns of counterfeit parts and implanted firmware. Because a single compromised upstream dependency can propagate to thousands of downstream systems, supply chain security has shifted from a niche concern to a board-level priority following high-profile build-system attacks.
