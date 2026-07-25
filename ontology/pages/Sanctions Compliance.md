public:: true

# Sanctions Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sanctions-compliance",
  "@type": "Page",
  "vc:slug": "sanctions-compliance",
  "title": "Sanctions Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sanctions-compliance",
  "@type": "Class",
  "label": "Sanctions Compliance",
  "definition": "Sanctions compliance is the set of controls organisations implement to avoid transacting with individuals, entities, jurisdictions, or assets prohibited by sanctions regimes such as those administered by the US OFAC, the EU, the UK OFSI, and the UN. It involves screening counterparties against sanctions lists, monitoring transactions for prohibited patterns, blocking or freezing prohibited dealings, and maintaining auditable records. In digital-asset markets it extends to wallet-address screening and analysis of fund provenance, posing distinctive challenges for permissionless and privacy-preserving systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:kyc", "label": "KYC"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Sanctions compliance is the practice of screening counterparties and transactions against prohibited-party lists and jurisdictions, blocking or freezing prohibited dealings, and maintaining auditable evidence of those controls.

- ### Relationships
  - Sanctions Compliance is a subclass of [[Regulatory Compliance]] and uses [[KYC]] identity data as the basis for screening. It supports enterprise [[Risk Assessment]] by quantifying sanctions exposure, and relates to the broader disciplines of [[Compliance]] and [[Financial Regulation]] within which sanctions obligations sit.

- ### Content
  - Sanctions are foreign-policy and security instruments that prohibit dealings with designated targets, and the obligation to comply falls on every organisation within a regime's reach. Penalties are severe and strict-liability in nature: an institution can be fined heavily for processing a prohibited transaction even without intent to violate. This makes sanctions compliance a board-level risk rather than a back-office formality, particularly for global firms exposed to multiple, sometimes conflicting, regimes simultaneously.

  - The operational core is screening. Counterparties are checked at onboarding and continuously thereafter against consolidated sanctions lists such as OFAC's Specially Designated Nationals list, with fuzzy matching to catch transliteration and alias variations while managing the false positives that overwhelm naive name-matching. Transaction monitoring layers on top, flagging payments to sanctioned jurisdictions or patterns suggestive of evasion through intermediaries and shell structures.

  - Digital assets complicate the picture in both directions. Public blockchains make fund provenance more traceable than cash, enabling address-clustering and chain-analysis tools to link wallets to sanctioned entities; yet permissionless transfer, privacy-enhancing techniques, and mixers create evasion vectors. The sanctioning of specific smart-contract addresses, such as the Tornado Cash designations, raised novel questions about whether immutable code can itself be a sanctioned entity and what compliance means when no operator controls the protocol.

  - Effective programmes combine list screening, transaction monitoring, fund-provenance analysis, geographic controls, and documented escalation and reporting procedures, all underpinned by risk assessment that calibrates control intensity to exposure. Increasingly these controls are automated and informed by analytics, but the regulatory expectation remains that a human-governed programme — with clear ownership, testing, and audit trails — sits behind the technology, since regulators hold the institution, not its software, accountable.
