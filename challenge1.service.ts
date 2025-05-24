import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ChallengeOneService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async execute(): Promise<any> {
     const token = await this.realizarLogin();
     return token;
  }

  async realizarLogin(): Promise<string> {

    const url: string = 'http://localhost:3000/login'

    const credentials = {
      email: 'johndoe@example.com',
      password: '1234'
    }

    try{
      const reponse = await firstValueFrom(this.httpService.post(url, credentials)
    );
    const token = reponse.data.token;
    return token;

    } catch(error){
      console.error('Login error:', error);
      throw new Error('Authentication failed');
    }



    // let response = await firstValueFrom(
    //   this.httpService.post(
    //     'http://localhost:3000/login',
    //     body
    //   )
    // );

    return ''
  }
}
