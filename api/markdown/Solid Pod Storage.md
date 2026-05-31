public:: true

# Solid Pod Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b1fe400cee96fc094bd6277b3960b967e730ea39d3e3ef51ab29734c531e638b",
  "@type": "Page",
  "vc:slug": "solid-pod-storage",
  "title": "Solid Pod Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:web-id",
      "vc:label": "WebID"
    },
    {
      "@id": "urn:visionflow:linked:data-sovereignty",
      "vc:label": "Data Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:self-sovereign-identity",
      "vc:label": "Self-Sovereign Identity"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems-domain",
      "vc:label": "Distributed Systems Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Solid Pod Storage"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:solid-pod-storage",
  "@type": "Class",
  "label": "Solid Pod Storage",
  "definition": "Solid Pod Storage refers to the personal online data stores used in the Solid project, a web specification initiated by Tim Berners-Lee for decentralising data ownership. A Pod is a user-controlled storage space that holds data as linked-data resources, with access governed by the user rather than the applications that consume it. Applications authenticate against a Pod and read or write data only with the owner's permission, separating data from the services built on top of it.",
  "domain": "solid-pod-storage",
  "maturity": "developing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems-domain",
      "label": "Distributed Systems Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:web-id",
        "label": "WebID"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:solid-pod-storage:4ad3b6ae36c8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b1fe400cee96fc094bd6277b3960b967e730ea39d3e3ef51ab29734c531e638b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Linked Data]]",
      "resolved": "urn:visionflow:linked:linked-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RDF]]",
      "resolved": "urn:visionflow:linked:rdf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[WebID]]",
      "resolved": "urn:visionflow:linked:web-id",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Sovereignty]]",
      "resolved": "urn:visionflow:linked:data-sovereignty",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web]]",
      "resolved": "urn:visionflow:linked:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Sovereign Identity]]",
      "resolved": "urn:visionflow:linked:self-sovereign-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Solid Pod Storage refers to the personal online data stores used in the Solid project, a web specification initiated by Tim Berners-Lee for decentralising data ownership. A Pod is a user-controlled storage space that holds data as linked-data resources, with access governed by the user rather than the applications that consume it. Applications authenticate against a Pod and read or write data only with the owner's permission, separating data from the services built on top of it.

- ### Semantic Classification
  - owl-class:: ds:SolidPodStorage
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Distributed Systems Domain]]
  - bridges-to:: [[Semantic Web]], [[Self-Sovereign Identity]]
  - requires:: [[Linked Data]], [[RDF]], [[WebID]]
  - enables:: [[Data Sovereignty]], [[Decentralised Identity]]

- ### Content
  - A Solid Pod stores a user's data as resources described using web standards such as RDF and addressed by URLs. Because data is held in the Pod rather than inside individual applications, the same information can be reused across multiple services, and the user retains the ability to grant or revoke access.
  - Access control is enforced through identity mechanisms such as WebID combined with authorisation rules attached to resources. This model inverts the conventional arrangement in which each application silos its own copy of user data, aiming instead for a single user-governed store that applications query.
  - Solid emerged from semantic-web research and is positioned as infrastructure for data sovereignty and interoperability. Adoption remains comparatively early, and practical deployment involves Pod hosting providers, identity systems and applications written to the Solid protocol.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
