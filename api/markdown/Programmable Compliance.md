public:: true

# Programmable Compliance

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:programmable-compliance", "@type":"Page", "title":"Programmable Compliance", "vc:slug":"programmable-compliance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:programmable-compliance",
  "@type": "Class",
  "label": "Programmable Compliance",
  "definition": "Programmable compliance is the encoding of regulatory requirements \u2014 such as transfer restrictions, jurisdiction limits, investor accreditation checks and KYC status \u2014 directly into a token's smart-contract logic so that non-compliant transactions are automatically rejected on-chain. It shifts enforcement from manual, after-the-fact review to automated, pre-transaction validation, and is a defining feature of enterprise token standards used for security tokens. Programmable compliance is particularly relevant to security token offerings, where regulators require ongoing enforcement of transfer eligibility.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:enterprise-token-standards",
      "label": "Enterprise Token Standards"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:enterprise-token-standards",
        "label": "Enterprise Token Standards"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Programmable compliance is the encoding of regulatory requirements — such as transfer restrictions, jurisdiction limits, investor accreditation checks and KYC status — directly into a token's smart-contract logic so that non-compliant transactions are automatically rejected on-chain. It shifts enforcement from manual, after-the-fact review to automated, pre-transaction validation, and is a defining feature of enterprise token standards used for security tokens. Programmable compliance is particularly relevant to security token offerings, where regulators require ongoing enforcement of transfer eligibility.
