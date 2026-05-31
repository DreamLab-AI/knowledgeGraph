public:: true

# OSI Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8da2566e2828d0def182cc39ec33981a62f02cce08fdf8c110bfa315898c2ae4",
  "@type": "Page",
  "vc:slug": "osi-model",
  "title": "OSI Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:rest-api",
      "vc:label": "REST API"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OSI Model"
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
  "@id": "urn:ngm:class:osi-model",
  "@type": "Class",
  "label": "OSI Model",
  "definition": "The OSI model is a conceptual framework that divides network communication into seven layers, from the physical medium to the application. It provides a reference for describing how protocols interact across a network.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-architecture",
      "label": "Network Architecture"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
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
  "@id": "urn:visionflow:annotation:link-resolutions:osi-model:e8a014d39865",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8da2566e2828d0def182cc39ec33981a62f02cce08fdf8c110bfa315898c2ae4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[REST API]]",
      "resolved": "urn:visionflow:linked:rest-api",
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
  - The OSI model is a conceptual framework that divides network communication into seven layers, from the physical medium to the application. It provides a reference for describing how protocols interact across a network.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:OSIModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Architecture]]
  - bridges-to:: [[REST API]]
  - requires:: [[Network Architecture]]

- ### Content
  - The OSI model, short for Open Systems Interconnection, organises networking into seven layers: physical, data link, network, transport, session, presentation and application. Each layer provides services to the layer above and relies on the layer below, which isolates concerns such as addressing, routing and reliable delivery.
  - Although real protocol stacks such as the internet suite do not map exactly onto the seven layers, the model remains a common vocabulary for teaching and design. It clarifies where a given protocol or device operates within a network architecture.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
