import { useState } from "react";
import * as React from 'react';
import { IconButton } from "@mui/material";
import {Badge} from "@mui/material";
import { useEffect } from "react";

export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
// useEffect(()=>{
//   console.log("like has been updated",like)
// },[like,dislike])

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        color="primary"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
