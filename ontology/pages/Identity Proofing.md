public:: true

# Identity Proofing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:identity-proofing",
  "@type": "Page",
  "vc:slug": "identity-proofing",
  "title": "Identity Proofing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-proofing",
  "@type": "Class",
  "label": "Identity Proofing",
  "definition": "Identity proofing is the process of collecting and validating evidence to establish that a claimed identity corresponds to a real, unique person before issuing credentials or granting access. It typically combines document verification, biometric checks, and authoritative-source confirmation, graded by assurance levels such as those defined in NIST SP 800-63A. Identity proofing precedes authentication and is foundational to trustworthy onboarding.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}],
    "relatedTo": [{"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Identity proofing validates evidence to bind a claimed identity to a real person at onboarding, forming part of [[Identity Verification]] and a building block of any [[Trust Framework]].
- ### Content
  - Proofing workflows resolve, validate, and verify identity evidence, escalating from self-asserted to remote biometric and in-person checks as the required assurance level rises. Stronger proofing reduces downstream fraud and synthetic-identity risk but must be balanced against onboarding friction and inclusion concerns.
