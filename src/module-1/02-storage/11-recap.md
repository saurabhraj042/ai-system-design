# Recap & Practice

## Recap

- **SQL vs NoSQL**: SQL models data first, NoSQL usually models queries first. Start simple.
- **ACID vs BASE**: ACID protects money-like data. BASE gives up strict consistency for availability, and copies converge over time.
- **B-tree vs LSM-tree**: B-trees update sorted pages in place. LSM-trees append, flush to immutable files and compact later, which is good for heavy writes.
- **Indexes**: they speed reads and slow writes. Column order, covering and partial indexes matter.
- **Replication**: leader-follower is the common design. Async is fast but can lose writes and show stale reads.
- **Sharding**: the shard key is the key decision. Consistent hashing moves only a small share of data when nodes change.
- **CAP and PACELC**: in a partition choose consistency or availability. Otherwise, you still trade latency against consistency.
- **Caching, queues, logs, lakes**: cache-aside with TTL, idempotent consumers, and object storage as the cheap base for analytics.

## Practice questions

1. **Design the storage for a UPI-style payments app. Which parts need ACID and which can use eventual consistency?**
   Hint: the ledger and balances need transactions. Notifications, history views and counters can be relaxed.

2. **Your product table has 200 million rows and the search page is slow. Walk through how you would add indexes.**
   Hint: study real queries, use EXPLAIN, think about column order, covering and partial indexes.

3. **Users complain that they do not see their own profile update right after saving. What is happening and how do you fix it?**
   Hint: replication lag on a follower. Read recent writes from the leader, or use sticky reads for a short time.

4. **You shard users by `hash(user_id) mod N` and now need to add servers. What goes wrong, and what would you do?**
   Hint: most keys move. Use consistent hashing with virtual nodes, and plan the data move.

5. **A cached product price is sometimes wrong, and a flash sale overloads the database when a hot key expires. Fix both.**
   Hint: delete or update on write, add TTL with jitter, and allow only one request to rebuild the key.

6. **When would you pick Kafka over a simple queue for order events? How do you handle duplicates?**
   Hint: replay, many independent consumers and per-key ordering favour a log. Make consumers idempotent.

## Sources

Opened and read in November 2026, except where noted.

- PostgreSQL docs, Transaction Isolation: https://www.postgresql.org/docs/current/transaction-iso.html
- PostgreSQL docs, Transactions tutorial: https://www.postgresql.org/docs/current/tutorial-transactions.html
- PostgreSQL docs, Write-Ahead Logging: https://www.postgresql.org/docs/current/wal-intro.html
- PostgreSQL docs, Index Types: https://www.postgresql.org/docs/current/indexes-types.html
- PostgreSQL docs, Multicolumn Indexes: https://www.postgresql.org/docs/current/indexes-multicolumn.html
- PostgreSQL docs, Index-Only Scans and Covering Indexes: https://www.postgresql.org/docs/current/indexes-index-only-scans.html
- PostgreSQL docs, Partial Indexes: https://www.postgresql.org/docs/current/indexes-partial.html
- PostgreSQL docs, B-Tree Indexes: https://www.postgresql.org/docs/current/btree.html
- PostgreSQL docs, High Availability and Replication: https://www.postgresql.org/docs/current/high-availability.html
- PostgreSQL docs, Replication settings: https://www.postgresql.org/docs/current/runtime-config-replication.html
- PostgreSQL docs, Table Partitioning: https://www.postgresql.org/docs/current/ddl-partitioning.html
- RocksDB Overview: https://github.com/facebook/rocksdb/wiki/RocksDB-Overview
- Apache Cassandra, Storage Engine: https://cassandra.apache.org/doc/latest/cassandra/architecture/storage-engine.html
- DeCandia et al., Dynamo: Amazon's Highly Available Key-value Store (SOSP 2007): https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf
- Karger et al., Consistent Hashing and Random Trees (STOC 1997): https://cs.brown.edu/courses/csci2950-u/f09/papers/chash97stoc.pdf
- MongoDB docs, Shard Keys and Hashed Sharding: https://www.mongodb.com/docs/manual/core/sharding-shard-key/ and https://www.mongodb.com/docs/manual/core/hashed-sharding/
- Gilbert and Lynch, Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services: https://www.comp.nus.edu.sg/~gilbert/pubs/BrewersConjecture-SigAct.pdf
- Brewer, CAP Twelve Years Later: https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed
- PACELC design principle (summary of Abadi, 2012): https://en.wikipedia.org/wiki/PACELC_design_principle
- Amazon DynamoDB, Read consistency: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html
- Pritchett, BASE: An Acid Alternative (ACM Queue, 2008): https://dl.acm.org/doi/10.1145/1394127.1394128 (bibliographic record checked via search; full text could not be opened)
- Amazon ElastiCache, Caching strategies: https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html
- Nishtala et al., Scaling Memcache at Facebook (NSDI 2013): https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf
- Apache Kafka, Introduction: https://kafka.apache.org/intro
- Apache Kafka, KafkaConsumer API docs: https://kafka.apache.org/42/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html
- Apache Kafka 4.0 release announcement: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
- Amazon SQS, Standard queues and Visibility timeout: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html and https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html
- Amazon S3 User Guide, What is S3 and Data protection: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html and https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html
- AWS, OLAP vs OLTP: https://aws.amazon.com/compare/the-difference-between-olap-and-oltp/
- Armbrust et al., Lakehouse (CIDR 2021): https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
- Apache Iceberg: https://iceberg.apache.org/
- Apache Parquet: https://parquet.apache.org/
- O'Neil et al., The Log-Structured Merge-Tree (Acta Informatica, 1996): https://www.cs.umb.edu/~poneil/lsmtree.pdf (publication details confirmed via search; full text could not be opened)
