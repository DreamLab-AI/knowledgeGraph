public:: true

# Identification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-identification",
  "@type": "Page",
  "vc:slug": "identification",
  "title": "Identification",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identification",
  "@type": "Class",
  "label": "Identification",
  "definition": "Identification is the process of establishing the claimed identity of an entity — person, device, or service — by associating it with a unique identifier and supporting evidence such as credentials, biometrics, or cryptographic proofs. It is a prerequisite step to authentication and authorisation in any access-control or trust framework. Identification schemes range from simple username–password pairs to government-issued digital identity documents and decentralised self-sovereign identity systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:electronic-signature", "label": "Electronic Signature"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - The process of establishing an entity's claimed identity by associating it with a unique identifier and supporting evidence, forming the prerequisite step to authentication and authorisation.
