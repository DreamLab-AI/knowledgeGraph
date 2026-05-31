public:: true

# Hardware Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hardware-wallet",
  "@type": "Page",
  "vc:slug": "hardware-wallet",
  "title": "Hardware Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware-wallet",
  "@type": "Class",
  "label": "Hardware Wallet",
  "definition": "A hardware wallet is a dedicated physical device that stores cryptocurrency private keys in a secure element and signs transactions internally, so the keys never leave the device or touch an internet-connected computer. It protects against malware and remote key theft by isolating signing operations behind on-device confirmation. Hardware wallets are a foundational tool for self-custody of digital assets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Infra Security and Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi-Sig Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A hardware wallet is a tamper-resistant signing device for private keys; it is a component used by [[Multi-Sig Governance]] schemes that combine multiple independent signers.
- ### Content
  - Keys are generated and held in a secure element, and transactions are signed on-device after physical confirmation, defeating host-based malware. In multi-signature setups, several hardware wallets distribute signing authority, raising the bar for theft or coercion and supporting institutional custody controls.
