public:: true

# Frand Licensing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:frand-licensing",
  "@type": "Page",
  "title": "Frand Licensing",
  "vc:slug": "frand-licensing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:frand-licensing",
  "@type": "Class",
  "label": "Frand Licensing",
  "definition": "FRAND licensing refers to the commitment by holders of standard-essential patents to license those patents on fair, reasonable and non-discriminatory terms. It is a mechanism used by standards bodies to balance patent holders' rights with the need for broad, equitable access to technologies required to implement a standard. FRAND commitments aim to prevent hold-up and ensure interoperability across implementers.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:licensing",
      "label": "Licensing"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:licensing",
        "label": "Licensing"
      },
      {
        "@id": "urn:ngm:class:intellectual-property-rights",
        "label": "Intellectual Property Rights"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:patent",
        "label": "Patent"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:open-standards",
        "label": "Open Standards"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:licensing-requirements",
        "label": "Licensing Requirements"
      },
      {
        "@id": "urn:ngm:class:royalty-mechanism",
        "label": "Royalty Mechanism"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:intellectual-property-rights-framework",
        "label": "Intellectual Property Rights Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:content-licensing",
        "label": "Content Licensing"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Relates to [[Licensing]]
  - Relates to [[Patent]]
  - Relates to [[Standards Body]]
  - Relates to [[Interoperability]]
  - Relates to [[Fairness]]
- ### Overview
  - FRAND commitments accompany declarations that patents are essential to a standard.
  - They oblige holders to license on fair, reasonable and non-discriminatory terms.
  - The model curbs the risk of patent hold-up against locked-in implementers.
  - Disputes over what counts as fair or reasonable are frequently litigated.
  - Standards bodies require such commitments to admit patented technology into a standard.
- ### Key aspects
  - **Standard-essential patents** — Patents that cannot be avoided when implementing a standard fall under FRAND obligations.
  - **Fair and reasonable terms** — Royalty rates and conditions must be defensible relative to the patent's contribution.
  - **Non-discrimination** — Similarly situated licensees should receive comparable terms.
  - **Dispute resolution** — Courts and arbitration settle disagreements over rates and good-faith negotiation.
- ### Applications
  - Licensing of telecommunications standards such as cellular technologies.
  - Codec and media standards requiring broad implementer access.
  - Connectivity and IoT standards with many participating vendors.
  - Resolving cross-licensing among competing patent holders.
- ### Relationships
  - subClassOf:: [[Licensing]]
  - implements:: [[Licensing]]
  - implements:: [[Intellectual Property Rights]]
  - relatedTo:: [[Patent]]
  - relatedTo:: [[Fairness]]
  - requires:: [[Standards Body]]
  - requires:: [[Transparency]]
  - supports:: [[Interoperability]]
  - supports:: [[Open Standards]]
  - uses:: [[Licensing Requirements]]
  - uses:: [[Royalty Mechanism]]
  - dependsOn:: [[Intellectual Property Rights Framework]]
  - contrastsWith:: [[Content Licensing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
