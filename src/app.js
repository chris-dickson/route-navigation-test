export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'documents'], name: 'documents',      moduleId: 'documents',      nav: true, title: 'Documents' },
      { route: 'groups', name: 'groups',      moduleId: 'groups',      nav: true, title: 'Groups' }

    ]);

    //config.options.pushState = true;

    this.router = router;
  }
}
