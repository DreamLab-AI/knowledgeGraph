iri:: http://narrativegoldmine.com/infrastructure#Devpod
uri:: urn:visionclaw:concept:infrastructure:devpod
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:devpod
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: devpod
content-hash:: sha256-12-5bb6fc9bc0f7
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - devpod is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Devpod
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - I use this: https://devpod.sh/
  - Instructions from Discord:
  - 1) Sign up for Rackspace
  2) Create cloudspace
  3) Select server mix. There is no need to set a load balancer, of turn on high availability. 
  4) Download kubectl file
  5) In devpod.sh desktop app, create a new provider. Point to that kubectl file. 
  6) Create devpod
  7) Install python, node, and claude code. 
  8) Copy the kubeconfig file into the devpod space.
  9) Prompt claude code to generate a "superuser" kubeconfig file
  10) Download the new kubeconfig file
  11) Update the provider to use the new kubeconfig file. 
  12) Profit
  - Same instructions--abridged
  1) Create rackspace cluster. Get kubeconfig file--this one will expire. 
  2) Initialize claude code within pod on cluster using downloaded kubeconfig 
  3) Use claude code to generate replacement kubeconfig file that doesn't expire. 
  4) Update devpod.sh provider configuration to use new kubeconfig file.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
