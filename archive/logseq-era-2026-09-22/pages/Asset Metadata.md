public:: true

# Asset Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:asset-metadata",
  "@type": "Page",
  "vc:slug": "asset-metadata",
  "title": "Asset Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asset-metadata",
  "@type": "Class",
  "label": "Asset Metadata",
  "definition": "Asset Metadata is the structured descriptive, administrative, and technical information attached to a digital asset that contextualises it within a system without being the primary content of that asset. It encompasses identifiers, provenance records, format specifications, rights information, semantic tags, and dependency relationships, enabling discovery, validation, licensing, and lifecycle management.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:metadata", "label": "Metadata"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:digital-asset-management", "label": "Digital Asset Management"},
      {"@id": "urn:ngm:class:asset-management-system", "label": "Asset Management System"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:metadata-schema", "label": "Metadata Schema"},
      {"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Asset Metadata]] is the data about data: the structured records that describe, classify, and govern a digital asset independently of its binary payload. Three canonical categories are recognised — descriptive (title, description, tags, creator), administrative (creation date, rights, licence, approval status), and technical (format, codec, resolution, bit depth, file size, checksum). Well-governed metadata, conforming to a shared [[Metadata Schema]] and [[Metadata Standard]], is the precondition for reliable search, automated pipeline processing, and rights enforcement.

- ### Relationships
  - Asset Metadata directly supports [[Digital Asset Management]] and [[Asset Management System]] platforms, which depend on rich, consistent metadata for catalogue operations. [[Metadata Schema]] definitions specify which fields are mandatory and what controlled vocabularies apply. [[Metadata Standard]] bodies (Dublin Core, MPEG-7, XMP, EXIF, SMPTE standards) provide interoperability across systems. At sufficient scale and expressiveness, asset metadata models evolve into [[Ontology]] representations that enable [[Knowledge Graph]] construction and semantic reasoning over content libraries.

- ### Content
  - The intellectual roots of asset metadata lie in library cataloguing standards — notably the Dublin Core Metadata Initiative (1995) and earlier MARC records — which established the principle that structured descriptions enable retrieval across heterogeneous collections. The broadcast industry developed parallel standards: SMPTE Metadata Dictionary, EBU Core, and P/META addressed the specific requirements of programme rights, technical specification, and archive management for audiovisual content. Photography adopted IPTC and later Adobe XMP as embedded metadata frameworks that travel with image files across editing and distribution workflows.

  - In production pipelines, asset metadata is typically stored both embedded (in file headers via XMP sidecar, ID3 tags, FBX user properties) and externalised in databases for indexable querying. Content-addressable identifiers — SHA-256 hashes or Universal Unique Identifiers (UUIDs) — provide immutable asset identity that decouples logical metadata from physical storage paths, enabling safe refactoring of file-system layouts. Dependency graphs (which asset requires which other assets) are a specialised metadata category critical for build system cache invalidation and streaming manifest generation.

  - In NFT and blockchain contexts, token metadata is stored either on-chain (expensive but immutable) or off-chain with on-chain hash commitment (cheaper but dependent on storage availability). The ERC-721 and ERC-1155 standards define a JSON metadata schema with fields for name, description, image, and arbitrary attributes. Metadata completeness and correctness directly affects NFT marketplace display, search ranking, and resale value — poorly formed metadata is a common cause of NFTs failing to render on OpenSea and similar platforms. IPFS and Arweave are the preferred decentralised storage layers for off-chain NFT metadata.

  - As of 2024–2025, generative AI content pipelines have introduced new metadata obligations: model name, version, prompt hash, guidance scale, seed, and training data provenance are emerging as required fields under draft transparency frameworks (EU AI Act, C2PA content provenance standards). Vector embeddings of asset content are increasingly stored alongside textual metadata to support semantic search and clustering. Standardisation efforts (schema.org CreativeWork, W3C PROV ontology, SMPTE IMF) are converging towards interoperable metadata exchange formats for cross-organisation asset licensing and distribution.

