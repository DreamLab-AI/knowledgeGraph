- ### OntologyBlock
  id:: meetingtranscription-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0855
    - filename-history:: ["AI-0855-meetingtranscription.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0855
    - preferred-term:: Meeting Transcription
    - source-domain:: ai
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: 
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:MeetingTranscription
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships
    - is-subclass-of:: [[Speech Recognition]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MeetingTranscription))
      (SubClassOf :MeetingTranscription :SpeechRecognition)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MeetingTranscription "Meeting Transcription"@en)
      ```

- ## About Meeting Transcription
  