public:: true

# ISO/IEC JTC 1/SC 17
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:42b9d12e97bea34df72e4a992fa4b779aca0bbd150e6f7735688d7dce24ab9b5",
  "@type": "Page",
  "vc:slug": "iso-iec-jtc-1-sc-17",
  "title": "ISO/IEC JTC 1/SC 17",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards-organization",
      "vc:label": "Standards Organization"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-jtc-1",
      "vc:label": "ISO/IEC JTC 1"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity-wallet",
      "vc:label": "Digital Identity Wallet"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec-jtc-1-sc-17",
  "@type": "Class",
  "label": "ISO/IEC JTC 1/SC 17",
  "definition": "ISO/IEC JTC 1/SC 17 is the joint ISO and IEC subcommittee responsible for standards covering cards and security devices for personal identification, including integrated circuit cards, machine-readable travel documents, driving licences, and mobile identity documents. Its work programme includes ISO/IEC 7816 for smart cards, ISO/IEC 14443 for contactless proximity cards, and ISO/IEC 18013-5 for mobile driving licences, making it the principal international venue for interoperable identity credential formats consumed by digital identity wallets.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:standards-organization",
    "label": "Standards Organization"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:iso-iec-jtc-1",
        "label": "ISO/IEC JTC 1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:biometric-identification",
        "label": "Biometric Identification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "ISO/IEC JTC 1/SC 17 is the joint ISO and IEC subcommittee responsible for standards covering cards and security devices for personal identification, including integrated circuit cards, machine-readable travel documents, driving licences, and mobile identity documents. Its work programme includes ISO/IEC 7816 for smart cards, ISO/IEC 14443 for contactless proximity cards, and ISO/IEC 18013-5 for mobile driving licences, making it the principal international venue for interoperable identity credential formats consumed by digital identity wallets."

- ### Semantic Classification
  - owl-class:: standards:IsoIecJtc1Sc17
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Standards Organization]]
  - part-of:: [[ISO IEC JTC 1]]
  - enables:: [[Digital Identity]]
  - related-to:: [[Digital Identity Wallet]]

- ### Content

  ## Definition

  **ISO/IEC JTC 1/SC 17** ("Cards and security devices for personal identification") is a subcommittee of the joint ISO/IEC technical committee for information technology. Established in the 1980s to standardise identification cards, it now owns the standards that underpin most physical and electronic identity credentials in circulation: bank cards, national identity cards, passports' machine-readable zones, health cards, and, increasingly, purely digital credentials held on smartphones.

  Its best-known deliverables include the ISO/IEC 7816 series (contact integrated circuit cards), ISO/IEC 14443 (contactless proximity cards, the basis of most e-passports and transit cards), ISO/IEC 7501 (machine-readable travel documents, maintained with ICAO), and ISO/IEC 18013 (driving licences). Part 5 of ISO/IEC 18013 defines the mobile driving licence (mDL), the first widely adopted international format for a government-issued credential presented from a phone, and ISO/IEC 23220 generalises this architecture for other mobile documents.

  The subcommittee's role in the identity ecosystem is distinct from that of ISO/IEC JTC 1/SC 27, which addresses information security techniques in general: SC 17 specifies the credential artefacts, data models, and interface protocols themselves. Digital identity wallet initiatives, including the EU Digital Identity Wallet, cite SC 17 deliverables as the interoperability baseline for holder-presented documents.

  ## Current Landscape

  SC 17's centre of gravity has shifted from plastic cards to mobile documents.

  - ISO/IEC 18013-5 (mDL, published 2021) is now complemented by the online-presentment specification ISO/IEC 18013-7, first issued as a Technical Specification (TS 18013-7:2024, published October 2024) and then revised as a second edition (TS 18013-7:2025), which withdrew and replaced the 2024 text; the revision updated mdoc MAC authentication and added a normative annex for the W3C Digital Credentials API retrieval route.
  - A companion technical report, ISO/IEC TR 25219:2025 ("mDL Guidance for Early Adopters", published December 2025), gives implementers targeted considerations for deploying 18013-7 over the internet — evidence of an active, fast-moving mDL programme rather than a static one.
  - The secretariat of SC 17 is held by BSI, the UK national standards body, so the UK role in this subcommittee is central rather than peripheral; national mirror work is coordinated through BSI committee IST/17.
  - mDL adoption is spreading across US states, the EU (under the eIDAS 2.0 / EU Digital Identity Wallet framework), Australia and Japan, positioning SC 17 alongside W3C Verifiable Credentials and the OpenID Foundation as one of the principal interoperability stacks for digital identity wallets; the ISO/IEC 23220 series generalises the same architecture to other mobile eID documents.

  **Sources**:
  - https://www.iso.org/standard/82772.html
  - https://webstore.iec.ch/en/publication/101954
  - https://standards.iteh.ai/catalog/standards/iso/85773531-274a-4f67-9a16-71d0c6cc11e9/iso-iec-tr-25219-2025
  - https://www.incits.org/news-events/press-releases/incits-announces-adoption-of-incitsisoiec-ts-18013720252025
