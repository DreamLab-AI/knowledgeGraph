public:: true

# Stack Machine
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:stack-machine", "@type":"Page", "title":"Stack Machine", "vc:slug":"stack-machine", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:stack-machine",
  "@type":"Class",
  "label":"Stack Machine",
  "definition":"A stack machine is an execution model in which operands and intermediate results are held on a last-in-first-out stack rather than in named registers, with instructions implicitly consuming their inputs from the top of the stack and pushing their outputs back onto it. The model yields compact, position-independent bytecode and a simple deterministic evaluator, which is why it underpins many scripting languages and blockchain virtual machines such as Bitcoin Script and the Ethereum Virtual Machine.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:execution-model","label":"Execution Model"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:bytecode","label":"Bytecode"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:execution-model","label":"Execution Model"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:bitcoin-script","label":"Bitcoin Script"},
      {"@id":"urn:ngm:class:ethereum-virtual-machine","label":"Ethereum Virtual Machine"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:virtual-machine","label":"Virtual Machine"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:script","label":"Script"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:virtual-machine","label":"Virtual Machine"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:taproot","label":"Taproot"},
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:bytecode","label":"Bytecode"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:virtual-machine","label":"Virtual Machine"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:execution-model","label":"Execution Model"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A [[Stack Machine]] is an [[Execution Model]] that evaluates programs using a last-in-first-out operand stack rather than registers. Instructions read their arguments from the top of the stack and push their results back, producing compact [[Bytecode]] that is widely used by [[Bitcoin Script]] and the [[Ethereum Virtual Machine]].
- ### Overview
- The stack machine is one of the oldest and simplest abstract machine designs. Because operands are implicit, instructions are short and the encoding is dense, which suits constrained verification environments such as consensus-critical blockchain scripts.
- A typical evaluator maintains a single main stack and, in some designs, an auxiliary stack. Each opcode defines how many items it pops and how many it pushes, allowing static analysis of stack depth and resource consumption.
- Determinism is a core property: given the same script and inputs, every node must reach the same final stack state. This is essential for distributed consensus where independent verifiers must agree on validity.
- ### Mechanisms
- Operands are pushed onto the stack and consumed by subsequent operations, so expression evaluation follows reverse-Polish ordering.
- Control structures (conditionals, loops where permitted) manipulate execution flow while the stack tracks data.
- Resource limits cap maximum stack depth and operation counts to bound verification cost and prevent denial-of-service.
- Validity is often defined as the script terminating with a single truthy value on the stack.
- ### Applications
- [[Bitcoin Script]] verifies spending conditions by executing a stack-based program for each input.
- The [[Ethereum Virtual Machine]] is a stack machine that executes smart-contract [[Bytecode]].
- Many bytecode interpreters and portable runtimes adopt the model for simplicity and compactness.
- ### Relationships
- subClassOf:: [[Execution Model]]
- uses:: [[Bytecode]]
- implements:: [[Execution Model]]
- enables:: [[Bitcoin Script]]
- enables:: [[Ethereum Virtual Machine]]
- partOf:: [[Virtual Machine]]
- supports:: [[Script]]
- contrastsWith:: [[Virtual Machine]]
- relatedTo:: [[Taproot]]
- relatedTo:: [[Bitcoin]]
- requires:: [[Bytecode]]
- bridgesTo:: [[Virtual Machine]]
- dependsOn:: [[Execution Model]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
