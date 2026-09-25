An LDP Container is a resource defined by the W3C Linked Data Platform specification that groups and manages other linked-data resources, exposing them through HTTP affordances for creation, retrieval, and deletion. Containers come in basic, direct, and indirect variants that differ in how membership triples are generated. They provide the hierarchical, REST-like structure that Solid pods and other LDP servers use to organise data.

### Content

- Clients interact with containers using standard verbs: POSTing to a container creates a contained resource, while GET returns membership triples. Basic, direct, and indirect container types let applications model collections, ownership, and derived membership without bespoke server logic.

