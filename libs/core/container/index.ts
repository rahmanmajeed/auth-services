type Empty = { [key: string]: string | number };

class Container {
  private services: Empty;
  constructor() {
    this.services = {};
  }

  service(name: string, cb: any) {
    Object.defineProperty(this, name, {
      get: () => {
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = cb(this);
        }

        return this.services[name];
      },
      configurable: true,
      enumerable: true,
    });

    return this;
  }
}
