public:: true

# Behaviourism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a824f8425577e1c86381291da3219575fa0d6ed1cb27006fdfc6f4295fea881",
  "@type": "Page",
  "vc:slug": "behaviourism",
  "title": "Behaviourism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:psychology",
      "vc:label": "Psychology"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-psychology",
      "vc:label": "Cognitive Psychology"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:linked:philosophy-of-mind",
      "vc:label": "Philosophy of Mind"
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
  "@id": "urn:ngm:class:behaviourism",
  "@type": "Class",
  "label": "Behaviourism",
  "definition": "A school of psychology and associated philosophy of mind holding that behaviour should be explained through observable stimulus–response relationships and learning histories rather than by appeal to inner mental states. Dominant from Watson's 1913 manifesto through Skinner's radical behaviourism of the mid-twentieth century, it produced the experimental analysis of classical and operant conditioning, was displaced as a general paradigm by the cognitive revolution, and survives today in applied behaviour analysis and in reinforcement learning's core concepts of reward-driven learning.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:psychology",
    "label": "Psychology"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cognitive-psychology",
        "label": "Cognitive Psychology"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:philosophy-of-mind",
        "label": "Philosophy of Mind"
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
  - "A school of psychology and associated philosophy of mind holding that behaviour should be explained through observable stimulus–response relationships and learning histories rather than by appeal to inner mental states. Dominant from Watson's 1913 manifesto through Skinner's radical behaviourism of the mid-twentieth century, it produced the experimental analysis of classical and operant conditioning, was displaced as a general paradigm by the cognitive revolution, and survives today in applied behaviour analysis and in reinforcement learning's core concepts of reward-driven learning."

- ### Semantic Classification
  - owl-class:: ai:Behaviourism
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Psychology]]
  - contrasts-with:: [[Cognitive Psychology]]
  - contrasts-with:: [[Cognitive Science]]
  - related-to:: [[Philosophy of Mind]]

- ### Content

  ## Definition

  **Behaviourism** is the doctrine that psychology should be the science of observable behaviour. John B. Watson's 1913 paper "Psychology as the Behaviorist Views It" rejected introspection as unscientific and proposed that all behaviour, human and animal, be explained through stimulus–response relationships shaped by conditioning. The experimental foundations came from Pavlov's classical conditioning — reflexive responses transferred to previously neutral stimuli — and Thorndike's law of effect, which B. F. Skinner developed into the systematic analysis of *operant conditioning*: behaviour is selected by its consequences, with reinforcement schedules (fixed/variable, ratio/interval) producing characteristic and highly reproducible response patterns.

  Several variants must be distinguished. *Methodological behaviourism* is a research constraint: only observable behaviour counts as evidence. Skinner's *radical behaviourism* went further, treating private events (thoughts, feelings) as behaviour subject to the same contingency analysis rather than as causes of behaviour. In [[Philosophy of Mind]], *logical (analytical) behaviourism* — associated with Ryle and early Wittgenstein — held that mental-state terms simply *mean* dispositions to behave, a position undermined by the point that mental states interact holistically: what one does depends jointly on beliefs and desires, so no single mental term reduces to a behavioural disposition alone.

  The paradigm's decline defined modern [[Cognitive Science]]. Chomsky's 1959 review of Skinner's *Verbal Behavior* argued that the poverty of the stimulus makes language unlearnable by conditioning alone; Tolman's latent-learning experiments and Breland's "misbehaviour of organisms" showed learning without reinforcement and biological constraints on conditioning. The cognitive revolution reinstated internal representations and information processing as legitimate theoretical constructs, establishing [[Cognitive Psychology]] as the successor framework.

  ## Current Landscape

  Behaviourism's legacy remains substantial. Applied behaviour analysis is a mainstream clinical discipline; exposure therapies and contingency management descend directly from conditioning research; and behavioural experimentation standards (operational definition, single-subject designs, cumulative records) shaped experimental method well beyond the school itself.

  In artificial intelligence the inheritance is explicit: reinforcement learning formalises the law of effect — an agent's policy is shaped by reward signals — and temporal-difference learning turned out to model dopamine-based reward-prediction error in the brain, closing a loop between Skinnerian theory and neuroscience. Contemporary debates about whether large models "understand" or merely exhibit competent behaviour replay the behaviourist–cognitivist argument in modern dress: benchmark-based evaluation is methodologically behaviourist, whilst interpretability research insists, with the cognitivists, that internal structure matters.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
