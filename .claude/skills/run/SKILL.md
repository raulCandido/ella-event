---
description: Launch the ella-event Next.js dev server locally
---

# Run: ella-event

Next.js 15 app (Turbopack). Uses pnpm.

## Prerequisites

Install dependencies if `node_modules` is missing:

```bash
pnpm install
```

## Run

Start the dev server in the background:

```bash
pnpm dev &> /tmp/ella-dev.log &
ELLA_PID=$!
echo "PID: $ELLA_PID"
```

The server starts on port **3000** by default (falls back to 3001, 3002… if occupied). Wait for it to be ready:

```bash
for i in {1..30}; do
  curl -sf http://localhost:3000 > /dev/null && break
  curl -sf http://localhost:3001 > /dev/null && break
  sleep 1
done
```

Check the log to find the actual port:

```bash
grep "Local:" /tmp/ella-dev.log
```

## Verify

```bash
curl -s http://localhost:3000 | grep -o "<title>.*</title>"
# → <title>Mulheres antes de tudo — Avalie o Evento</title>
```

(Use port 3001 if 3000 was busy.)

## Stop

```bash
kill $ELLA_PID
# or, if the PID was lost:
pkill -f "next dev"
```

Logs are at `/tmp/ella-dev.log`.
