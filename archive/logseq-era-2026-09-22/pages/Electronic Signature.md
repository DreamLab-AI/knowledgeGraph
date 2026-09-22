public:: true

# Electronic Signature

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-electronic-signature",
  "@type": "Page",
  "vc:slug": "electronic-signature",
  "title": "Electronic Signature",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:electronic-signature",
  "@type": "Class",
  "label": "Electronic Signature",
  "definition": "An Electronic Signature is any electronic data that is logically associated with a document and used to indicate the signatory's acceptance or authentication of its content, spanning simple typed names through to qualified digital signatures backed by cryptographic certificates. Legal frameworks such as eIDAS in the EU and ESIGN/UETA in the US establish the legal equivalence of electronic signatures to handwritten ones under defined conditions. Advanced forms rely on public-key infrastructure to provide non-repudiation and integrity assurances.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:identification", "label": "Identification"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Electronic data logically associated with a document to authenticate the signatory's intent, ranging from simple typed names to cryptographically assured qualified digital signatures with legal standing under frameworks like eIDAS.
