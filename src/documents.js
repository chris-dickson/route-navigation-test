/*
 * *
 *  Copyright © 2016 Uncharted Software Inc.
 *
 *  Property of Uncharted™, formerly Oculus Info Inc.
 *  http://uncharted.software/
 *
 *  Released under the MIT License.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of
 *  this software and associated documentation files (the "Software"), to deal in
 *  the Software without restriction, including without limitation the rights to
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 *  of the Software, and to permit persons to whom the Software is furnished to do
 *  so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 * /
 */
import { inject } from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Documents {
  // App specific
  router;
  params;

  state = {};

  heading = 'Search for Documents';
  query;
  page;

  queryResultsPlaceholder;

  constructor(router) {
    this.router = router;
  }

  buildState() {
    this.state = {
      q: this.query
    };
    if (this.page && this.page !== '') {
      this.state.p = this.page;
    }
  }

  submit() {
    this.buildState();
    this.router.navigateToRoute('documents', this.state, {replace: true});
  }


  doQuery() {
    this.queryResultsPlaceholder = 'Executing query for ' + this.query + (':' + this.page);
  }

  activate(params) {
    this.params = params;
    if (params.q) {
      this.query = params.q;
      this.buildState();
      this.doQuery();
    }
  }
}
