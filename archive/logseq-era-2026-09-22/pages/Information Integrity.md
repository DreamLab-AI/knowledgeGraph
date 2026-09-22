public:: true

# Information Integrity

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:information-integrity",
  "@type": "Page",
  "title": "Information Integrity",
  "vc:slug": "information-integrity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-integrity",
  "@type": "Class",
  "label": "Information Integrity",
  "definition": "Information integrity is the property and governance objective of ensuring that information remains accurate, complete, authentic and resistant to unauthorised or deceptive alteration across its lifecycle. In the digital-content context it spans provenance, authenticity verification and resilience against misinformation and disinformation. It draws on technical measures such as digital watermarking and cryptographic provenance alongside institutional trust-and-safety practices.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:content-provenance",
      "label": "Content Provenance"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:content-provenance",
        "label": "Content Provenance"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-watermarking",
        "label": "Digital Watermarking"
      },
      {
        "@id": "urn:ngm:class:content-authenticity",
        "label": "Content Authenticity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:trust-and-safety",
        "label": "Trust and Safety"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fact-checking",
        "label": "Fact-Checking"
      },
      {
        "@id": "urn:ngm:class:media-literacy",
        "label": "Media Literacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:misinformation",
        "label": "Misinformation"
      },
      {
        "@id": "urn:ngm:class:disinformation",
        "label": "Disinformation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:epistemic-security",
        "label": "Epistemic Security"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Information Integrity]] safeguards the accuracy and authenticity of information across its lifecycle, relying on [[Content Provenance]], [[Digital Watermarking]] and [[Trust and Safety]] to resist [[Disinformation]].
- ### Overview
  - Information integrity treats trustworthiness as a property to be established, preserved and verified rather than assumed.
  - It combines technical assurances (provenance metadata, watermarks, signatures) with institutional and editorial practices.
  - The rise of synthetic media has sharpened the need for verifiable content authenticity at scale.
  - It is a governance objective that intersects data integrity, security and public-interest media policy.
- ### Key aspects
  - Provenance and authenticity metadata attached to media at creation.
  - Cryptographic signing and verifiable credentials for source attestation.
  - Digital and invisible watermarking to detect tampering and synthesis.
  - Fact-checking, labelling and platform trust-and-safety workflows.
  - Resilience against coordinated misinformation and disinformation campaigns.
- ### Applications
  - Newsroom and platform content-authenticity pipelines.
  - Election-integrity and public-health information programmes.
  - Provenance disclosure for AI-generated media.
  - Enterprise governance of document and record authenticity.
- ### Relationships
  - dependsOn:: [[Content Provenance]]
  - dependsOn:: [[Data Integrity]]
  - uses:: [[Digital Watermarking]]
  - uses:: [[Content Authenticity]]
  - supports:: [[Trust]]
  - supports:: [[Trust and Safety]]
  - enables:: [[Fact-Checking]]
  - enables:: [[Media Literacy]]
  - requires:: [[Authentication]]
  - requires:: [[Verifiable Credentials]]
  - contrastsWith:: [[Misinformation]]
  - contrastsWith:: [[Disinformation]]
  - bridgesTo:: [[Provenance]]
  - relatedTo:: [[Epistemic Security]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
