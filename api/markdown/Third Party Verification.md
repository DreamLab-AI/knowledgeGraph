public:: true

# Third Party Verification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:third-party-verification",
  "@type": "Page",
  "title": "Third Party Verification",
  "vc:slug": "third-party-verification",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:third-party-verification",
  "@type": "Class",
  "label": "Third Party Verification",
  "definition": "Third party verification is the independent assessment of a claim, asset, process, or record by an entity that has no stake in the outcome, providing impartial assurance that stated facts are accurate and conform to defined standards. By separating the verifier from the parties being assessed, it increases trust, reduces conflicts of interest, and supports accountability in markets, supply chains, and reporting. It is central to audit, certification, and attestation regimes.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:verification",
      "label": "VERIFICATION"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "VERIFICATION"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verification",
        "label": "VERIFICATION"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
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
  - [[Third Party Verification]] is independent assessment of a claim or record by an impartial entity with no stake in the outcome.
  - It provides assurance that stated facts are accurate and conform to defined standards, underpinning [[Trust]].
  - It is a form of [[VERIFICATION]] central to [[Audit]], certification, and attestation.
- ### Overview
  - Self-asserted claims carry inherent conflicts of interest; an independent verifier separates the assessor from the assessed.
  - The verifier examines evidence against agreed criteria and issues an opinion, certificate, or attestation.
  - Independence, competence, and consistent methodology determine the credibility of the verification.
  - Results feed into compliance, market access, and reporting decisions.
- ### Key aspects
  - **Independence**: the verifier is free of financial or operational ties to the verified party.
  - **Standards**: assessment is against documented, often externally defined criteria.
  - **Evidence**: conclusions rest on traceable [[Provenance]] and [[Data Integrity]].
  - **Attestation**: a formal statement records the verification outcome.
- ### Applications
  - Verifying [[Carbon Credits]] and sustainability claims.
  - Financial statement audits and assurance engagements.
  - Product and process certification.
  - Supply-chain provenance and integrity checks.
- ### Relationships
  - requires:: [[Audit]]
  - requires:: [[Provenance]]
  - requires:: [[Data Integrity]]
  - dependsOn:: [[Trust]]
  - dependsOn:: [[VERIFICATION]]
  - supports:: [[Compliance]]
  - supports:: [[Carbon Credits]]
  - enables:: [[Quality Assurance]]
  - implements:: [[VERIFICATION]]
  - relatedTo:: [[Trust]]
  - relatedTo:: [[Compliance]]
  - relatedTo:: [[Audit]]
- ### Provenance
  - updated:: 2026-06-15
