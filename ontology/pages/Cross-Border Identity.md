public:: true

# Cross-Border Identity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cross-border-identity", "@type":"Page", "title":"Cross-Border Identity", "vc:slug":"cross-border-identity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-border-identity",
  "@type": "Class",
  "label": "Cross-Border Identity",
  "definition": "Cross-border identity refers to digital identity credentials and verification mechanisms designed to be recognised and trusted across national jurisdictions, allowing an individual or organisation to prove attributes about themselves to a relying party in a different country without relying on a single centralised, national identity authority. It builds on self-sovereign identity principles and interoperable trust frameworks, such as those developed by the Trust Over IP Foundation, to establish mutual recognition of credential formats, issuers and verification methods between jurisdictions. Cross-border identity is a key enabler for international travel, remote work and cross-border financial services that require reliable identity assurance.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:self-sovereign-identity",
      "label": "Self Sovereign Identity"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:trust-over-ip-foundation",
        "label": "Trust Over IP Foundation"
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
	- Cross-border identity refers to digital identity credentials and verification mechanisms designed to be recognised and trusted across national jurisdictions, allowing an individual or organisation to prove attributes about themselves to a relying party in a different country without relying on a single centralised, national identity authority. It builds on self-sovereign identity principles and interoperable trust frameworks, such as those developed by the Trust Over IP Foundation, to establish mutual recognition of credential formats, issuers and verification methods between jurisdictions. Cross-border identity is a key enabler for international travel, remote work and cross-border financial services that require reliable identity assurance.
- ### Relationships
	- partOf:: [[Self Sovereign Identity]]
	- relatedTo:: [[Self Sovereign Identity]]
	- relatedTo:: [[Trust Over IP Foundation]]
