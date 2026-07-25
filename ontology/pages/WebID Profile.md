public:: true

# WebID Profile
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-id-profile",
  "@type": "Page",
  "vc:slug": "web-id-profile",
  "title": "WebID Profile",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-id-profile",
  "@type": "Class",
  "label": "WebID Profile",
  "definition": "A WebID Profile is an RDF document accessible at a dereferenceable HTTP URI that describes a person or agent, linking their identity to cryptographic keys, social contacts, and access control preferences, thereby enabling decentralised authentication and authorisation on the web without a centralised identity provider. The profile uses vocabularies such as FOAF and vCard to express identity attributes, and the WebID-TLS and WebID-OIDC protocols use it to authenticate agents by verifying control of the URI through certificate or token proofs. WebID Profiles are a foundational component of the Solid decentralised web platform, where they serve as the entry point for discovering a user's data pods and access control rules. They embody the self-sovereign principle that identity should be controlled by the individual rather than delegated to a platform.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:solid", "label": "Solid"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:solid-pod", "label": "Solid Pod"},
      {"@id": "urn:ngm:class:w3-c-did-core", "label": "W3C DID Core"},
      {"@id": "urn:ngm:class:personal-data-store", "label": "Personal Data Store"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A WebID Profile is a dereferenceable [[RDF]] document that anchors a person's or agent's [[Digital Identity]] to cryptographic credentials and social metadata within the [[Solid]] ecosystem, enabling [[Self Sovereign Identity]] and interoperability with [[Decentralized Identity (DID)]] systems.

- ### Relationships
  - WebID Profiles require [[RDF]] as their data model and are tightly coupled with the [[Solid]] platform architecture that uses them as identity entry points. They enable [[Self Sovereign Identity]] by allowing individuals to host and control their own identity documents, and bridge toward [[Decentralized Identity (DID)]] frameworks through complementary protocols. They relate to [[Verifiable Credentials]] that can be linked from the profile, to [[Solid Pod]] data storage that the profile grants access to, to [[W3C DID Core]] as a parallel decentralised identity standard, and to [[Personal Data Store]] architectures where the profile governs access permissions.

- ### Content
  - The WebID specification emerged from the W3C Semantic Web community as a practical mechanism for decentralised authentication grounded in existing web infrastructure. Rather than relying on a centralised identity provider, a WebID uses the domain name system and HTTPS as its trust infrastructure: an entity's identity is an HTTPS URL, and possession of that identity is proved by controlling the corresponding TLS certificate or OpenID Connect token. Any party that can retrieve and parse the RDF document at that URL gains access to the public key and social metadata needed to verify the identity claim.

  - Within the [[Solid]] ecosystem, the WebID Profile plays a central structural role. When a user registers a Solid account, a WebID Profile document is created at their chosen URI. This document links to their data pods using predicates from the Solid vocabulary, specifies their preferred OIDC issuer, and may include access control preferences. Applications that wish to read from or write to the user's pods must authenticate against the WebID and be granted permission through the user's Web Access Control or ACP policies. The profile is thus not merely a description document but the governance entry point for the entire personal data ecosystem.

  - The relationship between WebID and the W3C Decentralized Identifier (DID) standard is one of overlapping concerns with different emphases. DIDs are designed to be resolvable across multiple methods—blockchain, DNS, peer-to-peer—and carry no assumption of HTTP dereferencability. WebIDs rely on HTTP and the domain name system. Bridging mechanisms exist to represent a WebID as a DID using the did:web method, which dereferences to an HTTPS URL, allowing systems that consume DIDs to interoperate with WebID-based identity systems without requiring parties to migrate.

  - [[Verifiable Credentials]] extend the WebID model by providing cryptographically signed attestations about attributes of an identity, issued by trusted third parties. A WebID Profile may link to credential endpoints where verifiable credentials can be discovered and requested, allowing identity presentation to go beyond self-asserted attributes to include externally verified claims such as professional qualifications, age verification, or membership status. This combination of self-sovereign identity infrastructure and verifiable third-party attestation is the foundation of trust frameworks for the emerging decentralised web.
