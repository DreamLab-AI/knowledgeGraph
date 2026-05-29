public:: true

# openid foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9da73c01b094f65c28d6307d30d127d99818e4b8c5a71a9316fc2c6e187ec179",
  "@type": "Page",
  "vc:slug": "open-id-foundation",
  "title": "openid foundation",
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
  "@id": "urn:ngm:class:open-id-foundation",
  "@type": "Class",
  "label": "OpenID Foundation",
  "definition": "The OpenID Foundation (OIDF) is an international, member-driven, non-profit standards organisation that stewards the OpenID family of identity specifications, including OpenID Connect, FAPI (Financial-grade API), and MODRNA. It coordinates working groups composed of industry participants—identity providers, relying parties, and government bodies—to develop, test interoperability of, and maintain open specifications for federated authentication and authorisation. The Foundation also operates certification programmes to verify conformance of implementations to published profiles, thereby reducing interoperability barriers across global digital identity ecosystems.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "BC Governance and Regulation"
    }
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:open-id-connect", "label": "OpenID Connect"},
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The OpenID Foundation (OIDF) is an international, member-driven, non-profit standards organisation that stewards the OpenID family of identity specifications, including OpenID Connect, FAPI (Financial-grade API), and MODRNA. It coordinates working groups composed of industry participants—identity providers, relying parties, and government bodies—to develop, test interoperability of, and maintain open specifications for federated authentication and authorisation. The Foundation also operates certification programmes to verify conformance of implementations to published profiles, thereby reducing interoperability barriers across global digital identity ecosystems.

- ### Semantic Classification
  - owl-class:: open-id-foundation:OpenID Foundation
  - owl-role:: Concept

- ### Relationships
  - standardizedBy [[Standards Body]]
  - supports [[OpenID Connect]]
  - supports [[Digital Identity Standards]]
  - relatedTo [[Identity Federation]]
  - relatedTo [[Authentication Standards]]

- ### Content
  - The OpenID Foundation was established to foster the development and adoption of open identity standards, preventing fragmentation of the digital identity landscape through proprietary, incompatible authentication mechanisms. Its working groups cover a broad scope: the Connect working group maintains the OpenID Connect Core specification and profiles; the FAPI working group develops high-security API profiles for open banking and health data; and the Digital Credentials working group is extending OIDC to support Verifiable Credentials and mobile driver's licences.
  - The Foundation's conformance testing programme is particularly important for regulated sectors: open banking mandates in the UK, EU, and Australia require FAPI compliance from authorisation servers and client implementations. By publishing freely available, machine-readable test suites and issuing certification marks, the Foundation reduces the cost of standards adoption and provides regulatory bodies with a common reference for implementation requirements.
  - OpenID Connect—the Foundation's flagship specification—has become the dominant federated identity protocol for both consumer and enterprise use, underpinning social login flows at major technology platforms and enterprise single sign-on deployments using identity providers such as Microsoft Entra ID and Okta. The Foundation's governance model requires members to contribute intellectual property under a royalty-free licence policy, ensuring that implementations can be built and deployed without patent encumbrance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
