public:: true

# Offline Verification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:offline-verification",
  "@type": "Page",
  "vc:slug": "offline-verification",
  "title": "Offline Verification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:offline-verification",
  "@type": "Class",
  "label": "Offline Verification",
  "definition": "Offline verification is the ability to cryptographically validate a credential or claim without requiring a live connection to the issuer or a central server. The verifier checks digital signatures against the issuer's public key and any revocation data already held, confirming authenticity and integrity locally. It is a defining property of decentralised identity, enabling trust in low-connectivity or privacy-sensitive settings.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Offline verification validates credentials locally using cryptographic signatures without contacting the issuer. It is enabled by [[Verifiable Credentials]] and is a key property of [[Self-Sovereign Identity]].
- ### Content
  - Because the verifier checks the issuer's signature against a known public key, no callback to the issuer is needed, which improves privacy by avoiding issuer awareness of each verification. The main challenge is revocation: offline checks rely on cached status lists or cryptographic accumulators, trading immediacy of revocation information for connectivity independence.
