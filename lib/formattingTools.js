/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const i18n = require('es2015-i18n-tag').default;
const { list } = require('mdast-builder');
const stringify = require('mdast-util-to-string');
const inspect = require('unist-util-inspect');
const remark = require('remark');
const unified = require('unified');
const strip = require('strip-markdown');
const s = require('./symbols');

function gentitle(titles, type) {
  const [firsttitle] = titles;
  const lasttitle = [...titles].pop();
  if (titles.length === 1) {
    return firsttitle;
  }
  if (lasttitle) {
    return lasttitle;
  }
  return i18n`Untitled ${type} in ${firsttitle}`;
}

function gendescription(schema) {
  if (schema && schema[s.meta]) {
    return schema[s.meta].shortdescription;
  }
}

module.exports = {
  gentitle, gendescription,
};