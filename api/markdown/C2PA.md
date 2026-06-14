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
  "definition": "C2PA (Coalition for Content Provenance and Authenticity) is a cross-industry open technical standards body and specification that cryptographically binds signed provenance metadata — covering capture origin, editing history, and AI generation disclosure — to digital media assets including images, video, audio, and documents. Founded by Adobe, Arm, BBC, Intel, Microsoft, and Truepic under the Joint Development Foundation, the C2PA specification defines the manifest container format (JUMBF/ISO 19566-5), assertion vocabularies, COSE-based signing mechanism, X.509 PKI trust model, and the resulting Content Credentials artefact. C2PA consolidates two prior initiatives — Adobe's Content Authenticity Initiative (CAI) and the BBC-led Project Origin — into a single interoperable standard for end-to-end media provenance across capture, editing, distribution, and verification stages.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Sc Standards And Interop"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:c2-pa-content-credentials", "label": "C2PA Content Credentials"},
      {"@id": "urn:ngm:class:c2-pa-manifest", "label": "C2PA Manifest"},
      {"@id": "urn:ngm:class:c2-pa-assertion", "label": "C2PA Assertion"},
      {"@id": "urn:ngm:class:c2-pa-trust-list", "label": "C2PA Trust List"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:provenance-verification", "label": "Provenance Verification"},
      {"@id": "urn:ngm:class:media-authentication", "label": "Media Authentication"},
      {"@id": "urn:ngm:class:ai-disclosure", "label": "AI Disclosure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:jumbf", "label": "JUMBF"},
      {"@id": "urn:ngm:class:cose", "label": "COSE"},
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:x-509-certificate", "label": "X.509 Certificate"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:content-authenticity-initiative", "label": "Content Authenticity Initiative"},
      {"@id": "urn:ngm:class:project-origin", "label": "Project Origin"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:disinformation-countermeasures", "label": "Disinformation Countermeasures"},
      {"@id": "urn:ngm:class:media-integrity", "label": "Media Integrity"},
      {"@id": "urn:ngm:class:supply-chain-transparency", "label": "Supply Chain Transparency"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:deepfakes", "label": "Deepfakes"},
      {"@id": "urn:ngm:class:synthetic-media", "label": "Synthetic Media"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"},
      {"@id": "urn:ngm:class:watermarking", "label": "Watermarking"},
      {"@id": "urn:ngm:class:prov-o", "label": "PROV-O"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-media-alliance", "label": "Open Media Alliance"},
      {"@id": "urn:ngm:class:w3c-verifiable-credentials", "label": "W3C Verifiable Credentials"},
      {"@id": "urn:ngm:class:joint-development-foundation", "label": "Joint Development Foundation"},
      {"@id": "urn:ngm:class:digital-media-standards", "label": "Digital Media Standards"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:coalition-for-content-provenance-and-authenticity", "label": "Coalition for Content Provenance and Authenticity"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **C2PA** (Coalition for Content Provenance and Authenticity) is a cross-industry open [[Digital Media Standards]] body that publishes the C2PA technical specification — a framework for cryptographically binding signed [[Provenance Tracking]] metadata to digital media files. Using [[JUMBF]] as a manifest container and [[COSE]] as its signing mechanism, C2PA enables end-to-end verification of a file's capture origin, editing history, and [[AI Disclosure]] status. It emerged from the merger of Adobe's [[Content Authenticity Initiative]] (CAI) and the BBC-led [[Project Origin]], and is governed under the [[Joint Development Foundation]].

- ### Overview
  - C2PA addresses a fundamental trust problem in digital media: the ease with which images, videos, audio recordings, and documents can be altered or entirely generated by AI makes it impossible for consumers to distinguish authentic from manipulated content without external verification mechanisms.
  - The coalition was founded in 2021 by Adobe, Arm, BBC, Intel, Microsoft, and Truepic. It has since expanded to include camera manufacturers, social media platforms, news organisations, and AI generative model providers, each of which can implement the specification at different stages of the media lifecycle.
  - Unlike watermarking alone, C2PA ties provenance data to the file via a cryptographic manifest signed by a trusted identity — making tampering detectable through [[Digital Signature]] validation rather than perceptual fragility.
  - The specification is freely published and versioned; as of 2024–2025 the 2.x series is widely deployed. Member companies include Canon, Leica, Nikon, Google, OpenAI, and major news agencies.

- ### Key Components
  - #### Manifest and Container
    - **[[JUMBF]] (JPEG Universal Metadata Box Format)** — ISO/IEC 19566-5 defines the binary container embedded within or alongside media files to store C2PA manifests. JUMBF boxes can be nested inside JPEG, MP4, PDF, WAV, and other formats without breaking existing parsers.
    - **C2PA Manifest** — the top-level structure within JUMBF; consists of a claim, a set of assertions, and a claim signature. Multiple manifests may form a manifest store representing the file's edit history as a chain.
    - **Active Manifest** — the most recent manifest in the store; the one that describes the current version of the asset.
  - #### Assertions
    - **[[C2PA Assertion]]** — typed data structures that record specific facts about the media. Core assertion types include:
      - `c2pa.actions` — records editing operations (crop, filter, AI generation, region removal)
      - `c2pa.hash.data` / `c2pa.hash.bmff` — cryptographic hashes binding the claim to specific byte ranges of the media file, ensuring integrity
      - `c2pa.ingredient` — embeds a reference or thumbnail of a source asset used to compose the output
      - `c2pa.ai.generative_info` — discloses use of generative AI tools and which model produced the content
      - `c2pa.thumbnail` — a reference thumbnail for display in verification UIs
      - `stds.exif` / `stds.iptc` — wraps standard metadata vocabularies
  - #### Signing and Trust
    - **[[COSE]] (CBOR Object Signing and Encryption)** — RFC 8152 defines the signing envelope. Each claim is serialised and signed with the producer's private key; the resulting COSE structure includes the full [[X.509 Certificate]] chain.
    - **[[Public Key Infrastructure]]** — C2PA adopts a conventional [[Certificate Authority]] (CA) model. Signers obtain a certificate from a C2PA-approved CA; verifiers validate the certificate chain against the C2PA Trust List.
    - **[[C2PA Trust List]]** — a curated registry of approved CAs maintained by the C2PA working group, enabling cross-organisation verification without per-signer out-of-band trust negotiation.
    - **Time-stamping** — RFC 3161 trusted timestamping services are used to record the precise signing time, enabling verification even after a certificate expires.
  - #### Soft Binding Complement
    - **[[Watermarking]]** — C2PA is exploring invisible watermark signals as a "soft binding" complement; the watermark survives lossy re-encoding (JPEG re-save, social media transcoding) and carries a reference ID that resolves to the manifest even when JUMBF metadata is stripped.
    - This is a recognised limitation of hard binding: metadata stripping or re-encoding severs the JUMBF manifest from the file, breaking verification.
  - #### Verification Flow
    - A verifier reads the manifest store from the JUMBF box, validates the COSE signature against the signer's certificate (resolved via the [[C2PA Trust List]]), computes the declared hashes over the file's byte ranges, and traverses the ingredient chain to build a complete provenance view.
    - [[C2PA Content Credentials]] is the end-user-visible representation: a badge or panel displaying origin, edit summary, and AI usage disclosures.

- ### Applications and Use Cases
  - **Camera Hardware Provenance** — Canon, Leica, Nikon, and Sony have shipped or announced cameras that embed a C2PA manifest at the moment of capture, signed by an on-device hardware security module. This provides a device-anchored root of trust for photojournalism.
  - **Generative AI Disclosure** — Adobe Firefly, Microsoft Designer, OpenAI's image generation tools, and others attach a C2PA manifest to every generated image, declaring the model used and that the content was AI-produced. This enables downstream platforms to surface AI-origin labels.
  - **News and Broadcast Authenticity** — news organisations (AP, Reuters, BBC) use C2PA-signed content to allow readers to verify that an image was captured and edited by a credentialed journalist before any retouching beyond approved operations.
  - **Social Media Platform Integration** — platforms such as LinkedIn (Microsoft) and TikTok have announced or deployed C2PA verification; the platform re-signs or preserves the manifest on upload, and surfaces the credential badge to end users.
  - **Document and PDF Provenance** — the specification extends to PDF and other document formats, enabling legal and governmental document chains of custody.
  - **Video Game and 3D Asset Provenance** — C2PA is being evaluated for 3D model and game asset pipelines to track modification history across studios.
  - **Regulatory Compliance** — the EU AI Act and US executive orders on AI require labelling of AI-generated content; C2PA manifests provide a machine-readable mechanism for satisfying such requirements.

- ### Relationships
  - hasPart:: [[C2PA Content Credentials]]
  - hasPart:: [[C2PA Manifest]]
  - hasPart:: [[C2PA Assertion]]
  - hasPart:: [[C2PA Trust List]]
  - requires:: [[Digital Signature]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Certificate Authority]]
  - enables:: [[Provenance Verification]]
  - enables:: [[Media Authentication]]
  - enables:: [[AI Disclosure]]
  - uses:: [[JUMBF]]
  - uses:: [[COSE]]
  - uses:: [[Provenance Tracking]]
  - uses:: [[X.509 Certificate]]
  - implements:: [[Content Authenticity Initiative]]
  - implements:: [[Project Origin]]
  - supports:: [[Disinformation Countermeasures]]
  - supports:: [[Media Integrity]]
  - supports:: [[Supply Chain Transparency]]
  - contrastsWith:: [[Deepfakes]]
  - contrastsWith:: [[Synthetic Media]]
  - bridges-to:: [[AI Governance and Ethics]]
  - bridges-to:: [[Watermarking]]
  - bridges-to:: [[PROV-O]]
  - relatedTo:: [[W3C Verifiable Credentials]]
  - relatedTo:: [[Joint Development Foundation]]
  - relatedTo:: [[Open Media Alliance]]

- ### Standards and Context
  - **Joint Development Foundation (JDF)** — C2PA operates under the JDF, a subsidiary of the Linux Foundation, providing a royalty-free intellectual property framework suitable for broad industry adoption.
  - **ISO/IEC 19566-5 (JUMBF)** — the container format underlying C2PA manifests; a published international standard that ensures codec-neutral embedding.
  - **RFC 8152 (COSE)** — the IETF standard used for claim signing; provides algorithm agility (ECDSA, RSA-PSS) and compact CBOR serialisation suited to constrained environments such as camera hardware.
  - **RFC 3161 (TSA)** — trusted timestamping used to anchor the signing time independently of certificate validity period.
  - **[[W3C Verifiable Credentials]]** — a conceptually related W3C standard for cryptographically verifiable claims; C2PA intentionally does not adopt the VC data model but shares design goals. The two ecosystems are being evaluated for interoperability.
  - **[[PROV-O]]** — the W3C Provenance Ontology informs the semantic model of C2PA assertions; C2PA assertion vocabulary maps onto PROV concepts of Entity, Activity, and Agent.
  - **EU AI Act (2024)** — Article 50 mandates disclosure of AI-generated content; C2PA is cited as a candidate technical mechanism for compliance.
  - **US National Security Memorandum / EO on AI (2023–2024)** — directs NIST and federal agencies to advance content provenance standards; C2PA is referenced in NIST AI RMF guidance.
  - **[[Open Media Alliance]]** — a complementary initiative (formerly known as Project Origin) focused on news media provenance; works alongside C2PA rather than in competition.
  - **Content Authenticity Initiative (CAI)** — Adobe's industry alliance that drives adoption, tooling, and education for C2PA-based [[C2PA Content Credentials]]; the CAI and C2PA technical spec are distinct but deeply coupled.

- ### Limitations and Open Problems
  - **Stripping vulnerability** — any actor can remove JUMBF metadata from a JPEG or video container; the credential is lost but the media survives. Soft binding via [[Watermarking]] is the primary mitigation under development.
  - **Selective disclosure** — the current specification does not support zero-knowledge proofs; a signer must disclose their full certificate chain, which can reveal identity in sensitive contexts (whistleblowers, conflict journalists).
  - **Revocation** — if a signing certificate is compromised, the C2PA Trust List must be updated and relying parties must refresh their trust anchors; there is no live OCSP-equivalent in the verifier flow today.
  - **Ingredient loop attacks** — a malicious actor could construct a false ingredient chain; the specification relies on the CA trust model to prevent this, but the CA vetting process varies in rigour.
  - **AI training data provenance** — whether C2PA credentials should persist when an image is used as AI training data is an active policy discussion; the `c2pa.ai.training_mining` assertion is a proposed mechanism.

- ### Provenance
  - sources:: C2PA Technical Specification v2.x (c2pa.org); Joint Development Foundation; Adobe CAI documentation; IETF RFC 8152; ISO/IEC 19566-5
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
