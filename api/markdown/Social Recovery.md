public:: true

# Social Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:social-recovery",
  "@type": "Page",
  "vc:slug": "social-recovery",
  "title": "Social Recovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:social-recovery",
  "@type": "Class",
  "label": "Social Recovery",
  "definition": "Social recovery is a wallet security mechanism that lets a user regain control of an account by relying on a set of trusted guardians rather than a single seed phrase. If a signing key is lost, a quorum of designated guardians can authorise a key rotation to a new owner address without ever holding the funds themselves. It mitigates catastrophic key loss while preserving self-custody, and is a flagship use case for smart-contract wallets.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:account-abstraction", "label": "Account Abstraction"},
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi-Sig Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Social recovery is an [[Identity Management]] scheme for blockchain wallets in which a quorum of trusted guardians can restore account control after key loss, removing single-seed-phrase fragility while keeping assets self-custodied.
- ### Content
  - Guardians never hold funds; they collectively authorise a key rotation to a new owner address through the wallet contract. The pattern is enabled by [[Account Abstraction]], which makes wallets programmable, and shares cryptographic foundations with [[Multi-Sig Governance]] where thresholds of independent signers govern privileged actions.
