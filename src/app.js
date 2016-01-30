export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'documents', name: 'documents',      moduleId: 'documents',      nav: true, title: 'Documents' },
      { route: 'groups', name: 'groups',      moduleId: 'groups',      nav: true, title: 'Groups' }

    ]);

    this.router = router;
  }
}
