public:: true

# Write Blocker

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:write-blocker", "@type":"Page", "title":"Write Blocker", "vc:slug":"write-blocker", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:write-blocker",
  "@type":"Class",
  "label":"Write Blocker",
  "definition":"A write blocker is a hardware or software device that intercepts write commands sent to a storage medium, allowing an investigator to read data from it without altering its contents. It is a standard tool in digital forensics, used to create forensically sound images of hard drives, USB media, and other storage before analysis, preserving evidentiary integrity and chain of custody. Hardware write blockers sit physically between the storage device and the acquisition workstation, intercepting commands at the interface level, while software write blockers achieve the same effect by filtering operating system calls. Their use is typically documented as part of standard evidence collection procedure to withstand challenge in court.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-forensics","label":"Digital Forensics"}],
  "relations":{}
}
```

- ### Definition
	- A write blocker is a hardware or software device that intercepts write commands sent to a storage medium, allowing an investigator to read data from it without altering its contents. It is a standard tool in digital forensics, used to create forensically sound images of hard drives, USB media, and other storage before analysis, preserving evidentiary integrity and chain of custody. Hardware write blockers sit physically between the storage device and the acquisition workstation, intercepting commands at the interface level, while software write blockers achieve the same effect by filtering operating system calls. Their use is typically documented as part of standard evidence collection procedure to withstand challenge in court.
- ### Relationships
	- subClassOf:: [[Digital Forensics]]
