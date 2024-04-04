import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public apiBaseUrl = '';
  public apiVersion = '';
  public supabaseKey = '';
  public supabaseUrl = '';
  public signalRBaseUrl = '';
  public signalRConnectionTryCount=0;
  public authEndPointURL = '';
  public authUserEndPointURL = '';
  public authScope = '';
  public authClientId = '';
  public authDummyClientSecret = '';
  public authIssuer = '';
  public environmentName = '';
  public environmentLabelBGColor = '';
  public currentApplication = "";
  public environment = '';
  public authUrl : string = "";
  public realm : string ="" ;
  public moduleName = '';
  public version = '';
  envSubject : BehaviorSubject<any>= new BehaviorSubject("");
  envSubject$: Observable<any> = this.envSubject.asObservable();

  constructor(private httpClient : HttpClient){

  }
  public async loadAppConfig(){
    return await lastValueFrom (this.httpClient.get(`./appconfig.json`)
      .pipe(
        tap((response : any) =>{
         // const browserWindow: any = window || {};
        //  this.env.environment = response.environment;
         // browserWindow[`configuration`] = response || {};

        //let currentApplication = response.currentApplication;
        //let currentPlant =  response.currentPlant;
        let configObj = response["envAppConfig"];
        this.setEnvProperties(configObj);
        })
      ));
  }
  setEnvProperties(configObj : any){
    let obj:any = this;
      for (const key in configObj) {
        if (configObj.hasOwnProperty(key)) {
          obj[key] = configObj[key];
        }
      this.envSubject.next(configObj);
    }
  }
}
