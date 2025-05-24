import { Injectable } from '@nestjs/common';

/*
O response deve ter o formato abaixo para ser consumido pelo time de Frontend
{
  "aluno": "id",
  "talentos": [
    {
      "assunto": "typescript",
      "feedbacks": [
        "aaaaaaa",
        "bbbbbb"
      ]
    },
    {
      "assunto": "java",
      "feedbacks": [
        "aaaaaaa",
        "bbbbbb"
      ]
    }
  ]
}
*/

@Injectable()
export class ChallengeFourService {}