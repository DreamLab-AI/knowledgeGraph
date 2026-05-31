- ### Definition
  - The Content Layer is the stratum that holds the substantive information and media that a system manages and presents. It sits above the Data Layer that stores it and below the Presentation Layer that renders it. It contains documents, media assets, metadata, and the structures that organise meaning.

- ### Semantic Classification
  - owl-class:: content:ContentLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Content Management]], [[Metadata]]
  - requires:: [[Data Layer]]
  - enables:: [[Presentation Layer]], [[Application Layer]]

- ### Content
  - The Content Layer organises the meaningful information a system exists to deliver, distinct from the raw storage beneath it. Typical members include documents, images and other media, structured content models, taxonomies, and the metadata that describes and classifies them. It treats information as something authored and curated.
  - It requires the Data Layer to persist and retrieve its assets, and it enables the Presentation Layer to render content and the Application Layer to act on it. Structure and metadata defined here make content findable, reusable, and meaningful.
  - The layer bridges to content management and metadata, disciplines that govern authoring, versioning, and description. The richness of its models determines how flexibly content can be repurposed across channels.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z