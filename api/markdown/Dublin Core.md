public:: true

# Dublin Core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dublin-core",
  "@type": "Page",
  "vc:slug": "dublin-core",
  "title": "Dublin Core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dublin-core",
  "@type": "Class",
  "label": "Dublin Core",
  "definition": "Dublin Core is a standardised set of fifteen core metadata elements defined by the Dublin Core Metadata Initiative (DCMI) to describe digital and physical resources in a simple, interoperable manner. It provides a lowest-common-denominator vocabulary applicable across libraries, repositories, the web, and cross-domain data exchange.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:rdf-schema", "label": "RDF Schema"},
      {"@id": "urn:ngm:class:schema-org", "label": "Schema.org"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Dublin Core]] is a widely adopted metadata vocabulary comprising fifteen descriptive elements — including title, creator, subject, description, date, and format — maintained by the Dublin Core Metadata Initiative and formalised as ISO 15836 and ANSI/NISO Z39.85.

- ### Relationships
  - Dublin Core forms a foundational layer within [[Linked Data]] ecosystems, acting as a source vocabulary for [[RDF Schema]] triples; it is frequently serialised as [[JSON-LD]] for web consumption and extended by richer vocabularies such as [[Schema.org]] and aligned through [[Interoperability Standard]] frameworks.

- ### Content
  - Dublin Core emerged from a 1995 workshop in Dublin, Ohio, convened by OCLC and the National Center for Supercomputing Applications (NCSA). The goal was to define a small, universally comprehensible set of metadata elements that any content producer could apply without specialist library training. The resulting fifteen elements — now called "DC Terms" — were deliberately kept generic so they could describe anything from a PDF article to a museum artefact or a weather dataset.
  - The standard operates through a simple property-value model in which any resource is described by attaching name-value pairs drawn from the Dublin Core namespace (`http://purl.org/dc/elements/1.1/` for the classic set and `http://purl.org/dc/terms/` for the extended terms). Each element is defined with a URI, making it compatible with RDF and the broader Semantic Web. The Qualified Dublin Core variant allows refinement of elements — for instance, distinguishing `created` from `modified` within the broader `date` concept — whilst retaining backward compatibility.
  - Dublin Core underpins metadata exchange across thousands of digital repositories worldwide, including institutional repositories running DSpace or EPrints, the Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH), and government open-data portals that cross-publish records. Its importance lies in enabling federated search and aggregation: a single harvester can meaningfully process millions of records from disparate sources because they share a common Dublin Core spine, even when richer local schemas differ.
  - In the 2024–2025 period Dublin Core continues to serve as the baseline interoperability contract in research data management, particularly as FAIR data principles gain regulatory traction in the EU. DCMI has engaged actively with the FAIR community to map DC Terms to schema.org and W3C DCAT, and JSON-LD serialisations of DC metadata are now the default export format in several new institutional repository platforms. Work on aligning DC with the emerging European Research Information Infrastructure (EOSC) metadata profile represents the most active frontier.