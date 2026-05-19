schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#NetworkComponent
legacy_uri:: urn:visionclaw:concept:blockchain:network-component
public:: true

# Network Component
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b",
  "@type": "Page",
  "vc:slug": "network-component",
  "title": "Network Component",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d1c61ce291da"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#NetworkComponent"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0604"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Network Component"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:network-component"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:network-component"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:network-component",
  "@type": "OntologyClass",
  "label": "Network Component",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Network Component represents the fundamental infrastructure elements that constitute blockchain networks, including different node types, network protocols, and communication layers. These components work together to enable distributed consensus, data replication, and peer-to-peer communication across the blockchain ecosystem.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:network-component:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Network Component represents the fundamental infrastructure elements that constitute blockchain networks, including different node types, network protocols, and communication layers. These components work together to enable distributed consensus, data replication, and peer-to-peer communication across the blockchain ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:NetworkComponent
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain Technology]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]]

- ### Content
  Network Component — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
