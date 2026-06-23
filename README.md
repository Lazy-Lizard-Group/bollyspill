# BollySpill.com 🍵

Automated Bollywood gossip website powered by AI.

## Stack
- **Frontend**: Cloudflare Worker (single-file, no build step)
- **Storage**: Cloudflare KV (key: articles-json)
- **Pipeline**: n8n → Perplexity → Claude Haiku → fal.ai → CF KV

## Pipeline (n8n workflow e1RKVaHzQYy252Hu)
Runs 3x daily (10:00, 14:00, 18:00 UTC):
1. Perplexity fetches trending Bollywood news
2. Claude Haiku writes gossip article
3. fal.ai generates thumbnail (flux/schnell)
4. Upload to Cloudflare Images
5. Save article JSON to KV — site auto-updates

## Deploy
npx wrangler deploy workers/bollyspill/worker.js --name bollyspill

## KV Namespace
326b6a690e794d2d8377b0cf4e74c716 — key: articles-json

## Live
https://bollyspill.com

