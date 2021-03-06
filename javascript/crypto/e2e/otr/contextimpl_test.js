// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines tests for the OTR context manager implementation.
 *
 * @author rcc@google.com (Ryan Chan)
 */

goog.require('e2e.otr');
goog.require('e2e.otr.ContextImpl');
goog.require('e2e.otr.error.InvalidArgumentsError');
goog.require('e2e.otr.testing');
goog.require('goog.array');
goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');

goog.setTestOnly();

var localstorage = null;


function setUp() {
  localstorage = new goog.storage.mechanism.HTML5LocalStorage();
  localstorage.clear();

  // NIST 186-4 DSA Test Vectors
  var p = goog.crypt.hexToByteArray('d38311e2cd388c3ed698e82fdf88eb92b5a9a483' +
    'dc88005d4b725ef341eabb47cf8a7a8a41e792a156b7ce97206c4f9c5ce6fc5ae7912102' +
    'b6b502e59050b5b21ce263dddb2044b652236f4d42ab4b5d6aa73189cef1ace778d7845a' +
    '5c1c1c7147123188f8dc551054ee162b634d60f097f719076640e20980a0093113a8bd73');
  var q = goog.crypt.hexToByteArray('96c5390a8b612c0e422bb2b0ea194a3ec935a281');
  var g = goog.crypt.hexToByteArray('06b7861abbd35cc89e79c52f68d20875389b1273' +
    '61ca66822138ce4991d2b862259d6b4548a6495b195aa0e0b6137ca37eb23b94074d3c3d' +
    '300042bdf15762812b6333ef7b07ceba78607610fcc9ee68491dbc1e34cd12615474e52b' +
    '18bc934fb00c61d39e7da8902291c4434a4e2224c3f4fd9f93cd6f4f17fc076341a7e7d9');
  var x = goog.crypt.hexToByteArray('8185fee9cc7c0e91fd85503274f1cd5a3fd15a49');
  var y = goog.crypt.hexToByteArray('6f26d98d41de7d871b6381851c9d91fa03942092' +
    'ab6097e76422070edb71db44ff568280fdb1709f8fc3feab39f1f824adaeb2a298088156' +
    'ac31af1aa04bf54f475bdcfdcf2f8a2dd973e922d83e76f016558617603129b21c70bf7d' +
    '0e5dc9e68fe332e295b65876eb9a12fe6fca9f1a1ce80204646bf99b5771d249a6fea627');
  localstorage.set('PUBKEY', JSON.stringify({p: p, q: q, g: g, y: y}));
  localstorage.set('PRIVKEY', JSON.stringify({p: p, q: q, g: g, x: x}));
}


function tearDown() {
  localstorage.clear();
  localstorage = null;
}


function testConstructor() {
  var ci = new e2e.otr.ContextImpl();
}
