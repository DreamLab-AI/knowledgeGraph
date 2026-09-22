public:: true

# Fraud Prevention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fraud-prevention",
  "@type": "Page",
  "vc:slug": "fraud-prevention",
  "title": "Fraud Prevention",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fraud-prevention",
  "@type": "Class",
  "label": "Fraud Prevention",
  "definition": "Fraud prevention is the set of controls, processes, and technologies designed to detect and stop deceptive activity intended to obtain money, data, or access illegitimately. In digital identity and finance it combines authentication, behavioural analytics, anomaly detection, and proof-of-personhood mechanisms. Effective fraud prevention reduces financial loss and protects the integrity of identity and payment systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:humanity-attestation", "label": "Humanity Attestation"}, {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Fraud prevention encompasses the controls that block deceptive access or transactions, and is enabled by mechanisms such as [[Humanity Attestation]] and [[Identity Verification]] that establish trust in an actor's identity.
- ### Content
  - Modern systems layer rule-based checks, machine-learning risk scoring, device fingerprinting, and step-up authentication to balance friction against security. In decentralised settings, proof-of-personhood and verifiable credentials counter Sybil attacks and synthetic identities. Continuous monitoring and feedback loops keep models current as fraud patterns evolve.
