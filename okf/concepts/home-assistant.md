---
okf_version: "0.2"
type: Class
title: Home Assistant
resource: urn:ngm:class:home-assistant
domain: infrastructure
description: Home Assistant is a free and open-source home automation platform written in Python (backend) and TypeScript (frontend), enabling local-first integration and control of heterogeneous smart-home devices and services across protocols including Zigbee Protocol, Z-Wave Protocol,
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:smart-home
  - urn:ngm:class:iot-platform
  - urn:ngm:class:edge-computing
  - urn:ngm:class:automation
  - urn:ngm:class:open-source-software
hasPart:
  - urn:ngm:class:automation
  - urn:ngm:class:esphome
  - urn:ngm:class:local-llm-runtime-platform
  - urn:ngm:class:open-home-foundation
  - urn:ngm:class:wyoming-protocol
  - urn:ngm:class:z-wave-js-ui
  - urn:ngm:class:zigbee
  - urn:ngm:class:zigbee2-mqtt
  - urn:ngm:class:z-wave-js-ui
  - urn:ngm:class:zigbee
  - urn:ngm:class:lovelace-dashboard
  - urn:ngm:class:hacs
  - urn:ngm:class:assist-voice-pipeline
  - urn:ngm:class:energy-dashboard
  - urn:ngm:class:home-assistant-cloud
  - urn:ngm:class:matter-server
  - urn:ngm:class:nabu-casa
  - urn:ngm:class:ai-task-integration
  - urn:ngm:class:local-llm-runtime-platform
  - urn:ngm:class:automation
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:mqtt
  - urn:ngm:class:python-runtime
  - urn:ngm:class:raspberry-pi
  - urn:ngm:class:sqlite
  - urn:ngm:class:zigbee
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:mqtt
  - urn:ngm:class:zigbee
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:wake-word-engine
enables:
  - urn:ngm:class:demand-side-response
  - urn:ngm:class:interoperability
  - urn:ngm:class:energy-management
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:smart-grid
  - urn:ngm:class:smart-home-automation
  - urn:ngm:class:local-voice-control
  - urn:ngm:class:interoperability
  - urn:ngm:class:privacy-preserving-iot
  - urn:ngm:class:multi-protocol-integration
  - urn:ngm:class:llm-controlled-devices
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:smart-grid
dependsOn:
  - urn:ngm:class:python
  - urn:ngm:class:type-script
  - urn:ngm:class:sqlite
  - urn:ngm:class:postgre-sql
  - urn:ngm:class:redis
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:haos-linux
  - urn:ngm:class:supervisor-api
  - urn:ngm:class:buildroot
implements:
  - urn:ngm:class:bluetooth-le
  - urn:ngm:class:co-ap
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:mqtt
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:rest-api
  - urn:ngm:class:thread-protocol
  - urn:ngm:class:web-socket
  - urn:ngm:class:wyoming-protocol
  - urn:ngm:class:zigbee
  - urn:ngm:class:zigbee
  - urn:ngm:class:z-wave-protocol
  - urn:ngm:class:web-socket
contrastsWith:
  - urn:ngm:class:amazon-alexa
  - urn:ngm:class:google-home
  - urn:ngm:class:apple-homekit
  - urn:ngm:class:samsung-smartthings
  - urn:ngm:class:hubitat
  - urn:ngm:class:openhab
  - urn:ngm:class:domoticz
  - urn:ngm:class:fhem
bridgesTo:
  - urn:ngm:class:control-system
uses:
  - urn:ngm:class:frigate-nvr
  - urn:ngm:class:node-red
  - urn:ngm:class:openai-research-organisation-api
  - urn:ngm:class:piper-tts
  - urn:ngm:class:whisper
  - urn:ngm:class:z-wave-js-ui
  - urn:ngm:class:zigbee2-mqtt
  - urn:ngm:class:constitutional-ai-training-methodology-language-model-family
  - urn:ngm:class:local-llm-runtime-platform
  - urn:ngm:class:whisper
  - urn:ngm:class:openwakeword
  - urn:ngm:class:microwakeword
  - urn:ngm:class:local-llm-runtime-platform
  - urn:ngm:class:appdaemon
supports:
  - urn:ngm:class:proxmox
  - urn:ngm:class:raspberry-pi
  - urn:ngm:class:home-assistant-green
  - urn:ngm:class:home-assistant-yellow
  - urn:ngm:class:x86-64-linux
  - urn:ngm:class:arm64-linux
  - urn:ngm:class:qemu-kvm
  - urn:ngm:class:home-assistant-voice-preview-edition
  - urn:ngm:class:orange-pi
  - urn:ngm:class:odroid-n2
standardizedBy:
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:open-home-foundation
  - urn:ngm:class:thread-group
  - urn:ngm:class:wi-fi-alliance
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:zigbee-alliance
  - urn:ngm:class:z-wave-alliance
  - urn:ngm:class:ietf-coap-working-group
relatedTo:
  - urn:ngm:class:building-automation
  - urn:ngm:class:demand-side-response
  - urn:ngm:class:edge-ai
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:nilm
  - urn:ngm:class:smart-grid
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:digital-twin
  - urn:ngm:class:large-language-models
  - urn:ngm:class:local-ai
---

# Home Assistant

Home Assistant is a free and open-source home automation platform written in Python (backend) and TypeScript (frontend), enabling local-first integration and control of heterogeneous smart-home devices and services across protocols including Zigbee Protocol, Z-Wave Protocol,
