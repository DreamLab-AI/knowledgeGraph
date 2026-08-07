public:: true

# Data Residency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d345d32b324efdec4f54c888ff86e7c6b5c955a130f5ec2530601b77f9d7ed8b",
  "@type": "Page",
  "vc:slug": "data-residency",
  "title": "Data Residency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-sovereignty",
      "vc:label": "Data Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:data-localisation",
      "vc:label": "Data Localisation"
    },
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
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
  "@id": "urn:ngm:class:data-residency",
  "@type": "Class",
  "label": "Data Residency",
  "definition": "The physical or geographic location in which an organisation's data is stored and processed, and the practice of controlling that location to satisfy regulatory, contractual, tax, or policy requirements; data residency underpins localisation mandates and sovereignty claims by determining which jurisdiction's laws, courts, and government access powers apply to the data.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:data-governance",
    "label": "Data Governance"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:data-localisation",
        "label": "Data Localisation"
      },
      {
        "@id": "urn:ngm:class:data-protection-regulation",
        "label": "Data Protection Regulation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The physical or geographic location in which an organisation's data is stored and processed, and the practice of controlling that location to satisfy regulatory, contractual, tax, or policy requirements; data residency underpins localisation mandates and sovereignty claims by determining which jurisdiction's laws, courts, and government access powers apply to the data."

- ### Semantic Classification
  - owl-class:: governance:DataResidency
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Data Governance]]
  - related-to:: [[Data Sovereignty]]
  - related-to:: [[Data Localisation]]
  - related-to:: [[Data Protection Regulation]]

- ### Content

  ## Definition

  **Data residency** refers to where data physically sits — the country or region in which the servers, storage systems, and backups that hold it are located — and to the organisational practice of deliberately controlling that location. It is the factual substrate on which two related concepts rest: [[Data Sovereignty]], the principle that data is subject to the laws of the jurisdiction where it resides, and [[Data Localisation]], the regulatory requirement that certain data must be stored or processed within a specific territory. Residency answers "where is the data?"; sovereignty answers "whose laws govern it?"; localisation answers "where must it be?".

  Residency became a first-order concern with the rise of hyperscale cloud computing, where workloads and replicas can migrate across borders invisibly. Regulations such as the GDPR restrict transfers of personal data outside the EEA unless adequacy or safeguard mechanisms apply, while sectoral rules in finance, health, and government contracting frequently require in-country storage outright. Conflicting extraterritorial claims — for example the US CLOUD Act's reach over data held abroad by US providers — mean that residency alone does not guarantee sovereignty, driving demand for sovereign-cloud offerings, regional partitions, and customer-held encryption keys.

  In practice, organisations operationalise residency through provider region selection, contractual residency commitments, replication topology design, and continuous verification that backups, logs, caches, and support access all respect the declared boundary — the points where residency guarantees most often silently fail.

  ## Current Landscape

  - **Cloud regions**: AWS, Azure, and Google Cloud each operate dozens of geographic regions with residency commitments; EU-specific offerings (AWS European Sovereign Cloud, Microsoft's EU Data Boundary) target sovereignty-sensitive customers
  - **Regulatory drivers**: GDPR Chapter V transfer rules, Schrems II fallout, the EU Data Act, UK GDPR adequacy arrangements, and localisation statutes in Russia, China (PIPL/CSL), India, and Indonesia
  - **Sovereign cloud**: national initiatives such as Gaia-X and partnerships pairing hyperscalers with domestic operators (e.g. T-Systems, Thales/S3NS) attempt to combine hyperscale services with jurisdictional isolation
  - **Technical controls**: region pinning, geo-fencing policies, customer-managed keys held in-jurisdiction, and confidential computing to reduce exposure even where infrastructure crosses borders
  - **Residual risks**: metadata, telemetry, and support pathways often leave the declared region even when primary data does not — a recurring finding in residency audits
