import fs from "fs/promises";
import puppeteer from "puppeteer";
import { createSession } from "x-client-transaction-id-extract-browser";

interface Dict {
  animationKey: string;
  verification: string;
}

const dict: Dict[] = [];
const max = 100;
for (let i = 0; i < max; i++) {
  console.log(`${i} / ${max}`);
  try {
    const browser = await puppeteer.launch({ headless: true });
    const session = await createSession(browser, undefined);
    try {
      const animationKey = await session.key("GET", "/i/api/114514/elonmusk");
      dict.push({
        animationKey: animationKey,
        verification: session.verification,
      });
    } finally {
      await session.close();
    }
  } catch (e) {
    console.error(e);
  }
}

await fs.writeFile("pear.json", JSON.stringify(dict, null, 2));
