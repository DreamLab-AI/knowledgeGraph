Data deduplication is the process of detecting and eliminating redundant copies of data so that only unique instances are retained or referenced. In storage it reduces capacity and bandwidth needs through chunk- or block-level matching, while in data preparation it removes duplicate records to improve quality. It is foundational for clean training data and for identity resolution where records must be matched and merged.

### Content

- Storage systems deduplicate by hashing chunks and storing each unique block once, reclaiming capacity. In data quality and entity resolution, fuzzy matching and clustering collapse near-duplicate records into a single canonical entity.

