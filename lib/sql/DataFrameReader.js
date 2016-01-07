/*
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Utils = require('../utils.js');
var RDD = require('../RDD.js');
var DataFrame = require('./DataFrame.js');

/**
 * @constructor
 * @classdesc Interface used to load a DataFrame from external storage systems (e.g. file systems, key-value stores, etc).
 * Use SQLContext.read to access this.
 */
function DataFrameReader(kernelP, refIdP) {
  this.kernelP = kernelP;
  this.refIdP = refIdP;
};

/**
 * Loads a JSON file, or RDD[String] storing JSON objects (one object per line) and returns the result as a DataFrame.
 * @param {string | RDD}
 * @returns {DataFrame}
 */
DataFrameReader.prototype.json = function(input) {
  var templateStr = (input instanceof RDD) ? 'var {{refId}} = {{inRefId}}.json({{input}});' : 'var {{refId}} = {{inRefId}}.json("{{input}}");';

  var inputP = (input instanceof RDD) ? input.refIdP : Promise.resolve(input);

  return Utils.generateAssignment(this, DataFrame, templateStr, {input: inputP});
};

module.exports = DataFrameReader;