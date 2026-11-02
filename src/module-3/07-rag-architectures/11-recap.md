# Recap & Practice

## Recap

- RAG retrieves relevant text first and lets the LLM answer from it. It suits large, private or changing data. Small data can skip RAG.
- Chunking sets the ceiling for retrieval. Start with structure-aware or recursive splitting, test sizes on real questions, and consider small chunks for search with larger parents for reading.
- Use the same embedding model for queries and chunks. A model change means re-embedding everything.
- ANN indexes trade a little recall for speed. HNSW is fast and memory hungry. IVF is leaner. Quantisation plus rescoring saves memory.
- Pick the vector store by scale, filtering, hybrid support and operations. Start with what you already run.
- Hybrid search (BM25 plus vectors, merged with RRF) and a cross-encoder reranker are the highest-value upgrades for most systems.
- Rewrite queries when users are vague. Contextual retrieval enriches chunks at ingest time.
- GraphRAG suits whole-corpus and relationship questions. Agentic RAG suits multi-step search. Both add cost, so use them only when measured failures call for them.
- Enforce permissions as filters inside retrieval, isolate tenants, and treat ingestion as a pipeline with deletes and freshness.
- Debug retrieval first, and evaluate retrieval and generation separately.

## Practice questions

1. Design RAG for a company wiki of 2 million pages. Which components would you choose, and in what order would you tune them? *Hint: chunking, hybrid search, reranking, filters, then evaluation. Estimate memory.*
2. Users complain that searching for product code "XJ-4021" returns unrelated results. Why, and how do you fix it? *Hint: vectors miss exact tokens. Add BM25 and fuse the rankings.*
3. You must serve 500 enterprise customers from one RAG platform without any data leaking. What do you build? *Hint: server-side identity, tenant filters or partitions, tests for filter recall, and retrieval audit logs.*
4. Your embedding provider retires the model you use. How do you migrate with no downtime? *Hint: build a new index in the background, switch over, then delete the old one.*
5. A legal team asks "what are the main risks across all 8,000 contracts?". Why does basic RAG fail and what would you try? *Hint: top-k chunks cannot summarise a whole corpus. Consider GraphRAG-style community summaries or map-reduce.*
6. Answer quality dropped after a release. How do you find the cause? *Hint: use traces and a fixed test set. Check retrieval first.*

## Sources

- Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020): https://arxiv.org/abs/2005.11401
- AWS, What is Retrieval-Augmented Generation: https://aws.amazon.com/what-is/retrieval-augmented-generation/
- Anthropic, Introducing Contextual Retrieval (September 2024): https://www.anthropic.com/news/contextual-retrieval
- Anthropic, Building Effective Agents: https://www.anthropic.com/engineering/building-effective-agents
- Liu et al., Lost in the Middle: https://arxiv.org/abs/2307.03172
- Chroma, Evaluating Chunking Strategies for Retrieval (July 2024): https://www.trychroma.com/research/evaluating-chunking
- Pinecone, Chunking Strategies: https://www.pinecone.io/learn/chunking-strategies/
- LlamaIndex, Building Performant RAG Applications for Production: https://developers.llamaindex.ai/python/framework/optimizing/production_rag/
- OpenAI, Embeddings guide: https://developers.openai.com/api/docs/guides/embeddings
- Cohere, Embeddings docs: https://docs.cohere.com/docs/embeddings
- Hugging Face, Introduction to Matryoshka Embedding Models: https://huggingface.co/blog/matryoshka
- Hugging Face, MTEB: https://huggingface.co/blog/mteb
- Malkov and Yashunin, HNSW: https://arxiv.org/abs/1603.09320
- FAISS wiki, Faiss indexes: https://github.com/facebookresearch/faiss/wiki/Faiss-indexes
- FAISS wiki, Guidelines to choose an index: https://github.com/facebookresearch/faiss/wiki/Guidelines-to-choose-an-index
- Qdrant, Quantization: https://qdrant.tech/documentation/guides/quantization/
- Qdrant, Filtering: https://qdrant.tech/documentation/concepts/filtering/
- Qdrant, Multitenancy: https://qdrant.tech/documentation/guides/multiple-partitions/
- pgvector README: https://github.com/pgvector/pgvector
- Milvus overview: https://milvus.io/docs/overview.md
- Weaviate, Hybrid search: https://docs.weaviate.io/weaviate/concepts/search/hybrid-search
- Elasticsearch, dense vector and kNN docs: https://www.elastic.co/docs/solutions/search/vector/dense-vector and https://www.elastic.co/docs/solutions/search/vector/knn
- Elastic, Practical BM25 part 2: https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables
- Elastic, Reciprocal rank fusion: https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion
- Chroma docs: https://docs.trychroma.com/docs/overview/introduction
- Pinecone, Indexing overview: https://docs.pinecone.io/guides/index-data/indexing-overview
- Sentence Transformers, Retrieve and Re-Rank: https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html
- Gao et al., HyDE: https://arxiv.org/abs/2212.10496
- Zheng et al., Step-Back Prompting: https://arxiv.org/abs/2310.06117
- Microsoft Research, GraphRAG blog (February 2024): https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/
- From Local to Global: A Graph RAG Approach: https://arxiv.org/abs/2404.16130
- GraphRAG documentation: https://microsoft.github.io/graphrag/
- Singh et al., Agentic RAG survey: https://arxiv.org/abs/2501.09136
- Asai et al., Self-RAG: https://arxiv.org/abs/2310.11511
- Yan et al., Corrective RAG: https://arxiv.org/abs/2401.15884
- OWASP, LLM08:2025 Vector and Embedding Weaknesses: https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/
- Microsoft Learn, Azure AI Search security filter pattern: https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search
- Debezium documentation: https://debezium.io/documentation/reference/stable/index.html
- Barnett et al., Seven Failure Points When Engineering a RAG System: https://arxiv.org/abs/2401.05856
- Es et al., Ragas: https://arxiv.org/abs/2309.15217
- Ragas metrics docs: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/
