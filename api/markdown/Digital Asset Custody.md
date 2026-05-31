public:: true

# Digital Asset Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:digital-asset-custody",
  "@type": "Page",
  "vc:slug": "digital-asset-custody",
  "title": "Digital Asset Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-asset-custody",
  "@type": "Class",
  "label": "Digital Asset Custody",
  "definition": "Digital asset custody is the safekeeping and administration of cryptographic private keys that control crypto-assets on behalf of their owners. Custodians use controls such as hardware security modules, multi-party computation, and cold storage to protect keys against theft, loss, and unauthorised use while meeting regulatory and audit requirements. It is the trust and security backbone enabling institutional participation in digital-asset markets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:institutional-custody", "label": "Institutional Custody"},
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Digital asset custody secures the private keys that control crypto-assets, using HSMs, MPC, and cold storage. It is central to [[Institutional Custody]] offerings and is shaped by [[Securities Regulation]] governing qualified custodians.
- ### Content
  - Custody models range from fully self-custodial to third-party qualified custodians, with MPC and multisig reducing single points of failure. Key trade-offs balance security against operational speed; regulatory regimes increasingly mandate segregation of client assets, proof of reserves, and insurance.
