# x-client-transaction-pear-dict

```js
import { generateTransactionId } from "x-client-transaction-id-generater";
const url = "https://raw.githubusercontent.com/fa0311/x-client-transaction-pair-dict/refs/heads/main/pair.json";
const res = await fetch(url);
const json = await res.json();
const randomPair = json[Math.floor(Math.random() * json.length)];
const { animationKey, verification } = randomPair;
const tid = await generateTransactionId("GET", `/i/api/xxxx/xxxxx`, verification, animationKey);
```
