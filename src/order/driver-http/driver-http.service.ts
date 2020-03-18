import {HttpService, Injectable} from '@nestjs/common';
import {map} from "rxjs/operators";

@Injectable()
export class DriverHttpService {

    baseUrl = process.env.MICRO_DRIVERS_URL;

    constructor(private readonly httpService: HttpService) {
    }

    list() {
        return this.httpService
            .get<{drivers: any[]}>(`${this.baseUrl}/drivers`)
            .pipe(
                map(response => response.data.drivers)
            ) //Reactive X
    }

    show(id){
        return this.httpService
            .get(`${this.baseUrl}/driver/${id}`)
            .pipe(
                map(response => response.data)
            )
    }
}
