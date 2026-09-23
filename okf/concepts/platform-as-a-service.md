---
okf_version: "0.2"
type: Class
title: Platform As A Service
resource: urn:ngm:class:platform-as-a-service
domain: infrastructure
description: Platform as a Service (PaaS) is a cloud computing service model that provides a managed execution environment — including runtime, middleware, databases, and development tools — over the internet, allowing developers to build, deploy, and scale applications without managing underlying infrastructure. PaaS abstracts operating system and server management from the development team, enabling faster i
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cloud-computing
hasPart:
  - urn:ngm:class:runtime-environment
  - urn:ngm:class:database
  - urn:ngm:class:middleware
enables:
  - urn:ngm:class:application-development
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:devops
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:infrastructure-as-a-service
  - urn:ngm:class:virtualisation
contrastsWith:
  - urn:ngm:class:infrastructure-as-a-service
  - urn:ngm:class:software-as-a-service
  - urn:ngm:class:serverless-architecture
uses:
  - urn:ngm:class:automation
  - urn:ngm:class:kubernetes
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:api
partOf:
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:containerisation
---

# Platform As A Service

Platform as a Service (PaaS) is a cloud computing service model that provides a managed execution environment — including runtime, middleware, databases, and development tools — over the internet, allowing developers to build, deploy, and scale applications without managing underlying infrastructure. PaaS abstracts operating system and server management from the development team, enabling faster iteration cycles and lower operational overhead. Examples include Heroku, Google App Engine, Microsoft Azure App Service, and AWS Elastic Beanstalk.
