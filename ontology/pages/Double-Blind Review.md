public:: true

# Double-Blind Review

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:double-blind-review", "@type":"Page", "title":"Double-Blind Review", "vc:slug":"double-blind-review", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:double-blind-review",
  "@type": "Class",
  "label": "Double-Blind Review",
  "definition": "Double-blind review is a peer review process in which both the identity of the authors and the identity of the reviewers are withheld from each other, intended to reduce bias arising from reputation, affiliation or personal relationships. It is widely used by academic conferences and journals, including major machine learning venues, to assess submissions on the basis of their technical merit alone. Implementing double-blind review typically requires anonymised manuscripts and a submission system that separates author and reviewer identities throughout the process.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:peer-review",
      "label": "Peer Review"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:academic-conference",
        "label": "Academic Conference"
      },
      {
        "@id": "urn:ngm:class:icml",
        "label": "ICML"
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
	- Double-blind review is a peer review process in which both the identity of the authors and the identity of the reviewers are withheld from each other, intended to reduce bias arising from reputation, affiliation or personal relationships. It is widely used by academic conferences and journals, including major machine learning venues, to assess submissions on the basis of their technical merit alone. Implementing double-blind review typically requires anonymised manuscripts and a submission system that separates author and reviewer identities throughout the process.
- ### Relationships
	- partOf:: [[Peer Review]]
	- relatedTo:: [[Academic Conference]]
	- relatedTo:: [[ICML]]
