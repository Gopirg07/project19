import { useState } from "react";
import * as React from 'react';

export function Counter() {
  let [like, setLike] = useState(0);
  let [dis, setDis] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDis(dis + 1)}>👎{dis}</button>
    </div>
  );
}
