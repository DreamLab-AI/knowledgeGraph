```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4d8a6a9ae12060358e94eefcbd228a0cc82e3731109134d3f53b01af1b43315b",
  "@type": "Page",
  "vc:slug": "provenance-ontology-prov-o",
  "title": "Provenance Ontology (PROV-O)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:activity-model",
      "vc:label": "Activity Model"
    },
    {
      "@id": "urn:visionflow:linked:agent-model",
      "vc:label": "Agent Model"
    },
    {
      "@id": "urn:visionflow:linked:attribution-model",
      "vc:label": "Attribution Model"
    },
    {
      "@id": "urn:visionflow:linked:audit-trails",
      "vc:label": "Audit Trails"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-provenance",
      "vc:label": "Blockchain Provenance"
    },
    {
      "@id": "urn:visionflow:linked:data-lineage-tracking",
      "vc:label": "Data Lineage Tracking"
    },
    {
      "@id": "urn:visionflow:linked:derivation-chains",
      "vc:label": "Derivation Chains"
    },
    {
      "@id": "urn:visionflow:linked:entity-model",
      "vc:label": "Entity Model"
    },
    {
      "@id": "urn:visionflow:linked:generation-events",
      "vc:label": "Generation Events"
    },
    {
      "@id": "urn:visionflow:linked:influence-patterns",
      "vc:label": "Influence Patterns"
    },
    {
      "@id": "urn:visionflow:linked:linked-data-platform",
      "vc:label": "Linked Data Platform"
    },
    {
      "@id": "urn:visionflow:linked:ontology-reasoner",
      "vc:label": "Ontology Reasoner"
    },
    {
      "@id": "urn:visionflow:linked:qualified-relations",
      "vc:label": "Qualified Relations"
    },
    {
      "@id": "urn:visionflow:linked:rdf-store",
      "vc:label": "RDF Store"
    },
    {
      "@id": "urn:visionflow:linked:scientific-reproducibility",
      "vc:label": "Scientific Reproducibility"
    },
    {
      "@id": "urn:visionflow:linked:semantic-reasoning-engine",
      "vc:label": "Semantic Reasoning Engine"
    },
    {
      "@id": "urn:visionflow:linked:trust-verification",
      "vc:label": "Trust Verification"
    },
    {
      "@id": "urn:visionflow:linked:usage-events",
      "vc:label": "Usage Events"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-prov-data-model",
      "vc:label": "W3C PROV Data Model"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-prov-o-recommendation",
      "vc:label": "W3C PROV-O Recommendation"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-web-standards",
      "vc:label": "Semantic Web Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:sparql-endpoint",
      "vc:label": "SPARQL Endpoint"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20307"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Provenance Ontology (PROV-O)"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:provenance-ontology-prov-o",
  "@type": "Class",
  "label": "Provenance Ontology (PROV-O)",
  "definition": "W3C standard ontology for representing and interchanging provenance information, capturing the origin, attribution, derivation, and lifecycle of digital entities through formal Entity-Activity-Agent relationships.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent Model"
      },
      {
        "@id": "urn:ngm:class:entity",
        "label": "Entity Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology-engineering",
        "label": "Ontology Reasoner"
      },
      {
        "@id": "urn:ngm:class:rdf-store",
        "label": "RDF Store"
      },
      {
        "@id": "urn:ngm:class:sparql-endpoint",
        "label": "SPARQL Endpoint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:blockchain-provenance",
        "label": "Blockchain Provenance"
      },
      {
        "@id": "urn:ngm:class:data-lineage-tracking",
        "label": "Data Lineage Tracking"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Scientific Reproducibility"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard-standards",
        "label": "Semantic Web Standards"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - W3C standard ontology for representing and interchanging provenance information, capturing the origin, attribution, derivation, and lifecycle of digital entities through formal Entity-Activity-Agent relationships.

- ### Semantic Classification
  - owl-class:: spatial-computing:ProvenanceOntology
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Entity Model]], [[Activity Model]], [[Agent Model]], [[Derivation Chains]], [[Attribution Model]], [[Generation Events]], [[Usage Events]], [[Qualified Relations]], [[Influence Patterns]]
  - is-part-of:: [[Semantic Web Standards]]
  - requires:: [[RDF Store]], [[SPARQL Endpoint]], [[Ontology Reasoner]]
  - enables:: [[Data Lineage Tracking]], [[Scientific Reproducibility]], [[Audit Trails]], [[Blockchain Provenance]], [[Trust Verification]]
  - depends-on:: [[W3C PROV Data Model]], [[Linked Data Platform]], [[Semantic Reasoning Engine]]

- ### Content
  Provenance Ontology (PROV-O) — content pending enrichment.

- ### Provenance
  - sources:: [[W3C PROV-O Recommendation]]
  - migration-date:: 2026-04-26T00:00:00Z
