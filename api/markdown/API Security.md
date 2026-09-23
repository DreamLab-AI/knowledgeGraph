
API security is the discipline of protecting application programming interfaces from misuse, abuse, and attack across their lifecycle, covering authentication, authorisation, input validation, transport encryption, rate limiting, and monitoring. As APIs expose business logic and data directly to clients and partners, they present a broad attack surface addressed through tokens such as OAuth and JWT, gateways, and threat modelling against risks like broken object-level authorisation. It is a core component of modern application and web security.

- ### Overview
	- APIs expose business logic and data directly to clients, partners, and other services, making them a primary target.
	- API security spans the whole lifecycle: design, authentication, authorisation, input handling, transport, rate limiting, logging, and runtime monitoring.
	- It addresses risks catalogued in the OWASP API Security Top 10, notably broken object-level and function-level authorisation.
- ### Key aspects
	- Strong authentication and fine-grained authorisation per request.
	- Encrypted transport ([[Transport Layer Security]], [[Mutual TLS]]) and payload protection.
	- Input validation and schema enforcement to block injection and malformed requests.
	- Throttling and quotas via [[Rate Limiting]] to resist abuse and denial of service.
	- Centralised enforcement and observability at the [[API Gateway]].
- ### Applications
	- Securing [[REST API]] and microservice back-ends.
	- Protecting partner and public developer APIs.
	- Enforcing [[Zero Trust Architecture]] across service-to-service calls.
- ### Provenance

