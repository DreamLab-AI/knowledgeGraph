public:: true

# Chaumian Ecash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chaumian-ecash",
  "@type": "Page",
  "vc:slug": "chaumian-ecash",
  "title": "Chaumian Ecash",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chaumian-ecash",
  "@type": "Class",
  "label": "Chaumian Ecash",
  "definition": "Chaumian ecash is a form of digital cash, invented by David Chaum, that uses blind signatures to issue bearer tokens redeemable at a central mint while preserving payer privacy. The mint signs blinded token requests so it cannot link issued tokens to the users who later spend them, providing strong untraceability with offline-style bearer transfer. It matters as the cryptographic foundation for privacy-preserving custodial payment systems, revived in Bitcoin through mints such as Cashu and Fedimint.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fedimint", "label": "Fedimint"},
      {"@id": "urn:ngm:class:cashu", "label": "Cashu"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Chaumian Ecash is David Chaum's blind-signature digital cash scheme that delivers payer privacy through bearer tokens, forming the cryptographic basis used by [[Fedimint]] and implemented as the protocol family [[Cashu]].
- ### Content
  - In operation a user obtains blindly signed tokens from a mint, then spends them with recipients who redeem or reissue them, with the mint unable to correlate issuance and redemption. The model reintroduces a trusted custodian for liquidity in exchange for strong privacy and instant, low-cost transfers layered over Bitcoin and Lightning.
