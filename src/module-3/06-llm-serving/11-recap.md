# Recap & Practice

- Tokens are the unit of cost, memory and time. Count them with the model's own tokenizer.
- Inference has two phases: prefill (parallel, compute-heavy) and decode (one token per step, memory-heavy). The KV cache connects them.
- GPU memory = weights + KV cache + overhead. Decode speed is limited by memory bandwidth.
- Continuous batching and PagedAttention keep the GPU full and memory waste low.
- Quantisation shrinks bytes per parameter. Speculative decoding verifies cheap guesses in one pass.
- Tensor, pipeline, data and expert parallelism split a model or its traffic. Use the fewest GPUs per replica, then add replicas.
- Watch TTFT, ITL and throughput. Stream with SSE.
- A gateway, caching, and autoscaling on queue and KV cache make serving reliable and cheaper.

## Practice questions

1. A 70B model must serve 200 chat users with a p95 TTFT under 1 second. How do you size the GPUs? *Hint: weights = parameters x bytes, then KV cache per token x tokens x users; consider quantisation and tensor parallelism.*
2. Why does continuous batching beat static batching for LLMs? *Hint: output lengths differ, so finished requests should free their slot at once.*
3. Your TTFT is fine but users complain that text appears slowly. Which metric and which knobs? *Hint: ITL; batch size, token budget per step, quantisation, speculative decoding.*
4. Design an LLM gateway for 20 internal teams using three providers and one self-hosted model. *Hint: virtual keys, token-based limits, fallbacks, usage records, routing levels.*
5. Your prompt-caching hit rate is near zero although the system prompt is large. What do you check? *Hint: dynamic text at the top, minimum length, expiry, tool definitions changing.*
6. How would you autoscale a vLLM deployment, and why is scale-to-zero risky? *Hint: queue length and KV cache use; cold-start time to load weights.*

## Sources

All pages were opened while writing this chapter (November 2026).

- vLLM paper (PagedAttention): https://arxiv.org/abs/2309.06180
- Orca (OSDI 2022): https://www.usenix.org/conference/osdi22/presentation/yu
- Speculative decoding (Leviathan et al.): https://arxiv.org/abs/2211.17192
- GQA paper: https://arxiv.org/abs/2305.13245
- GPTQ: https://arxiv.org/abs/2210.17323
- AWQ: https://arxiv.org/abs/2306.00978
- SARATHI (chunked prefill): https://arxiv.org/abs/2308.16369
- DistServe: https://arxiv.org/abs/2401.09670
- Megatron-LM: https://arxiv.org/abs/1909.08053
- SGLang: https://arxiv.org/abs/2312.07104
- RouteLLM: https://arxiv.org/abs/2406.18665
- Lost in the Middle: https://arxiv.org/abs/2307.03172
- NVIDIA, Mastering LLM inference optimization: https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/
- NVIDIA NIM benchmarking metrics: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html
- NVIDIA H100 specifications: https://www.nvidia.com/en-us/data-center/h100/
- Databricks, LLM inference performance engineering: https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices
- vLLM optimisation and tuning: https://docs.vllm.ai/en/latest/configuration/optimization.html
- vLLM automatic prefix caching: https://docs.vllm.ai/en/latest/features/automatic_prefix_caching.html
- vLLM speculative decoding: https://docs.vllm.ai/en/latest/features/speculative_decoding/
- vLLM quantization: https://docs.vllm.ai/en/latest/features/quantization/
- vLLM disaggregated prefill: https://docs.vllm.ai/en/latest/features/disagg_prefill/
- vLLM metrics: https://docs.vllm.ai/en/latest/design/metrics.html
- Hugging Face tokenizer summary: https://huggingface.co/docs/transformers/en/tokenizer_summary
- Hugging Face TGI: https://huggingface.co/docs/text-generation-inference/index
- Mistral 7B config: https://huggingface.co/mistralai/Mistral-7B-v0.1/raw/main/config.json
- MDN, Server-sent events: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
- Anthropic, prompt caching: https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching
- Anthropic, streaming: https://platform.claude.com/docs/en/build-with-claude/streaming
- Anthropic, batch processing: https://platform.claude.com/docs/en/build-with-claude/batch-processing
- OpenAI, prompt caching: https://developers.openai.com/api/docs/guides/prompt-caching
- LiteLLM gateway: https://docs.litellm.ai/docs/simple_proxy
- LiteLLM routing: https://docs.litellm.ai/docs/routing
- Gateway API Inference Extension: https://gateway-api-inference-extension.sigs.k8s.io/
- GPTCache: https://github.com/zilliztech/GPTCache
- Kubernetes HPA: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/
