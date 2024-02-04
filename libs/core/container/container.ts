type Empty = { [key: string]: string | number };

export class Container {
  private registry = new Map();
  private parent: any;

  constructor(options: Empty) {
    if (options) {
      this.parent = options.parent;
    }
    this.register({ token: Container, useValue: this });
  }

  public register(provider: any): void {
    const normalizedProvider = this.normalizeProvider(provider);
    this.registerAll(normalizedProvider);
  }

  public registerAll(providers: any) {
    providers.forEach((p: any) => this.registerOne(p));
  }

  public registerOne(provider: any) {
    const registryData = new RegistryData()
  }

  public normalizeProvider(provider: any) {
    return Array.isArray(provider)
      ? provider.map((p) => this.normalizeSingleProvider(p))
      : [this.normalizeSingleProvider(provider)];
  }

  public normalizeSingleProvider(provider: any) {
    if (typeof provider === "function") {
      provider = { token: provider, useClass: provider };
    } else if (!(provider instanceof Object)) {
      throw new Error(provider);
    }
    return provider;
  }
}


export class RegistryData {
  public instance: any;
  public factory: any;
}