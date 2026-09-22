public:: true

# Identity Attestation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:identity-attestation",
  "@type": "Page",
  "title": "Identity Attestation",
  "vc:slug": "identity-attestation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-attestation",
  "@type": "Class",
  "label": "Identity Attestation",
  "definition": "Identity attestation is a cryptographically signed claim, issued by a trusted party, that vouches for an attribute or fact about a digital identity, such as personhood, credential possession or eligibility. It is verified through digital-signature verification against the issuer's public key, allowing a relying party to trust the claim without contacting the issuer directly. Attestation schemes are used in decentralised identity systems and in platforms such as Gitcoin to establish sybil-resistant, verifiable identity without revealing underlying personal data.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {},
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
	- Identity attestation is a cryptographically signed claim, issued by a trusted party, that vouches for an attribute or fact about a digital identity, such as personhood, credential possession or eligibility. It is verified through digital-signature verification against the issuer's public key, allowing a relying party to trust the claim without contacting the issuer directly. Attestation schemes are used in decentralised identity systems and in platforms such as Gitcoin to establish sybil-resistant, verifiable identity without revealing underlying personal data.
- ### Relationships
	- subClassOf:: [[Digital Identity]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
