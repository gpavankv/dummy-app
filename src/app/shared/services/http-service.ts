import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private httpService: HttpClient) {}

    testConnection() {
        return this.httpService.get('http://localhost:8080/hello', { responseType: 'text' });
    }
}
