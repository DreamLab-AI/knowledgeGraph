- ### OntologyBlock
  id:: erc721token-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0516
    - filename-history:: ["BC-0516-erc721token.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0516
    - preferred-term:: ERC-721 Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A non-fungible token implementing the ERC-721 standard, a free, open standard for building unique tokens on Ethereum blockchain with trackable ownership via token identification numbers and ownerOf function.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC721Token
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Non Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC721Token))
      (SubClassOf :ERC721Token :NonFungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC721Token "ERC-721 Token"@en)
      (AnnotationAssertion rdfs:comment :ERC721Token
        "A non-fungible token implementing the ERC-721 standard, a free, open standard for building unique tokens on Ethereum blockchain with trackable ownership via token identification numbers and ownerOf function."@en)
      ```

- ## About ERC-721 Token
  A non-fungible token implementing the ERC-721 standard, a free, open standard for building unique tokens on Ethereum blockchain with trackable ownership via token identification numbers and ownerOf function.
  
  Required identifiers: name, symbol, contract address. URI mechanism assigns unique metadata per NFT. Standard methods: ownerOf, transferFrom, approve, safeTransferFrom, tokenURI.
  
  ### Examples
  - CryptoKitties, Bored Ape Yacht Club, ENS domains
  
  ### Historical Context
  - Proposed by William Entriken, Dieter Shirley, Jacob Evans, Nastassia Sachs in January 2018.