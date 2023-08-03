import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class FoundationalComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FoundationalComponentsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: FoundationalComponentsComponent, selector: "lib-foundational-components", ngImport: i0, template: `
    <p>
      foundational-components works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-foundational-components', template: `
    <p>
      foundational-components works!
    </p>
  ` }]
        }] });

class FoundationalComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsModule, declarations: [FoundationalComponentsComponent], exports: [FoundationalComponentsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: FoundationalComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FoundationalComponentsComponent
                    ],
                    imports: [],
                    exports: [
                        FoundationalComponentsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of foundational-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FoundationalComponentsComponent, FoundationalComponentsModule, FoundationalComponentsService };
//# sourceMappingURL=foundational-components.mjs.map
