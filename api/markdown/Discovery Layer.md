schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#DiscoveryLayer
legacy_uri:: urn:visionclaw:concept:spatial-computing:discovery-layer
public:: true

# Discovery Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8",
  "@type": "Page",
  "vc:slug": "discovery-layer",
  "title": "Discovery Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-browsing",
      "vc:label": "Asset Browsing"
    },
    {
      "@id": "urn:visionflow:linked:content-catalog",
      "vc:label": "Content Catalog"
    },
    {
      "@id": "urn:visionflow:linked:content-discovery",
      "vc:label": "Content Discovery"
    },
    {
      "@id": "urn:visionflow:linked:content-indexer",
      "vc:label": "Content Indexer"
    },
    {
      "@id": "urn:visionflow:linked:experience-navigation",
      "vc:label": "Experience Navigation"
    },
    {
      "@id": "urn:visionflow:linked:msf-taxonomy-2025",
      "vc:label": "MSF Taxonomy 2025"
    },
    {
      "@id": "urn:visionflow:linked:personalized-recommendations",
      "vc:label": "Personalized Recommendations"
    },
    {
      "@id": "urn:visionflow:linked:query-interface",
      "vc:label": "Query Interface"
    },
    {
      "@id": "urn:visionflow:linked:recommendation-system",
      "vc:label": "Recommendation System"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:data-storage",
      "vc:label": "Data Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-registry",
      "vc:label": "Metadata Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-schema",
      "vc:label": "Metadata Schema"
    },
    {
      "@id": "urn:visionflow:owl:class:search-engine",
      "vc:label": "Search Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-96fde2a2de33"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#DiscoveryLayer"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20164"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Discovery Layer"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:discovery-layer"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:discovery-layer"
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
    "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:discovery-layer",
  "@type": "OntologyClass",
  "label": "Discovery Layer",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "spatial-computing"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Functional layer responsible for search, navigation, and exposure of metaverse experiences and assets through indexing, search engines, and recommendation systems.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:isPartOf": [
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    }
  ],
  "vc:hasPart": [
    {
      "@id": "urn:visionflow:linked:content-indexer",
      "vc:label": "Content Indexer"
    },
    {
      "@id": "urn:visionflow:linked:recommendation-system",
      "vc:label": "Recommendation System"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-registry",
      "vc:label": "Metadata Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:search-engine",
      "vc:label": "Search Engine"
    }
  ],
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:content-catalog",
      "vc:label": "Content Catalog"
    },
    {
      "@id": "urn:visionflow:linked:query-interface",
      "vc:label": "Query Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:data-storage",
      "vc:label": "Data Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-schema",
      "vc:label": "Metadata Schema"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:asset-browsing",
      "vc:label": "Asset Browsing"
    },
    {
      "@id": "urn:visionflow:linked:content-discovery",
      "vc:label": "Content Discovery"
    },
    {
      "@id": "urn:visionflow:linked:experience-navigation",
      "vc:label": "Experience Navigation"
    },
    {
      "@id": "urn:visionflow:linked:personalized-recommendations",
      "vc:label": "Personalized Recommendations"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:discovery-layer:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Browsing]]",
      "resolved": "urn:visionflow:linked:asset-browsing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Catalog]]",
      "resolved": "urn:visionflow:linked:content-catalog",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Discovery]]",
      "resolved": "urn:visionflow:linked:content-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Indexer]]",
      "resolved": "urn:visionflow:linked:content-indexer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Experience Navigation]]",
      "resolved": "urn:visionflow:linked:experience-navigation",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Taxonomy 2025]]",
      "resolved": "urn:visionflow:linked:msf-taxonomy-2025",
      "kind": "StubLink"
    },
    {
      "raw": "[[Personalized Recommendations]]",
      "resolved": "urn:visionflow:linked:personalized-recommendations",
      "kind": "StubLink"
    },
    {
      "raw": "[[Query Interface]]",
      "resolved": "urn:visionflow:linked:query-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Recommendation System]]",
      "resolved": "urn:visionflow:linked:recommendation-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Storage]]",
      "resolved": "urn:visionflow:owl:class:data-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Registry]]",
      "resolved": "urn:visionflow:owl:class:metadata-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Schema]]",
      "resolved": "urn:visionflow:owl:class:metadata-schema",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Search Engine]]",
      "resolved": "urn:visionflow:owl:class:search-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e420e9c3373a6071aae20237b37fd492791cc089f9e4e39bc88add5e21facec8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Functional layer responsible for search, navigation, and exposure of metaverse experiences and assets through indexing, search engines, and recommendation systems.

- ### Bridge-To
  - bridges-to:: [[Telecollaboration]] (tc)

- ### Semantic Classification
  - owl-class:: spatial-computing:DiscoveryLayer
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[Data Layer]]

- ### Relationships
  - has-part:: [[Search Engine]], [[Content Indexer]], [[Recommendation System]], [[Metadata Registry]]
  - is-part-of:: [[Data Layer]]
  - requires:: [[Data Storage]], [[Query Interface]], [[Metadata Schema]], [[Content Catalog]]
  - enables:: [[Content Discovery]], [[Experience Navigation]], [[Asset Browsing]], [[Personalized Recommendations]]

- ### Content
  Discovery Layer — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Taxonomy 2025]]
  - migration-date:: 2026-04-26T00:00:00Z
