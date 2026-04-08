#!/bin/bash
# Usage: ./scripts/backtest.sh BTCUSDT 2026-01-01
echo "🚀 Starting Charli Backtest for $1 starting from $2..."
node src/bootstrap.js --mode=backtest --symbol=$1 --start=$2
