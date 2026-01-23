- ### OntologyBlock
  id:: avatarwearable-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: MV
    - sequence-number:: 0001
    - filename-history:: ["MV-0001-avatarwearable.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: MV-0001
    - preferred-term:: Avatar Wearable
    - source-domain:: mv
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Digital clothing, accessories, and cosmetic items that can be equipped by avatars in virtual environments, often tradeable as digital assets or NFTs.
    - maturity:: established
    - source:: Metaverse Standards Forum
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: mv:AvatarWearable
    - belongsToDomain:: [[Metaverse]]

  - #### Relationships
    - is-subclass-of:: [[Digital Asset]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :AvatarWearable))
      (SubClassOf :AvatarWearable :DigitalAsset)

      ; Annotations
      (AnnotationAssertion rdfs:label :AvatarWearable "Avatar Wearable"@en)
      (AnnotationAssertion rdfs:comment :AvatarWearable
        "Digital clothing, accessories, and cosmetic items that can be equipped by avatars in virtual environments, often tradeable as digital assets or NFTs."@en)
      ```

- ## About Avatar Wearable
  Digital clothing, accessories, and cosmetic items that can be equipped by avatars in virtual environments, often tradeable as digital assets or NFTs.