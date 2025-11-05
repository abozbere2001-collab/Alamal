/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In WVs, we can't use a global variable directly...
  let firstDefinecall = true;
  const workaround = (cb) => {
    // We require a trusted policy created via TrustedTypePolicyFactory as sanctioned by the CSP policy 'trusted-types'.
    let policy = self.trustedTypes.createPolicy('workoundForPolicy', {
      createScriptURL: (url) => url,
    });
    // @ts-ignore
    self.workaround = (url, cb) => {
      // We have to use policy.createScriptURL here because the CSP policy would block the fetch otherwise.
      // We use the policy here safely as the URL is hardcoded to be the comlink loader.
      fetch(policy.createScriptURL(url))
        .then((response) => response.text())
        .then(cb);
    };
    // @ts-ignore
    workaround(
      './comlink.4.3.1.min.js',
      cb
    );
  };

  self.define = (deps, factory) => {
    const name = '';
    if (registry[name]) {
      // Module is already loaded, no need to continue.
      return;
    }
    let R = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin,
        exports: exports,
      };
      return Promise.all(
        deps.map((dep) => {
          if (dep === 'exports') {
            return exports;
          }
          if (dep === 'module') {
            return module;
          }
          return null;
        })
      ).then((deps) => {
        const facValue = factory(...deps);
        if (!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
    registry[name] = R;
  };
}
define(['./workbox-a5674afe'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/yCJYVg
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */
  self.addEventListener('message', e => {
    if (e.data && e.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  workbox.clientsClaim();
  workbox.registerRoute('/', new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 1,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/.*/, new workbox.NetworkFirst({
    "cacheName": "others",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
