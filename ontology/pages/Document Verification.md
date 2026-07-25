public:: true

# Document Verification
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:document-verification", "@type":"Page", "title":"Document Verification", "vc:slug":"document-verification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:document-verification",
  "@type": "Class",
  "label": "Document Verification",
  "definition": "Document verification is the process of confirming that an identity or supporting document presented by a customer is authentic, unaltered, and belongs to the presenting individual. In financial onboarding it combines optical capture, security-feature and template checks, data extraction, and cross-referencing against issuing-authority records or biometric liveness, forming a core step within know-your-customer and anti-money-laundering controls.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:know-your-customer",
      "label": "Know Your Customer"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:onboarding",
        "label": "Onboarding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:aml",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:onboarding",
        "label": "Onboarding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
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
- [[Document Verification]] confirms that an identity document is authentic and belongs to its presenter. It is a core step of [[Know Your Customer]] and [[Onboarding]], supporting [[Compliance]] and [[Anti-Money Laundering]] obligations through checks that increasingly use [[Machine Learning]].
- ### Overview
- Document verification underpins trust in financial relationships by establishing that the person opening or operating an account is who they claim to be. It typically runs at account opening and may be repeated for high-risk events or periodic review.
- The process spans capture, authenticity assessment, data extraction, and validation against authoritative sources. Modern implementations blend automated checks with human review for edge cases and contested results.
- ### Key aspects
- Authenticity checks inspect security features, fonts, layouts, and template conformance against known document specifications.
- Data extraction parses machine-readable zones and printed fields, normalising them for downstream screening.
- Liveness and face-match steps tie the document to the live presenter, deterring impersonation.
- Source cross-referencing validates extracted data against issuing-authority or registry records where available.
- ### Applications
- Customer onboarding for banks, exchanges, and payment providers.
- Sanctions and politically-exposed-person screening as part of [[Anti-Money Laundering]].
- Re-verification triggered by [[Fraud Detection]] signals or regulatory review.
- ### Relationships
- subClassOf:: [[Know Your Customer]]
- partOf:: [[Know Your Customer]]
- partOf:: [[Onboarding]]
- requires:: [[Compliance]]
- hasPart:: [[Fraud Detection]]
- supports:: [[Anti-Money Laundering]]
- supports:: [[Compliance]]
- enables:: [[Onboarding]]
- uses:: [[Machine Learning]]
- dependsOn:: [[Fraud Detection]]
- relatedTo:: [[Verifiable Credential]]
- relatedTo:: [[Zero-Knowledge Proof]]
- bridgesTo:: [[Digital Signature]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
