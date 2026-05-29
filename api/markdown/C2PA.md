public:: true

# c2pa
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:882e7a1b132625b647dae8abd01cdd4b727b812fce93a9f3a0106510826a0dab",
  "@type": "Page",
  "vc:slug": "c2-pa",
  "title": "c2pa",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:c2-pa",
  "@type": "Class",
  "label": "C2PA",
  "definition": "C2PA (Coalition for Content Provenance and Authenticity) is a cross-industry technical standards initiative and specification that defines how to cryptographically bind signed provenance metadata — including capture origin, AI generation disclosure, and editing history — to digital media assets such as images, video, audio, and documents. Founded by Adobe, Arm, BBC, Intel, Microsoft, and Truepic, C2PA publishes the C2PA technical specification under the Joint Development Foundation, which defines the manifest container format (JUMBF), assertion vocabularies, signing mechanism (COSE), and trust model. C2PA Content Credentials are the concrete artefact instantiating the specification.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:c2-pa-content-credentials", "label": "C2PA Content Credentials"},
      {"@id": "urn:ngm:class:provenance-verification", "label": "Provenance Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:deepfakes", "label": "Deepfakes"},
      {"@id": "urn:ngm:class:synthetic-media", "label": "Synthetic Media"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - C2PA (Coalition for Content Provenance and Authenticity) is a cross-industry technical standards initiative and specification that defines how to cryptographically bind signed provenance metadata — including capture origin, AI generation disclosure, and editing history — to digital media assets such as images, video, audio, and documents. Founded by Adobe, Arm, BBC, Intel, Microsoft, and Truepic, C2PA publishes the C2PA technical specification under the Joint Development Foundation, which defines the manifest container format (JUMBF), assertion vocabularies, signing mechanism (COSE), and trust model. C2PA Content Credentials are the concrete artefact instantiating the specification.

- ### Semantic Classification
  - owl-class:: c2-pa:C2PA
  - owl-role:: Concept

- ### Relationships
  - enables [[C2PA Content Credentials]]
  - enables [[Provenance Verification]]
  - uses [[Digital Signature]]
  - uses [[Provenance Tracking]]
  - contrastsWith [[Deepfakes]]
  - contrastsWith [[Synthetic Media]]

- ### Content
  - C2PA was formed to address the growing challenge of authenticating the provenance of digital media in an environment where Synthetic Media and Deepfakes can be indistinguishable from authentic content. The coalition defined a unified technical framework combining the best elements of two prior initiatives: Project Origin (focused on broadcast news provenance) and the Content Authenticity Initiative (CAI, led by Adobe). The resulting specification covers the full provenance lifecycle: capture (camera hardware embedding a credential at shutter press), editing (creative software appending editing assertions), distribution (platforms preserving or re-signing credentials), and verification (end-user tools displaying the credential chain).
  - The C2PA specification is technically built on JUMBF (JPEG Universal Metadata Box Format, ISO/IEC 19566-5) as the container for manifests within media files. Each manifest consists of assertions — typed data structures recording specific facts — and a claim, which is a JSON object enumerating the assertions and their hashes. The claim is signed using COSE, which wraps the signing key's X.509 certificate chain issued by a C2PA-compliant Certificate Authority. This PKI-based trust model allows verifiers to establish the signer's identity and determine whether the signing certificate was issued by a trusted CA.
  - The C2PA trust list — a curated registry of approved certificate authorities for C2PA signing — is maintained by the specification working group. Watermarking Service technology is being explored as a soft-binding complement: an invisible signal embedded in the pixel data that survives lossy re-encoding and links to the credential manifest even if the file metadata is stripped. The Provenance Ontology (PROV-O) and related provenance tracking standards inform the semantic model underlying C2PA's assertion vocabulary, ensuring interoperability with broader digital provenance ecosystems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
