public:: true

# Educational Credentials
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:educational-credentials",
  "@type": "Page",
  "vc:slug": "educational-credentials",
  "title": "Educational Credentials",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:educational-credentials",
  "@type": "Class",
  "label": "Educational Credentials",
  "definition": "Educational Credentials are formal attestations of learning achievement, such as diplomas, degrees, certificates, and micro-credentials, issued by an educational authority. When expressed as verifiable credentials they can be cryptographically signed and held by the learner, allowing tamper-evident, privacy-preserving verification without contacting the issuer. They are a primary use case for decentralised, self-sovereign identity systems.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"}, {"@id": "urn:ngm:class:distributed-identity", "label": "Distributed Identity"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Educational Credentials are verifiable attestations of learning, such as degrees and certificates. As verifiable credentials they support [[Self-Sovereign Identity]] and [[Distributed Identity]] by letting learners hold and present signed proofs of achievement.
- ### Content
  - Issuers sign credentials that conform to standards such as W3C Verifiable Credentials, binding claims to a learner's decentralised identifier. Verifiers check signatures and revocation status cryptographically, enabling instant, tamper-evident validation while minimising disclosure of personal data.
