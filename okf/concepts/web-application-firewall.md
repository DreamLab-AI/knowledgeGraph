---
okf_version: "0.2"
type: Class
title: Web Application Firewall
resource: urn:ngm:class:web-application-firewall
domain: infrastructure
description: A web application firewall is a security control that inspects and filters HTTP and HTTPS traffic between clients and a web application to detect and block application-layer attacks. Operating at layer seven, it applies signature, rule and behavioural policies to mitigate threats such as injection, cross-site scripting and automated abuse that traditional network firewalls cannot see. It is common
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:reverse-proxy
requires:
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:http
enables:
  - urn:ngm:class:network-security
contrastsWith:
  - urn:ngm:class:firewall
bridgesTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:cdn
uses:
  - urn:ngm:class:http
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:intrusion-detection-system
partOf:
  - urn:ngm:class:network-security
  - urn:ngm:class:cybersecurity
relatedTo:
  - urn:ngm:class:firewall
  - urn:ngm:class:load-balancer
  - urn:ngm:class:intrusion-detection-system
---

# Web Application Firewall

A web application firewall is a security control that inspects and filters HTTP and HTTPS traffic between clients and a web application to detect and block application-layer attacks. Operating at layer seven, it applies signature, rule and behavioural policies to mitigate threats such as injection, cross-site scripting and automated abuse that traditional network firewalls cannot see. It is commonly deployed as a reverse proxy, an inline appliance or a cloud service in front of the protected application.
