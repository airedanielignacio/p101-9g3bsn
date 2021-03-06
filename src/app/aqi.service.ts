import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AqiService {
  constructor(private http: HttpClient) {}

  // Usamos la forma de Promise para que podamos usar await
  async getEstacionPromise(codigoEstacion: string) {
    let url = `https://api.waqi.info/feed/@${codigoEstacion}/?token=2925a12d6716caa9e5eff975b281dd6eb985552c`;

    return await this.http.get<any>(url).toPromise();
  }

  async getMes(contaminante: string, pais: string, anyo: string) {
    let url = `https://api-reeairquality.herokuapp.com/historicos2/${contaminante}&${pais}&${anyo}`;

    return this.http.get<any>(url).toPromise();
  }

  async getMeses(pais: string, anyo: string, mes: string) {
    let url = `https://api-reeairquality.herokuapp.com/historicos3/${pais}&${anyo}&${mes}`;

    return this.http.get<any>(url).toPromise();
  }

  async postAPI(datos: any) {
    let url =
      'https://api-reeairquality.herokuapp.com/historicos/' +
      datos['estacion'] +
      '&' +
      datos['fechaInicial'] +
      '&' +
      datos['fechaFinal'];
    return await this.http.post<any>(url, datos).toPromise();
  }

  async postAPIPropios(datos: any) {
    let url =
      'https://api-reeairquality.herokuapp.com/propios/' +
      datos['estacion'] +
      '&' +
      datos['fechaInicial'] +
      '&' +
      datos['fechaFinal'];

    return await this.http.post<any>(url, datos).toPromise();
  }

  async getAnyos() {
    let url = `https://api-reeairquality.herokuapp.com/anyos`;

    return this.http.get<any>(url).toPromise();
  }

  async getPortable() {
    let url = `https://api-reeairquality.herokuapp.com/portable`;

    return this.http.get<any>(url).toPromise();
  }
}
