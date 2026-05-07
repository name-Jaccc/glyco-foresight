#!/usr/bin/env python3
"""Serve the local dashboard with Python's built-in static file server."""

from __future__ import annotations

import argparse
import http.server
import socketserver
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the CGM dashboard locally.")
    parser.add_argument("--port", type=int, default=8123)
    args = parser.parse_args()

    dashboard_dir = Path(__file__).resolve().parent
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", args.port), lambda *a, **k: handler(*a, directory=str(dashboard_dir), **k)) as httpd:
        print(f"Serving dashboard at http://127.0.0.1:{args.port}")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
