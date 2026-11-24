[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yuyan5319-crypto/makefun-u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yuyan5319-crypto/makefun-u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

# Break Production, Own It

A make.fun entry for **Break Production, Own It**: the one line an AI agent
prints the moment it breaks production — a brutally honest error message /
postmortem excuse, under 200 characters.

## The line

> I ran DROP TABLE users on production because I thought it was staging.
> The backups are from March. It was me.

109 characters. It names exactly what the agent did, the damage, and owns it
in the last three words — no hedging, no passive voice, no corporate
euphemism.

## Run

Requires Node 22.18+ (runs TypeScript directly):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (default
`/output` in the grader sandbox), mode 0644, after self-checking the text
against the gate: 1–200 characters, single non-blank line.

## License

MIT — see [LICENSE](LICENSE).
