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
  "subClassOf": {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:software-bill-of-materials", "label": "Software Bill of Materials"},
      {"@id": "urn:ngm:class:reproducible-builds", "label": "Reproducible Builds"},
      {"@id": "urn:ngm:class:dependency-pinning", "label": "Dependency Pinning"},
      {"@id": "urn:ngm:class:provenance-attestation", "label": "Provenance Attestation"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-signing", "label": "Cryptographic Signing"},
      {"@id": "urn:ngm:class:code-signing", "label": "Code Signing"},
      {"@id": "urn:ngm:class:vulnerability-management", "label": "Vulnerability Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:secure-software-development", "label": "Secure Software Development"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:package-repository", "label": "Package Repository"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:slsa-framework", "label": "SLSA Framework"},
      {"@id": "urn:ngm:class:in-toto-attestation", "label": "in-toto Attestation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sigstore", "label": "Sigstore"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"},
      {"@id": "urn:ngm:class:executive-order-14028", "label": "Executive Order 14028"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:perimeter-security", "label": "Perimeter Security"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:devops", "label": "DevOps"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"},
      {"@id": "urn:ngm:class:third-party-risk-management", "label": "Third-Party Risk Management"},
      {"@id": "urn:ngm:class:secure-boot", "label": "Secure Boot"},
      {"@id": "urn:ngm:class:hardware-security", "label": "Hardware Security"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:software-supply-chain-security", "label": "Software Supply Chain Security"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Supply chain security protects the provenance and integrity of every component and dependency in a product, a discipline closely tied to [[Cyber Security and Cryptography]].
- ### Content
  - Software supply chain controls include cryptographic signing of releases, software bills of materials (SBOMs), dependency pinning, provenance attestations such as SLSA, and reproducible builds that let third parties verify artefacts. Hardware supply chains add concerns of counterfeit parts and implanted firmware. Because a single compromised upstream dependency can propagate to thousands of downstream systems, supply chain security has shifted from a niche concern to a board-level priority following high-profile build-system attacks.
