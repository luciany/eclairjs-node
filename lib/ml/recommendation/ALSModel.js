/*
 * Copyright 2016 IBM Corp.
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

var Utils = require('../../utils.js');

var gKernelP;

/**
 * @classdesc
 * :: Experimental ::
 * Model fitted by ALS.
 *
 * @class
 * @memberof module:eclairjs/ml/recommendation
 * @extends module:eclairjs/ml/util.MLWritable
 */
function ALSModel() {
  if (arguments.length == 2) {
    // Someone created an instance of this class for us
    this.kernelP = arguments[0];
    this.refIdP = arguments[1];
  } else {
    this.kernelP = gKernelP;

    var args = {
      target: ALSModel,
      args: Utils.wrapArguments(arguments),
      kernelP: gKernelP
    };

    this.refIdP = Utils.generateConstructor(args);
  }
}

/**
 * @param {string} value
 * @returns {module:eclairjs/ml/recommendation.ALSModel}
 */
ALSModel.prototype.setUserCol = function(value) {
  var args = {
    target: this,
    method: 'setUserCol',
    args: Utils.wrapArguments(arguments),
    returnType: ALSModel
  };

  return Utils.generate(args);
};

/**
 * @param {string} value
 * @returns {module:eclairjs/ml/recommendation.ALSModel}
 */
ALSModel.prototype.setItemCol = function(value) {
  var args = {
    target: this,
    method: 'setItemCol',
    args: Utils.wrapArguments(arguments),
    returnType: ALSModel
  };

  return Utils.generate(args);
};

/**
 * @param {string} value
 * @returns {module:eclairjs/ml/recommendation.ALSModel}
 */
ALSModel.prototype.setPredictionCol = function(value) {
  var args = {
    target: this,
    method: 'setPredictionCol',
    args: Utils.wrapArguments(arguments),
    returnType: ALSModel
  };

  return Utils.generate(args);
};

/**
 * @param {module:eclairjs/sql.DataFrame} dataset
 * @returns {module:eclairjs/sql.DataFrame}
 */
ALSModel.prototype.transform = function(dataset) {
  var DataFrame = require('../../sql/DataFrame.js');

  var args = {
    target: this,
    method: 'transform',
    args: Utils.wrapArguments(arguments),
    returnType: DataFrame
  };

  return Utils.generate(args);
};


/**
 * @param {module:eclairjs/sql/types.StructType} schema
 * @returns {module:eclairjs/sql/types.StructType}
 */
ALSModel.prototype.transformSchema = function(schema) {
  var StructType = require('../../sql/types/StructType.js')();

  var args = {
    target: this,
    method: 'transformSchema',
    args: Utils.wrapArguments(arguments),
    returnType: StructType
  };

  return Utils.generate(args);
};

/**
 * @param {module:eclairjs/ml/param.ParamMap} extra
 * @returns {module:eclairjs/ml/recommendation.ALSModel}
 */
ALSModel.prototype.copy = function(extra) {
  var args = {
    target: this,
    method: 'copy',
    args: Utils.wrapArguments(arguments),
    returnType: ALSModel
  };

  return Utils.generate(args);
};


/**
 * @returns {MLWriter}
 */
ALSModel.prototype.write = function() {
  throw "not implemented by ElairJS";
//   var args ={
//     target: this,
//     method: 'write',
//     returnType: MLWriter
//
//   };
//
//   return Utils.generate(args);
};

//
// static methods
//


/**
 * @returns {MLReader}
 */
ALSModel.read = function() {
  throw "not implemented by ElairJS";
//   var args ={
//     target: ALSModel,
//     method: 'read',
//     returnType: MLReader
//
//   };
//
//   return Utils.generate(args);
};


/**
 * @param {string} path
 * @returns {module:eclairjs/ml/recommendation.ALSModel}
 */
ALSModel.load = function(path) {
  var args = {
    target: ALSModel,
    method: 'load',
    args: Utils.wrapArguments(arguments),
    static: true,
    kernelP: gKernelP,
    returnType: ALSModel
  };

  return Utils.generate(args);
};

ALSModel.moduleLocation = '/ml/recommendation/ALSModel';

module.exports = function(kP) {
  gKernelP = kP;

  return ALSModel;
};