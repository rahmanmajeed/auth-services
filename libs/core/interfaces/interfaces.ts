export type IInjectionInstance = any;
export type ProviderToken = any;
export type RegistrationProvider = IProvider | IConstructor;

export interface IConstructor {
  new (...args: any[]): any;
}

export interface IInjectionMd {
  token: ProviderToken;
  parameterIndex: number;
}

export interface IProvider {
  token: ProviderToken;
  lifeTime?: LifeTime;
}

export interface IProvider {
  useValue?: any;
}

export interface IProvider {
  useClass?: IConstructor;
}

export interface IProvider {
  useFactory?: any;
  inject?: ProviderToken[];
}

export enum LifeTime {
  Persistent,
  PerRequest,
}
