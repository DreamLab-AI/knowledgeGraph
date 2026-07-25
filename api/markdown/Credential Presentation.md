public:: true

# Credential Presentation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:credential-presentation", "@type":"Page", "title":"Credential Presentation", "vc:slug":"credential-presentation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-presentation",
  "@type": "Class",
  "label": "Credential Presentation",
  "definition": "Credential presentation is the process by which a holder of a verifiable credential shares proof of that credential, or selected claims derived from it, with a verifying party in order to satisfy a request, typically as a signed verifiable presentation rather than the raw credential itself. It follows credential issuance in the standard verifiable-credential lifecycle of issuance, storage, presentation and verification, and may use selective disclosure so the holder reveals only the attributes required rather than the full credential. Credential presentation protocols, such as those built on DIDComm or OpenID for Verifiable Presentations, define how the request, proof and response are exchanged between holder and verifier.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:credential-issuance",
      "label": "Credential Issuance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:credential-issuance",
        "label": "Credential Issuance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:credential-issuance",
        "label": "Credential Issuance"
      },
      {
        "@id": "urn:ngm:class:didcomm",
        "label": "DIDComm"
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
	- Credential presentation is the process by which a holder of a verifiable credential shares proof of that credential, or selected claims derived from it, with a verifying party in order to satisfy a request, typically as a signed verifiable presentation rather than the raw credential itself. It follows credential issuance in the standard verifiable-credential lifecycle of issuance, storage, presentation and verification, and may use selective disclosure so the holder reveals only the attributes required rather than the full credential. Credential presentation protocols, such as those built on DIDComm or OpenID for Verifiable Presentations, define how the request, proof and response are exchanged between holder and verifier.
- ### Relationships
	- partOf:: [[Credential Issuance]]
	- relatedTo:: [[Credential Issuance]]
	- relatedTo:: [[DIDComm]]
