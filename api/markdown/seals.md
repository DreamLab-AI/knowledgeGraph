- ### Definition
  - Seals is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Seals
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - This is [海豹
	 - Chinese Seal](https://en.wiktionary.org/wiki/%E6%B5%B7%E8%B1%B9)
  - Five shot example with 256x256 gif of the image uploaded
  - ![photo_2024-01-09_18-10-53.jpg](../assets/photo_2024-01-09_18-10-53_1705085581457_0.jpg)
  - ![photo_2024-01-12_14-38-01.jpg](../assets/photo_2024-01-12_14-38-01_1705085469063_0.jpg)
  - ```mermaid
  sequenceDiagram
      participant Client as Client Script
      participant FS as File System
      participant OpenAI as OpenAI API
      participant Translator as Translation Service
      Note over Client, Translator: Initialization phase
      Client->>FS: Load JSON data and GIF image paths
      loop For each NFT
          Client->>FS: Retrieve next JSON and GIF
          FS-->>Client: JSON data and GIF path
          Client->>OpenAI: Send GIF and JSON for analysis
          OpenAI-->>Client: Return text summary in English
          Client->>Translator: Translate summary to Chinese
          Translator-->>Client: Return Chinese summary
          Client->>OpenAI: Request appropriateness ranking
          OpenAI-->>Client: Return ranking result
          Client->>FS: Save updated JSON with summaries and ranking
      end
      Client->>Client: Validate updated JSON files
      Note over Client: End of processing

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z